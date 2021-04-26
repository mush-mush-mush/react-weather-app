import ArrowUp from './../assets/arrow.png';
import WeatherIcon from './../assets/weather-2.png';

const Alert = () => {
    return (
        <div className='alert'>
            <img src={ArrowUp} alt='' className='alert--arrow'></img>
            <h3 className='alert--text'>Search location up here</h3>
            <img src={WeatherIcon} alt='' className='alert--icon'></img>
        </div>
    )
}

export default Alert
