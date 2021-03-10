import React from 'react';
import Data from "../Content/Data";
import Card from '../Content/Card';
import Cards from './Card';
const SearchDisplay=()=>{
   function ncardes(value,index){
    console.log(value);
     return (
         <>
             <Cards 
            key={index}
            id={index}
            href={value.href}
            imgsrc={value.imgsrc}
            price={value.price}
            text={value.text}
             />
         </>
     )
   }

    return(
        <>
        {Data.map(ncardes)}
        </>
    )
    
}

export default SearchDisplay;