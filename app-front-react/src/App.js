// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Posts" element={<Posts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
