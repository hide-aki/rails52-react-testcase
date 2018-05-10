import React, { Component } from 'react';

const FieldLabel = (props) => {
  return (<div className="field">
    <label>{props.label}</label>
    {props.children}
  </div>)
}

export default FieldLabel;