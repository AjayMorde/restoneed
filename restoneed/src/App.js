import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbars/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './pages/Error';


import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

         
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
