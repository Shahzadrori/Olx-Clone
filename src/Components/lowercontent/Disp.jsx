import React from "react";
import Card from "./Card";
import Datas from "./Datas";
import "../../Style/lowercontent/Displ.css";

const Displ = () => {
  function ncards(value) {
    return (
      <Card
        imgsrcs={value.imgsrcs}
        hrefs={value.hrefs}
        text={value.text}
        price={value.price}
      />
    );
  }
  return (
    <>
      <div className="outer">
        <div className="mains">{Datas.map(ncards)}</div>
      </div>
    </>
  );
};
export default Displ;
