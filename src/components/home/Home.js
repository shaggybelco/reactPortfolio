import React, { Component } from "react";
import "./Home.css";
import background from "../../assets/me.jpeg";

export class Home extends Component {
  render() {
    function scroll1() {
      document
        .getElementById("about")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return (
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0px 0px",
        }}
      >
        {/* //   url(portfolio/src/me.jpeg);background-position: 0px 0px;background-repeat: no-repeat;}} */}
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className="max-w-full">
              <h1 className="text-5xl font-bold cd">Shaggy Belco Sambo</h1>
              <p className="py-6 vv">
                Software Developer, Fullstack Developer and UI/UX Designer.
              </p>

              <button
                className="btn btn-primary"
                href="#about"
                onClick={() => scroll1()}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
