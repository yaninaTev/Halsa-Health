
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Popup extends React.Component {
  render() {
    return (
      <div className="pop-container">
      <div className='popup'>
        <div className='popup_inner'>


       <p className=""> Are you sure you want to change your Plan?</p>
          <h1>{this.props.text}</h1>
           <Link className= "button-pop" id = "b1" to='/Form'>Choose another plan</Link>

        <button className="button-pop" id ="b2" onClick={this.props.closePopup}>Keep plan</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Popup;
