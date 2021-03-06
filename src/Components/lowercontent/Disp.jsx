import React from "react";
import Card from "./Card";
import Datas from "./Datas";
import "../../Style/lowercontent/Displ.css";

const Displ = () => {
  function ncards(value) {
    return (
      <Card
        imgsrcs={value.imgsrcs}
        hrefs={value.hrefs}
        text={value.text}
        price={value.price}
      />
    );
  }
  return (
    <>
      <div className="outer">
        <div className="mains">{Datas.map(ncards)}</div>
      </div>
      <div className='upfooter'>
      <div className='fimg'>
        <img src='https://statics.olx.com.pk/external/base/img/phone-app.webp'/>
        <div className='text'>
        <h1>TRY THE OLX APP</h1>
        <h4>Buy, sell and find just about anything using<br/> the app on your mobile.</h4>
          </div>
        </div>
        <div className='footer'>
        <h5>Other Countries : </h5>
         <a href=''> India
        </a> - <a href=''>South Africa</a> - <a href=''>Indonesia</a>
        <h6>Free Classifieds in Pakistan. © 2006-2021 OLX</h6>
        </div>
      </div>
    </>
  );
};
export default Displ;
