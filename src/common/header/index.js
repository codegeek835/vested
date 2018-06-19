import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavBar from "./navbar";
import Menu from "./menu";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Menu />
      </div>
    );
  }
}

export default Header;
