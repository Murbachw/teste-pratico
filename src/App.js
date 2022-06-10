import React from "react";
import './app.css'
import BarChart from "./components/BarChart"; 
import ScatterCharts from "./components/ScatterCharts";
import NavBar from "./components/NavBar";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';

function App() {
  return <div>
    <NavBar/>
    <div className="header">
      <h1>Dashboard</h1>
      <p>Desafio Técnico Frontend</p>
      <Button className="filtro" variant="contained"><FilterAltIcon/>Filtrar</Button>
    </div>
    <div className="graficos">
        <BarChart/>
        <ScatterCharts />
    </div>
  </div>
}

export default App;
