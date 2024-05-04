import React from 'react';
import Navbar from '../pages/navbar/Navbar';
import Footer from '../pages/footer/Index';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-full">
        <Navbar />
        <main  >{children}</main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
