import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import './globals.css';

//Stateless Global Component to render all others
function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
