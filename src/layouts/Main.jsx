import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Main;