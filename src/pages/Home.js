import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "./Home/Hero";
import WhyUs from "./Home/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
      {/* <Footer /> */}
    </>
  );
}
