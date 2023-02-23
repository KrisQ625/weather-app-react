import React, {useState} from "react";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";
export default function Weather(props){

const [weatherData, setWeatherData]= useState({ready: false});
const [city, setCity]= useState(props.defaultCity);

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

function search(){const apiKey="ac9185d0f8b9a1boc9ba4b9t42303979";
  let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

}

function handleSubmit(event){
  event.preventDefault();
  search();
}
function handleCityChange(event){
  setCity(event.target.value);

}

if (weatherData.ready){return(<div className="Weather">

    <form on onSubmit={handleSubmit}>
      <div className="row">
      <div className="col-9">
      <input type="text" placeholder="Enter a city" className="form-control" onChange={handleCityChange}/>
      </div>
      <div className="col-3">
      <input type="submit" value ="Search" className= " btn btn-light w-100"/>
    
    </div>
    </div>
    </form>
    <Weatherinfo data={weatherData}/>


    
  </div>
  );

}else{

search();
return "Loading..."
}
}