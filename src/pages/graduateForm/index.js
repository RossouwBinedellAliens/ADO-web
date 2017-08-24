import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./style.css";
import 'antd/dist/antd.css';
import TopNav from "./../../components/TopNav/index.js";
import leftBlockImage from "./../../assets/images/grad-left-image.png";
import axios from 'axios';
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

      usernameError: "",
      surnameError: "",
      emailError: "",
      cellnumberError: "",

      dataset: ""
    };

    this.username_OnChange = this.username_OnChange.bind(this);
    this.surname_OnChange = this.surname_OnChange.bind(this);
    this.email_OnChange = this.email_OnChange.bind(this);
    this.cellnumber_OnChange = this.cellnumber_OnChange.bind(this);


    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.whenFileDropped = this.whenFileDropped.bind(this);
  }

  handleFormSubmit(){
    console.log(this.state)    
    
    var newData = this.state.dataset;

    newData.append("username", this.state.username);
    newData.append("surname", this.state.surname);
    newData.append("email", this.state.email);
    newData.append("cellnumber", this.state.cellnumber);
    newData.append("form", " - Graduate Applicant");


    this.setState({dataset: newData});

    var options = {
      url: 'http://localhost:8080/ado-gradForm/sendEmail',
      method: "POST",
      json: true,
      processData: "false",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: this.state.dataset
    };

    axios.post("http://localhost:8080/ado-gradForm/sendEmail", this.state.dataset).then(res => {
      console.log(res);
    });
  }

  whenFileDropped(files) {
    const file = files[0];
    var data = new FormData();
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

  render() {
    const suffix = true ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    return (
      <div>
        <div>
          <TopNav />
        </div>

        <div className="container">

          <div className="left-info-block">
            <div>
              <img className="left-info-block-image" src={leftBlockImage} alt="ddd" />
            </div>
            <p className="left-info-block-text">
              We don’t only want to hire the top creatives in the country but we also want to be a key player in growing the skills of young South Africans. Our graduate programme provides you with the knowledge and experience you will need to suceed. We also aim to create an interest in Human-centered Design (HCD)  and become the employer of choice for design graduates.
            </p>
            <p className="left-info-block-text-bottom">
              Applications Close: Friday 27 October 2017 - 23h59
            </p>
          </div>
          
          <div className="overlap-block">
            <h1 className="overlap-block-text" >Graduate<br></br>Programme</h1>
          </div>

          <div className="form-container">
                <Form layout="inline" onSubmit={this.handleFormSubmit}>
                  <FormItem
                    validateStatus={this.state.usernameError}
                    //help={this.state.usernameError}
                  >
                    
                  <Input
                    style={{ width: "320px" , marginTop:"35px", height: "50px", marginLeft: "64px"}}
                    placeholder="  Enter your Username"
                    prefix={<Icon type="user" style={{ fontSize: "18px"}}/>}
                    suffix={suffix}
                    size="large"
                    onChange={(e) => this.username_OnChange({username: e.target.value})}
                    value={this.state.username}
                  />
                </FormItem>

                   <FormItem validateStatus={this.state.surnameError}>
                       <Input
                          style={{ width: "320px" , height: "50px", marginLeft: "64px", marginTop:"35px"}}
                          placeholder="  Enter your Surname"
                          prefix={<Icon type="user" style={{ fontSize: "18px"}}/>}
                          suffix={suffix}
                          size="large"
                          onChange={(e) => this.surname_OnChange({surname: e.target.value})}
                          value={this.state.surname}
                        />
                  </FormItem>

                   <FormItem validateStatus={this.state.emailError}> 
                       <Input
                          style={{ width: "320px" , height: "50px", marginLeft: "64px", marginTop:"35px"}}
                          placeholder="  Enter your Email address"
                          prefix={<Icon type="mail" style={{ fontSize: "18px"}}/>}
                          suffix={suffix}
                          size="large"
                          onChange={(e) => this.email_OnChange({email: e.target.value})}
                          value={this.state.email}
                        />
                  </FormItem>
                   <FormItem validateStatus={this.state.cellnumberError}>
                        <Input
                          style={{ width: "320px" , height: "50px", marginLeft: "64px", marginTop:"35px"}}
                          placeholder="  Enter your Phone Number"
                          prefix={<Icon type="phone" style={{ fontSize: "18px"}}/>}
                          suffix={suffix}
                          size="large"
                          onChange={(e) => this.cellnumber_OnChange({cellnumber: e.target.value})}
                          value={this.state.cellnumber}
                        />
                  </FormItem>

                  <Checkbox className="form-checkbox">Can we give you a shout in future?</Checkbox>
                  
                </Form>
                <p className="file-drop-text"> Who are you? Upload a video, drawing, poem or anything you like so we can get to know you. Be Creative.</p>
                <Dropzone onDrop={this.whenFileDropped} className="file-drop">
                </Dropzone>

                 <Button type="primary" onClick={this.handleFormSubmit}>
                    Submit
                  </Button>
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }
  
}


