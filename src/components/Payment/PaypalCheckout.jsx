import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PaypalCheckout() {
  // PayPal configuration options
  const initialOptions = {
    "client-id":
      "AYBNqRNwxR8K6bk_lgzVHycBfMtV7IpZ2BNi19dwIkZuCCjM4-1Wqi1_Isp6G2T51-CbErcZF2oUov26",
    intent: "subscription",
    vault: true,
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div>
        <h2 className="text-lg font-bold mb-4">Subscribe with PayPal</h2>
        <div id="paypal-button-container">
          <PayPalButtons
            style={{
              shape: "pill",
              color: "silver",
              layout: "vertical",
              label: "paypal",
            }}
            createSubscription={(data, actions) => {
              return actions.subscription.create({
                plan_id: "P-20E30484AD488233NM56BTGA", // Your Plan ID
              });
            }}
            onApprove={(data, actions) => {
              alert(`Subscription successful! ID: ${data.subscriptionID}`);
            }}
          />
        </div>
      </div>
    </PayPalScriptProvider>
  );
}

export default PaypalCheckout;
