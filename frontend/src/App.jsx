import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Infrastructure from "./pages/Infrastructure";
import WhoWeServe from "./pages/WhoWeServe";
import Contact from "./pages/Contact";

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

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;