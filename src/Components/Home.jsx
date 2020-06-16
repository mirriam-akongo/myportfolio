import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import me from "./me.jpg";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={me} alt="mirriam" className="my-img" />

            <div className="banner-text">
              <h1>Full stack web developer</h1>

              <hr />

              <p>
                HTML/CSS | BOOTSTRAP | JAVASCRIPT | REACT JS | MONGODB | EXPRESS
                | ANDROID
              </p>

              <div className="social-links">
                {/** LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mirriam-akongo-23114bb7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>

                {/** Github */}
                <a
                  href="https://github.com/mirriam-akongo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>

                {/** Twitter */}
                <a
                  href="https://twitter.com/a_mirriam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
