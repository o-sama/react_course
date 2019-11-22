import React from "react";
import "../css/styles.css";

const Header = () => {
  return (
    <header>
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
      <div class="hero-text-box">
        <h3 style={{ color: "#fff" }}>Hey, I'm</h3>
        <h1>Osama Faqhruldin</h1>
      </div>
    </header>
  );
};

export default Header;
