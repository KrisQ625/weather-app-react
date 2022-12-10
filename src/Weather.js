import React from 'react';
import "./Weather.css";
export default function weather(){
  return(<div className="Weather">

    <form>
      <div className="row">
      <div className="col-9">
      <input type="text" placeholder="Enter a city" className="form-control"/>
      </div>
      <div className="col-3">
      <input type="submit" value ="Search" className= " btn btn-primary"/>
    
    </div>
    </div>
    </form>
    
    <h1>New York</h1>
    <ul>
      <li>wednesday 07:00</li>
      <li>Cloudly</li>
      </ul>
      <div className="rov">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/snow.png" alt="Cloudly"/>
          6°
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 15%</li>
            <li>Humidity:72%</li>
            <li>Wind:30km/h</li>
          </ul>
        </div>
        
      </div>

    
  </div>)
}