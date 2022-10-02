import React from 'react'

const SerchList = ({ setSearchUrl, handleChange, listLocation, setListLocation }) => {

    const getIdEarth = (e) => {
        e.preventDefault();
        let id = e.target.searchInput.value
        setSearchUrl(id);
        document.getElementById("searchInput").value="";
        setListLocation();
    }

    const getLocationEarth = id =>{
        //console.log(id);
        setSearchUrl(id);
        document.getElementById("searchInput").value="";
        setListLocation();
    }

   
    return (
        <div id='search' className='search-container'>
            <div className="form-container">
                <form id='serchForm' onSubmit={getIdEarth}>
                    <input className='form-control' type="text" id='searchInput' onChange={handleChange} placeholder='Enter to Id or the name of planet'  autoComplete='off'/>
                    <button className='btn-primary'>Search</button>
                </form>
                <div className="list-container">
                    <ul className='location-list'>
                        {
                            listLocation?.map((location) => (
                                <li key={location.id}>
                                    <p onClick={()=>getLocationEarth(location.id)}>
                                        {location.name}
                                    </p>
                                </li>
                            ))
                        }


                    </ul>
                </div>

            </div>

        </div>
    )
}

export default SerchList