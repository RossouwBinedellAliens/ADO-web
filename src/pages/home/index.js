import React, { Component } from 'react';
import Subview1 from "./subview1";
import Subview2 from "./subview2";
import Subview3 from "./subview3";
import "./style.css";
import TopNav from "./../../components/TopNav/index.js";

// Main container for the homescreen
class Home extends Component {
  render() {
    return (
      <div >
        <TopNav/>
        <Subview1 />
        <Subview2 />
        <Subview3 />
      </div>
    );
  }
}

export default Home;
