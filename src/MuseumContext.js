import React from 'react';

const MuseumContext = React.createContext({
    museums: [],
    museumsVisible: [],
    fetchNewMuseums: () => {},
    dataBounds: () => {},
    mapCenter: '',
    setCenter: () => {},
})

export default MuseumContext