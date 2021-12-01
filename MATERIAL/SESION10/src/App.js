import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Jugadores } from './components/Jugadores';
import { Comentarios } from './components/Comentarios';
import {BrowserRoute,Routes, Route, BrowserRouter } from "react-router-dom";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   // <Fragment>
     // <Jugadores />
     // <Comentarios/>
    //</Fragment>

    <BrowserRouter>
    <Routes>
      <route path ="/" element={<Jugadores/>} />
      <route path ="/Listado" element={<ListadoJugadores/>} />
      <route path ="/Comentarios" element={<Comentarios/>} />


    </Routes> 
    
    </BrowserRouter>
    
    
  );
}

export default App;
