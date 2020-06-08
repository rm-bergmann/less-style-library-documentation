import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as borderExamples from './borderExamples';

const Borders = () => {
  const syntaxHighlight = atomDark;

  return (
    <div className="content content-borders">
      <h1>Border Mixins</h1>
      <p>
        <em>
          Border mixins are designed for you to easily add borders to your
          elements
        </em>
      </p>

      <p>Black solid 1px border (default):</p>
      <div className="border-example-div border-example-div--01" />
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {borderExamples.borderExample01}
      </SyntaxHighlighter>

      <p>
        If you want a 4px solid red border you can pass in the border width of
        4px, and the desired color.
      </p>
      <div className="border-example-div border-example-div--02" />
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {borderExamples.borderExample02}
      </SyntaxHighlighter>

      <p>
        If you want a 2px green top border only you pass in top (or bottom /
        left / right), border-width value and color
      </p>
      <div className="border-example-div border-example-div--03" />
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {borderExamples.borderExample03}
      </SyntaxHighlighter>

      <p>
        If you need paralell top & bottom or left & right borders pass in
        vertical or horizontal:
      </p>
      <div className="border-example-div border-example-div--04" />
      <div className="border-example-div border-example-div--05" />
      <div className="border-example-div border-example-div--06" />
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {borderExamples.borderExample04}
      </SyntaxHighlighter>

      <p>
        Useful border-radius mixins when we need a top left and right radius or
        bottom left and right radius.
      </p>
      <div className="border-example-div border-example-div--07" />
      <div className="border-example-div border-example-div--08" />
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {borderExamples.borderExample05}
      </SyntaxHighlighter>
    </div>
  );
};

export default Borders;
