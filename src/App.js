import React, { useState } from 'react';
import './App.css';

const api = {
  key : "97f4e26f45b966b271379f6e0620011b",
  base : "https://api.openweaathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt =>{
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);  
        setQuery('');
        console.log(result);
      });
    }
  }


  const dateBuilder = (d) =>{
    let months = ["January","February","March","April","May","June","July","August",
  "September", "October","November","December"];

  let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${date} ${month}, ${year} (${day})`
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input className="search-bar" type="text" placeholder="Enter Location" />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            10* C 
          </div>
          <div className="weather">
            Sunny 
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
