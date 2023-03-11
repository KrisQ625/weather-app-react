import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function Weatherinfo (props){
  return(  <div className="Weatherinfo">
        <div className="row">
    <div className="col-6">
    <h1 className='text-capitalize'>{props.data.city}</h1>
    
    <ul>
      <li><FormattedDate date ={props.data.date}/> </li>
      <li className='text-capitalize'>{props.data.description}</li>
      
            <li >Humidity:{Math.round(props.data.humidity)}%</li>
            <li >Wind:{Math.round(props.data.wind)}km/h</li>
          
      </ul>
    </div>
        <div className="col-6">
   <WeatherTemperature celsius = {props.data.temperature}/>

          <img  src={props.data.description.iconUrl} alt ={props.data.description}/>
      
        </div>
        
      </div>
      </div>);
}