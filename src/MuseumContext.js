import React from "react";

const MuseumContext = React.createContext({
  museums: [],
  museumsVisible: [],
  fetchNewMuseums: () => {},
  dataBounds: () => {},
  mapCenter: "",
  setCenter: () => {},
  setError: () => {}
});

export default MuseumContext;
