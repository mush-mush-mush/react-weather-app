import React, { useState, useEffect } from 'react';
import AdditionalInfo from './components/AdditionalInfo';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Searchbar from './components/Searchbar';

require('dotenv').config();

const APIKey = process.env.REACT_APP_OW_APIKEY;
const baseURL = process.env.REACT_APP_OW_BASEURL;

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  const [forecast, setForecast] = useState('');
  const [color, setColor] = useState('clear');

  useEffect(() => {
    const getDefaultLocation = async () => {
      const data = await fetch(`${process.env.REACT_APP_IP_BASEURL}${process.env.REACT_APP_IP_APIKEY}`).then(res => res.json())
      fetchWeatherData(data.city)
    }
    getDefaultLocation();

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const search = async evt => {
    if (evt.key === 'Enter') {
      fetchWeatherData();
    }
  }

  const fetchWeatherData = async (city = query) => {
    try {
      let [weather, forecast] = await Promise.all([
        fetch(`${baseURL}weather?q=${city}&units=metric&APPID=${APIKey}`),
        fetch(`${baseURL}forecast?q=${city}&cnt=3&units=metric&appid=${APIKey}`)
      ])

      weather = await weather.json();
      forecast = await forecast.json();

      setWeather(weather);
      setForecast(forecast);
      setWeatherColor();
    }
    catch (err) {
      console.log(err);
    };
  }

  const setWeatherColor = () => {
    if (weather.weather[0].id >= 200) setColor('thunder');
    if (weather.weather[0].id >= 300) setColor('drizzle');
    if (weather.weather[0].id >= 500) setColor('rain');
    if (weather.weather[0].id >= 600) setColor('snow');
    if (weather.weather[0].id >= 700) setColor('atmosphere');
    if (weather.weather[0].id === 800) setColor('sunny');
    if (weather.weather[0].id === 800 && weather.weather[0].icon === '01n') setColor('sunny-night');
    if (weather.weather[0].id >= 801) setColor('clear');
  }

  const getDate = (d, opt = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit'
  }) => {
    const locale = navigator.language;
    const options = opt;

    return new Intl.DateTimeFormat(locale, options).format(d);
  }

  return (
    <div className='app'>
      <main className='container'>
        <div className={`column--left ${color}`}>
          <Searchbar setQuery={setQuery} search={search} />
          {typeof weather.main !== "undefined" ? (
            <CurrentWeather city={weather.name} country={weather.sys.country} date={getDate(new Date())} icon={weather.weather[0].icon} temp={weather.main.temp} weather={weather.weather[0].main} />
          ) : ('')}
        </div>
        <div className='column--right'>
          {typeof forecast.list !== "undefined" ? (
            <>
              <Forecast weather={weather} forecast={forecast} getDate={getDate}/>
              <AdditionalInfo weather={weather} getDate={getDate} />
              <p className='timezone'>Current timezone {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
              <a href='https://github.com/mush-mush-mush' className='me'>@mush-mush-mush</a>
            </>
          ) : ('')}
        </div>
      </main>
    </div>
  );
}

export default App;
