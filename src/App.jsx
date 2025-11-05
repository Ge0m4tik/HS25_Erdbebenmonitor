import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";

import { useState, useEffect } from "react";

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [info, setInfo] = useState({}); // react hooks
  const [size, setSize] = useState(4);
  const [quake, setQuake] = useState();
  const [mag, setMag] = useState("4.5");
  const [time, setTime] = useState("week");

  useEffect(
    () => {
      fetch(
        `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${mag}_${time}.geojson`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((res) => setQuake(res))
        .catch((err) => console.error("Feth failed:", err));
    },
    [mag, time] // Abhängigkeitsliste
  );

  // hier unten mit Props übergeben an Kinder
  return (
    <div className="app">
      <Header mag={mag} setMag={setMag} time={time} setTime={setTime} />
      <Sidebar info={info} size={size} setSize={setSize}></Sidebar>
      <div className="mainArea">
        <Map size={size} setInfo={setInfo} quake={quake}></Map>
      </div>
    </div>
  );
}
export default App;
