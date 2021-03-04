import React from "react";
import '../../Style/card.css'
const Card = (props) => {
  return (
    <>
        <div className="inner-content">
          <img src={props.imgsrc} />
          <h2>{props.price}</h2>
          <h4>{props.text}</h4>
        </div>
    </>
  );
};
export default Card;
