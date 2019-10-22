import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import NavBarLanding from './NavBarLanding';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><NavBarLanding /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
