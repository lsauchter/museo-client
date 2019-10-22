import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import MapFilters from './MapFilters';

library.add(faLocationArrow)

it('renders without crashing', () => {
  const div = document.createElement('div');
  const museums = [
    {mid: 8403601669,
        commonname:	'BRONX ZOO',
        phone:	7183671010,
        weburl:	'HTTP://BRONXZOO.COM/',
        discipl: 'ZAW',
        longitude: -73.87812,
        latitude: 40.85001,
        gstreet: '2300 SOUTHERN BLVD',
        gcity: 'BRONX',
        gstate:	'NY',
        gzip5: '10460'
    },
    {mid: 8403602023,
        commonname:	"BRONX CHILDREN'S MUSEUM",
        phone:	3479712155,
        weburl: null,
        discipl: 'NAT',
        longitude: -73.92117,
        latitude: 40.82454,
        gstreet: 'PO BOX 1381',
        gcity: 'BRONX',
        gstate:	'NY',
        gzip5: '10451'
    },
    ]
  const filters = {
        ART: true,
        CMU: true,
        BOT: true,
        GMU: true,
        HST: true,
        HSC: true,
        NAT: true,
        SCI: true,
        ZAW: true
    }
  ReactDOM.render(<MapFilters filter={filters} setFilters={() => {}} handleFilterMenu={() => {}} filterMenu={false}/>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});