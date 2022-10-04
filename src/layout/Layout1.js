import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MobNavbar from "../components/Mob-Navbar/MobNavbar";

export default class Layout1 extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          btn={this.props.btn}
          color={this.props.color}
          activeClass={this.props.activeClass}
        />
        <MobNavbar />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}
