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
import { loginFailureAction } from '../redux/actions/authActions/loginFailedAction';
import { logoutFailureAction } from '../redux/actions/authActions/logoutFailedAction';

export class AuthService {
  private dispatch = useDispatch();

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

  private loginUrl = 'https://casa-del-formaggio.bbsway.dev/api/auth/login';
  private signupUrl = 'https://casa-del-formaggio.bbsway.dev/api/auth/register';
  
  private logoutUrl = 'https://casa-del-formaggio.bbsway.dev/api/auth/logout';
  private forgotPasswordUrl = 'https://casa-del-formaggio.bbsway.dev/api/auth/password-forgot';
  private resetPasswordInAppUrl = 'https://casa-del-formaggio.bbsway.dev/api/auth/password-change';

  private googleLoginUrl = 'https://casa-del-formaggio.bbsway.dev/api/auth/google/login';

  get accessToken(): string {
    // return AsyncStorage.getItem('accessToken').then((token) => token ?? '');

    return ReduxStore.getState().auth.AccessToken ?? '';
  }

  set accessToken(token: string) {
    this.dispatch(setTokenAction({
      AccessToken: token
    }));
  }

  public async signIn(credentials: LoginRequest) {
    const token = NotificationsService.getInstance().deviceToken;
    const userAgent = await DeviceInfo.getUserAgent();

    let headers: any = {
      'user-agent': userAgent
    };

    if (token) {
      headers = {
        ...headers,
        "X-Device-Token": token
      };
    }

    console.log('headers: ', headers)
    try {
      const response = await axios.post<LoginResponse>(this.loginUrl, credentials, {
        headers: headers
      });

      this.dispatch(loginAction(response.data));
    } catch (error: any) {
      this.dispatch(loginFailureAction({
        Error: error.response.data.error
      }));
    }
  }

  public async signInWithGoogle(data: any) {
    const token = NotificationsService.getInstance().deviceToken;

    // Acquisisco lo user agent del dispositivo
    const userAgent = await DeviceInfo.getUserAgent();

    let headers: any = {
      'user-agent': userAgent
    };

    if (token) {
      headers = {
        ...headers,
        "X-Device-Token": token
      };
    }

    try {
      const response = await axios.post(this.googleLoginUrl, data, {
        headers: headers
      });
      this.dispatch(loginAction(response.data));
    } catch (error: any) {
      this.dispatch(loginFailureAction({
        Error: error.response.data.error
      }));
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
    const token = NotificationsService.getInstance().deviceToken;

    let headers = {};
    console.log('token: ', token)
    if(token) {
      headers = {
        "X-Device-Token": token,
      };
    }


    console.log('headers: ', headers)
    try {
      const response = await axiosAuthInstance.get(this.logoutUrl, {
        headers: headers
      });
      console.log('response: ', response.data)

      if (response.data.Success) {
        this.dispatch(logoutAction());
      }
    } catch (error: any) {
      console.log('error: ', error);
      this.dispatch(logoutFailureAction({
        Error: error.response.data.error
      }));
    }


  }
}
