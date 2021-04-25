const AddInfoItem = ({attr, val, unit}) => {
    return (
        <div className='addInfo-item'>
            <p className='addInfo-item--text-attr'>{attr}</p>
            <p className='addInfo-item--text-value'>{val} {unit}</p>
        </div>
    )
}

export default AddInfoItem
