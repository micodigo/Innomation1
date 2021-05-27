import React from "react";
import classes from "./Intro.module.scss";

function Intro() {
  return (
    <section className={classes.section}>
      <div className={classes.section_heading}>
        <div className={classes.row}>
          <h4 className={classes.heading_tertiary}>See Here</h4>
          <h2 className={classes.heading_secondary}>What we do</h2>
        </div>
      </div>
    </section>
  );
}

export default Intro;
