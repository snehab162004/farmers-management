import Navbar from './components/Header/Navbar.jsx';
import Home  from './components/Home/Home.jsx';
import Contact from './components/ContactUs/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ProductsCard from "./components/Products/ProductsCard.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register.jsx';

function App() {
 
  return (
    <BrowserRouter>
      <div> 
        <Navbar />
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductsCard />} />
          <Route path="/register" element={<Register />} />

          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
