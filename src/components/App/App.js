import React from 'react';
import './App.css';

//Import components
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
