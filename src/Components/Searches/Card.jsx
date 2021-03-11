import React from "react";
const Cards = (prep) => {
  const Call = () => {
    document.getElementById("disply").classList.toggle("hide");
  };
  return (
    <>
      <div className="outerss " id="disply">
        <div className="wraper">
          <div className="imagess">
            <img src={prep.imgsrc} />
          </div>
          <div className="info">
            <h3>{prep.text}</h3>
            <p>{prep.price}</p>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Cards;