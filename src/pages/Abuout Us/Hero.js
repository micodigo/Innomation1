import React from "react";
import classes from "./Hero.module.scss";
import visual from ".././../img/aboutus1.png";

function Hero() {
  return (
    <section className={classes.section}>
      <div className={classes.section_heading}>
        <div className={classes.row}>
          <div className={classes.col_1_of_2}>
            <div className={classes.content}>
              <h2 className={classes.content_heading}>ABOUT US</h2>
              <p className={classes.content_description}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis consequuntur voluptate necessitatibus consectetur
                esse reiciendis fuga quo et reprehenderit in. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Reiciendis, laudantium
                deserunt doloribus blanditiis quibusdam at eum quo atque cum,
                pariatur animi sed! Laboriosam cumque pariatur laudantium
                quibusdam ab doloremque illo praesentium minus accusantium
                reprehenderit vel veritatis iure tenetur quas placeat
                voluptatibus eius, necessitatibus, adipisci reiciendis
                consequuntur beatae mollitia sit. Delectus.
              </p>
            </div>
          </div>
          <div className={classes.col_1_of_2}>
            <div className={classes.visual}>
              <div className={classes.visual_img}>
                <img src={visual} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
