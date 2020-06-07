import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Color from './Color';
import colorsContent from './colors.md';

class Colors extends Component {
  state = {
    markdown: colorsContent,
  };

  render() {
    const { markdown } = this.state;
    return (
      <>
        <div className="content content-colors--header">
          {ReactHtmlParser(markdown)}
        </div>
        <div className="content content-colors">
          <Color />
        </div>
      </>
    );
  }
}

export default Colors;
