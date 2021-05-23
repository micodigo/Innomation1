import React from "react";
import classes from "./Diffrence.module.scss";
import Experience from "../../img/Experience.png";
import Quality from "../../img/Quality.png";
import Ontime from "../../img/Ontime.png";
import Satisfaction from "../../img/Satisfaction.png";
function Diffrence() {
  return (
    <section className={classes.section}>
      <div className={classes.row}>
        <div>
          <h4>See Here</h4>
          <h2 className={classes.heading}>What diffrentiates Us</h2>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col_1_of_4}>
          <div className={classes.card}>
            <div className={classes.icon}>
              <img src={Ontime} alt="" />
            </div>
            <div className={classes.desription}></div>
          </div>
        </div>
        <div className={classes.col_1_of_4}>
          <div className={classes.card}>
            <div className={classes.icon}>
              <img src={Quality} alt="" />
            </div>
            <div className={classes.desription}></div>
          </div>
        </div>
        <div className={classes.col_1_of_4}>
          <div className={classes.card}>
            <div className={classes.icon}>
              <img src={Experience} alt="" />
            </div>
            <div className={classes.desription}></div>
          </div>
        </div>
        <div className={classes.col_1_of_4}>
          <div className={classes.card}>
            <div className={classes.icon}>
              <img src={Satisfaction} alt="" />
            </div>
            <div className={classes.desription}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Diffrence;
