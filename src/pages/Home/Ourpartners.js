import React, { useRef } from "react";

import classes from "./Ourpartners.module.scss";
import Parle from "../../img/customers/Parle.png";
import Bretannia from "../../img/customers/Britannia.png";
import Anmol from "../../img/customers/Anmol.png";
import Itc from "../../img/customers/Itc.png";
import Mondelez from "../../img/customers/Mondelez.png";
import Kraft from "../../img/customers/Kraft.png";
import Hul from "../../img/customers/Hul.png";
import Biobiscuit from "../../img/customers/Biobiscuit.png";
import Bisk from "../../img/customers/Bisk.png";
import Bonn from "../../img/customers/Bonn.png";
import Gk from "../../img/customers/Gk.png";
import Patanjali from "../../img/customers/Patanjali.png";
import Pladis from "../../img/customers/Pladis.png";
import Sobisco from "../../img/customers/Sobisco.png";
export default function Ourpartners() {
  const input = useRef();
  return (
    <section className={classes.section}>
      <div className={`${classes.row} ${classes.section_heading}`}>
        <h4 className={classes.heading_tertiary}>Our Amazing</h4>
        <h2 className={classes.heading_secondary}>Clients</h2>
      </div>
      <div className={classes.slide_window}>
        <ul className={classes.slider} ref={input}>
          <li>
            <img src={Parle} alt="" />
          </li>
          <li>
            <img src={Bretannia} alt="" />
          </li>
          <li>
            <img src={Anmol} alt="" />
          </li>
          <li>
            <img src={Itc} alt="" />
          </li>
          <li>
            <img src={Mondelez} alt="" />
          </li>
          <li>
            <img src={Kraft} alt="" />
          </li>
          <li>
            <img src={Hul} alt="" />
          </li>
          <li>
            <img src={Biobiscuit} alt="" />
          </li>
          <li>
            <img src={Bisk} alt="" />
          </li>
          <li>
            <img src={Bonn} alt="" />
          </li>
          <li>
            <img src={Gk} alt="" />
          </li>
          <li>
            <img src={Patanjali} alt="" />
          </li>
          <li>
            <img src={Pladis} alt="" />
          </li>
          <li>
            <img src={Sobisco} alt="" />
          </li>
          <li>
            <img src={Parle} alt="" />
          </li>
          <li>
            <img src={Bretannia} alt="" />
          </li>
          <li>
            <img src={Anmol} alt="" />
          </li>
          <li>
            <img src={Itc} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}
