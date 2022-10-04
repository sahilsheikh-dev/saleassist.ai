import React, {Component} from 'react';
import Arrow from "../../assests/arrows/arrow-top-right.svg";
import Logo from "../../assests/Logo/logo.png";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>SaleAssist - Login</title>
        </Helmet>
      <div className="safemeet-login">
        <div className="safemeet-login-col-1">
          <div className="safemeet-login-col-1-logo-placement">
            <Link to="/">
              <img src={Logo} alt="logo"/>
            </Link>
            <form>
              <label for="email">Email or Mobile Number</label>
              <div>
                <input type="email" placeholder="Email Here" id="email"/>
              </div>
              <label for="password">Password</label>
              <div>
                <input type="password" placeholder="Password Here" id="password"/>
              </div>
              <div className="safemeet-text-center">
                <button className="safemeet-login-btn safemeet-mg-t-1">LOGIN</button>
              </div>
              <div className="safemeet-text-center safemeet-mg-t-1">
                <Link to="/forget-password">FORGET PASSWORD ?</Link>
              </div>
              <div className="safemeet-text-center safemeet-mg-t-1">
                <Link to="/register">SIGN UP</Link>
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
          <Link to="/demo"><button className="safemeet-login-btn">Book a demo<img src={Arrow} alt="demo btn"/></button></Link>
        </div>
      </div>
      </React.Fragment>
    )
  }
}
