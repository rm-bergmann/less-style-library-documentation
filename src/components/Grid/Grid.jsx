import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import gridContent from './grid.md';

class Grid extends Component {
  state = {
    markdown: gridContent,
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

export default Grid;
