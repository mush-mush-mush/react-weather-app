import { useState, useEffect } from "react";

const ForecastBox = ({ time, temp, icon, id }) => {
    const [color, setColor] = useState('clear');

    useEffect(() => {
        if (id >= 200) setColor('thunder');
        if (id >= 300) setColor('drizzle');
        if (id >= 500) setColor('rain');
        if (id >= 600) setColor('snow');
        if (id >= 700) setColor('atmosphere');
        if (id === 800 && icon === '01d') setColor('sunny');
        if (id === 800 && icon === '01n') setColor('sunny-night');
        if (id >= 801) setColor('clear');
    }, [id, icon])

    return (
        <div className={`forecast-box ${color}`}>
            <p className='forecast-box--text'>{time}</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            <p className='forecast-box--text'>{temp}°C</p>
        </div>
    )
}

export default ForecastBox
