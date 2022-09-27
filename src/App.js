import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ShopScreen from "./screens/ShopScreen";
import ContactScreen from "./screens/ContactScreen";
import Footer from "./components/Footer";
import ProductDetails from "./screens/products/ProductDetails";
import AccountLayout from "./screens/AccountLayout";
import Login from "./screens/Login";
import ScrollToTop from "./utilities/scrollToTop";
import Checkout from "./screens/Checkout";
import ManageAddress from "./components/ManageAddress";
import ChangePassword from "./components/ChangePassword";
import ManageAccount from "./components/ManageAccount";
import OrderHistory from "./components/OrderHistory";
import Returns from "./components/Returns";
import Cancellations from "./components/Cancellations";
import Reviews from "./components/Reviews";
import Voucher from "./components/Voucher";
import PaymentMethods from "./components/PaymentMethods";
import WishList from "./components/WishList";
import ProfileInfo from "./components/ProfileInfo";
import ShoppingCart from "./screens/ShoppingCart";
import NotFound from "./screens/NotFound";
import Register from "./screens/Register";

function App() {
  return (
    <ScrollToTop>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/product-details/:_id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/checkout" element={<Checkout />} />
        <Route path="register" element={<Register />} />
        <Route path="/cart/:_id" element={<ShoppingCart />} />
        <Route
          exact
          path="/account"
          element={
            <AccountLayout>
              <ManageAccount />
            </AccountLayout>
          }
        />
        <Route
          exact
          path="/account/profile-info"
          element={
            <AccountLayout>
              <ProfileInfo />
            </AccountLayout>
          }
        />

        <Route
          exact
          path="/account/manage-address"
          element={
            <AccountLayout>
              <ManageAddress />
            </AccountLayout>
          }
        />
        <Route
          path="/account/change-password"
          element={
            <AccountLayout>
              <ChangePassword />
            </AccountLayout>
          }
        />
        <Route
          path="/account/wishlist"
          element={
            <AccountLayout>
              <WishList />
            </AccountLayout>
          }
        />
        <Route
          path="/account/order-history"
          element={
            <AccountLayout>
              <OrderHistory />
            </AccountLayout>
          }
        />
        <Route
          path="/account/returns"
          element={
            <AccountLayout>
              <Returns />
            </AccountLayout>
          }
        />
        <Route
          path="/account/cancellations"
          element={
            <AccountLayout>
              <Cancellations />
            </AccountLayout>
          }
        />
        <Route
          path="/account/reviews"
          element={
            <AccountLayout>
              <Reviews />
            </AccountLayout>
          }
        />
        <Route
          path="/account/payment-methods"
          element={
            <AccountLayout>
              <PaymentMethods />
            </AccountLayout>
          }
        />
        <Route
          path="/account/voucher"
          element={
            <AccountLayout>
              <Voucher />
            </AccountLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ScrollToTop>
  );
}

export default App;
