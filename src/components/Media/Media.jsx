import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import mediaContent from './media.md';

class Media extends Component {
  state = {
    markdown: mediaContent,
  };

  render() {
    const { markdown } = this.state;
    return (
      <div className="content content-about">{ReactHtmlParser(markdown)}</div>
    );
  }
}

export default Media;
