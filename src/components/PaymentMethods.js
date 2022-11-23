import React, { useState } from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
// import paypal from "../images/paypal.png";
// import creditCard from "../images/credit-card.png";
import { savePaymentMethod } from "../actions/cartActions";
import Breadcrumbs from "../components/Breadcrumbs";

const PaymentMethods = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
  };

  return (
    <div className="lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      <Breadcrumbs page="Payment method" />
      <div className="container">
        {/* <CheckoutSteps step1 step2 step3 /> */}
        <div className="bg-gray-200 text-black my-4 rounded">
          <p className="px-4 py-3 text-sm font-semibold">
            Select payment method
          </p>
        </div>
        <form className="" onSubmit={submitHandler}>
          <div className="flex items-center justify-center gap-4 py-20">
            <div className="w-24 h-24 p-4 border-primary border rounded flex items-center justify-center gap-1">
              {/* <img className="w-full" src={creditCard} alt="/" /> */}
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                required
                checked
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                }}
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
            <div className="w-24 h-24 p-4 border-primary border rounded flex items-center justify-center gap-1">
              {/* <img className="w-full" src={paypal} alt="/" /> */}
              <input
                type="radio"
                id="stripe"
                value="Stripe"
                name="paymentMethod"
                required
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                }}
              />
              <label htmlFor="stripe">Stripe</label>
            </div>
          </div>
          <div className="mb-44">
            <Button
              className="p-2 w-full"
              primary
              onClick={submitHandler}
              children="Save"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentMethods;
