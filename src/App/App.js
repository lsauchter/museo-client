import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import MapPage from '../MapPage/MapPage'
import NavBarLanding from '../NavBarLanding/NavBarLanding'
import NavBarSearch from '../NavBarSearch/NavBarSearch'
import MuseumContext from '../MuseumContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPalette, faFlask, faBone, faLeaf, faHippo, faChild, faUniversity, faLandmark } from '@fortawesome/free-solid-svg-icons'
import STORE from '../store'
import './App.css'

function App() {
  const [museums, updateMuseums] = useState(STORE.museums)
  const [museumsVisible, updateMuseumsVisible] = useState([])
  const [mapCenter, updateMapCenter] = useState([-73.87812, 40.85001])
  const [museumResult, updateMuseumResult] = useState({})

  library.add(faPalette, faFlask, faBone, faLeaf, faHippo, faChild, faUniversity, faLandmark)

  function dataBounds (response) {
    const newMuseums = museums.filter(museum => {
      return museum.LONGITUDE >= response[0][0] &&
      museum.LONGITUDE <= response[1][0] &&
      museum.LATITUDE >= response[0][1] &&
      museum.LATITUDE <= response[1][1]
    })
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
