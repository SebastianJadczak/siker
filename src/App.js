import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Content from './components/Content'
import Footer from './components/Footer'

import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <header><Header /> </header>

        <div className="center">

          <nav><Navigation /></nav>
          <main><Content /></main>

        </div>
        <div className="content">
          <Main />
        </div>

        <footer><Footer /></footer>
      </div>
    </Router>
  );
}

export default App;
