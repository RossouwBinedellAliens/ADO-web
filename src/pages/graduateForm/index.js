import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import TopNav from "./../../components/TopNav";
import Footer from "./../../components/footer";
import ModalDialogue from '../../components/ModalDialogue';

import leftBlockImage from "./../../assets/images/grad-left-image.png";

import 'antd/dist/antd.css';
import "./style.css";

import data from '../../assets/data/EN/graduate-form.json';
import config from '../../config.json';

var Dropzone = require('react-dropzone');


const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default class GraduateForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      surname: "",
      email: "",
      cellnumber: "",
      informAgain: false,

      usernameError: "",
      surnameError: "",
      emailError: "",
      cellnumberError: "",

      dataset: new FormData(),

      citizen: null,
      visa: null,

      modal: false,
      mailStatus: null,
      redirect: false
    };

    this.username_OnChange = this.username_OnChange.bind(this);
    this.surname_OnChange = this.surname_OnChange.bind(this);
    this.email_OnChange = this.email_OnChange.bind(this);
    this.cellnumber_OnChange = this.cellnumber_OnChange.bind(this);


    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.whenFileDropped = this.whenFileDropped.bind(this);
    this.modalAction = this.modalAction.bind(this);
  }

  isValid() {
    if (this.state.username.length <= 1) 
      return false
    if (this.state.surname.length <= 1) 
      return false
    if (this.state.cellnumber.replace(" ","").length < 10) 
      return false
    if (!this.validateEmail(this.state.email)) 
      return false
    if (!this.state.citizen === true){
      if (!this.state.visa === true)
        return false;
    }
    return true;
  }

  validateEmail(email) {
    var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
  }

  handleFormSubmit(){
    var newData = this.state.dataset;

    newData.append("username", this.state.username);
    newData.append("surname", this.state.surname);
    newData.append("email", this.state.email);
    newData.append("cellnumber", this.state.cellnumber);
    newData.append("informAgain", this.state.informAgain);
    newData.append("form", " - Graduate Applicant");

    this.setState({dataset: newData});

    axios.post(config.serverUrl + "/ado-gradForm/sendEmail", this.state.dataset).then(res => {
      if (res.status === 200) {
        console.log("Succesfully sent email!");
        this.setState({
          mailStatus: true,
          modal: true
        })
      } else {
        console.log("Failed to send email");
        this.setState({
          mailStatus: false,
          modal: true
        })
      }
    }, err => {
      console.log(err);
      this.setState({
        mailStatus: false,
        modal: true
      })
    });
  }

  modalAction() {
    if (this.state.mailStatus === true) {
      this.setState({redirect: true})
    }
  }

  whenFileDropped(files) {
    const file = files[0];
    data.append("file", file);

    this.setState({dataset: data});
  }

  username_OnChange(username){
    this.setState(username);
    if(this.state.username.length === 0){
      this.setState({usernameError: "error"});
    }else{
      this.setState({usernameError: "success"});
    }
  }

  surname_OnChange(surname){
    this.setState(surname);
    if(this.state.surname === ""){
      this.setState({surnameError: "error"});
    }else{
      this.setState({surnameError: "success"});
    }
  }

  email_OnChange(email){
     this.setState(email);
     if(this.state.email === ""){
      this.setState({emailError: "error"});
    }else{
      this.setState({emailError: "success"});
    }
  }

  cellnumber_OnChange(cellnumber){
    this.setState(cellnumber);
    if(this.state.cellnumber === ""){
      this.setState({cellnumberError: "error"});
    }else{
      this.setState({cellnumberError: "success"});
    }
  }

  checkboxOnChange(checkbox){
    this.setState(checkbox);
  }

  render() {
    const suffix = true ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    return (
      <div className="formpage-content">
        <TopNav />
        {this.state.modal? <ModalDialogue closeAction={this.modalAction} isOpen={this.state.modal} success={this.state.mailStatus} />: null }
        <div className="content-container-form">
          <div className="col-1">
            <img className="left-info-block-image" src={leftBlockImage} alt="ddd" />
            <div className="top-title">
              <h1>{data.t1}</h1>
            </div>
            <p className="main-text">{data.p1}</p>
            <p className="closure-text">{data.p2}</p>
          </div>
          <div className="col-2">
            <Form className="form-container" onSubmit={this.handleFormSubmit}>
              <FormItem className="input-field" validateStatus={this.state.usernameError}>
                <Input
                  className="input-field"
                  placeholder="Enter your Username"
                  prefix={<Icon type="user" style={{ fontSize: "18px"}}/>}
                  suffix={suffix}
                  size="large"
                  onChange={(e) => this.username_OnChange({username: e.target.value})}
                  value={this.state.username}
                />
              </FormItem>
              <FormItem className="input-field" validateStatus={this.state.surnameError}>
                <Input
                  className="input-field"                
                  placeholder="  Enter your Surname"
                  prefix={<Icon type="user" style={{ fontSize: "18px"}}/>}
                  suffix={suffix}
                  size="large"
                  onChange={(e) => this.surname_OnChange({surname: e.target.value})}
                  value={this.state.surname}
                />
              </FormItem>
                <FormItem className="input-field" validateStatus={this.state.emailError}> 
                  <Input
                    className="input-field"                  
                    placeholder="  Enter your Email address"
                    prefix={<Icon type="mail" style={{ fontSize: "18px"}}/>}
                    suffix={suffix}
                    size="large"
                    onChange={(e) => this.email_OnChange({email: e.target.value})}
                    value={this.state.email}
                  />
                </FormItem>
                  <FormItem className="input-field" validateStatus={this.state.cellnumberError}>
                    <Input
                      className="input-field"                    
                      placeholder="  Enter your Phone Number"
                      prefix={<Icon type="phone" style={{ fontSize: "18px"}}/>}
                      suffix={suffix}
                      size="large"
                      onChange={(e) => this.cellnumber_OnChange({cellnumber: e.target.value})}
                      value={this.state.cellnumber}
                    />
                </FormItem>
                <Checkbox className="form-checkbox" checked={this.state.informAgain} onChange={ev => this.checkboxOnChange({informAgain: !this.state.informAgain})}>{data.p3}</Checkbox>  
                <div className="file-drop-container">
                  <div className="file-drop-content" >
                    <img src={leftBlockImage} alt="star"/>
                    <p className="file-drop-text">{data.p4}</p>
                  </div>
                  <Dropzone onDrop={this.whenFileDropped} className="file-drop" />
                </div>
                <div className="checkbox-container">
                  <div>
                    <span className="checkbox-text">{data.p5}</span>
                    <div>
                      <Checkbox className="checkbox-item" checked={this.state.citizen} onChange={e => this.checkboxOnChange({citizen: true})}>Yes</Checkbox>
                      <Checkbox className="checkbox-item" checked={this.state.citizen === null? false: !this.state.citizen} onChange={e => this.checkboxOnChange({citizen: false})}>No</Checkbox>
                    </div>
                  </div>
                  {
                    this.state.citizen === false? (
                      <div>
                        <span className="checkbox-text">{data.p6}</span>
                        <div>
                          <Checkbox className="checkbox-item" checked={this.state.visa} onChange={e => this.checkboxOnChange({visa: true})}>Yes</Checkbox>
                          <Checkbox className="checkbox-item" checked={this.state.visa === null? false: !this.state.visa} onChange={e => this.checkboxOnChange({visa: false})}>No</Checkbox>
                        </div>
                      </div>
                    ): null
                  }
                </div>
                {
                  this.isValid()? 
                    <Button className="program-button" onClick={this.handleFormSubmit}>Submit</Button>:
                    <Button className="program-button disabled" disabled>Submit</Button>
                }
              </Form>
          </div>
        </div>
        <Footer />
        {this.state.redirect? <Redirect to="/home" /> : null}
      </div>
    );
  }
  
}
