import React, { Component } from 'react';
import Subview1 from "./subview1";
import Subview2 from "./subview2";
import "./style.css";

// Main container for the homescreen
class Home extends Component {
  render() {
    return (
      <div >
        <Subview1 />
        <Subview2 />
      </div>
    );
  }
}

export default Home;
