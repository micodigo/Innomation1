import React from "react";
import "./WhyUs.scss";
import { useState } from "react";
export default function WhyUs() {
  const [state, setstate] = useState({
    objects1: [{ id: 1 }, { id: 2 }],
    objects2: [
      { id: 1, name1: "p1", name2: "p4", class1: "close", class2: "close" },
      { id: 2, name1: "p2", name2: "p5", class1: "close", class2: "close" },
      { id: 3, name1: "p3", name2: "p6", class1: "close", class2: "close" },
    ],
  });

  const changestate = (obj2, i, j) => {
    for (let a = 0; a < 2; a++) {
      for (let b = 0; b < 3; b++) {
        if (a === i && b === j) {
          if (i === 0 && obj2[j].class1 === "close") {
            obj2[j].class1 = "open";
          } else if (i === 0 && obj2[j].class1 === "open") {
            obj2[j].class1 = "close";
          } else if (i === 1 && obj2[j].class2 === "open") {
            obj2[j].class2 = "close";
          } else {
            obj2[j].class2 = "open";
          }
        } else {
          if (a === 0) obj2[b].class1 = "close";
          else obj2[b].class2 = "close";
        }
      }
    }
    return obj2;
  };

  const toggleHandler = (index, j) => {
    setstate({
      ...state,
      objects2: changestate(state.objects2, index, j),
    });
  };
  const toggleclass = (index, j) => {
    console.log(
      index,
      j,
      index === 0 ? state.objects2[j].class1 : state.objects2[j].class2
    );
    if (index === 0 && state.objects2[j].class1 === "close")
      return [
        "servicecard servicecard-inactive",
        "toggle-info toggle-info-close",
      ];
    else if (index === 0 && state.objects2[j].class1 === "open")
      return ["servicecard servicecard-active", "toggle-info toggle-info-open"];
    else if (index === 1 && state.objects2[j].class2 === "close")
      return [
        "servicecard servicecard-inactive",
        "toggle-info toggle-info-close",
      ];
    else
      return ["servicecard servicecard-active", "toggle-info toggle-info-open"];
  };
  return (
    <section className="whyussection">
      {state.objects1.map((element1, index) => (
        <div key={index} className="row">
          {state.objects2.map((element2, j) => (
            <div
              key={j}
              className="col-1-of-3"
              onClick={() => toggleHandler(index, j)}
            >
              <div
                className={toggleclass(index, j)[0]}
                // onClick={() => toggleHandler(index, j)}
              >
                <div className="heading">
                  {index === 0 ? (
                    <h2>{element2.name1}</h2>
                  ) : (
                    <h2>{element2.name2}</h2>
                  )}
                </div>
                <div
                  className={toggleclass(index, j)[1]}
                  // onClick={() => toggleHandler(index, j)}
                >
                  <span className="left"></span>
                  <span className="right"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
