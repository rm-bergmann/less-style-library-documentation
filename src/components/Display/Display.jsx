import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import displayContent from './display.md';

class Display extends Component {
  state = {
    markdown: displayContent,
  };

  render() {
    const { markdown } = this.state;
    return (
      <div className="content content-display--header">
        {ReactHtmlParser(markdown)}
      </div>
    );
  }
}

export default Display;
