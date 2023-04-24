import { BrowserRouter as Router, Routes, Route, Navigate,  } from "react-router-dom";

import './App.css'
import NavBar from './components/Menu/NavBar';

import { Titulo } from './components/Titulo/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';
/* import CartWidget from './components/CartWidget/CartWidget';
import { Contador } from './components/Contador/Contador';
import { Categorias } from './components/Categorias/Categorias'; */
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { JsonPlaceHolder } from "./components/Fetch/JsonPlaceHolder";
import CartWidget from "./components/CartWidget/CartWidget";
 

function App() {



  return (
    <>
    <Router>
      <NavBar/>
      <Titulo titulo='App' subTitulo='App' />

      <Routes>

        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer />} />
        <Route path='/cart' elemeont={<CartWidget />} />
        <Route path='/detail/:pid' element={<ItemDetailContainer />} />

        <Route path='/masdetalle' element={<JsonPlaceHolder />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>


    </Router>
    </>

  )
}


export default App


