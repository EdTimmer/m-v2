import React from 'react';
import '../../main.scss';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Separator from "../Separator/Separator";
import Experience from "../Experience/Experience";
import Publications from "../Publications/Publications";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Languages from "../Languages/Languages";

const App = () => {
  return (
    <div className="app">
      <Nav />

      <Header />
      <div id="skills">
        <Separator title={"Skills"} />
        <Skills />
      </div>

      <div id="experience">
        <Separator title={"Experience"} />
        <Experience />
      </div>

      <div id="publications">
        <Separator title={"Academic Publications"} />
        <Publications />
      </div>

      <div id="education">
        <Separator title={"Education"} />
        <Education />
      </div>

      <div id="languages">
        <Separator title={"Languages"} />
        <Languages />
      </div>

      <Footer />
    </div>
  );
}

export default App;
