import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import TopNav from "./../../components/TopNav";
import Footer from "./../../components/footer";
import ModalDialogue from '../../components/ModalDialogue';
import ModalLoading from '../../components/loadingModal';
import FormInput from '../../components/forminput';

import leftBlockImage from "./../../assets/images/grad-left-image.png";
import star from '../../assets/images/star.png';
import dropDark from '../../assets/images/drop-dark.png';
import dropLight from '../../assets/images/drop-light.png';
import success from '../../assets/images/drop-success.png';
import close from '../../assets/images/close.png';

import user from '../../assets/images/form-icons/user.svg';
import userInvalid from '../../assets/images/form-icons/user-invalid.svg';
import email from '../../assets/images/form-icons/email.svg';
import emailInvalid from '../../assets/images/form-icons/email-invalid.svg';
import phone from '../../assets/images/form-icons/phone.svg';
import phoneInvalid from '../../assets/images/form-icons/phone-invalid.svg';

import formValid from '../../assets/images/form-icons/valid.svg';
import formInvalid from '../../assets/images/form-icons/invalid.svg';


import 'antd/dist/antd.css';
import "./style.css";

import data from '../../assets/data/EN/graduate-form.json';
import config from '../../config.json';

var Dropzone = require('react-dropzone');

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

      usernameHelp: "", 
      surnameHelp: "", 
      emailHelp: "", 
      cellnumberHelp: "",
      file: null,

      dataset: new FormData(),

      citizen: null,
      visa: null,

      loading: false,
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
    if (!this.validateName(this.state.username)) 
      return false
    if (!this.validateName(this.state.surname)) 
      return false
    if (!this.validateNumber(this.state.cellnumber)) 
      return false
    if (!this.validateEmail(this.state.email)) 
      return false
    if (!this.state.citizen === true){
      if (this.state.visa === null)
        return false;
    }
    if (this.state.file === null)
      return false;
    return true;
  }

  validateEmail(email) {
    var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
  }

  validateName(name) {
    var pattern = /^[a-zA-Z\s]+$/;
    return pattern.test(name);
  }

  validateNumber(number) {
    var pattern = /^\d+$/;
    return pattern.test(number);
  }

  handleFormSubmit(){
    var newData = this.state.dataset;

    newData.append("username", this.state.username);
    newData.append("surname", this.state.surname);
    newData.append("email", this.state.email);
    newData.append("cellnumber", this.state.cellnumber);
    newData.append("form", "Graduate Applicant - ");    

    if(this.state.informAgain){
      newData.append("informAgain", "Yes");
    }else{
      newData.append("informAgain", "No");
    }

    if(!this.state.citizen){
      newData.append("isCitizen", "No");
      if(this.state.visa){
        newData.append("visa", "Yes");
      }else{
        newData.append("visa", "No");
      }
    }else{
      newData.append("isCitizen", "Yes");
      newData.append("visa", "N/A");
    }

    this.setState({dataset: newData, loading: true});

    var instance = axios.create({
      baseURL: config.serverUrl,
      timeout: 60000
    });

    instance.post(config.serverUrl + "ado-gradForm/sendEmail", newData).then(res => {
      if (res.status === 200) {
        console.log("Succesfully sent email!");
        this.setState({
          loading: false,          
          mailStatus: true,
          modal: true
        })
      } else {
        console.log("Failed to send email");
        this.setState({
          loading: false,          
          mailStatus: false,
          modal: true
        })
      }
    }, err => {
      console.log(err);
      this.setState({
        loading: false,        
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
    let file = files[0];

    if (file.size <= 5000000){
      var data = this.state.dataset;
      data.append("file", file);    
      this.setState({dataset: data, file: file});
    } else {
      
    }
  }

  username_OnChange(username){
    if(!this.validateName(username)){
      this.setState({username: username, usernameError: "error", usernameHelp: "Please enter your name. Characters only."});
    }else{
      this.setState({username: username, usernameError: "success", usernameHelp: ""});
    }
  }

  surname_OnChange(surname){
    if(!this.validateName(surname)){
      this.setState({surname: surname, surnameError: "error", surnameHelp: "Please enter your surname. Characters only."});
    }else{
      this.setState({surname: surname, surnameError: "success", surnameHelp: ""});
    }
  }

  email_OnChange(email){
     if(!this.validateEmail(this.state.email)){
      this.setState({email: email, emailError: "error", emailHelp: "Please enter a valid email address."});
    }else{
      this.setState({email: email, emailError: "success", emailHelp: ""});
    }
  }

  cellnumber_OnChange(cellnumber){
    if(cellnumber.length < 10){
      this.setState({cellnumber: cellnumber, cellnumberError: "error", cellnumberHelp: "Please enter a valid Cell Number. Digits only."});
    } else if (cellnumber.length == 10 && this.validateNumber(cellnumber)) {
      this.setState({cellnumber: cellnumber, cellnumberError: "success", cellnumberHelp: ""});
    }
  }

  check(state){
    this.setState(state);
  }

  render() {
    return (
      <div className="graduate-form-content">
        <TopNav />
        {this.state.loading? <ModalLoading />: null }
        {this.state.modal? <ModalDialogue closeAction={this.modalAction} isOpen={this.state.modal} success={this.state.mailStatus} />: null }
        <div className="content-container-form">
          <div className="col-1">
            <img className="left-info-block-image" src={leftBlockImage} alt="This is a picture." />
            <div className="top-title">
              <h1>{data.t1}</h1>
            </div>
            <p className="main-text"><b>{data.p1}</b></p>
            <p className="closure-text">{data.p2}</p>
          </div>
          <div className="col-2">
            <div className="form-container">
              <FormInput
                className="form-item"
                doChange={this.username_OnChange}
                placeHolder="First name"
                value={this.state.username}
                isError={this.state.usernameError}
                help={this.state.usernameHelp}
                icon={user}
                iconError={userInvalid}
                successImage={formValid}
                errorImage={formInvalid}
              />
              <FormInput
                className="form-item"              
                doChange={this.surname_OnChange}
                placeHolder="Surname"
                value={this.state.surname}
                isError={this.state.surnameError}
                help={this.state.surnameHelp}
                icon={user}
                iconError={userInvalid}
                successImage={formValid}
                errorImage={formInvalid}
              />
              <FormInput
                className="form-item"
                doChange={this.email_OnChange}
                placeHolder="Email address"
                value={this.state.email}
                isError={this.state.emailError}
                help={this.state.emailHelp}
                icon={email}
                iconError={emailInvalid}
                successImage={formValid}
                errorImage={formInvalid}
              />
              <FormInput
                className="form-item"              
                doChange={this.cellnumber_OnChange}
                placeHolder="Phone number"
                value={this.state.cellnumber}
                isError={this.state.cellnumberError}
                help={this.state.cellnumberHelp}
                icon={phone}
                iconError={phoneInvalid}
                successImage={formValid}
                errorImage={formInvalid}
              />
              
                <div className="form-checkbox">
                  <div className={this.state.informAgain  ? "ticked-form-checkbox" : "unticked-form-checkbox"} onClick={() => this.check({informAgain: !this.state.informAgain})}/>
                  <span className="form-checkbox-text">{data.p3}</span>
                </div>
                
                <div className="file-drop-container">
                  <div className="file-drop-content" >
                    <img src={star} alt="star"/>
                    <p className="file-drop-text">{data.p4}</p>
                  </div>
                  <Dropzone onDrop={this.whenFileDropped} className="file-drop" >
                    {
                      this.state.file === null? (
                      <div className="drop-no-file">
                        <img src={dropDark} alt="drop-zone" />
                        <span className="line-1">Select file to upload</span>
                        <span className="line-2">MAX 5mb</span>
                      </div> ): (
                        <div className="drop-file">
                          <img className="remove" src={close} onClick={ex => this.check({file: null})} alt="close"/>
                          <img className="success" src={success} alt="drop-zone"/>
                          <span className="line-1">File Selected!</span>
                          <span className="line-2">{this.state.file.name}</span>
                        </div>
                      )
                    }
                  </Dropzone>
                </div>
                <div className="checkbox-container">
                  <div>
                    <span className="checkbox-text">{data.p5}</span>
                    <div><div className={this.state.citizen && this.state.citizen !== null ? "ticked" : "unticked"} onClick={() => this.check({citizen: true})}></div><span className="span-yes">Yes</span></div>
                    <div><div className={this.state.citizen || this.state.citizen === null? "unticked" : "ticked"} onClick={() => this.check({citizen: false})}></div><span className="span-no">No</span></div>
                  </div>
                  {
                    this.state.citizen === false? (
                      <div>
                        <span className="checkbox-text">{data.p6}</span>
                        <div>
                           <div className={this.state.visa === true ? "ticked" : "unticked"} onClick={() => this.check({visa: true})}></div><span className="span-yes">Yes</span>
                           <div className={this.state.visa === false ? "ticked" : "unticked"} onClick={() => this.check({visa: false})}></div><span className="span-no">No</span>
                        </div>
                      </div>
                    ): null
                  }
                </div>
                {
                  this.isValid()? 
                    <button className="program-button" onClick={this.handleFormSubmit}>Submit</button>:
                    <button className="program-button disabled" disabled>Submit</button>
                }
              </div>
          </div>
        </div>
        <Footer />
        {this.state.redirect? <Redirect to="/" /> : null}
      </div>
    );
  }
  
}
