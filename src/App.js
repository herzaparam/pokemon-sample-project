import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import List from './pages/List';
import CatchPage from './pages/CatchPage';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { pokemonContext } from './helper/context';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [owned, setOwned] = useState([]);

  return (
    <pokemonContext.Provider value={{ pokemon, setPokemon, owned, setOwned }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon-details/:name" element={<Details />} />
          <Route path="/pokemon-details/:name/catch" element={<CatchPage />} />
          <Route path="/my-pokemon-list" element={<List />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </pokemonContext.Provider>
  );
}
export default App;
