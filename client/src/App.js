import Rutas from './routes/Rutas'
import './App.css';

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";

const stripePromise = loadStripe("pk_test_51Lj7u9Dukzk6GqlmMVPMHwx3lemmPxbgy32HRrVczr7jnBiVC4MGYPQBzrrQz99uhWYB1KLstQ6PKDBJVDyROyXz00qQ34D93u");

const CheckoutForm = () => {
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
          "http://localhost:3001/api/checkout",
          {
            id,
            amount: 10000, //cents
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
    <form className="card card-body" onSubmit={handleSubmit}>
      {/* Product Information */}
      <img
        src="https://www.corsair.com/medias/sys_master/images/images/h80/hdd/9029904465950/-CH-9109011-ES-Gallery-K70-RGB-MK2-01.png"
        alt="Corsair Gaming Keyboard RGB"
        className="w-20 h-20"
      />

      <h3 className="text-center my-2">Price: 100$</h3>

      {/* User Card Input */}
      <div className="form-group">
        <CardElement />
      </div>

      <button disabled={!stripe} className="btn btn-success">
        {loading ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Buy"
        )}
      </button>
    </form>
  );
};

function App() {
  
  return (
    <div>
    <div className="App bg-main-light dark:bg-main-dark min-h-screen transition-all duration-150">
      <Rutas/>
      {/* <h1 className='text-lg uppercase'> Hola Mundo 2 </h1> */}
    </div>
{/* stripe */}
<Elements stripe={stripePromise}>
<div>
  <div>
    <div>
      <CheckoutForm />
    </div>
  </div>
</div>
</Elements>
    </div>
    
  );
}

export default App;
