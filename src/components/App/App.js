import React from 'react';
import '../../main.scss';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import About from "../About/About";
import Separator from "../Separator/Separator";
import Experience from "../Experience/Experience";
import Publications from "../Publications/Publications";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";


const App = () => {
  return (
    <div className="app">
      <Nav />

      <Header />

      <About />

      <Separator title={"Experience"} />

      <Experience />
      <Separator title={"Academic Publications"} />
      <Publications />
      <Separator title={"Education"} />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
