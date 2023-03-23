import { Route } from "react-router";
import { Routes } from "react-router-dom";
import CartDetails from "./pages/CartDetails";
import Home from "./pages/Home";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/carrinho" element={<CartDetails />}  />
        </Routes>    
    )
}