import './App.css';
import Cart from './Componets/Cart';
import CartContextProvider from './Componets/CartContext';
import Checkout from './Componets/Checkout';
import Footer from './Componets/Footer';
import Gracias from './Componets/Gracias';
import Header from './Componets/Header';
import Error from './Componets/Error';
import ItemDetailContainer from './Componets/ItemDetailContainer';
import ItemListContainer from './Componets/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/Cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/gracias/:orderId"} element={<Gracias />} />
          <Route path={"/*"} element={<Error />} />
          </Routes>
        <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
