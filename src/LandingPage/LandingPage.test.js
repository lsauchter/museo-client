import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import LandingPage from './LandingPage';

library.add(faLocationArrow)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><LandingPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});