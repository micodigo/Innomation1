import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Counter from "./Home/Counter";
import Diffrence from "./Home/Diffrence";
import Hero from "./Home/Hero";
import Ourpartners from "./Home/Ourpartners";
import ServiceCard from "./Home/ServicesCard";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServiceCard />
      <Diffrence />
      {/* <Counter /> */}
      <Ourpartners />
      <Footer />
    </>
  );
}
