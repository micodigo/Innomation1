import React from "react";
import classes from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.row}`}>
        <div className={`${classes.col_1_of_4}`}>
          <div className={classes.cards3}>
            <h4 className={classes.heading_tertiary}>Contact Us</h4>
            <ul className={classes.details}>
              <li>Innomation tech Servies</li>
              <li>Shahdra,Delhi</li>
              <li>saurabhgupta502@gmail.com</li>
              <li>9654842864</li>
            </ul>
          </div>
        </div>
        <div className={`${classes.col_1_of_4}`}>
          <div className={classes.cards3}>
            <h4 className={classes.heading_tertiary}>Need Help?</h4>
            <ul className={classes.details}>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Services</li>
              <li>Products</li>
            </ul>
          </div>
        </div>
        <div className={`${classes.col_1_of_4}`}>
          <div className={classes.cards3}>
            <h4 className={classes.heading_tertiary}>Services</h4>
          </div>
        </div>
        <div className={`${classes.col_1_of_4}`}>
          <div className={classes.cards3}>
            <h4 className={classes.heading_tertiary}>Products</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
