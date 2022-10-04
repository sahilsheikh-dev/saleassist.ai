import React, {Component} from 'react'
import {Link} from "react-router-dom";
import Features from '../Features/Features';
import Customers from '../Customers/Customers';
import Resource from '../Resource/Resource';

export default class Navbar2 extends Component {
  render() {
    return (
      <div className="safemeet-container safemeet-navbar-fixed" style={{backgroundColor:"transparent"}}>
        <div className="safemeet-row safemeet-navbar">
          <div className="safemeet-col">
          </div>
          <div className="safemeet-col safemeet-row safemeet-navbar-items">
            <div className="safemeet-navitem safemeet-pd-b-2 safemeet-pd-t-2">
              <Link>FEATURES</Link>
              <Features/>
            </div>
            <div className="safemeet-navitem">
              <Link>CUSTOMERS</Link>
            <Customers/>
            </div>
            <div className="safemeet-navitem">
              <Link>RESOURCES</Link>
            <Resource/>
            </div>
            <div className="safemeet-navitem">
              <Link to="/pricing">PRICING</Link></div>
            <div className="safemeet-navitem">
              <Link to="/login">LOGIN</Link>
            </div>
            <Link to="/demo">
            <button className="safemeet-btn">
            Book a Demo</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
