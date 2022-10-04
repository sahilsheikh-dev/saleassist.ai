import React, {Component} from 'react';
import Arrow from "../../assests/arrows/arrow-top-right.svg";
import Logo from "../../assests/Logo/logo.png";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

export default class ForgetPassword extends Component {
    render() {
        return (
            <React.Fragment>
        <Helmet>
          <title>SaleAssist - SignUp</title>
        </Helmet>
        <div className="safemeet-login">
          <div className="safemeet-login-col-1">
            <div className="safemeet-login-col-1-logo-placement">
              <Link to="/">
                <img src={Logo} alt="logo"/>
              </Link>
              <h1 className="safemeet-mg-t-1">Recover Your Account using Email</h1>
              <form>
                <label for="email">Email or Mobile Number</label>
                <div>
                  <input type="email" placeholder="Email Here" id="email"/>
                </div>
                <div className="safemeet-text-center">
                  <button className="safemeet-login-btn safemeet-mg-t-1">RECOVER</button>
                </div>
                <div className="safemeet-text-center safemeet-mg-t-1">
                  <Link to="/login">LOGIN</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="safemeet-login-col-2">
            <h4 className="">Hello,we are saleassist!</h4>
            <p>
              Reach your customers wherever they are. Gain reviews, collect payments,
              communicate with customers, and capture leads—all from a single inbox.
            </p>
            <button className="safemeet-login-btn">Book a demo<img src={Arrow} alt=""/></button>
          </div>
        </div>
      </React.Fragment>
        )
    }
}
