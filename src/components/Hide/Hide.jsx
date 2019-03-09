import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import hideContent from './hide.md';

class Hide extends Component {
  state = {
    markdown: hideContent,
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

export default Hide;
