import AddInfoItem from './AddInfoItem';

const AdditionalInfo = ({weather, getDate}) => {
    return (
        <div className='addInfo'>
            <h3 className='addInfo--header'>Additional Info</h3>
            <div className='addInfo--container'>
              <AddInfoItem attr='Wind' val={weather.wind.speed} unit='m/s' />
              <AddInfoItem attr='Humdity' val={weather.main.humidity} unit='%' />
              <AddInfoItem attr='Visibility' val={weather.visibility} unit='m' />
              <AddInfoItem attr='Pressure' val={weather.main.pressure} unit='hPa' />
              <AddInfoItem attr='Sunrise' val={getDate(weather.sys.sunrise * 1000, { hour: '2-digit', minute: '2-digit' })} unit='' />
              <AddInfoItem attr='Sunset' val={getDate(weather.sys.sunset * 1000, { hour: '2-digit', minute: '2-digit' })} unit='' />
            </div>
          </div>
    )
}

export default AdditionalInfo
