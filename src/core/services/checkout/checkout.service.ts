import { AppCheckout } from "./checkout.interface";

export class CheckoutService {
  private static instance: CheckoutService;
  private _checkoutData: AppCheckout;

  // set checkoutData(checkoutData: AppCheckout | null) {
  //   this._checkoutData = checkoutData;
  // }

  get checkoutData(): AppCheckout {
    return this._checkoutData;
  }

  private constructor() {
    // Costruttore privato
    this._checkoutData = {
      Name: null,
      Surname: null,
      Phone: null,
      DeliveryMethodID: null,
      DeliveryMethodName: null,
      DeliveryDate: null,
      DeliveryTime: null,
      Notes: null,
    }
  }

  public static getInstance(): CheckoutService {
    if (!CheckoutService.instance) {
      CheckoutService.instance = new CheckoutService();
    }
    return CheckoutService.instance;
  }
}
