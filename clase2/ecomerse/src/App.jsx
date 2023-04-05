import { useState } from 'react'

import './App.css'
import NavBar from './components/Menu/NavBar';
import { Formulario } from './components/Formulario/Formulario'
import { Titulo } from './components/Titulo/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget/CartWidget';

function App() {

  

  return (
    <div className="App" >
      <NavBar/>
      <Titulo titulo='App' subTitulo='App'/>
      <Formulario/>
    </div>
  )
}


export default App

