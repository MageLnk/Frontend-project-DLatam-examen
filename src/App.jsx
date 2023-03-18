import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import { Home, Error404 } from "./Pages/";
import Cart from "./Pages/Cart";
import ProductCategory from "./Pages/ProductCategory";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
// Layouts
import { Header, Footer } from "./Layouts/";
// Style
import "./style.css";

// App
const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-category/:category" element={<ProductCategory />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
