import React from 'react';
import Navbar from '../pages/navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-full">
        <Navbar />
        <main  >{children}</main>
      </div>
    </div>
  );
};

export default Layout;
