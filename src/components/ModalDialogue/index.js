import React, { Component } from 'react';
import Modal from 'react-modal';
import "./style.css";

import modalFailed from '../../assets/images/modal-failed.svg';
import modalSuccess from '../../assets/images/modal-success.svg';
import close from '../../assets/images/close-dark.svg';

import data from '../../assets/data/EN/modal-info.json';

const modalStyleMobile = {
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
    padding                    : '0px',
    "z-index"                  : '999'
  }
}

const modalStyleDesktop = {
  overlay : {
    backgroundColor   : 'rgba(1, 1, 1, 0.6)'
  },
  content : {
    position                   : 'absolute',
    top                        : 'calc(50% - 250px)',
    left                       : 'calc(50% - 500px)',
    right                      : 'calc(50% - 500px)',
    bottom                     : 'calc(50% - 250px)',    
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '5px',
    outline                    : 'none',
    padding                    : '0px',
    "z-index"                  : '999'
  }
}

export default class ModalDialogue extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        modalIsOpen: this.props.isOpen,
        width: 0, 
        height: 0 
      };
  
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


    openModal() {
      this.setState({modalIsOpen: true});
    }
  
    closeModal() {
      this.setState({modalIsOpen: false});
      this.props.closeAction();
    }
  
    render() {
      if (this.state.width < 1150)

        return (
            <Modal
              style={modalStyleMobile}
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Success Modal"
            >
              <div className="modal-content-mobile">
                <div className="top-container">
                  { this.props.success? null: <img className="close" src={close} onClick={this.closeModal} alt="Close image"/> }
                  <img className="top-image" src={this.props.success? modalSuccess: modalFailed} alt="Success image" />
                </div>
                <div className="bottom-container">
                  <h2>{this.props.success? data.success.title: data.failed.title}</h2>
                  <p>{this.props.success? data.success.content: data.failed.content}</p>
                  <a onClick={ev => this.closeModal()} className="program-button">{this.props.success? data.success.button: data.failed.button}</a>
                </div>
              </div>
            </Modal>
        )
        else 
          return (
            <Modal
              style={modalStyleDesktop}
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Success Modal"
            >
              <div className="modal-content-desktop">
                <div className="left-container">
                  { this.props.success? null: <img className="close" src={close} onClick={this.closeModal} alt="Close image"/> }
                  <img className="main-image" src={this.props.success? modalSuccess: modalFailed} alt="Success image" />
                </div>
                <div className="right-container">
                  <h2>{this.props.success? data.success.title: data.failed.title}</h2>
                  <p>{this.props.success? data.success.content: data.failed.content}</p>
                  <a onClick={ev => this.closeModal()} className="program-button">{this.props.success? data.success.button: data.failed.button}</a>
                </div>
              </div>
            </Modal>              
          )
    }
  }

