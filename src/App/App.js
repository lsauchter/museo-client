import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import MapPage from '../MapPage/MapPage'
import NavBarLanding from '../NavBarLanding/NavBarLanding'
import NavBarSearch from '../NavBarSearch/NavBarSearch'
import MuseumContext from '../MuseumContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPalette, faFlask, faBone, faLeaf, faHippo, faChild, faUniversity, faLandmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import STORE from '../store'
import './App.css'

function App() {
  const [museums, updateMuseums] = useState(STORE.museums)
  const [museumsVisible, updateMuseumsVisible] = useState([])
  const [mapCenter, updateMapCenter] = useState([-73.87812, 40.85001])
  const [museumResult, updateMuseumResult] = useState({})

  library.add(faPalette, faFlask, faBone, faLeaf, faHippo, faChild, faUniversity, faLandmark, faCheck)

  function fetchNewMuseums (oldBounds, newBounds) {
    const coords = {}
    if (oldBounds._sw.lng > newBounds._sw.lng) {
      coords.longitude = [oldBounds._sw.lng, newBounds._sw.lng]
    }
    else {
      coords.longitude = [oldBounds._ne.lng, newBounds._ne.lng]
    }
    if (oldBounds._sw.lat  > newBounds._sw.lat) {
      coords.latitude = [oldBounds._sw.lat, newBounds._sw.lat]
    }
    else {
      coords.latitude = [oldBounds._ne.lat, newBounds._ne.lat]
    }
    console.log(coords)
    //fetch data from API that falls between the coordinates in the object above
    //add data from fetch to museums state and museumsVisible
  }

  //fetches museums according to searchForm result//
  function dataBounds (response) {
    const newMuseums = museums.filter(museum => {
      return museum.LONGITUDE >= response[0][0] &&
      museum.LONGITUDE <= response[1][0] &&
      museum.LATITUDE >= response[0][1] &&
      museum.LATITUDE <= response[1][1]
    })
    //fetch data from API that falls between the coordinates in response
    //add data to museums state
    updateMuseumsVisible(newMuseums)
  }

  function setCenter(center) {
    updateMapCenter(center)
  }

  function setMuseumResult(museum) {
    updateMuseumResult(museum)
  }

  function renderNavRoutes() {
    return (
    <Switch>
      <Route
        path="/map"
        component={NavBarSearch}
      />
      <Route
        path="/"
        component={NavBarLanding}
      />
    </Switch>
  )}

  function renderMainRoutes() {
    return (
    <Switch>
      <Route
        exact path="/"
        component={LandingPage}
      />
      <Route
        path="/map"
        component={MapPage}
      />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  )}

  const MuseumContextValue = {
    museums,
    museumsVisible,
    fetchNewMuseums,
    dataBounds,
    mapCenter,
    setCenter,
    museumResult,
    setMuseumResult
  }

  return (
    <MuseumContext.Provider value={MuseumContextValue}>
      <div className="App">
        <header role="banner">
          {renderNavRoutes()}
        </header>
        <main role="main">
          {renderMainRoutes()}
        </main>
      </div>
    </MuseumContext.Provider>
  );
}

export default App;
