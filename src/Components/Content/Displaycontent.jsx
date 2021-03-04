import React from "react";
import Card from "./Card";
import "../../Style/Discon.css";
import Data from "./Data";
const DisCont = () => {
  function ncard(value) {
    return (
      <>
        <div className="imgee">
          <Card imgsrc={value.imgsrc} price={value.price} text={value.text} />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="outerr">
        <div className="mainer">{Data.map(ncard)}</div>
      </div>
    </>
  );
};
export default DisCont;
