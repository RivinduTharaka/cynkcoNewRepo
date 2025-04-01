import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Support from "./pages/Support/Support";
import Partner from "./pages/Partner/Partner";
import Products from "./pages/Products/Catergory/Catergory";
import SubProducts from "./pages/Products/SubProducts/SubProducts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categorySlug" element={<SubProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
