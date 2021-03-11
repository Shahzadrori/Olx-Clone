import React from "react";
import Card from "./Card";
import Datas from "./Datas";
import "../../Style/lowercontent/Displ.css";
import { connect } from "react-redux";
import { Search } from "../../Redux/Action";

const Displ = (props) => {
  function ncards(value,index) {
   if(checkExistance(value.text)){
    return (
      <Card
        key={index}
        id={index}
        imgsrcs={value.imgsrcs}
        hrefs={value.hrefs}
        text={value.text}
        price={value.price}
      />
    );
    // return null;
   }
   return null;
  }
  function checkExistance(cardText){
    return cardText.indexOf(props.card_text) > -1;
  }
  // console.log(props.card_text)
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
const mapstates=(state)=>{
  console.log(state);
  const car_val = state.InpReducer.carditem;
  // console.log(car_val);
  return{
    card_text: car_val
  }
  
}
export default connect(mapstates,null)(Displ)
// export default Displ;
