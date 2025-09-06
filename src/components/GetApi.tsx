import React, { use, useEffect, useRef, useState } from 'react'
import buscar from '../img/buscar.png'


export const GetApi = () => {


    const [weather,setWeather] = useState<any>(false)
const [getText,setGetText] =useState<string>("")
    
const search = async (city:any)=>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=04308b510bc6871e2f1264ec5e548951`
            
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setWeather({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location:data.name
                
            })
            
        }
        catch(error){
            console.log(error)
        }
    }


     const onInputChange = (e:any)=>{
    const value = e.target.value;
    console.log(value);
    
    setGetText(value);
  }

    useEffect(()=>{
        search(getText)
    })
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

            <h1 className='city'>
                Ciudad: {weather.location}
            </h1>
            <br />
            <h1 className='humidity'>
                Humedad: {weather.humidity}
            </h1>

        </div>
        </>
  )
}

export default GetApi
