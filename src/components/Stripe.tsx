import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import { useState } from "react";

export interface PaymentResponse {
    IntentID: string;
    IntentClientSecret: string;
    CustomerID: string;
    EphemeralKey: string;
    PublishableKey: string;
}

export const StripeComponent = (navigation: any) => {
    const [isPaymentProcessing, setIsPaymentProcessing] = useState<boolean>(false);
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const initializePaymentSheet = async (): Promise<void> => {
        const paymentResponse = await handlePayment();

        await initPaymentSheet({
            merchantDisplayName: "Casa del Formaggio",
            customerId: paymentResponse.CustomerID,
            customerEphemeralKeySecret: paymentResponse.EphemeralKey,
            paymentIntentClientSecret: paymentResponse.IntentClientSecret,
            allowsDelayedPaymentMethods: true,
        });

    }


    const openPaymentSheet = async (): Promise<void> => {
        setIsPaymentProcessing(true);
        try {
            await initializePaymentSheet();

            const { error } = await presentPaymentSheet();

            if (error) {
                console.log(error);
            } else {
                console.log("Pagamento effettuato con successo!");
            }
            
        } catch (error) {
            console.log(error);
        } finally {
            setIsPaymentProcessing(false);
        }
    }


    const handlePayment = async (): Promise<PaymentResponse> => {
        // In questa funzione gestisco la creazione dell'intent di pagamento da parte del microservizio, tramite stripe
        return {
            IntentID: "",
            IntentClientSecret: "",
            CustomerID: "",
            EphemeralKey: "",
            PublishableKey: "",
        } as PaymentResponse;
    }


}