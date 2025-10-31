import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";

import { useState } from "react";

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [info, setInfo] = useState({}); // react hook
  const [size, setSize] = useState(4);
  console.log(info);
  return (
    <div className="app">
      <Header />
      <Sidebar info={info} size={size} setSize={setSize}></Sidebar>
      <div className="mainArea">
        <Map setInfo={setInfo} size={size}></Map>
      </div>
    </div>
  );
}
export default App;
