const ForeacstInfo = ({day, min, max}) => {
    return (
        <div className='forecast-container'>
            <h3 className='forecast--text'>{day}</h3>
            <h3 className='forecast--text'>{max}°C / {min}°C</h3>
        </div>
    )
}

export default ForeacstInfo
