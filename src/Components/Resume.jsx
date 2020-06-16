import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Skills from "./Skills";
import me from "./me.jpg";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={me} alt="mirriam" className="my-img3" />

              <h2 style={{ paddingTop: "0px" }}>MIRRIAM AKONGO</h2>
              <h4 style={{ color: "purple" }}>WEB DEVELOPER</h4>
              <hr
                style={{ borderTop: "3px solid #833fb2", width: "100%" }}
              ></hr>
              <p>Do a breif introduction on yourself</p>
              <h3>EXPERIENCE</h3>
              <h4>Company, Location — Job Title MONTH 20XX - PRESENT </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh.
              </p>
              <h4>Company, Location — Job Title MONTH 20XX - MONTH 20XX</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh. Company, Location — Job Title MONTH 20XX -
                MONTH 20XX Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh.
              </p>
              <hr
                style={{ borderTop: "3px solid #833fb2", width: "100%" }}
              ></hr>
              <h4>ADDRESS</h4>
              <p>
                ZONE 8, MUTUNGO NAKAWA DIVISION,
                <br /> KAMPALA,
                <br /> UGANDA
              </p>
              <h4>PHONE NUMBER</h4>
              <p>(+256) 758292029</p>
              <h4>EMAIL</h4>
              <p>jemmirriako@gmail.com</p>
              <h4>WEB</h4>
              <p>mywebsite.com</p>
              <hr
                style={{ borderTop: "3px solid #833fb2", width: "100%" }}
              ></hr>
            </div>
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>SKILLS</h2>
            <Skills skill="HTML" progress={95} />
            <Skills skill="CSS" progress={80} />
            <Skills skill="JAVASCRIPT" progress={75} />
            <Skills skill="REACT JS" progress={70} />
            <Skills skill="NODE JS" progress={70} />
            <Skills skill="JAVASCRIPT" progress={70} />
            <Skills skill="MONGODB" progress={85} />
            <Skills skill="JAVA" progress={60} />
            <Skills skill="ANDROID" progress={60} />
            <hr style={{ borderTop: "3px solid #e22947", width: "100%" }}></hr>
            <h2>EDUCATION</h2>
            <h4>
              MAKERERE UNIVERSITY, Location — Degree AUGUST 2012 - JANUARY 2018
            </h4>
            <p>BACHERLOR OF SCIENCE IN SOFTWARE ENGINEERING </p>
            <h4>
              RUBAGA GIRLS’ SECONDARY SCHOOL, Location — Degree MARCH 2010 -
              DECEMBER 2011
            </h4>
            <p>UGANDA ADVANCED CERTIFICATE OF EDUCATION </p>
            <h4>
              ST JOSEPH’S GIRLS’ SS SCHOOL NSAMBYA, Location — Degree MONTH 2006
              - MONTH 2009
            </h4>
            <p> UGANDA CERTIFICATE OF EDUCATION</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
