import React, { useEffect, useState } from "react";
import classes from "./Counter.module.scss";
// import handleViewport from "react-in-viewport";

export default function Counter(props) {
  console.log(props.inViewport);
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  useEffect(() => {
    let s = 0;
    let interval = setInterval(() => {
      s += 1;
      setNum((num) => num + 35);
      setNum2((num2) => num2 + 20);
      setNum3((num3) => num3 + 5);
      setNum4((num4) => num4 + 1);
      if (s === 15) clearInterval(interval);
    }, 50);
  }, []);
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return (
      <div ref={forwardedRef}>
        <div className={classes.row}>
          <div className={classes.col_1_of_4}>
            <h2>Finishing Projects</h2>
            <h1>{num}+</h1>
          </div>
          <div className={classes.col_1_of_4}>
            <h2>Lovely Clients</h2>
            <h1>{num2}+</h1>
          </div>
          <div className={classes.col_1_of_4}>
            <h2>Team Members</h2>
            <h1>{num3}+</h1>
          </div>
          <div className={classes.col_1_of_4}>
            <h2>Years Of Exp.</h2>
            <h1>{num4}+</h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef}>
      <div className={classes.row}>
        <div className={classes.col_1_of_4}>
          <h2>Finishing Projects</h2>
          <h1>0</h1>
        </div>
        <div className={classes.col_1_of_4}>
          <h2>Lovely Clients</h2>
          <h1>0</h1>
        </div>
        <div className={classes.col_1_of_4}>
          <h2>Team Members</h2>
          <h1>0</h1>
        </div>
        <div className={classes.col_1_of_4}>
          <h2>Years Of Exp.</h2>
          <h1>0</h1>
        </div>
      </div>
    </div>
  );
}
// const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);
