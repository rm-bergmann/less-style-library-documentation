import React from 'react';

const currentDate = new Date();

const Footer = () => {
  return (
    <div className="footer-content">
      <p>
        <a
          href="https://github.com/rm-bergmann/less-style-library"
          target="_blank"
          rel="noreferrer"
        >
          Github Project
        </a>
        {' | '}
        <a
          href="https://www.npmjs.com/package/less-style-library"
          target="_blank"
          rel="noreferrer"
        >
          NPM Package
        </a>
      </p>
      <p>Site built in Webpack, React JS & Less</p>
      <small>
        &copy;
        {` Copyright ${currentDate.getFullYear()} rickbergmann.com`}
      </small>
    </div>
  );
};

export default Footer;
