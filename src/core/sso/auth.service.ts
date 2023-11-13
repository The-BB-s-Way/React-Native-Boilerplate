import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';


import { axiosAuthInstance } from './auth.interceptor';
import DeviceInfo from 'react-native-device-info';
import { CheckoutService } from '../services/checkout/checkout.service';
import { NotificationsService } from '../services/notifications/notifications.service';
import { LoginRequest, LoginResponse } from './interfaces/login.interface';
import { SignupRequest } from './interfaces/signup.interface';
import { ReduxStore, useDispatch } from '../redux/store';
import { setTokenAction } from '../redux/actions/authActions/refreshTokenAction';
import { loginAction } from '../redux/actions/authActions/loginAction';
import { logoutAction } from '../redux/actions/authActions/logoutAction';

export class AuthService {
  private dispatch = useDispatch();
  private store = ReduxStore.getState();

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

  get accessToken(): string {
    // return AsyncStorage.getItem('accessToken').then((token) => token ?? '');
    return this.store.auth.AccessToken ?? '';
  }

  set accessToken(token: string) {
    this.dispatch(setTokenAction({
      AccessToken: token
    }));
  }

  public async signIn(credentials: LoginRequest) {
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

    const response = await axios.post<LoginResponse>(this.loginUrl, credentials, {
      headers: headers
    });

    if (response.status !== 200) {
      throw new Error('Login error');
    }
    
    this.dispatch(loginAction(response.data));
  }

  public async signInWithGoogle(data: any) {
    const token = NotificationsService.getInstance().deviceToken;

    // Acquisisco lo user agent del dispositivo
    const userAgent = await DeviceInfo.getUserAgent();

    const headers = {
      "X-Device-Token": token,
      'user-agent': userAgent
    };

    const response = await axios.post(this.googleLoginUrl, data, {
      headers: headers
    });

    if (response.status !== 200) {
      throw new Error('Login error');
    }

    this.dispatch(loginAction(response.data));
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
    const token = NotificationsService.getInstance().deviceToken;
    const headers = {
      "X-Device-Token": token,
    };

    const response = await axiosAuthInstance.post(this.logoutUrl, [], {
      headers: headers
    });

    if (response.status !== 200) {
      throw new Error('Logout error');
    }

    this.dispatch(logoutAction());
  }
}
