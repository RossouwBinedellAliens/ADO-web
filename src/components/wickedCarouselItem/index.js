import React, { Component } from 'react';
import "./style.css";

export default class WickedCarouselItem extends Component {
  render() {
    return (
        <div className="wicked">
            <img src={this.props.image}/>
            <div>
              <h3>{this.props.text.title}</h3>
              <p>{this.props.text.content}</p>
            </div>
            <div className="bottom-line" />
        </div>
    );
  }
}

