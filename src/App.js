import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbars/Navbar';
import About from './pages/About';
import Login from './pages/Login';
import Product from './pages/Product';
import Home from './pages/Home';
import Services from './pages/Services';
import Signup from './pages/Signup';
import Error from './pages/Error';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="*" element={<Error/>} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;