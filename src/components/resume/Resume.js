import React, { Component } from "react";
import "./Resume.css";
export class Resume extends Component {
  render() {
    return (
      <div className="min-h-screen bg-base-100 m-6">
        <h1 className="text-5xl font-bold flex justify-center mb-6">Resume</h1>
        <div className="flex justify-center">
          <div className="flex flex-grow card compact bg-base-300 rounded-box">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Summary</h1>
              <h1 className="text-2xl font-bold">Shaggy Belco Sambo</h1>

              <div className="flex justify-center text-left">
                <p className="flex flex-wrap">
                  Innovative and deadline-driven FullStack developer with 1.5
                  years of experience designing and developing application using
                  Angular and JavaScript.
                </p>
              </div>
              <ul>
                <li>
                  <span className="font-bold">Residence:</span> Tembisa,
                  Johannesburg
                </li>
                <li>
                  <span className="font-bold">Phone:</span> 072 760 7323
                </li>
                <li>
                  <span className="font-bold">Email:</span> shaggybelco1@gmail.com
                </li>
              </ul>
            </div>

            <div className="card-body">
              <h1 className="text-5xl font-bold">Education</h1>
              <h1 className="text-2xl font-bold">
                National Diploma in Information Technology(Software Development)
              </h1>
              <div className="exp">15 January 2018 - 31 August 2022</div>
              <i>Tshwane University Of Technology</i>

              <h1 className="text-2xl font-bold">NSC Diploma</h1>
              <div className="exp">15 January 2014 - 06 December 2017</div>
              <i>Mandondo High School</i>
            </div>

            <div className="card-body">
              <h1 className="text-5xl font-bold">Professional Experience</h1>
              <h1 className="text-2xl font-bold">The Digital Academy</h1>
              <div className="exp">01 June 2022 - 31 May 2023</div>
              <div className="res">
                7 Quince Street, The Medial Mill, Auckland Park, Johannesburg,
                2092
              </div>

              <div className="flex text-left">
                <ul className="tasks">
                  <li>Development of applications using Angular 2+ frontend</li>
                  <li>Backend using Nodejs Express</li>
                  <li>Figma User-Experience & User-Interface Design</li>
                  <li>PostgreSQL</li>
                  <li>Project management (Trello Board)</li>
                  <li>DevOps</li>
                  <li>Docker</li>
                  <li>Unit testing</li>
                </ul>
              </div>

              <h1 className="text-2xl font-bold">Ekhonnector</h1>
              <div className="exp">14 January 2022 - 30 June 2022</div>
              <div className="res">Nelspruit, Mpumalanga, 1200</div>

              <div className="flex text-left">
                <ul className="tasks">
                  <li>Development of applications using C#(DotNet Framework)</li>
                  <li>Using MySql</li>
                  <li>Meeting with clients</li>
                  <li>Project management (Trello Board)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
