import React from 'react';
import '../../Style/Search/card.css'
const Cards=(prep)=>{
    return(
        <>
         <div className='outerss hide' id='disply'  >
             <div className='wraper'>
                 <div className='imagess'>
                     <img src={prep.imgsrc}/>

                 </div>
                 <div className='info'>
                     <h3>{prep.text}</h3>
                     <p>{prep.price}</p>
                 </div>
             </div>
         </div>
        </>
    )
}

export default Cards;