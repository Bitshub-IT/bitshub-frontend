import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import { toast } from "react-toastify";

const Shipping = () => {
  const signinData = useSelector((state) => state?.userSignin);
  const { loading, error, userInfo } = signinData;
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  });

  const cart = useSelector((state) => state?.cart);
  const { shippingDetails } = cart;
  console.log(shippingDetails, userInfo);

  const [name, setName] = useState(shippingDetails.name);
  const [phone, setPhone] = useState(shippingDetails.phone);
  const [address, setAddress] = useState(shippingDetails.address);
  const [city, setCity] = useState(shippingDetails.city);
  const [state, setState] = useState(shippingDetails.state);

  const dispatch = useDispatch();

  const handleShipping = (e) => {
    e.preventDefault();
    if (name.length < 1 || phone.length < 1 || address.length < 1 || city.length < 1 || state.length < 1) {
      toast.error("Feild cannot be empty!");
    } else {
      console.log(name, phone, address, city, state);
      dispatch(saveShippingAddress({ name, phone, address, city, state }));
      navigate("/payment");
    }
  };

  return (
    <div>
      <Breadcrumbs page="Checkout" />
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="col-span-12 md:col-span-8">
          <div className="bg-gray-200 text-black mb-4 rounded">
            <p className="px-4 py-3 text-sm font-semibold">Shipping Details</p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <div className="space-y-4">
              <form onSubmit={handleShipping}>
                <div className="py-2">
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    repuired
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="input-box"
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="number"
                    value={phone}
                    repuired
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className="input-box"
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={address}
                    repuired
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    className="input-box"
                  />
                </div>
                <div className="py-2 flex items-center justify-between gap-4">
                  <div className="w-full">
                    <label htmlFor="" className="text-gray-600 mb-2 block">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="city"
                      type="text"
                      value={city}
                      repuired
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      className="input-box"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="text-gray-600 mb-2 block">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="state"
                      type="text"
                      value={state}
                      repuired
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className="input-box"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="bg-gray-200 text-black mb-4 rounded">
            <p className="px-4 py-3 text-sm font-semibold">Your Order</p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <p className="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">italian shape sofa</p>
                  <p className="text-sm text-gray-600">size:m</p>
                </div>
                <p className="text-gray-600">X3</p>
                <p className="text-gray-800 font-medium">$320</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">italian shape sofa</p>
                  <p className="text-sm text-gray-600">size:m</p>
                </div>
                <p className="text-gray-600">X3</p>
                <p className="text-gray-800 font-medium">$320</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">italian shape sofa</p>
                  <p className="text-sm text-gray-600">size:m</p>
                </div>
                <p className="text-gray-600">X3</p>
                <p className="text-gray-800 font-medium">$320</p>
              </div>
            </div>

            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p>Subtotal</p>
              <p>$320</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p>Shipping</p>
              <p>free</p>
            </div>
            <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p className="font-semibold">Total</p>
              <p>$320</p>
            </div>
            <div className="flex items-center mb-4 mt-2">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
              />
              <label htmlFor="agreement" className="text-gray-600 ml-3 cursor-pointer text-sm">
                Agree to our
                <a href="/" className="text-primary pl-1">
                  terms & condition
                </a>
              </label>
            </div>
            <button
              onClick={handleShipping}
              className="w-full block text-center bg-primary border-primary text-white border px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition uppercase"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
