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
import Helmet from "react-helmet";
import logoTab from "./assets/logoTab.png";
function App() {
  const [icons, setIcons] = useState(false);

  const handleClick = () => {
    setIcons(!icons);
    const navChange = document.querySelector(".menu-area");
    navChange.classList.toggle("nav-open");
  };

  const openImages = () => {
    const img = document.querySelectorAll(".flex-items");
    for (let i = 0; i < img.length; i++) {
      if (img[i].classList.contains("none-image")) {
        img[i].classList.toggle("open-image");
      }
    }
  };
  return (
    <div className="App">
      <Helmet>
        <title>Loop Studios | Home</title>
        <meta name="Home Page" content="Home" />
        <link rel="icon" href={logoTab} />
      </Helmet>
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
            <div className="icon-areas" onClick={handleClick}>
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
                    d="M6 18L18 6M6 6l12 12"
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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

              <div className="flex-items second-image">
                <img src={nightArcade} alt="night-arcade" className="img " />
                <p>NIGHT ARCADE</p>
              </div>
              <div className="flex-items third-image">
                <img src={soccerteam} alt="soccer-team" className="img " />
                <p>SOCCER TEAM VR</p>
              </div>
              <div className="flex-items fourth-image">
                <img src={thegrid} alt="the-grid" className="img " />
                <p>THE GRID</p>
              </div>
              <div className="flex-items fifth-image none-image">
                <img src={fromAbove} alt="the-above" className="img" />
                <p>FROM UP ABOVE VR</p>
              </div>
              <div className="flex-items sixth-image none-image">
                <img src={borealis} alt="the-above" className="img " />
                <p>POCKET BOREALIS</p>
              </div>
              <div className="flex-items seventh-image none-image">
                <img src={curiosity} alt="the-above" className="img " />
                <p>THE CURIOSITY</p>
              </div>
              <div className="flex-items eight-image none-image">
                <img src={fisheye} alt="the-above" className="img " />
                <p>MAKE IT FISH EYE</p>
              </div>
            </div>
            <div>
              <button className="down-button" onClick={openImages}>
                see all
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section className="container bottom-flex">
          <div className="bottom-nav">
            <h1>loopstudios</h1>
            <ul className="bottom-ul">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="social-logo">
              {/* facebook logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z"
                />
              </svg>
              {/* twitter logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="30"
                viewBox="0 0 32 32"
              >
                <path
                  fill="white"
                  d="M11.547 25.752c9.057 0 14.01-7.503 14.01-14.01c0-.213 0-.425-.014-.636A10.017 10.017 0 0 0 28 8.556a9.827 9.827 0 0 1-2.828.776a4.942 4.942 0 0 0 2.164-2.724a9.866 9.866 0 0 1-3.126 1.195a4.929 4.929 0 0 0-8.392 4.491A13.98 13.98 0 0 1 5.67 7.15a4.928 4.928 0 0 0 1.525 6.573a4.887 4.887 0 0 1-2.235-.617v.063a4.926 4.926 0 0 0 3.95 4.827a4.917 4.917 0 0 1-2.223.084a4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 4 23.54a13.94 13.94 0 0 0 7.547 2.209"
                />
              </svg>
              {/* pinterest logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.03Z"
                />
              </svg>
              {/* instagram logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="30"
                viewBox="0 0 48 48"
              >
                <g fill="none">
                  <path
                    stroke="white"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M34 6H14a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8Z"
                  />
                  <path
                    stroke="white"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"
                  />
                  <path fill="white" d="M35 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" />
                </g>
              </svg>
            </div>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="12    "
                viewBox="0 0 16 16"
              >
                <path
                  fill="white"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462c.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467c-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638c1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"
                />
              </svg>
              2021 Loopstudios. All rights reserved
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
