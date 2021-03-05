import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
const Card = (prop) => {
  return (
    <>
      <div className="main">
        <div className="imga">
          <a href={prop.hrefs}>
            {" "}
            <img src={prop.imgsrcs} />
          </a>
          <div className="icns">
            <FavoriteIcon id="ico" />
          </div>
        </div>
        <a href={prop.hrefs}>
          {" "}
          <div className="lower">
            <h2>{prop.price}</h2>
            <h5>{prop.text}</h5>
          </div>
        </a>
      </div>
    </>
  );
};
export default Card;
