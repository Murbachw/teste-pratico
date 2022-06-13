import React from "react";
import './app.css'
import BarChart from "./components/BarChart";
import ScatterCharts from "./components/ScatterCharts";
import Home from "./components/Home";
import NavBar from "./components/NavBar";


function App() {
  return <div>
    <NavBar/>
    <Home/>
    <div className="graficos">
        <BarChart/>
        <ScatterCharts/>
    </div>
  </div>
}

export default App;
