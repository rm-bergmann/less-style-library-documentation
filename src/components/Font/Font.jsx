import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import fontContent from './font.md';

class Font extends Component {
  state = {
    markdown: fontContent,
  };

  render() {
    const { markdown } = this.state;
    return (
      <div className="content content-grid--header">
        {ReactHtmlParser(markdown)}
      </div>
    );
  }
}

export default Font;
