const CurrentWeather = ({city, country, date, icon, temp, weather}) => {
    return (
        <div className='current-weather'>
            <h2 className='current-weather--location'>{city}, {country}</h2>
            <p className='current-weather--date'>{date}</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}alt='' className='current-weather--icon' />
            <h1 className='current-weather--temp'>{temp}°C</h1>
            <h2 className='current-weather--weather'>{weather}</h2>
        </div>
    )
}

export default CurrentWeather
