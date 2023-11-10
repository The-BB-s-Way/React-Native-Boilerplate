import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';


import { axiosAuthInstance } from './auth.interceptor';
import DeviceInfo from 'react-native-device-info';
import { CheckoutService } from '../services/checkout/checkout.service';
import { NotificationsService } from '../services/notifications/notifications.service';
import { UserService } from '../services/user.service';
import { LoginRequest } from './interfaces/login.interface';
import { SignupRequest } from './interfaces/signup.interface';

export class AuthService {
  private constructor() {
    // Private constructor
  }

  private static instance: AuthService;

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  private loginUrl = 'https://casa-del-formaggio-api.bbsway.dev/auth/login';
  private signupUrl = 'https://casa-del-formaggio-api.bbsway.dev/auth/register';
  private logoutUrl = 'https://casa-del-formaggio-api.bbsway.dev/auth/logout';
  private forgotPasswordUrl = 'https://casa-del-formaggio-api.bbsway.dev/auth/password-forgot';
  private resetPasswordInAppUrl = 'https://casa-del-formaggio-api.bbsway.dev/auth/password-change';

  private googleLoginUrl = 'https://casa-del-formaggio-api.bbsway.dev/auth/google/login';

  get accessToken(): Promise<string> {
    return AsyncStorage.getItem('accessToken').then((token) => token ?? '');
  }

  set accessToken(token: string) {
    AsyncStorage.setItem('accessToken', token);
  }

  public async signIn(credentials: LoginRequest) {
    try {
      // const token = await messaging().getToken();
      // console.log('Token: ', token)
      const token = NotificationsService.getInstance().deviceToken;
      console.log('DeviceToken: ', token)

      // Acquisisco lo user agent del dispositivo
      const userAgent = await DeviceInfo.getUserAgent();

      const headers = {
        "X-Device-Token": token,
        'user-agent': userAgent
      };

      const response = await axios.post(this.loginUrl, credentials, {
        headers: headers
      });

      // const response = await axios.post(this.loginUrl, credentials);
      if (response.status !== 200)
        return false;

      this.accessToken = response.data.Token;
      UserService.getInstance().user = response.data.User;
      CheckoutService.getInstance().checkoutData.Name = response.data.User.Name;
      CheckoutService.getInstance().checkoutData.Surname = response.data.User.Surname;
      CheckoutService.getInstance().checkoutData.Phone = response.data.User.Phone;

      if (response.status !== 200) return false;
      return null;
    } catch (error) {
      console.log('Signin error: ', error);
      return error;
    }
  }

  public async signInWithGoogle(data: any) {
    try {
      const token = NotificationsService.getInstance().deviceToken;
      console.log('DeviceToken: ', token)

      // Acquisisco lo user agent del dispositivo
      const userAgent = await DeviceInfo.getUserAgent();

      const headers = {
        "X-Device-Token": token,
        'user-agent': userAgent
      };

      const response = await axios.post(this.googleLoginUrl, data, {
        headers: headers
      });
      if (response.status !== 200)
        return false;

      this.accessToken = response.data.Token;
      UserService.getInstance().user = response.data.User;
      CheckoutService.getInstance().checkoutData.Name = response.data.User.Name;
      CheckoutService.getInstance().checkoutData.Surname = response.data.User.Surname;
      CheckoutService.getInstance().checkoutData.Phone = response.data.User.Phone;
      return true;
    } catch (error) {
      console.log('Signin error: ', error);
      return false;
    }
  }

  public async signUp(credentials: SignupRequest) {
    try {
      const response = await axios.post(this.signupUrl, credentials);
      if (response.status !== 200) return false;
      return null;
    } catch (error) {
      console.log('Signup error: ', error);
      return error;
    }
  }

  public async forgotPassword(email: string) {
    try {
      const payload = {
        Email: email
      }
      const response = await axios.post(this.forgotPasswordUrl, payload);
      if (response.status !== 200) return false;
      return null;
    } catch (error) {
      console.log('Forgot password error: ', error);
      return error;
    }
  }

  public async resetPasswordInApp(OldPassword: string, NewPassword: string) {
    try {
      const payload = {
        OldPassword: OldPassword,
        Password: NewPassword
      }
      const response = await axiosAuthInstance.post(this.resetPasswordInAppUrl, payload);
      if (response.status !== 200) return false;
      return null;
    } catch (error) {
      console.log('Forgot password error: ', error);
      return error;
    }
  }

  public async signOut() {
    try {
      const token = NotificationsService.getInstance().deviceToken;
      const headers = {
        "X-Device-Token": token,
      };

      const response = await axiosAuthInstance.post(this.logoutUrl, [], {
        headers: headers
      });

      if (response.status === 200) {
        await AsyncStorage.removeItem('accessToken');
        UserService.getInstance().user = null;
        return true;
      }
      return false;

    } catch (error) {
      console.log('Logout error: ', error)
      return false;
    }
  }
}
