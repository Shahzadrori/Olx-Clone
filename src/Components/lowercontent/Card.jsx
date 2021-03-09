import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {} from "../../Style/lowercontent/card.css";
import { connect } from "react-redux";
const Card = (prop) => {
  const clicks = () => {
    var vla = document.getElementById(prop.id).classList.toggle("colors");
  };
  return (
    <>
      <div key={prop.key} className="display">
        <div className="container">
          <div className="imga">
            <a href={prop.hrefs}>
              <img src={prop.imgsrcs} />
            </a>
            <div className="icns">
              <FavoriteIcon
                id={prop.id}
                onClick={() => {
                  if (prop.tasks == null || prop.tasks == "") {
                    alert("Sign in first");
                  } else {
                    const click = () => {
                      var val = document
                        .getElementById(prop.id)
                        .classList.toggle("color");
                        click();
                    };
                   
                  }
                }}
                className=""
              />
            </div>
          </div>
          <a href={prop.hrefs}>
            <div className="lower">
              <h2>{prop.price}</h2>
              <h5>{prop.text}</h5>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
const mapstate = (state) => {
  console.log(state);
  return {
    tasks: state.task,
  };
};
export default connect(mapstate, null)(Card);
