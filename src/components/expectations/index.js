import React, { Component } from 'react';
import "./style.css";

export default class Expectation extends Component {
  render() {
    return (
      <div className="expectation">
        <img src={this.props.image} alt="Image of Expectation"/>
        <span>{this.props.text.title}</span>
      </div>
    );
  }
}
