import React from "react";
import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";
import BrakingNews from "../components/shared/BrakingNews";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayout;
