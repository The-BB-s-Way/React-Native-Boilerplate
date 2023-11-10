import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { AuthService } from "./auth.service";
import { AuthUtils } from "./auth.utils";
import { LoaderEmitter, requestInterceptor, responseInterceptor } from "../../core/utils/axiosInterceptors";


export enum TokenStatus {
  Unknown = 0,
  Ok = 1,
  EsisteMaScaduto = 2,
  Ko = 3
}

const refreshUrl = `https://casa-del-formaggio-api.bbsway.dev/auth/refresh`;

const axiosAuthInstance = axios.create();

async function getTokenStatus() {
  const accessToken = await AuthService.getInstance().accessToken;

  let tokenStatus = TokenStatus.Unknown;
  if (!accessToken) {
    tokenStatus = TokenStatus.Ko;
  } else {
    tokenStatus = AuthUtils.isTokenExpired(accessToken) ? TokenStatus.EsisteMaScaduto : TokenStatus.Ok;
  }

  return tokenStatus;
}

async function refreshAccessToken() {
  try {
    const response = await axios.get(refreshUrl, {
      headers: {
        'Authorization': `Bearer ${await AuthService.getInstance().accessToken}`
      }
    });

    AuthService.getInstance().accessToken = response.data.Token;
    return response.data.Token as string;
  } catch (error) {
    throw error;
  }
}

axiosAuthInstance.interceptors.request.use(async (config) => {
  try {
    const accessTokenStatus = await getTokenStatus();
    let accessToken = await AuthService.getInstance().accessToken;

    if (accessTokenStatus === TokenStatus.Ko) {
      throw new Error("No token");
    }

    if (accessTokenStatus === TokenStatus.EsisteMaScaduto) {
      accessToken = await refreshAccessToken();
    }

    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  } catch (error) {
    throw error;
  }
});
axiosAuthInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return requestInterceptor(config);
});

axiosAuthInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 500) {
      LoaderEmitter.emit("showLoader", false);
    }
    return responseInterceptor(response);
  },
  (error) => {
    if (error.response && error.response.status === 500) {
      LoaderEmitter.emit("showLoader", false);
    }
    return Promise.reject(error);
  }
);

export { axiosAuthInstance };
