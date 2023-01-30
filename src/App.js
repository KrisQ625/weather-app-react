import React from 'react';
import './App.css';
import Weather from "./Weather";
function App() {
  return (<div className='App'>
<div className='container'>
  <Weather/>
  <footer> This project was created by Kristina Vujnovac and is {""}
    <a href="https://github.com/KrisQ625/weather-app-react" target="_blank" rel=" noopener noreferrer">open sourced</a>
  </footer>
  </div>
  </div>
 
  );
}

export default App;
