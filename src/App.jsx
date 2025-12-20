import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<CategoryPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
