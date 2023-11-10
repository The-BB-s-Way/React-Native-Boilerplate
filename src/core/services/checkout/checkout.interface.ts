export interface AppCheckout {
    Name: string | null;
    Surname: string | null;
    Phone: string | null;
    DeliveryMethodID: number | null;
    DeliveryMethodName: string | null;
    Address?: string;
    DeliveryDate: string | null;
    DeliveryTime: string | null;
    Notes: string | null;
}

export interface BeginCheckoutRequest {
    DeliveryMethodID: number;
    Address: string;
    Date: string; // YYYY-MM-DD HH:mm
    PaymentMethod: PaymentMethod;
}

 export interface CompleteCheckoutRequest extends BeginCheckoutRequest {
    Success: boolean;
    IntentID?: string;
}


export enum PaymentMethod {
    PAYPAL = "PAYPAL",
    STRIPE = "STRIPE"
}

export interface AppOrderDto {
    ID: number;
    Note: string;
    Date: string;
    AppStatus: AppOrderStatus;
    Payment: OrderPaymentInfo;
    OrderRows: AppOrderRowDto[];
}

export interface PaymentResponse {
    IntentID: string;
    IntentClientSecret: string;
    CustomerID: string;
    EphemeralKey: string;
    PublishableKey: string;
}

export interface AppOrderRowDto {
    ID: number;
    Quantity: string;
    ProductID: number;
    Note: string;
}

export interface BeginCheckoutResponse {
    Order: AppOrderDto;
    PaymentResponse: PaymentResponse;
}

export enum AppOrderStatus {
    OrderPaymentPending     = 0,
    OrderPaymentRefused     = 1,
    OrderCreated            = 2,
    OrderCanceledByShop     = 3,
    OrderAccepted           = 4,
    OrderProcessing         = 5,
    OrderReady              = 6,
    OutForDelivery          = 7,
    DeliveryDelayed         = 8,
    OrderDelivered          = 9,
}

export interface OrderPaymentInfo {
    ID: number;
    StripeIntentID: string;
    PayPalTokenID: string;
    Total: number;
    Status: OrderPaymentStatus;
}

export enum OrderPaymentStatus {
    Pending         = 1,
    Completed       = 2,
    Canceled        = 3,
}