import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Diffrence from "./Home/Diffrence";
import Hero from "./Home/Hero";
import WhyUs from "./Home/ServicesCard";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
      <Diffrence />
      {/* <Footer /> */}
    </>
  );
}
