import React from "react";
import "../Style/linkdiv.css";
const Lindiv = () => {
  return (
    <>
        <div className="links">
          <a href="#">Mobile Phones</a>
          <a href="#">Cars</a>
          <a href="#">Motor Cycles</a>
          <a href="#">Houses</a>
          <a href="#">TV</a>
          <a href="#">Tablets</a>
          <a href="#">Land and Plots</a>
        </div>
        <div className='add'>
        <h4>Popular Searches: </h4>
            <div className='popsearch'>
            
                <a href="#">iphone</a> - 
                <a href="#"> infinix</a> - 
                <a href="#">oppo</a> - 
                <a href="#">samsung</a> - 
                <a href="#">vivo</a> - 
                <a href="#">motorola</a> -
                <a href="#">huawei</a>
            </div>
      </div>
      <div className='image'>
          <img src='https://tpc.googlesyndication.com/simgad/12209006039146377017?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnT670zsyMklzfqwM76rMLwP24_ew'/>
      </div>
    </>
  );
};
export default Lindiv;
