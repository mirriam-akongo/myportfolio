import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import me from "./me.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>MIRRIAM AKONGO</h2>
            <img src={me} alt="mirriam" class="my-img2" />
            <p style={{ width: "75%", margin: "auto", padding: "1em" }}>
              About me I have done work in software development, mobile app
              creation, front-end/back-end web
            </p>
          </Cell>
          <Cell col={6} style={{ textAlign: "left" }}>
            <h2>Contact me</h2>
            <hr />
            <div class="contact-list">
              <h3>I'm available for hire </h3>
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+256) 7582 92029
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px" }}>
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    jemmirriako@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px" }}>
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                    <a
                      href="https://www.facebook.com/profile.php?id=100013782000870"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mirriam Akongo
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
