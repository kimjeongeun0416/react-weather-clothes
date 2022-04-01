import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './components/Template/Template';
import Weather from './components/Weather/Weather';
import Clothes from './components/Clothes/Clothes';

function App(props) {

  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '985d94fb8f09b152b11f22b5a174090e';
  
  const [currentWeathers, setCurrentWeathers] = useState([]);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [status, setStatus] = useState();
  const [weather, setWeather] = useState();

 // Geolocation으로 현재 위치의 위/경도 알아오기
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported no your browser');
    } else {
      setStatus('Location...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus();
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  
  useEffect(() => {
      getLocation();
      //let currentWeather = `${API_URL}?q=incheon&appid=${API_KEY}&units=metric`;
      const currentWeather = `${API_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric&lang=kr`;

      if (lat && long ) {
        fetch(currentWeather)
            .then(response => response.json())
            .then(response => {
                const weathers = response.weather[response.weather.length - 1];
                setCurrentWeathers(response);
                setWeather(weathers.description);
            })
        }

  }, [lat,long]);

  return (
    <Template>
      <Weather 
        place = {currentWeathers.name}
        temperature = {currentWeathers.main?.temp}  
        feelTemp = {currentWeathers.main?.feels_like}
        minTemp = {currentWeathers.main?.temp_min}
        maxTemp = {currentWeathers.main?.temp_max}
        weatherDesc = {weather}
      />
      <Clothes 
        currentTemp = {currentWeathers.main?.temp}
      />
    </Template>
  );
}

export default App;
