import { useState } from 'react'

import './App.css'
import NavBar from './components/Menu/NavBar';
import { Formulario } from './components/Formulario/Formulario'
import { Titulo } from './components/Titulo/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget/CartWidget';
import { Contador } from './components/Contador/Contador';
import { Categorias } from './components/Categorias/Categorias';

function App() {

  

  return (
    <div className="App" >
      <NavBar/>
      <Titulo titulo='App' subTitulo='App'/>
      {/* <Formulario/> */}
      <Contador stock = {10} inicial = {1}  />
      <Categorias/>
    </div>
  )
}


export default App

