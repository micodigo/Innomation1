import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.scss";
import Pic from "../img/Picture1.png";

export default function Home() {
  return (
    <>
      <Header />
      <section className="section2">
        <div className="row">
          <div className="col-1-of-2">
            <img src={Pic} alt="SMART" />
          </div>
          <div className="col-1-of-2">
            <h2>Why us?</h2>
            <p>
              In this world with lots of solution providers, what makes us apart
              is our SMART policy of man, material and money management.
              <br /> Keeping in mind our primary goal of customer satisfaction,
              we at iNNOMATION Tech Services, target and resolve the customer
              queries SMARTly.
            </p>
          </div>
        </div>
        {/* <h2>Why us?</h2>
        <div>
          <img src={Pic} alt="SMART" />
          <p>
            In this world with lots of solution providers, what makes us apart
            is our SMART policy of man, material and money management.
            <br /> Keeping in mind our primary goal of customer satisfaction, we
            at iNNOMATION Tech Services, target and resolve the customer queries
            SMARTly.
          </p>
        </div> */}
      </section>
      <Footer />
    </>
  );
}
