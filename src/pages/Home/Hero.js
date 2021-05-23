import React, { useRef } from "react";
// import hero from "../../img/hero.jpg";
import "./Hero.scss";

export default function Hero() {
  // const testref = useRef();
  // var slideIndex = 0;
  // showSlides();

  // function showSlides() {
  //   var i;
  //   var slides = testref.current.value;
  //   console.log(slides);
  //   var dots = document.getElementsByClassName("dot");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {
  //     slideIndex = 1;
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  //   setTimeout(showSlides, 5000); // Change image every 2 seconds
  // }
  return (
    <section className="hero">
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img className="hh" src="1.png" alt="" />
          <div className="animated-title">
            <div className="text-top">
              <div>
                <span>mimicking</span>
                <span>apple's design</span>
              </div>
            </div>
            <div className="text-bottom">
              <div>for the win!</div>
            </div>
          </div>
        </div>

        <div className="mySlides fade">
          <img className="hh" src="2.png" alt="" />
          <div className="animated-title">
            <div className="text-top">
              <div>
                <span>mimicking</span>
                <span>apple's design</span>
              </div>
            </div>
            <div className="text-bottom">
              <div>for the win!</div>
            </div>
          </div>
        </div>

        <div className="mySlides fade">
          <img className="hh" src="3.png" alt="" />
          <div className="animated-title">
            <div className="text-top">
              <div>
                <span>mimicking</span>
                <span>apple's design</span>
              </div>
            </div>
            <div className="text-bottom">
              <div>for the win!</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}
