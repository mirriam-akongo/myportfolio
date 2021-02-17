import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './Skills';
import me from './me.jpg';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} className='resume-left-col'>
            <div style={{ textAlign: 'center' }}>
              <img src={me} alt='mirriam' className='my-img3' />

              <h2 style={{ paddingTop: '0px' }}>MIRRIAM AKONGO</h2>
              <h4>WEB DEVELOPER</h4>
              <hr
                style={{ borderTop: '3px solid cornsilk', width: '100%' }}
              ></hr>
              <p style={{ fontSize: '20px' }}>
                I am a software developer who is very open to learning,
                exploring, and I love staying within the developer learning
                community; remember that learning never stops. Well I love
                giving back to the community because where I am now, is all
                thanks to the dev community
              </p>
              <h3 style={{ color: 'cornsilk' }}>EXPERIENCE</h3>
              <h4>
                OUTBOX (U) LTD, 4th Floor, Soliz House, Lumumba Avenue. Kampala
                — SOFTWARE DEVELOPER INTERN OCTOBER 2020 - TO DATE{' '}
              </h4>
              <p style={{ fontSize: '20px' }}>
                I provide support to the software developers.
                <br />I have gained experience in working on a USSD application
                built using Nodejs.
                <br />I have been able to learn how to use Jira and Bitbucket.
                <br />I have been able to understand the user requirements.
                <br />I have also learnt to adher to industry best practices
              </p>

              <hr
                style={{ borderTop: '3px solid cornsilk', width: '100%' }}
              ></hr>
              <h4 style={{ color: 'cornsilk' }}>ADDRESS</h4>
              <p style={{ fontSize: '20px' }}>
                ZONE 8, MUTUNGO NAKAWA DIVISION,
                <br /> KAMPALA,
                <br /> UGANDA
              </p>
              <h4 style={{ color: 'cornsilk' }}>PHONE NUMBER</h4>
              <p style={{ fontSize: '20px' }}>(+256) 758292029</p>
              <h4 style={{ color: 'cornsilk' }}>EMAIL</h4>
              <p style={{ fontSize: '20px' }}>jemmirriako@gmail.com</p>
              <h4 style={{ color: 'cornsilk' }}>WEB</h4>
              <a
                href='http://mirriam.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
                style={{ fontSize: '20px', color: '#10292e' }}
              >
                http://mirriam.netlify.app
              </a>
              {/* <p>http://mirriam.netlify.app</p> */}

              <hr
                style={{ borderTop: '3px solid cornsilk', width: '100%' }}
              ></hr>
            </div>
          </Cell>
          <Cell col={8} className='resume-right-col'>
            <h2>SKILLS</h2>
            <Skills skill='HTML' progress={95} />
            <Skills skill='CSS' progress={80} />
            <Skills skill='JAVASCRIPT' progress={75} />
            <Skills skill='REACT JS' progress={70} />
            <Skills skill='NODE JS' progress={70} />
            <Skills skill='JAVASCRIPT' progress={70} />
            <Skills skill='MONGODB' progress={85} />
            <Skills skill='JAVA' progress={60} />
            <Skills skill='ANDROID' progress={60} />
            <hr style={{ borderTop: '3px solid #fbcd92', width: '100%' }}></hr>
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
