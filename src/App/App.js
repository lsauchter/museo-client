import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import MapPage from '../MapPage/MapPage'
import NavBarLanding from '../NavBarLanding/NavBarLanding'
import NavBarSearch from '../NavBarSearch/NavBarSearch'
import MuseumContext from '../MuseumContext'
import STORE from '../store'
import './App.css'

function App() {
  const [museums, updateMuseums] = useState(STORE.museums)
  const [viewport, updateViewport] = useState({longitude: -73.979963592639, latitude: 40.69785125988064, zoom: 0.2762671360498489})

  function setViewport (response) {
    const {longitude, latitude, zoom} = response
    updateViewport({longitude, latitude, zoom})
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
    viewport,
    setViewport
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
