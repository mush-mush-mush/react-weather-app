import ForeacstInfo from './ForeacstInfo';
import ForecastBox from './ForecastBox';

const Forecast = ({weather, forecast, getDate}) => {
    return (
        <div className='forecast'>
            <h3 className='forecast--header'>Daily Forecast</h3>
            <ForeacstInfo day={getDate(new Date(), { weekday: 'long' })} min={weather.main.temp_min} max={weather.main.temp_max} />
            <div className='forecast-container'>
              <ForecastBox time={getDate(forecast.list[0].dt * 1000, { hour: '2-digit', minute: '2-digit' })} icon={forecast.list[0].weather[0].icon} temp={forecast.list[0].main.temp} id={forecast.list[0].weather[0].id} />
              <ForecastBox time={getDate(forecast.list[1].dt * 1000, { hour: '2-digit', minute: '2-digit' })} icon={forecast.list[1].weather[0].icon} temp={forecast.list[1].main.temp} id={forecast.list[1].weather[0].id} />
              <ForecastBox time={getDate(forecast.list[2].dt * 1000, { hour: '2-digit', minute: '2-digit' })} icon={forecast.list[2].weather[0].icon} temp={forecast.list[2].main.temp} id={forecast.list[2].weather[0].id} />
            </div>
          </div>
    )
}

export default Forecast
