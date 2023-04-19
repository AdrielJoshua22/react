import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css'
import NavBar from './components/Menu/NavBar';
import { Formulario } from './components/Formulario/Formulario'
import { Titulo } from './components/Titulo/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget/CartWidget';
import { Contador } from './components/Contador/Contador';
import { Categorias } from './components/Categorias/Categorias';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { JsonPlaceHolder } from "./components/Fetch/JsonPlaceHolder";



function App() {



  return (
    <div className="appp">
      <NavBar />
      <Titulo titulo='App' subTitulo='App' />
      {/* <Formulario/> */}
      <Contador stock={10} inicial={1} />
      <Categorias />
      <ItemListContainer />
      <ItemDetailContainer />
      <JsonPlaceHolder/>
    </div>

  )
}


export default App


