import React, { Component } from 'react';
import "./style.css";

import ModalDialogue from '../../components/ModalDialogue';

// Rooting to be added later
export default class VacationForm extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      successModalOpen: true
    }
  }

  render() {
    return (
      <div>
        <h1>Das Form</h1>
        <ModalDialogue success={false} isOpen={this.state.successModalOpen}/>
      </div>
    );
  }
}
