import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AdminLogin from "./components/Admin/Admin_Login/Admin_Login";
import Error from "./components/Error/Error";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import UserProfile from "./components/User/UserProfile/UserProfile";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import ChangePassword from "./components/User/ChangePassword/ChangePassword";
import OrderHistory from "./components/User/OrderHistory/OrderHistory";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";


const App = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/Admin_Login" element={<AdminLogin />} />
        <Route exact path="/admindashboard" element={<AdminDashboard />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/changepassword" element={<ChangePassword />} />
        <Route exact path="/orderhistory" element={<OrderHistory />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
