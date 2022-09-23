import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAuth0 } from "@auth0/auth0-react";
import swal from'sweetalert2';


import axios from "axios";
import { getProductInfo } from "../redux/actions";

const stripePromise = loadStripe("pk_test_51Lj7u9Dukzk6GqlmMVPMHwx3lemmPxbgy32HRrVczr7jnBiVC4MGYPQBzrrQz99uhWYB1KLstQ6PKDBJVDyROyXz00qQ34D93u");

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
    
  },
  hidePostalCode: true,
}



const CheckoutForm = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useAuth0()
    const dataInfo = useSelector((state) => state.data);
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const email = user?.email;
    console.log(user)
    useEffect(() => {
      dispatch(getProductInfo(email));
    }, [dispatch, email, user]);
    

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
            amount: dataInfo.totalamount,
            email: user.email,
            
          }
        );

        console.log(data)
        console.log(data.message)
        if(data.message === "Successful Payment"){
          swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Compra exitosa!',
            showConfirmButton: false,
            timer: 3000
          })
          window.location.replace('/')
        }

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

        <h3 className="font-bold">Total: ${dataInfo.totalamount}</h3>
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
     <div className="relative top-40 mb-80 flex flex-row justify-center">
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