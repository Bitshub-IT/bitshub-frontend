import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { toast } from "react-toastify";
import LoadingBox from "../components/LoadingBox";

const Register = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userData = useSelector((state) => state?.registerUser);
  const { error, userInfo, loading } = userData;
  const customId = "custom-id-yes";

  const dispatch = useDispatch();

  const registerHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
    if (password !== confirmPassword) {
      toast.error("Password and confirm password do not match!");
    } else {
      dispatch(register(name, email, password));
    }
  };
  toast.error(error, {
    toastId: customId,
  });
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Create an account</h2>
        <p className="text-gray-600 mb-6 text-sm">Sign up here if you're a new customer</p>
        <form onSubmit={registerHandler}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-gray-600 mb-2 block">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                id="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="type password"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                type="password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="confirm your password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input type="checkbox" id="agreement" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label htmlFor="agreement" className="text-gray-600 ml-3 cursor pointer">
                I have read and agreed to the
              </label>
            </div>
            <a href="/#" className="text-primary">
              terms and conditions
            </a>
          </div>
          <div className="mt-4">
            <button className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
              create account
            </button>
          </div>
        </form>
        <div className="flex mt-6 justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">or sign up with</div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div className="flex mt-4 gap-4">
          <a
            href="/"
            className="w-1/2 py-2 text-center text-white bg-blue-800 hover:bg-blue-700 rounded uppercase font-roboto font-medium text-sm"
          >
            Facebook
          </a>
          <a
            href="/"
            className="w-1/2 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-500 rounded uppercase font-roboto font-medium text-sm"
          >
            Google
          </a>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account?
          <span className="text-primary cursor-pointer">
            <Link to={`/login?redirect=${redirect}`}>Login Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default Register;
