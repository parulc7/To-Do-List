import React, { Component } from 'react';
import '../index.css';

class Header extends Component {
  render(){
    return(
      <div className="col center-align s12 m12 l12">
      <h1>{this.props.title}</h1>
    </div>
  )}
}

export default Header;
