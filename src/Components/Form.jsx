import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/form.css";
import { useState } from "react";

const Form = () => {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  useEffect((eve = Dispatchdata())=>{
      for(var a in eve){
          console.log(eve[a])
      }
  })
  const Sub = (e) => {
    localStorage.setItem("formdata", JSON.stringify(data));
    Dispatchdata();
    e.preventDefault();

  };
  
  function Dispatchdata() {
    if (localStorage.getItem("formdata")) {
      let { fname, lname, email, password } = JSON.parse(
        localStorage.getItem("formdata")
      );
    //   console.log(`${fname} and ${lname} and ${email} and ${password}`);
      return { fname, lname, email, password };
   
    }
  }
  const targetval = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setdata((prevalue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevalue.lname,
          email: prevalue.email,
          password: prevalue.password,
        };
      } else if (name === "lname") {
        return {
          fname: prevalue.fname,
          lname: value,
          email: prevalue.email,
          password: prevalue.password,
        };
      } else if (name === "email") {
        return {
          fname: prevalue.fname,
          lname: prevalue.lname,
          email: value,
          password: prevalue.password,
        };
      } else if (name === "password") {
        return {
          fname: prevalue.fname,
          lname: prevalue.lname,
          email: prevalue.email,
          password: value,
        };
      }
    });
  };


  return (
    <>
      <div className="outer">
        <form role="form" onSubmit={Sub}>
          <div id="mains" className="inner">
            <Link to="/">
              <i className="fas fa-times" />
            </Link>
            <h1 className="top">Login</h1>
            <label>First Name</label>
            <input
              value={data.fname}
              onChange={targetval}
              className="inp"
              name="fname"
              type="text"
              placeholder="Enter your first name"
            />
            <label>Last Name</label>
            <input
              value={data.lname}
              onChange={targetval}
              className="inp"
              name="lname"
              type="text"
              placeholder="Enter your last name"
            />
            <label>Email</label>
            <input
              value={data.email}
              onChange={targetval}
              className="inp"
              name="email"
              type="text"
              placeholder="Enter your email"
            />
            <label>Password</label>
            <input
              value={data.password}
              onChange={targetval}
              className="inp"
              name="password"
              type="password"
              placeholder="Enter the password"
            />
            <div className="btns">
              <button type="submit" className="sub-btn">
                Submit
              </button>
              <button className="res-btn">Reset</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
