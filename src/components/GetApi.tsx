import React, { use, useEffect, useRef, useState } from 'react'
import buscar from '../img/buscar.png'
import clima from '../img/clima.png'

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
                location:data.name,
                weather: data.weather[0].main
                
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

  const onButtonClick = async (_e:any) =>{
  if (getText.trim() !== "") {
    search(getText); 
  }
  }

   
  return (
    <>
    <br />
    <h1 className='titulo'>WEATHER APP</h1>
        
        <div className="container">
        <input 
        placeholder='Ingresa la ciudad'
        type="text"
        value={getText}
        onChange={onInputChange}
        className='input'
         />

         <button className='btn_search'>
             <img src={buscar}
             width={'30px'}
             height={'30px'}
             alt="" 
             onClick={onButtonClick}
             />
             
         </button>
         
         
         </div>


        <div className="container_info">

            <h1 className='city'>
                Ciudad: {weather.location}
            </h1>
            <img 
            className='img_clima'
            src={clima}
            width={'100px'}

            />
            <br />
            <h1 className='humidity'>
                Humedad: {weather.humidity}%
            </h1>
            <h1 className='temp'>
                Temperatura: {weather.temperature}°
            </h1>
            <h1 className='clim'>
                Clima: {weather.weather}
            </h1>
        </div>
        </>
  )
}

export default GetApi
