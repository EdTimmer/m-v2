import React from 'react';
import '../../main.scss';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import About from "../About/About";
import Separator from "../Separator/Separator";
import Experience from "../Experience/Experience";


const App = () => {
  return (
    <div className="app">
      <Nav />

      <Header />

      <About />

      <Separator title={"Experience"} />

      <Experience />
      
      <Separator title={"Education"} />
    </div>
  );
}

export default App;
