import React, { Component } from 'react';
import "./style.css";

export default class WorkType extends Component {
  render() {
    return (
      <div className="work">
        <img src={this.props.image} alt="Image of work"/>
        <h1>{this.props.text.title}</h1>
        <p>{this.props.text.content}</p>
      </div>
    );
  }
}
