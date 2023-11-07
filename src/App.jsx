import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import ProductInfo from "./pages/ProductInfo";
import Basket from "./pages/basket";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Registration from "./pages/Login/Registration";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/Scroll Restoration/ScrollToTop";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkLists, setCheckLists] = useState([]);

  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <TopNavigationBar cart={cart} products={products} setProducts={setProducts}/>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              setProducts={setProducts}
              convertPrice={convertPrice}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductInfo
              convertPrice={convertPrice}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Basket
              cart={cart}
              setCart={setCart}
              convertPrice={convertPrice}
              checkLists={checkLists}
              setCheckLists={setCheckLists}
            />
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
