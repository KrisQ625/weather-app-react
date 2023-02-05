import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo (props){
  return(  <div className="Weatherinfo">
        <div className="row">
    <div className="col-6">
    <h1 className='text-capitalize'>{props.data.city}</h1>
    
    <ul>
      <li><FormattedDate date ={props.data.date}/> </li>
      <li className='text-capitalize'>{weatherData.description}</li>
      
            <li >Humidity:{Math.round(props.data.humidity)}%</li>
            <li >Wind:{Math.round(props.data.wind)}km/h</li>
          
      </ul>
    </div>
        <div className="col-6">
   
           <h2> {Math.round(props.data.temperature)}<small className="unit">°C</small></h2>
        
      

          <img src={props.data.icon} alt={props.data.description}/>
      
        </div>
        
      </div>
      </div>)
}