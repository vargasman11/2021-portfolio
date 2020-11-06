import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// import './App.css';

import Nav from './partials/Nav';
import Pointer from './partials/pointer';
import './assets/main.css';
import Jumbo from './views/Home/Jumbo';
import Title from './views/Home/Title';

function App() {
  return (
  <>
   <Nav />
   <Pointer />
   <Jumbo />
   <Title />
   </>
  );
}

export default App;
