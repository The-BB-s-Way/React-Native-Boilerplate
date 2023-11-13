
import { AxiosResponse } from "axios";
import { CheckoutService } from "./checkout/checkout.service";
import { axiosAuthInstance } from "../sso/auth.interceptor";
import { AuthService } from "../sso/auth.service";
import { AuthUser } from "../sso/interfaces/user.interface";

export class UserService {
  private static instance: UserService;
  private _user: AuthUser | null = null;

  set user(user: AuthUser | null) {
    this._user = user;
  }

  get user(): AuthUser | null {
    return this._user;
  }

  private constructor() {
    // Costruttore privato
  }

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  // Edit user
  public async editUserData(data: any): Promise<boolean> {
    // Data può contenere i seguenti campi:
    // - Name
    // - Surname
    // - Phone

    // Richiamo l'endpoint per editare i dati dell'utente
    const response = await axiosAuthInstance.put(
      `https://casa-del-formaggio-api.bbsway.dev/auth/user`,
      data
    );

    if (response.status === 200) {
      // Aggiorno i campi modificati
      this.user = response.data;
      console.log("UTENTE IN EDIT USER DATA", this.user)
      return true;
    } else {
      return false;
    }
  }

  // Ritorna true se l'utente è settato, false altrimenti
  public async getUserData(): Promise<boolean> {
    if (this.user && await AuthService.getInstance().accessToken) {
      console.log('Arrivo qui 1')
      return true;
    }
    if (await AuthService.getInstance().accessToken && !this.user) {
      console.log('Arrivo qui 2')
      // Richiamo l'endpoint per ottenere i dati dell'utente
      const response = await axiosAuthInstance.get(
        `https://casa-del-formaggio-api.bbsway.dev/auth/user`
      );
      this.user = response.data;

      CheckoutService.getInstance().checkoutData.Name = this.user?.Name ?? null;
      CheckoutService.getInstance().checkoutData.Surname = this.user?.Surname ?? null;
      CheckoutService.getInstance().checkoutData.Phone = this.user?.Phone ?? null;

      console.log("UTENTE IN GET USER DATA", this.user)
      console.log('CheckoutService.getInstance().checkoutData', CheckoutService.getInstance().checkoutData)


      return true;
    }
    return false;
  }
}
