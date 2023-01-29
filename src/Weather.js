import React, {useState} from 'react';
import "./Weather.css";
import FormattedDate from './FormattedDate';
import axios from "axios";
export default function Weather(){

const [weatherData, setWeatherData]= useState({ready: false});

function handleResponse(response){
  console.log(response.data);
  setWeatherData({
    ready: true,
    temperature: response.data.temperature.current,
    wind:response.data.wind.speed,
    city:response.data.city,
    description:response.data.condition.description,
    humidity:response.data.temperature.humidity,
    icon:response.data.condition.icon,
    date:new Date (response.data.time*1000),




  });

}

if (weatherData.ready){return(<div className="Weather">

    <form>
      <div className="row">
      <div className="col-9">
      <input type="text" placeholder="Enter a city" className="form-control"/>
      </div>
      <div className="col-3">
      <input type="submit" value ="Search" className= " btn btn-light w-100"/>
    
    </div>
    </div>
    </form>
      <div className="row">
    <div className="col-6">
    <h1 className='text-capitalize'>{weatherData.city}</h1>
    
    <ul>
      <li><FormattedDate date ={weatherData.date}/> </li>
      <li className='text-capitalize'>{weatherData.description}</li>
      
            <li >Humidity:{Math.round(weatherData.humidity)}%</li>
            <li >Wind:{Math.round(weatherData.wind)}km/h</li>
          
      </ul>
    </div>
        <div className="col-6">
   
           <h2> {Math.round(weatherData.temperature)}<small className="unit">°C</small></h2>
        
      

          <img src={weatherData.icon} alt="Cloudly"/>
      
        </div>
        
      </div>

    
  </div>)

}else{
  let city="London";
  const apiKey="ac9185d0f8b9a1boc9ba4b9t42303979";
  let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
return "Loading..."
}
}