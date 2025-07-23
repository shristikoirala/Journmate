import React from 'react';
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar /> {/* ✅ This is the only place it should appear */}
      <Outlet />
    </>
  );
};

export default Layout;