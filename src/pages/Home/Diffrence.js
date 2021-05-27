import React from "react";
import classes from "./Diffrence.module.scss";
import Experience from "../../img/Experience.png";
import Quality from "../../img/Quality.png";
import Ontime from "../../img/Ontime.png";
import Satisfaction from "../../img/Satisfaction.png";
function Diffrence() {
  return (
    <section className={classes.section}>
      <div className={`${classes.row} ${classes.section_heading}`}>
        <h4 className={classes.heading_tertiary}>See Here</h4>
        <h2 className={classes.heading_secondary}>What diffrentiates Us</h2>
      </div>

      <div className={classes.row}>
        <div className={`${classes.col_1_of_4} `}>
          <div className={`${classes.card} ${classes.otd}`}>
            <div className={classes.icon}>
              <img src={Ontime} alt="" />
            </div>
            <div className={classes.description}>
              <h3 className={classes.description_text}>On-Time Delivery</h3>
              <p>
                The first mark of good business is the ability to deliver. To
                deliver its product or service on time and in the condition
                which the client was led to expect. Thats's why we focus on
                On-Time Delivery.
              </p>
            </div>
          </div>
        </div>
        <div className={`${classes.col_1_of_4} `}>
          <div className={`${classes.card} ${classes.quality}`}>
            <div className={classes.icon}>
              <img src={Quality} alt="" />
            </div>
            <div className={classes.description}>
              <h3 className={classes.description_text}>Quality</h3>
              <p>
                Experience matter for implementing solution in any industry. We
                have 10+ years of experience and successfully deliverd 500+
                projects.
              </p>
            </div>
          </div>
        </div>
        <div className={`${classes.col_1_of_4} `}>
          <div className={`${classes.card} ${classes.experience}`}>
            <div className={classes.icon}>
              <img src={Experience} alt="" />
            </div>
            <div className={classes.description}>
              <h3 className={classes.description_text}>Experience</h3>

              <p>
                Quality in a service or product is not what you put into it. It
                is what the client or customer gets out of it. We want our
                customer to get the best. Thats's why we focus on Qualtiy.
              </p>
            </div>
          </div>
        </div>
        <div className={`${classes.col_1_of_4} `}>
          <div className={`${classes.card} ${classes.satisfaction}`}>
            <div className={classes.icon}>
              <img src={Satisfaction} alt="" />
            </div>
            <div className={classes.description}>
              <h3 className={classes.description_text}>
                Customer Satisfaction
              </h3>
              <p>
                It’s our job every day to make every important aspect of the
                customer experience a little bit better. Thats's why we focus on
                Customer Satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Diffrence;
