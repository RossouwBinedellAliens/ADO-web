import React, { Component } from 'react';
import Modal from 'react-modal';
import "./style.css";

import modalFailed from '../../assets/images/modal-failed.svg';
import modalSuccess from '../../assets/images/modal-success.svg';
import close from '../../assets/images/close-dark.svg';

import data from '../../assets/data/EN/modal-info.json';

const modalStyle = {
  overlay : {
    backgroundColor   : 'rgba(1, 1, 1, 0.6)'
  },
  content : {
    position                   : 'absolute',
    top                        : 'calc(50% - 200px)',
    left                       : 'calc(50% - 137.5px)',
    right                      : 'calc(50% - 137.5px)',
    bottom                     : 'calc(50% - 200px)',    
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '5px',
    outline                    : 'none',
    padding                    : '0px'

  }
}

export default class ModalDialogue extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        modalIsOpen: this.props.isOpen
      };
  
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
  
    openModal() {
      this.setState({modalIsOpen: true});
    }
  
    closeModal() {
      this.setState({modalIsOpen: false});
    }
  
    render() {
      return (
          <Modal
            style={modalStyle}
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Success Modal"
          >
              <div className="modal-content">
                <div className="top-container">
                  <img className="close" src={close} alt="Close image"/>
                  <img className="top-image" src={this.props.success? modalSuccess: modalFailed} alt="Success image" />
                </div>
                <div className="bottom-container">
                  <h2>{this.props.success? data.success.title: data.failed.title}</h2>
                  <p>{this.props.success? data.success.content: data.failed.content}</p>
                  <a onClick={ev => this.closeModal()} className="program-button">{this.props.success? data.success.button: data.failed.button}</a>
                </div>
              </div>
          </Modal>
      );
    }
  }

