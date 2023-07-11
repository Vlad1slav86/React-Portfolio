//import logo from './logo.svg';
import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';





function App() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Content />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};


export default App;
