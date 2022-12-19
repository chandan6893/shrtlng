import React, { useState, createContext } from "react";

const fecthedData = createContext();

function Context(props) {
  const [mapData, setMapData] = useState([
    "shopping in barcelona",
    "480",
    "0",
    "0.24",
    "0.12",
    "313000000",
    "0.21,0.21,0.21,0.14,0.21,0.39,0.59,0.48,1.00,0.88,0.88,0.59",
    "46",
  ]);

  return (
    <fecthedData.Provider value={{ mapData, setMapData }}>
      {props.children}
    </fecthedData.Provider>
  );
}

export default Context;
export { fecthedData };
