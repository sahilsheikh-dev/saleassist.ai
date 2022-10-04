import React, { Component } from "react";
import Logo from "../../assests/Logo/logo.png";
import WhiteLogo from "../../assests/Logo/logo white.png";
import { Link, NavLink } from "react-router-dom";
import Resource from "../Resource/Resource";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    //feature Ref
    this.featureRef = React.createRef();
    //customers Ref
    this.customersRef = React.createRef();
    // resources Ref
    this.resourcesRef = React.createRef();
    this.state = {
      navbarColor: false,
      redirect_id: "0",
    };
    this.redirect_id = "0";
  }

  handleScroll = () => {
    const position = window.scrollY;
    const { redirect_id } = this.state;
    if (position > 1) {
      this.setState({ navbarColor: true });
      if (this.featureRef.current && redirect_id === "1") {
        this.featureRef.current.className = "active-feature";
      } else if (this.customersRef.current && redirect_id === "2") {
        this.customersRef.current.className = "active-feature";
      } else if (this.resourcesRef.current && redirect_id === "3") {
        this.resourcesRef.current.className = "active-feature";
      }
    } else {
      this.setState({ navbarColor: false });
      if (this.featureRef.current && redirect_id === "1") {
        this.featureRef.current.className = "active-feature-white";
      } else if (this.customersRef.current && redirect_id === "2") {
        this.customersRef.current.className = "active-feature-white";
      } else if (this.resourcesRef.current && redirect_id === "3") {
        this.resourcesRef.current.className = "active-resourse-white";
      }
    }
  };

  componentDidMount = () => {
    var url = window.location.href;
    var id = url.split("?").slice(-1)[0];

    if (id === "1") {
      this.featureRef.current.className = "active-feature-white";
    } else if (id === "2") {
      this.customersRef.current.className = "active-feature-white";
    } else if (id === "3") {
      this.resourcesRef.current.className = "active-resourse-white";
    }
    //setState for navbar active Link
    this.setState({ redirect_id: id });
    //add scroll event here
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", this.handleScroll);
    };
  };

  render() {
    return (
      <React.Fragment>
        <div className="safemeet-top-strip">
          Proud to be part of SAP.io , MG Motors DP3.0 and Salesforce for
          startups program. 🎉{" "}
          <a href="https://retechcon.com/award-2021.php" target="_saleassist">
            Read more.
          </a>
        </div>
        <div
          className={
            this.state.navbarColor
              ? "safemeet-navbar navbar-shadow navbar-bg-color"
              : "safemeet-navbar"
          }
          style={{ top: this.state.navbarColor ? "0px" : "35px" }}
        >
          <div
            className="safemeet-container safemeet-navbar-row"
            style={{
              padding: "0 30px",
            }}
          >
            <div className="safemeet-navbar-row-col-1">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                {this.props.activeClass || this.props.color ? (
                  <img
                    src={
                      (this.state.navbarColor && this.props.activeClass) ||
                      (this.state.navbarColor && this.props.color)
                        ? Logo
                        : WhiteLogo
                    }
                    alt="SaleAssist.ai"
                  />
                ) : (
                  <img src={Logo} alt="SaleAssist.ai" />
                )}
              </Link>
            </div>
            <div className="safemeet-navbar-row-col-2">
              <div
                className={
                  this.state.navbarColor
                    ? "safemeet-navitem"
                    : this.props.color
                    ? this.props.color
                    : "safemeet-navitem"
                }
              >
                <NavLink
                  to="/features"
                  className={
                    this.state.navbarColor
                      ? "link"
                      : this.props.color
                      ? this.props.color
                      : "link"
                  }
                  activeClassName="active-class"
                >
                  Features
                </NavLink>
              </div>
              <div
                className={
                  this.state.navbarColor
                    ? "safemeet-navitem"
                    : this.props.color
                    ? this.props.color
                    : "safemeet-navitem"
                }
              >
                Resources
                {/* <div ref={this.resourcesRef}></div> */}
                <Resource />
              </div>
              <div
                className={
                  this.state.navbarColor
                    ? "safemeet-navitem"
                    : this.props.color
                    ? this.props.color
                    : "safemeet-navitem"
                }
              >
                <NavLink
                  to="/pricing"
                  className={
                    this.state.navbarColor
                      ? "link"
                      : this.props.color
                      ? this.props.color
                      : "link"
                  }
                  activeClassName="active-class"
                >
                  Pricing
                </NavLink>
              </div>
              <div
                className={
                  this.state.navbarColor
                    ? "safemeet-navitem"
                    : this.props.color
                    ? this.props.color
                    : "safemeet-navitem"
                }
              >
                <NavLink
                  className={
                    this.state.navbarColor
                      ? "link"
                      : this.props.color
                      ? this.props.color + " nowWrap"
                      : "link loginMenu"
                  }
                  activeClassName="active-class"
                  to={{ pathname: "https://my.saleassist.ai" }}
                  target="_parent"
                  rel="noopener noreferrer"
                >
                  Login / Sign Up
                </NavLink>
              </div>
              <Link to="/demo">
                <button
                  // className="safemeet-btn"
                  style={{
                    background: "#000000",
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontWeight: "500",
                    border: "1px solid #000000",
                    padding: "8px 10px",
                  }}
                >
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
