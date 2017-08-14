import React, { Component } from 'react';
import "./style.css";

export default class Pillar extends Component {
  render() {
    return (
        <div className="pillar">
            <img className="pillar-image" src={this.props.image}/>
            <span className="pillar-text">{this.props.text}</span>
        </div>
    );
  }
}

