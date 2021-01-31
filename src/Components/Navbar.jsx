import React, { Component } from 'react';
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
} from 'react-mdl';
import Main from './Main';
import { Link } from 'react-router-dom';

class Navb extends Component {
  render() {
    return (
      <div className='demo-big-content'>
        <Layout>
          <Header
            className='header-color'
            style={{ backgroundColor: '#10292E' }}
            // style={{ backgroundColor: "#051122" }}
            title={
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#fbcd92',
                  //color: "#CD436D",
                  // color: "#909D9E",
                }}
                to='/'
              >
                My Portfolio
              </Link>
            }
            scroll
          >
            <Navigation style={{ color: '#fbcd92' }}>
              <Link style={{ color: '#fbcd92', fontSize: '18px' }} to='/resume'>
                Resume
              </Link>
              <Link style={{ color: '#fbcd92', fontSize: '18px' }} to='/about'>
                About
              </Link>
              <Link
                style={{ color: '#fbcd92', fontSize: '18px' }}
                to='/projects'
              >
                Projects
              </Link>
              <Link
                style={{ color: '#fbcd92', fontSize: '18px' }}
                to='/contact'
              >
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#fbcd92',
                  //color: "#cd436f",
                  //color: "purple"
                }}
                to='/'
              >
                My Portfolio
              </Link>
            }
          >
            <Navigation>
              <Link
                style={{
                  backgroundColor: '#fbcd92',
                  color: '#10292E',
                  fontSize: '18px',
                }}
                to='/resume'
              >
                Resume
              </Link>
              <Link
                style={{
                  backgroundColor: '#fbcd92',
                  color: '#10292E',
                  fontSize: '18px',
                }}
                to='/about'
              >
                About
              </Link>
              <Link
                style={{
                  backgroundColor: '#fbcd92',
                  color: '#10292E',
                  fontSize: '18px',
                }}
                to='/projects'
              >
                Projects
              </Link>
              <Link
                style={{
                  backgroundColor: '#fbcd92',
                  color: '#10292E',
                  fontSize: '18px',
                }}
                to='/contact'
              >
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
          <Footer
            className='header-color'
            style={{
              backgroundColor: '#10292E',
              // backgroundColor: "#051122"
            }}
          >
            <FooterSection
              type='middle'
              style={{
                color: '#fbcd92',
                fontSize: '20px',
                textAlign: 'center',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
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
