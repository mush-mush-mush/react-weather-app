const Searchbar = ({setQuery, search}) => {
    return (
        <div className="search">
            <input type='text' className='search--bar' placeholder='Search...' onChange={e => setQuery(e.target.value)} onKeyPress={search}></input>
        </div>
    )
}

export default Searchbar
