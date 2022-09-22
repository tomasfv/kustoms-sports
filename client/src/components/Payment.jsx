import React, { useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";


const CARD_OPTIONS = {
  iconStyle: "solid",
	style: {
    base: {
      iconColor: "#fff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			"::placeholder": { color: "#fff" },
      
		},
		// invalid: {
      // 	iconColor: "#ffc7ee",
      // 	color: "#ffc7ee"
      // }
	  },
    hidePostalCode: true,
  }
  
  const stripePromise = loadStripe("pk_test_51Lj7u9Dukzk6GqlmMVPMHwx3lemmPxbgy32HRrVczr7jnBiVC4MGYPQBzrrQz99uhWYB1KLstQ6PKDBJVDyROyXz00qQ34D93u");
  
  const CheckoutForm = () => {
  const dataBuy = useSelector((state) => state.dataBuy);
  const { user } = useAuth0()
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type:"card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      console.log(paymentMethod)
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "/api/checkout",
          {
            id,
            amount: dataBuy.totalamount,
            email: user.email,
            
          }
        );
        console.log(data);

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  console.log(!stripe || loading);

  return (
    <div className="">
      <form className="border rounded-md w-[450px] grid grid-col justify-items-center m-4 p-4 bg-gris-light" onSubmit={handleSubmit}>
        {/* Product Information */}
        <img
          src="https://www.paymentsjournal.com/wp-content/uploads/2018/06/bank-3487033_1920.png"
          alt="Corsair Gaming Keyboard RGB"
          className="w-[400px] h-[300px]"
        />

        <h3 className="font-bold">Total: ${dataBuy.totalamount}</h3>
      <div className="rounded-lg">
        
        {/* <div className="flex justify-start border">
          <input type='text' size="20" maxLength="20000" placeholder=" email..."/><br></br>
        </div> */}
        
        {/* User Card Input */}
        <div className="bg-main-dark m-4 p-4">
          <CardElement options={CARD_OPTIONS}/>
          
        </div>

        <button disabled={!stripe} className="font-bold rounded bg-verde-light text-main-light w-[420px] p-4">
          {loading ? (
            <div className="" role="status">
              <span className="">Loading...</span>
            </div>
          ) : (
            "Comprar"
          )}
        </button>
      </div>  
      </form>
    </div>

    
  );
};

function Payment() {
  
    return (
     <div className="">
        {/* stripe */}
          <Elements stripe={stripePromise}>
            <div className=''>
              <div>
                <div className=''>
                  <CheckoutForm />
                </div>
              </div>
            </div>
          </Elements>
      </div>
      
    );
  }
  
  export default Payment;