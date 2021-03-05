import React from "react";
import "../../Style/card.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
const Card = (props) => {
  const checked = () => {
    let color = document.getElementById("icon");
    color.classList.toggle("color");
  };

  return (
    <>
      <div id={props.id} className="inner-content">
        <div className="like">
          <a href={props.href}>
            <img src={props.imgsrc} />
          </a>
          <div className="icn">
            <FavoriteIcon id="icon" onClick={checked} />
          </div>
        </div>
        <a href={props.href}>
          <div className="bor">
            <h3>{props.price}</h3>
            <h5>{props.text}</h5>
          </div>
        </a>
      </div>
    </>
  );
};
export default Card;
