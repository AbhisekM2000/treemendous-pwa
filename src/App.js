import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import NavBar from './components/NavBar'
import Categories from './components/Categories';
import ImageTab from './components/ImageTab';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Categories/>
      <ImageTab name="Floor Planters"/>
      <ImageTab name="Wall Planters"/>
      <ImageTab name="Artificial Grass"/>
      <ImageTab name="Deck Tiles"/>
      <ImageTab name="Miscellanous"/>
      <Footer />
    </div>
  );
}

export default App;
