import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetails from "./pages/ProductDetails";
import Infrastructure from "./pages/Infrastructure";
import WhoWeServe from "./pages/WhoWeServe";
import Contact from "./pages/Contact";
import AddProduct from "./pages/AddProduct";

function App() {

    return (

        <BrowserRouter>

            <Header />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/products"
                    element={<Products />}
                />

                <Route
                    path="/products/:category"
                    element={<CategoryProducts />}
                />

                <Route
                    path="/products/:category/:id"
                    element={<ProductDetails />}
                />

                <Route
                    path="/infrastructure"
                    element={<Infrastructure />}
                />

                <Route
                    path="/who-we-serve"
                    element={<WhoWeServe />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/add-product"
                    element={<AddProduct />}
                />

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;