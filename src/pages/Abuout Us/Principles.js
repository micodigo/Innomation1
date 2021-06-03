import React from "react";
import classes from "./Principles.module.scss";

function Principles() {
  return (
    <section className={classes.section}>
      <div className={classes.principles}>
        <div className={classes.principles_heading}>
          <h2>Our Principles</h2>
        </div>
        {/* Sub Headings */}
        <div className={classes.heading_sub_mission}>
          <h3>Mission</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, amet
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className={classes.heading_sub_vision}>
          <h3>Vision</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, amet
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className={classes.heading_sub_values}>
          <h3>Values</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, amet
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Principles;
