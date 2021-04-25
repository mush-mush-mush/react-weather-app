import React, { useState } from 'react';

const APIKey = '3f3eb6c14713b6b1786ade42ba35b801';
const baseURL = 'http://api.openweathermap.org/data/2.5/'

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${baseURL}weather?q=${query}&units=metric&APPID=${APIKey}`).then(res => res.json()).then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      })
    }
  }

  const dateBuilder = (d) => {
    const locale = navigator.language;
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
    }

    return new Intl.DateTimeFormat(locale, options).format(d);
  }

  return (
    <div className='App'>
      <main className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 'warm' : '') : ''}>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search ...' onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}></input>
        </div>
        {typeof weather.main != "undefined" ? (
          <>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>{Math.round(weather.main.temp)}°c</div>
              <div className='weather'>{weather.weather[0].description}</div>
            </div>
          </>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
