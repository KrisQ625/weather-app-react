import React, {useState} from 'react';
import "./Weather.css";
import axios from "axios";

export default function Weather(){
const [ready,setReady]= useState(false);
const [temperature, setTemperature]= useState(null);

function handleResponse(response){
  console.log(response.data);
  setTemperature(response.data.temperature.current);
  setReady(true);
}

if (ready){return(<div className="Weather">

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
    <h1>London</h1>
    
    <ul>
      <li>Wednesday 07:00</li>
      <li>Cloudly</li>
       <li>Percipitation: 15%</li>
            <li>Humidity:72%</li>
            <li>Wind:30km/h</li>
          
      </ul>
    </div>
        <div className="col-6">
   
           <h2> {Math.round(temperature)}<small className="unit">°C</small></h2>
        
      

          <img src="https://ssl.gstatic.com/onebox/weather/64/snow.png" alt="Cloudly"/>
      
        </div>
        
      </div>

    
  </div>)

}else{
  let city="Pula";
  const apiKey="ac9185d0f8b9a1boc9ba4b9t42303979";
  let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
return "Loading..."
}
}