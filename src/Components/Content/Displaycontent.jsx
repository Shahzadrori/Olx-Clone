import React from "react";
import Card from "./Card";
import "../../Style/Discon.css";
import Data from "./Data";
const DisCont = () => {
  function ncard(value) {
    return (
      <>
        <div className="imgee">
          <Card
            href={value.href}
            id={value.id}
            key={value.key}
            imgsrc={value.imgsrc}
            price={value.price}
            text={value.text}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="outerr">
        <div className="condiv">
          <div className="more">
            <h2>More on Motorbikes</h2>
            <a href="https://www.olx.com.pk/motorcycles_c81?filter=platform_eq_web-desktop&facet_limit=100&location_facet_limit=20&sorting=desc-creation&user=177dde1a547x69af9e92">
              View more
            </a>
          </div>
          <div className="mainer">{Data.map(ncard)}</div>
        </div>
      </div>
    </>
  );
};
export default DisCont;
