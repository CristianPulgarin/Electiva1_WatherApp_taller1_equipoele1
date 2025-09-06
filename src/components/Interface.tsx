import React, { useState } from 'react'
import buscar from '../img/buscar.png'
export const Interface = () => {
    const [getText,setGetText] =useState<string>("")
  
   const onInputChange = (e:any)=>{
    const value = e.target.value;
    console.log(value);
    
    setGetText(value);
  }
  
    return (

   

    <>
      <h1 className='titulo'>WEATHER APP</h1>
        
        <div className="container">
        <input 
        type="text"
        value={getText}
        onChange={onInputChange}
        className='input'
         />
         
         <button
         className='btn_search'
         >
            <img src={buscar} 
            width={'25px'}
            height={'25px'}
            className='img_btn'
            alt="" />
         </button>
         </div>


        <div className="container_info">

            

        </div>

    </>
  )
}
