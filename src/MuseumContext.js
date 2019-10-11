import React from 'react';

const MuseumContext = React.createContext({
    museums: [],
    viewport: {},
    setViewport: () => {}
})

export default MuseumContext