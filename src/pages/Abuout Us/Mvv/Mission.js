import React from "react";
import classes from "./Mission.module.scss";
import visual from "../../../img/Experience.png";
function Mission() {
  return (
    <>
      <div className={classes.col_1_of_2}>
        <div className={classes.visual}>
          <img src={visual} alt="" />
        </div>
      </div>
      <div className={classes.col_1_of_2}>
        <div className={classes.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatibus labore tempora illum quam rem accusantium. Incidunt
            voluptate repudiandae alias adipisci fugiat rem dolore perspiciatis
            eaque beatae, nostrum delectus? Repellat atque ea hic itaque odit,
            earum similique, debitis dolores, inventore dolor at nisi quibusdam
            dicta molestiae. Similique aperiam earum consequatur?
          </p>
        </div>
      </div>
    </>
  );
}

export default Mission;
