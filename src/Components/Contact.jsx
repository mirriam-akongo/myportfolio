import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import me from './me.jpg';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell
            col={6}
            style={{
              backgroundColor: '#162020 ',
              color: '#fbcd92',
              borderRadius: '10px',
            }}
          >
            <h2>MIRRIAM AKONGO</h2>
            <img src={me} alt='mirriam' className='my-img2' />
            <p style={{ width: '75%', margin: 'auto', padding: '1em' }}>
              You can reach out to me concerning web applications that are
              either front-end or back-end based or for both.
            </p>
          </Cell>
          <Cell
            col={6}
            style={{
              textAlign: 'center',
              backgroundColor: '#7c6e6e',
              borderRadius: '10px',
            }}
          >
            <h2>Contact me</h2>
            <hr />
            <div class='contact-list'>
              <h3>I'm available for hire </h3>
              <List style={{ justifyContent: 'center' }}>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: '25px',
                      color: 'cornsilk',
                    }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true' />
                    (+256) 7582 92029
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', color: 'cornsilk' }}
                  >
                    <i className='fa fa-envelope-square' aria-hidden='true' />
                    jemmirriako@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', color: 'cornsilk' }}
                  >
                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                    <a
                      href='https://www.linkedin.com/in/mirriam-akongo-23114bb7/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: 'cornsilk' }}
                    >
                      Mirriam AKONGO
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', color: 'cornsilk' }}
                  >
                    <i className='fa fa-facebook-square' aria-hidden='true' />
                    <a
                      href='https://www.facebook.com/profile.php?id=100013782000870'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: 'cornsilk' }}
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
