import React from "react";
import Diffrence from "./Home/Diffrence";
import Hero from "./Home/Hero";
import Ourpartners from "./Home/Ourpartners";
import ServiceCard from "./Home/ServicesCard";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCard />
      <Diffrence />
      {/* <Counter /> */}
      <Ourpartners />
    </>
  );
}
