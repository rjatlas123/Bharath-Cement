
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About'; // Importing the About component
import Product from './components/Product';
import Brand from './components/Brand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/Chatbot';

function App() {
  return (
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
  );
}

export default App;
