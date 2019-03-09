import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Inputs = () => {
  const syntaxHighlight = atomDark;

  const codeString01 = `
  /* Styles */
  label {
    #label.default();
  }
  input {
    #input.default();
  }
  `;
  const codeString02 = `
    #input.default(rounded);
    #input.default(dark);
    #input.default(dark-rounded);
  `;
  return (
    <div className="content form-examples">
      <div className="form-examples--container">
        <h1>Form Labels & Text Input styles:</h1>
        <SyntaxHighlighter language="css" style={syntaxHighlight}>
          {codeString01}
        </SyntaxHighlighter>
        <label className="form-examples--label" htmlFor="text-input">
          Form Label
          <input
            className="form-examples--input form-examples--input---01"
            id="text-input"
            placeholder="Enter Text"
          />
        </label>
        <SyntaxHighlighter language="css" style={syntaxHighlight}>
          {codeString02}
        </SyntaxHighlighter>
        <input
          className="form-examples--input form-examples--input---02"
          placeholder="Enter Text"
        />
        <input
          className="form-examples--input form-examples--input---03"
          placeholder="Enter Text"
        />
        <input
          className="form-examples--input form-examples--input---04"
          placeholder="Enter Text"
        />
      </div>
    </div>
  );
};

export default Inputs;
