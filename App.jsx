import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Products from "./components/Product";
import Footer from "./components/Footer";
import "./styles.css";

function Home() {
  return (
    <>
      <Banner />
      <Footer />
    </>
  );
}

function Offers() {
  return (
    <div className="page">
      <h1>Offers</h1>
      <p>Check out our latest offers!</p>
      <ul>
        <li>10% off on all products</li>
        <li>Free shipping on orders over ₹500</li>
        <li>Buy one get one free on select items</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Get in touch with us!</p>
      <p>Email: info@ecomos.com</p>
      <p>Phone: +91 12345 67890</p>
      <p>Address: 123 Main Street, City, State, India</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
