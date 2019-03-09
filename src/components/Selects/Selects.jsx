import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Inputs = () => {
  const syntaxHighlight = atomDark;

  const codeString01 = `
  select {
    #select.default();
  }
  `;
  return (
    <div className="content form-examples">
      <div className="form-examples--container">
        <h1>Select Element styles:</h1>
        <SyntaxHighlighter language="css" style={syntaxHighlight}>
          {codeString01}
        </SyntaxHighlighter>
        <select className="form-examples--select" id="select-element">
          <option>Select</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default Inputs;
