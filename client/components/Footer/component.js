import React from 'react';

const Footer = () => (
  <div>
    <div className="footer-spacer" />

    <footer className="account">
      <div className="wrapper pull-left">
        <ul className="navigation">
          <li>
            <a className="events" href="/showroom/events">Events</a>
          </li>
          <li>
            <a className="courses" href="/showroom/courses">Programs</a>
          </li>
          <li>
            <a className="searches" href="/showroom/searches">Search</a>
          </li>
          <li>
            <a className="support" href="/showroom/support">Support</a>
          </li>
          <li>
            <a href="/showroom/sign_up">Sign Up</a>
          </li>
          <li className="footer-login">
            <a href="/showroom/sign_in">Sign In</a>
          </li>
        </ul>
      </div>
      <div className="wrapper pull-right">
        <ul className="navigation font-size-08-em">
          <li>
            <a
              className="custom-privacy-policy-url"
              href="http://www.blueskyelearn.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            &nbsp;|&nbsp;
            <a
              className="custom-cookies-policy-url"
              href="http://www.blueskyelearn.com/cookies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookies Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);

export default Footer;
