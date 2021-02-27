import React, { Component } from 'react'
import star from '../star.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://github.com/shumbul/HackVerse-21_iQhackers/"
          target="_blank" >
          
          <img src={star} width="35" height="35" className="d-inline-block align-top" alt="" />
          &nbsp; DeFi
        </a>
      </nav>
    );
  }
}

export default Navbar;
