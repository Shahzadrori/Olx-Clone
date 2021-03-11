import React from "react";
import "../../Style/card.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { connect } from "react-redux";
import useEffect from "react";
const Card = (props) => {
  return (
    <>
      <div key={props.key} className="inner-content">
        <div className="like">
          <a href={props.href}>
            <img src={props.imgsrc} />
          </a>
          <div className="icn">
            <FavoriteIcon
              id={props.id}
              className=""
              onClick={() => {
                if (props.tasks == null || props.tasks == "") {
                  alert("Sign in first");
                } else {
                  const click = () => {
                    var val = document
                      .getElementById(props.id)
                      .classList.toggle("color");
                  };
                  click()
                }
              }}
            />
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
const mapstate = (state) => {
 const login_val = state.Reducer.task;
  return {
    tasks: login_val,
  };
};
export default connect(mapstate, null)(Card);
