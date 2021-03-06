import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {} from "../../Style/lowercontent/card.css";
const Card = (prop) => {
  return (
    <>
    {/* <div className='display'> */}
      <div className="display">
      <div className='container'>
        <div className="imga">
          <a href={prop.hrefs}>
            <img src={prop.imgsrcs} />
          </a>
          {/* <div className="icns"> 
            <FavoriteIcon id="ico" />
           </div> */}
        </div>
        <a href={prop.hrefs}>
          <div className="lower">
            <h2>{prop.price}</h2>
            <h5>{prop.text}</h5>
          </div>
        </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Card;
