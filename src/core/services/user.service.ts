
import { AxiosResponse } from "axios";
import { CheckoutService } from "./checkout/checkout.service";
import { axiosAuthInstance } from "../sso/auth.interceptor";
import { AuthService } from "../sso/auth.service";
import { AuthUser } from "../sso/interfaces/user.interface";
import { ReduxStore, useDispatch } from "../redux/store";
import { updateUserAction } from "../redux/actions/authActions/updateProfileAction";

export class UserService {
  private dispatch = useDispatch();
  private store = ReduxStore.getState();

  private static instance: UserService;

  set user(user: AuthUser) {
    this.dispatch(updateUserAction({
      User: user
    }));
  }

  get user(): AuthUser | null {
    return this.store.auth.User ?? null;
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
      `https://casa-del-formaggio.bbsway.dev/api/auth/user`,
      data
    );

    if (response.status === 200) {
      // Aggiorno i campi modificati
      this.user = response.data;
      return true;
    } else {
      return false;
    }
  }
}
