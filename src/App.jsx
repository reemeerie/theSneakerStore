import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { UserPage } from "./pages/UserPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { CartPage } from "./pages/CartPage";
import { FormPage } from "./pages/FormPage";
import "./App.css";

export function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cart/form" element={<FormPage />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}
