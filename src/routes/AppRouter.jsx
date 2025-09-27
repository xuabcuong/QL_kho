import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import NotFound from "../pages/NotFound";
import ProductStats from "../pages/Chart";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="*" element={<NotFound />} />
      <Route path="chart" element={<ProductStats />} />
    </Routes>
  );
}
