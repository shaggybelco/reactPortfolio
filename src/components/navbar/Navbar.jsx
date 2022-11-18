import React, { Component } from "react";
import About from "../about/About";
import Contact from "../Contact/Contact";
import Home from "../home/Home";
import Portfolio from "../portfolio/Portfolio";
import Resume from "../resume/Resume";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    function scroll1() {
      document
        .getElementById("home")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function scroll2() {
      document
        .getElementById("about")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function scroll3() {
      document
        .getElementById("resume")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function scroll4() {
      document
        .getElementById("portfolio")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function scroll5() {
      document
        .getElementById("contact")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return (
      <div>
        <section>
        
          <div className="flex justify-center bg-base-100 sm:fixed nav">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </label>
          </div>

          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col bg-base-100 items-center justify-center">
              <main>
                  <div id="home"><Home/></div>
                    <div id="about"><About/></div>
                    <div id="resume"><Resume></Resume></div>
                    <div id="portfolio"> <Portfolio/> </div>
                    <div id="contact"><Contact></Contact> </div>
              </main>
            </div>

            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content nvb">
                <div className="n">
                  <div className="avatar flex justify-center avt">
                    <div className="w-24 rounded-full ring ring-ghost ring-offset-base-100 ring-offset-2">
                      <img src={require('../../assets/me3.jpeg')} alt={'shaggy'}/>
                    </div>
                  </div>
                  <div className="flex justify-center font-bold text-2xl named">
                    Shaggy Belco Sambo
                  </div>
                  <div className="flex social">
                    <a href="https://github.com/shaggybelco">
                      <div className="lk">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-brand-github"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/shaggy-sambo-17649a127">
                      <div className="lk">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-brand-linkedin"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <rect
                            x="4"
                            y="4"
                            width="16"
                            height="16"
                            rx="2"
                          ></rect>
                          <line x1="8" y1="11" x2="8" y2="16"></line>
                          <line x1="8" y1="8" x2="8" y2="8.01"></line>
                          <line x1="12" y1="16" x2="12" y2="11"></line>
                          <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>
                      </div>
                    </a>
                  </div>

                  <li className="active" id="navigator">
                    <a href="#home" onClick={() => scroll1()}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-home-2"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                          <rect x="10" y="12" width="4" height="4"></rect>
                        </svg>
                      </span>
                      Home
                    </a>
                  </li>
                  <li className="" id="navigator">
                    <a href="#about" onClick={() => scroll2()}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-circle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <circle cx="12" cy="12" r="9"></circle>
                          <circle cx="12" cy="10" r="3"></circle>
                          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                        </svg>
                      </span>
                      About
                    </a>
                  </li>
                  <li className="" id="navigator">
                    <a href="#resume" onClick={() => scroll3}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-file"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                        </svg>
                      </span>
                      Resume
                    </a>
                  </li>
                  <li className="" id="navigator">
                    <a href="#portfolio" onClick={() => scroll4}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-notebook"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"></path>
                          <line x1="13" y1="8" x2="15" y2="8"></line>
                          <line x1="13" y1="12" x2="15" y2="12"></line>
                        </svg>
                      </span>
                      Portfolio
                    </a>
                  </li>
                  <li className="" id="navigator">
                    <a href="#contact" onClick={() => scroll5}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-address-book"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path>
                          <path d="M10 16h6"></path>
                          <circle cx="13" cy="11" r="2"></circle>
                          <path d="M4 8h3"></path>
                          <path d="M4 12h3"></path>
                          <path d="M4 16h3"></path>
                        </svg>
                      </span>
                      Contact
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Navbar;
