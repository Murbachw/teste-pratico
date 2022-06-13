import React from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';

export function Home() {
    return (
        <div className="header">
        <h1>Dashboard</h1>
        <p>Desafio Técnico Frontend</p>
        <Button className="filtro" variant="contained"><FilterAltIcon/>Filtrar</Button>
      </div>
    );
  } 

export default Home;