import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import borderContent from './borders.md';

class Borders extends Component {
  state = {
    markdown: borderContent,
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

export default Borders;
