import React from 'react';

const MuseumContext = React.createContext({
    museums: [],
    museumsVisible: [],
    dataBounds: () => {},
    mapCenter: '',
    setCenter: () => {}
})

export default MuseumContext