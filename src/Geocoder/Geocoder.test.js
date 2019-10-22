import React from 'react';
import ReactDOM from 'react-dom';
import Geocoder from './Geocoder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Geocoder accessToken='123' onSelect={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});