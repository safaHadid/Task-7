'use client';

import AboutUs from '@/components/AboutUs';
import Book from '@/components/Book';
import ContactUs from '@/components/ContactUs';
import Customers from '@/components/Customers';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Login from '@/components/Login';
import Navbar from '@/components/Navbar';
import PopularDestinantions from '@/components/PopularDestinantions';
import PopularPackages from '@/components/PopularPackages';
import Services from '@/components/Services';
import SignUp from '@/components/SignUp';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
    <Navbar setOpen={setOpen} setOpenLogin={setOpenLogin}/>
    <Hero />
    <PopularDestinantions />
    <AboutUs imgSrc={"assets/about.png"} />
    <ContactUs />
    <Services />
    <Book />
    <PopularPackages />
    <Customers />
    <Footer />
    <Login open={openLogin} setOpen={setOpenLogin}/>
    <SignUp open={open} setOpen={setOpen} />
    </>
  );
}