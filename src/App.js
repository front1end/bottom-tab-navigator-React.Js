import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Contact from "./pages/Contact";
import Hero from './pages/Hero/Hero.js'
import About from './pages/About/About.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path="/" />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
        </Switch>
      </BrowserRouter>
      <Hero />
    </div>
  );
}

export default App;
