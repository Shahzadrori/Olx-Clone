import React from "react";
import {useEffect} from 'react';
import Navbar from "./Components/Navbar";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Form from "./Components/Form";
import Lindiv from "./Components/Links";
import DisCont from "./Components/Content/Displaycontent";
import Displ from "./Components/lowercontent/Disp";
import SearchDisplay from "./Components/Searches/Search";
const App = () => {
  // useEffect(()=>{
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    // });
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log(position)
    // });
    // navigator.geolocation.getCurrentPosition(
    //   function(position) {
    //     console.log(position);
    //   },
    //   function(error) {
    //     console.error("Error Code = " + error.code + " - " + error.message);
    //   }
    // );

  // },[])
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/sign-in" component={Form} />
      </Switch>
      <Lindiv />
      {/* <SearchDisplay/> */}
      <DisCont />
      <Displ/>

  
    </>
  );
};
export default App;
