import React from "react";
import "../Style/nav.css";
import { Link } from "react-router-dom";
import SearchDisplay from "./Searches/Search";
import {useState} from 'react';
const Navbar = () => {
  const [value,setvalue] = useState();
   console.log(value)
    function Call(){
      if(value == 'bike'){
        alert('hello');
        return(
          <SearchDisplay style={{display:'inline-flex'}} />
        )
      }
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
          <div className="search">
            <input
              onChange={(eve)=> setvalue(eve.target.value.toLowerCase())}
              type="text"
              placeholder="Find Cars,Mobile Phone and more..."
              id="search-things"
            />
            <i className="fa fa-search" onClick={Call} />
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

export default Navbar;
