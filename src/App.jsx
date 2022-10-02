import { useEffect, useState } from 'react'
import './App.css'
import SerchList from './components/SerchList'
import Location from './components/Location'
import axios from 'axios'
import ResidentInfo from './components/ResidentInfo'

function App() {
  const [location, setLocation] = useState()
  const [searchUrl, setSearchUrl] = useState()
  const [listLocation, setListLocation] = useState()


  const getRamdomId = (num)=>Math.floor(Math.random()*num);
  const handleChange = (event)=>{
    if (event.target.value === '') {
      setSearchUrl()
      setListLocation();
    }else{
      let loc = event.target.value ;
      //console.log(loc);
      axios.get(`https://rickandmortyapi.com/api/location?name=${loc}`)
        .then(res=>setListLocation(res.data.results))
        .catch(err=>console.log(err))
    }
    
  }

  useEffect(()=>{
    setLocation()
    let id = getRamdomId(126);
    if (searchUrl) {
      id = searchUrl;
    }
    
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res=>setLocation(res.data))
      .catch(err=>console.log(err));
    console.log(URL);
  },[searchUrl])

  return (
    <div className="App">
      <SerchList setSearchUrl={setSearchUrl} handleChange={handleChange} listLocation={listLocation} setListLocation={setListLocation}/>
      <div className="container">
        <Location location={location} />

        <div className="cards-charters">
          {
            location?.residents.map((resident)=>(
              <ResidentInfo resident={resident} key={resident.id}/>
            ))
          }
            
        </div>
      </div>
    </div>
  )
}

export default App
