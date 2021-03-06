import React from "react";
import "../Style/nav.css";
import { Link, Switch } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { Search } from "../Redux/Action";
const Navbar = (propers) => {
  const [value, setvalue] = useState();
//  console.log(value);
propers.addinp(value)
  

  function hide() {
    // document.querySelector(".dis-content").classList.toggle("hide");
  }
  
  return (
    <>
      <div className="main">
        <div className="top">
          <img src="../olx.ico" id="image" />
          <div className="input-value">
            <i className="fa fa-search sear" />
            <input
              className="country-input"
              type="text"
              placeholder="Pakistan"
              id="search-country"
            />
            <div>
              <i id="dispear" className="fas fa-chevron-down arrow" />
            </div>
          </div>
          <div className="vort">
            <div className="search">
              <input
                // onClick={hide}
                onChange={(eve) => setvalue(eve.target.value.toLowerCase())}
                type="text"
                placeholder="Find Cars,Mobile Phone and more..."
                id="search-things"
              />
              <i className="fa fa-search"  />
              {/* <div className="dis-content hide">
                <ul className="list">
                  <li>
                    <Link to="#">Bikes</Link>
                  </li>
                  <li>
                    <Link to="#">Cars</Link>
                  </li>
                  <li>
                    <Link to="#">Mobiles</Link>
                  </li>
                  <li>
                    <Link to="#">Plots</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="info">
            <Link className="link" to="/sign-in">
              Login
            </Link>
            <div className="but">
              <button>
                <a href="https://www.olx.com.pk/post">
                  <i className="fas fa-hand-holding-usd">Sell</i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// const mapstates=(state)=>{
//   // console.log(state)
//   return{
//     info:state.carditem
//   }
// }
const mapdispatchs=(dispatch)=>{
  return{
    addinp:(itemval)=>{
     dispatch(Search(itemval))
    }
  }
}


export default connect(null,mapdispatchs)(Navbar);
