"use client";

import AboutUs from "@/components/AboutUs";
import AboutUsHero from "@/components/AboutUsHero";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import SignUp from "@/components/SignUp";
import React, { useState } from "react";

const AboutUsPage = () => {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div>
      <Navbar setOpen={setOpen} setOpenLogin={setOpenLogin} />
      <AboutUsHero />
      <AboutUs imgSrc={"assets/aboutus.png"} />
      <Info />
      <Customers />
      <Footer />
      <Login open={openLogin} setOpen={setOpenLogin} />
      <SignUp open={open} setOpen={setOpen} />
    </div>
  );
};

export default AboutUsPage;
