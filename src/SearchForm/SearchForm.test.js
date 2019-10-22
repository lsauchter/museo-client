import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import MuseumContext from '../MuseumContext'
import SearchForm from './SearchForm';

library.add(faLocationArrow)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <MuseumContext.Provider value={{dataBounds: () => {}, setCenter: () => {}}}>
        <SearchForm />
    </MuseumContext.Provider>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});