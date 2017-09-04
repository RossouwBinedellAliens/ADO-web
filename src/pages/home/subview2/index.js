import React, { Component } from 'react';
import Pillar from "./../../../components/principlePillar";
import "./style.css";

import data from "./../../../assets/data/EN/home-subview2.json";
import adoImage from "./../../../assets/images/ADO-Image.png"
import pillar1 from "./../../../assets/images/Pillar/Pillar-1.svg";
import pillar2 from "./../../../assets/images/Pillar/Pillar-2.svg";
import pillar3 from "./../../../assets/images/Pillar/Pillar-3.svg";
import pillar4 from "./../../../assets/images/Pillar/Pillar-4.svg";
import pillar5 from "./../../../assets/images/Pillar/Pillar-5.svg";
import pillar6 from "./../../../assets/images/Pillar/Pillar-6.svg";
import pillar7 from "./../../../assets/images/Pillar/Pillar-7.svg";

import pillarHover1 from "./../../../assets/images/Pillar/Pillar-1.svg";
import pillarHover2 from "./../../../assets/images/Pillar/Pillar-2.svg";
import pillarHover3 from "./../../../assets/images/Pillar/Pillar-3.svg";
import pillarHover4 from "./../../../assets/images/Pillar/Pillar-4.svg";
import pillarHover5 from "./../../../assets/images/Pillar/Pillar-5.svg";
import pillarHover6 from "./../../../assets/images/Pillar/Pillar-6.svg";
import pillarHover7 from "./../../../assets/images/Pillar/Pillar-7.svg";

const pillarImages = [ pillar1, pillar2, pillar3, pillar4, pillar5, pillar6, pillar7 ];
const pillarHoverImages = [ pillar1, pillar2, pillar3, pillar4, pillar5, pillar6, pillar7 ];

export default class Subview2 extends Component {
constructor(props){
  super(props)
  
  this.state = {
    pillarImages: pillarImages,
    pillarText: [
      data.pillar1,
      data.pillar2,
      data.pillar3,
      data.pillar4,
      data.pillar5,
      data.pillar6,
      data.pillar7
    ]
  }
}
  
  render() {
    return (
      <div className="content-segment-2" id="content-segment-2">
        <div className="row-1">
          <div className="col-1">
            <div>
              <h1>{data.t1}</h1>
              <p>{data.p1Content}</p>
            </div>
            <div>
              <div className="image-container">
                <img className="content-image" src={adoImage} alt="Not found"/>
            </div>
          </div>    
          </div>
            <div className="text-container">
              <h2>{data.p2Title}</h2>
              <p>{data.p2Content}</p>
            </div>
          </div>
        <div className="row-3"> 
          {
            this.state.pillarText.map((text, i) => {
              return <Pillar text={ text } image={ pillarImages[i] } hoverImage={ pillarHoverImages[i] }/>
            })
          }
        </div> 
      </div>
    );
  }
}

