import React from "react";
import classes from "./Hero.module.scss";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.pageheading}>
        <h1 className={classes.headingprimary}>ABOUT US</h1>
      </div>
    </section>
  );
}

export default Hero;
