import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Product from './components/Product';
import Brand from './components/Brand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ChatBot />
        <Home />
        <About />
        <Services />
        <Product />
        <Brand />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
