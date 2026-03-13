
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import Checkout from "./pages/Checkout"
import OrderSuccess from "./pages/OrderSuccess"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
