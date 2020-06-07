import React from 'react';

const Footer = () => {
  return (
    <div className="footer-content">
      <h5>Site built in Webpack, React JS & Less</h5>
      <p>
        <a
          href="https://github.com/rm-bergmann/less-style-library"
          target="_blank"
          rel="noreferrer"
        >
          Github Project
        </a>
      </p>
      <p>
        <a
          href="https://www.npmjs.com/package/less-style-library"
          target="_blank"
          rel="noreferrer"
        >
          NPM Package
        </a>
      </p>
    </div>
  );
};

export default Footer;
