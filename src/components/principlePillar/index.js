import React, { Component } from 'react';
import "./style.css";

export default class Pillar extends Component {
  render() {
    return (
        <div className="pillar">
            <img className="pillar-image" src={this.props.image} alt="Pillar image"/>
            <img className="pillar-image hover" src={this.props.hoverImage} alt="Pillar image"/>
            <div>
              <span className="pillar-title">{this.props.text.title}</span>
              <span className="pillar-text">{this.props.text.content}</span>
            </div>
        </div>
    );
  }
}

