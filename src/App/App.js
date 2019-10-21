import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import MapPage from '../MapPage/MapPage'
import NavBarLanding from '../NavBarLanding/NavBarLanding'
import NavBarSearch from '../NavBarSearch/NavBarSearch'
import MuseumContext from '../MuseumContext'
import config from '../config'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPalette, faFlask, faBone, faLeaf, faHippo, faChild, faUniversity, faLandmark, faCheck, faLocationArrow, faTimes } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {
  const [museums, updateMuseums] = useState([])
  const [mapCenter, updateMapCenter] = useState([-73.87812, 40.85001])
  const [museumResult, updateMuseumResult] = useState({})

  library.add(faPalette, faFlask, faBone, faLeaf, faHippo, faChild, faUniversity, faLandmark, faCheck, faLocationArrow, faTimes)

  //sets coordinates according to map viewport bounds//
  function fetchNewMuseums (bounds) {
    const coords = {
      longitude: [bounds._sw.lng, bounds._ne.lng],
      latitude: [bounds._sw.lat, bounds._ne.lat]
    }
    fetchMuseums(coords)
  }

  //sets coordinates according to searchForm result//
  function dataBounds (response) {
    const coords = {
      latitude: [response[0][1], response[1][1]],
      longitude: [response[0][0], response[1][0]]
    }
    fetchMuseums(coords)
  }

  function fetchMuseums(coords) {
    const {latitude, longitude} = coords

    const url = config.API_ENDPOINT + `?latitude=${latitude[0]}&latitude=${latitude[1]}&longitude=${longitude[0]}&longitude=${longitude[1]}`

    fetch(url, {
      method: 'Get'
    })
    .then(response => {
      if (!response.ok) {
          return response.json().then(error => {throw error})
      }
      return response.json()
    })
    .then(responseJSON => {
      updateMuseums([...responseJSON])
    })
    .catch(error => {
      console.log(error.message)
    })
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
