import React, { Component } from 'react';
import halsalogo from '../image/halsalogo2.png';

 class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="halsalogo">
          <img src={halsalogo} width="" height="" />
        </div>
      </div>
    );
  }
}


export default Header
