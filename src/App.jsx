import React, { useState } from "react";
import "./App.css";
import interactive from "./assets/image-interactive.jpg";
import deepEart from "./assets/image-deep-earth.jpg";
import nightArcade from "./assets/image-night-arcade.jpg";
import soccerteam from "./assets/image-soccer-team.jpg";
import thegrid from "./assets/image-grid.jpg";
import fromAbove from "./assets/image-from-above.jpg";
import borealis from "./assets/image-pocket-borealis.jpg";
import curiosity from "./assets/image-curiosity.jpg";
import fisheye from "./assets/image-fisheye.jpg";
function App() {
  const [icons, setIcons] = useState(false);

  const changeIcon = () => {
    setIcons(!icons);
  };
  return (
    <div className="App">
      <header>
        <div className="container">
          <nav>
            <h1 className="nav-logo">loopstudios</h1>
            <ul className="menu-area">
              <li>
                <a href="#">
                  A<span className="nav-span">bou</span>t
                </a>
              </li>
              <li>
                <a href="#">
                  C<span className="nav-span">are</span>ers
                </a>
              </li>
              <li>
                <a href="#">
                  E<span className="nav-span">ven</span>ts
                </a>
              </li>
              <li>
                <a href="#">
                  P<span className="nav-span">rodu</span>ct
                </a>
              </li>
              <li>
                <a href="#">
                  S<span className="nav-span">upp</span>ort
                </a>
              </li>
            </ul>
            <div className="icon-areas" onClick={changeIcon}>
              {icons ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="icon-burger"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="icon-burger"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </nav>
          <div className="hero">
            <h1>immersive</h1>
            <h1>Experiences</h1>
            <h1>that deliver</h1>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="container first-section">
            <img
              src={interactive}
              alt="interactive"
              className="interactive-image"
            />
            <div className="section-hero">
              <h1>
                The Leader in{" "}
                <span style={{ display: "block" }}>interactive vr</span>
              </h1>
              <p>
                Founded in 2011, Loopstudios has been producing world-class
                <span style={{ display: "block" }}>
                  virtual reality projects for some of the best companies around
                  the
                </span>
                <span style={{ display: "block" }}>
                  globe. Our award-winning creations have transformed
                </span>
                businesses through digital experiences that bind to their hand.
              </p>
            </div>
          </div>
        </section>

        <section className="second-section">
          <div className="container">
            <div className="flex-area">
              <h1>our creations</h1>
              <div>
                <button className="button">see all</button>
              </div>
            </div>
            <div className="second-flex">
              <div className="flex-items first-image">
                <img src={deepEart} alt="Deep-earth" className="img" />
                <p>DEEP EARTH</p>
              </div>

              <div className="flex-items">
                <img src={nightArcade} alt="night-arcade" className="img " />
              </div>
              <div className="flex-items">
                <img src={soccerteam} alt="soccer-team" className="img " />
              </div>
              <div className="flex-items">
                <img src={thegrid} alt="the-grid" className="img " />
              </div>
              <div className="flex-items">
                <img src={fromAbove} alt="the-above" className="img" />
              </div>
              <div className="flex-items">
                <img src={borealis} alt="the-above" className="img " />
              </div>
              <div className="flex-items">
                <img src={curiosity} alt="the-above" className="img " />
              </div>
              <div className="flex-items">
                <img src={fisheye} alt="the-above" className="img " />
              </div>
            </div>
            <div>
              <button className="down-button">see all</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
