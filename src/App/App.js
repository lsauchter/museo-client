import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import MapPage from '../MapPage/MapPage'
import NavBarLanding from '../NavBarLanding/NavBarLanding'
import NavBarSearch from '../NavBarSearch/NavBarSearch'
import './App.css'

function App() {
  function renderNavRoutes() {
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
  }

  function renderMainRoutes() {
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
  }

  return (
    <div className="App">
      <header role="header">
        {renderNavRoutes()}
      </header>
      <main role="main">
        {renderMainRoutes()}
      </main>
    </div>
  );
}

export default App;
