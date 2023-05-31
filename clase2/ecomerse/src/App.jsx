import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import './App.css'
import NavBar from './components/Menu/NavBar';
import { Titulo } from './components/Titulo/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { JsonPlaceHolder } from "./components/Fetch/JsonPlaceHolder";
/* import { CartWidget } from "./components/CartWidget/cartWidget"; */
import { CartContextProvider } from "./context/CartContext";
import { CartContainer } from "./components/CartContainer/CartContainer";
import { Footer } from "./components/Footer/Footer";











function App() {



  return (
    <>
      <CartContextProvider>

        <Router>
          <NavBar />
          <Titulo titulo='App' subTitulo='App' />



          <Routes>

            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/detail/:pid' element={<ItemDetailContainer />} />

            <Route path='/masdetalle' element={<JsonPlaceHolder />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </CartContextProvider>

      <Footer />


    </>

  )
}


export default App


