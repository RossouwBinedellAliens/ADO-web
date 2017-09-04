import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Checkbox } from 'antd';
import axios from 'axios';
import TopNav from "./../../components/TopNav";
import Footer from "./../../components/footer";
import ModalDialogue from '../../components/ModalDialogue';
import ModalLoading from '../../components/loadingModal';
import FormInput from '../../components/forminput';

import leftBlockImage from "./../../assets/images/vacation-work.svg";
import star from '../../assets/images/star.png';

import 'antd/dist/antd.css';
import "./style.css";

import data from '../../assets/data/EN/vacation-form.json';
import config from '../../config.json';

export default class VacationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      surname: "",
      email: "",
      cellnumber: "",
      story: "",
      informAgain: false,

      usernameError: "",
      surnameError: "",
      emailError: "",
      cellnumberError: "",

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
    return true;
  }

  validateEmail(email) {
    var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
  }

  handleFormSubmit(){

    this.setState({loading: true});

    var data = {
      username: this.state.username,
      surname: this.state.surname,
      email: this.state.email,
      cellnumber: this.state.cellnumber,
      informAgain: this.state.informAgain? "Yes": "No",
      textBlock: this.state.story,
      form: "Vacation Applicant - "
    }

    var instance = axios.create({
      baseURL: config.serverUrl,
      timeout: 60000
    });

    instance.post(config.serverUrl + "ado-vacationForm/sendEmail", data).then(res => {
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

  username_OnChange(username){
    if(username.length <= 1){
      this.setState({username: username, usernameError: "error", usernameHelp: "Please enter your name. Characters only."});
    }else{
      this.setState({username: username, usernameError: "success", usernameHelp: ""});
    }
  }

  surname_OnChange(surname){
    if(surname.length <= 1){
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
    } else if (cellnumber.length === 10) {
      this.setState({cellnumber: cellnumber, cellnumberError: "success", cellnumberHelp: ""});
    }
  }

  story_OnChange(story){
    this.setState(story);
  }

  render() {
    return (
      <div className="vacation-form-content">
        <TopNav />
        {this.state.loading? <ModalLoading />: null }
        {this.state.modal? <ModalDialogue closeAction={this.modalAction} isOpen={this.state.modal} success={this.state.mailStatus} />: null }
        <div className="content-container-form">
          <div className="col-1">
            <img className="left-info-block-image" src={leftBlockImage} alt="ddd" />
            <div className="top-title">
              <h1>{data.t1}</h1>
            </div>
            <p className="main-text">{data.p1}</p>
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
                icon={star}
                iconError={star}
                successImage={star}
                errorImage={leftBlockImage}
              />
              <FormInput
                className="form-item"              
                doChange={this.surname_OnChange}
                placeHolder="SurName"
                value={this.state.surname}
                isError={this.state.surnameError}
                help={this.state.surnameHelp}
                icon={star}
                iconError={star}
                successImage={star}
                errorImage={leftBlockImage}
              />
              <FormInput
                className="form-item"
                doChange={this.email_OnChange}
                placeHolder="Email address"
                value={this.state.email}
                isError={this.state.emailError}
                help={this.state.emailHelp}
                icon={star}
                iconError={star}
                successImage={star}
                errorImage={leftBlockImage}
              />
              <FormInput
                className="form-item"              
                doChange={this.cellnumber_OnChange}
                placeHolder="Phone number"
                value={this.state.cellnumber}
                isError={this.state.cellnumberError}
                help={this.state.cellnumberHelp}
                icon={star}
                iconError={star}
                successImage={star}
                errorImage={leftBlockImage}
              />
                <Checkbox className="form-checkbox" checked={this.state.informAgain} onChange={ev => this.story_OnChange({informAgain: !this.state.informAgain})}>{data.p2}</Checkbox>  
                <div className="textarea-container">
                  <div className="textarea-content" >
                    <img src={star} alt="star"/>
                    <p className="textarea-text">{data.p3}</p>
                  </div>
                </div>
                <textarea className="textarea-input" onChange={ev => this.story_OnChange({story: ev.target.value})} maxLength="200" placeholder="MAX 200 Words" />
                {
                  this.isValid()? 
                    <button className="program-button" onClick={this.handleFormSubmit}>Submit</button>:
                    <button className="program-button disabled" disabled>Submit</button>
                }
              </div>
          </div>
        </div>
        <Footer />
        {this.state.redirect? <Redirect to="/home" /> : null}
      </div>
    );
  }
}
