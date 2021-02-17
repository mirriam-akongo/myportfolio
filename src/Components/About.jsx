import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='about-body'>
        <h2>About page</h2>
        <div className='about-p'>
          <p>
            Well, I'm Mirriam Akongo well known as Engineer Mirriam. I attained
            my Bacherlors Degree in Software Engineering from Makerere
            University. I'm passionate about technology and I'm very happy to be
            part of it. To me I believe that the future is Tech. I like
            encouraging fellow youth because it'sCurrently
          </p>
          <p>
            Well, once I chose the path to join tech space to be specific
            software development path, I new that I had to be prepared for a
            life long learning journey knowing that Learning never stops.
          </p>
          <p>
            For this reason, I started participating in coding bootcamps and I
            acquired more technical skills and soft skills.
          </p>
          <p>
            From the Outbox EDU bootcamp, I got to have a chance to learn and
            write a few blogs
          </p>
          <h3>Here are a few Medium blogs I Wrote</h3>

          <a
            href='https://medium.com/@jemmirriako/reasonable-accommodation-16590759bc94'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span role='img' aria-labelledby='ok hand'>
              👌
            </span>
            Reasonable Accomodation
            <span role='img' aria-labelledby='ok hand'>
              👌
            </span>
          </a>
          <br />
          <br />
          <a
            href='https://medium.com/@jemmirriako/my-experience-at-outbox-edu-prep-program-day-one-ac0419919b45'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span role='img' aria-labelledby='hand-pointing-to-article'>
              👉
            </span>
            My First day at OutboxEDU
            <span role='img' aria-labelledby='hand-pointing-to article'>
              👈
            </span>
          </a>
          <br />
          <br />
          <a
            href='https://medium.com/@jemmirriako/my-programing-journey-through-the-outbox-edu-program-299f1aa4067f'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span role='img' aria-labelledby='technologist-lady'>
              👩‍💻
            </span>
            My Programming Journey
            <span role='img' aria-labelledby='technologist-lady'>
              👩‍💻
            </span>
          </a>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default About;
