import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import aboutContent from '../../../README.md';

class About extends Component {
  state = {
    markdown: aboutContent,
  };

  render() {
    const { markdown } = this.state;
    return (
      <div className="content content-about">{ReactHtmlParser(markdown)}</div>
    );
  }
}

export default About;
