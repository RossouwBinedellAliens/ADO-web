import React, { Component } from 'react';
import "./style.css";

export default class ProblemSolverItem extends Component {
  render() {
    return (
        <div className="solver-item">
            <img src={this.props.image} />
            <div className="solver-hover-text">
                <h3>{this.props.item.name}</h3>
                <span>{this.props.item.title}</span>
                <p>"{this.props.item.quote}"</p>
            </div>
        </div>
    );
  }
}

