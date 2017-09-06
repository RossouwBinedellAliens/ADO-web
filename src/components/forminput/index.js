import React, { Component } from 'react';
import "./style.css";

export default class FormInput extends Component {
    render() {
      return (
        <div className={"form-input-container " + this.props.className}>
          <div className={"form-input " + (this.props.isError === "error"?"invalid":null)}>
            {
              this.props.isError !== "error"? <img className={"form-icon"} src={this.props.icon} alt="user"/>: <img className={"form-icon"} src={this.props.iconError} alt="user"/>
            }
            <input  
              className="form-field" 
              value={this.props.username} 
              onChange={(e) => this.props.doChange(e.target.value)} 
              placeholder={this.props.placeHolder}
            />
            {
              this.props.isError === "error"? 
                <img className="form-validation" src={this.props.errorImage} alt="user"/>: 
                (
                  this.props.isError === "success"?
                    <img className="form-validation" src={this.props.successImage} alt="user"/>:
                    null
                )
            }
          </div>
          <div className="form-input-error">
            {this.props.help}
          </div>
        </div>
      );
    }
  }

