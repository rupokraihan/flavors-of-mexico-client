import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </div>
  );
};

export default Main;