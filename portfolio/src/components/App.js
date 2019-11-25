import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import "../css/styles.css";

function App() {
  return (
    <div>
      <nav className="sticky-nav">
        <div className="row">
          <ul className="main-nav">
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Get In Touch</a>
            </li>
          </ul>
        </div>
      </nav>
      <Header className="App-header" />

      <section className="section-skills">
        <Skills />
      </section>
      <section className="section-experience">
        <Experience />
      </section>
      <section className="section-education">
        <Education />
      </section>
      <section className="section-contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
