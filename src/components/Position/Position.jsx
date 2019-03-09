import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import positionContent from './position.md';

class Position extends Component {
  state = {
    markdown: positionContent,
  };

  render() {
    const { markdown } = this.state;
    return (
      <div className="content content-position--header">
        {ReactHtmlParser(markdown)}
      </div>
    );
  }
}

export default Position;
