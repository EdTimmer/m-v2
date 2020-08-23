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
import Skills from "../Skills/Skills";
// import Gap from "../Gap/Gap";

const App = () => {
  return (
    <div className="app">
      <Nav />

      <Header />
      {/* <Gap /> */}
      <Separator title={"Skills"} />
      <Skills />

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
