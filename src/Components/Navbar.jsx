import React, { Component } from "react";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
} from "react-mdl";
import Main from "./Main";
import { Link } from "react-router-dom";

class Navb extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "purple" }} to="/">
                My Portfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "purple" }} to="/">
                My Portfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer className="header-color">
            <FooterSection
              type="middle"
              style={{
                color: "white",
                fontSize: "20px",
                textAlign: "center",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <footer>&copy; Mirriam 2020</footer>

              {/* <FooterLinkList>
                <div>
                  <footer>&copy; Mirriam 2020</footer>
                </div>
                {/* <a href="#">Help</a>
                <a href="#">Privacy & Terms</a> 
              </FooterLinkList> */}
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Navb;
