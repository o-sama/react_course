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
