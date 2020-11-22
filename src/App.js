import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// import './App.css';

import Nav from './partials/nav';
import Pointer from './partials/pointer';
import './assets/main.css';
import Jumbo from './views/Home/Jumbo';
import About from './views/Home/About';
import Skills from './views/Home/Skills';
import Experience from './views/Home/Experience';

function App() {
  return (
  <>
   <Nav />
   <Pointer />
   <Jumbo />
   <About />
   <Skills />
   <Experience />
   </>
  );
}

export default App;
