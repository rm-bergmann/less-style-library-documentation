import React from 'react';

const Form = () => (
  <div className="content form-examples">
    <div className="form-examples--container">
      <label className="form-examples--label" htmlFor="text-input">
        Text Input
        <input className="form-examples--input" id="text-input" />
      </label>
    </div>
    <div className="form-examples--container">
      <label className="form-examples--label" htmlFor="textarea">
        Textarea
        <textarea className="form-examples--textarea" id="textarea" />
      </label>
    </div>
    <div className="form-examples--container">
      <select className="form-examples--select" id="select-element">
        <option>Select</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
  </div>
);

export default Form;
