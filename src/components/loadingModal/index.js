import React, { Component } from 'react';
import Modal from 'react-modal';
import "./style.css";

import loading from '../../assets/images/loading.gif';

const modalStyle = {
  overlay : {
    backgroundColor   : 'rgba(1, 1, 1, 0.6)'
  },
  content : {
    position                   : 'absolute',
    top                        : 'calc(50% - 110px)',
    left                       : 'calc(50% - 110px)',
    right                      : 'calc(50% - 110px)',
    bottom                     : 'calc(50% - 110px)',    
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '5px',
    outline                    : 'none',
    padding                    : '0px',
    "z-index"                  : '999'
  }
}

export default class ModalLoading extends Component {
    render() {
      return (
          <Modal
            style={modalStyle}
            isOpen={true}
            contentLabel="Loading"
          >
              <div className="loading-content">
                <img src={loading} alt="loading"/>
                <span>Submitting ...</span>
              </div>
          </Modal>
      );
    }
  }

