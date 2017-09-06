import React, { Component } from 'react';
import "./style.css";

import WorkType from '../worktype';

import worktype1 from '../../assets/images/cx-design.svg';
import worktype2 from '../../assets/images/ux-design.svg';
import worktype3 from '../../assets/images/ui-design.svg';
import worktype4 from '../../assets/images/prototype.svg';

export default class WorkTypeBar extends Component {
  render() {
    return (
      <div>
        <div className="top-bar-container">
          <div className="bottom-content">
            <span className="bottom-title">{this.props.topText.title}</span>
            <p className="bottom-text">{this.props.topText.content}</p>
          </div>
        </div>
        <div className="bottom-bar-container">
          <div className="inner-container">
            <div className="inner-column">
              <WorkType image={worktype1} text={this.props.workTypes[0]}/>
              <WorkType image={worktype2} text={this.props.workTypes[1]}/>
            </div>
            <div className="inner-column">
              <WorkType image={worktype3} text={this.props.workTypes[2]}/>
              <WorkType image={worktype4} text={this.props.workTypes[3]}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
