import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assests/Logo/logo.png";
import { Squash as Hamburger } from "hamburger-react";
import DropDown from "../../assests/arrows/down-arrow.png";
import ArrowUp from "../../assests/arrows/arrow-up.png";
import MobFeatures from "../Mob-Features/MobFeatures";
import MobCustomer from "../Mob-Customer/MobCustomer";
import Tooltip from "@mui/material/Tooltip";

export default class MobNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      MobNavItems: false,
      CurrentNavIndex: null,
      position: document.documentElement.scrollTop || document.body.scrollTop,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      MobNavItems: false,
    });
    if (!this.state.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  handleClick = (index) => {
    //toggle navbar
    if (index === this.state.CurrentNavIndex) {
      this.setState({
        MobNavItems: !this.state.MobNavItems,
      });
    } else {
      //setting up states
      this.setState({ CurrentNavIndex: index, MobNavItems: true });
    }
  };

  pricing = () => {
    document.body.style.overflow = "scroll";
    this.setState({ isOpen: false });
  };

  handleClickOnLogo = () => {
    document.body.style.overflow = "scroll";
    if (this.state.isOpen) {
      this.toggle();
    }
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    window.addEventListener(
      "scroll",
      () => {
        this.setState({
          position:
            document.documentElement.scrollTop || document.body.scrollTop,
        });
      },
      { passive: true }
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {
      this.setState({
        position: document.documentElement.scrollTop || document.body.scrollTop,
      });
    });
  }

  render() {
    const ResourcesItems = [
      {
        name: "API Docs",
        path: "https://platform.saleassist.ai/redoc",
        target: "_blank",
      },
      { name: "Blogs", path: "/blogs" },
      { name: "Partners", path: "/partner" },
      { name: "One-To-One", path: "/one-to-one" },
      { name: "One-To-Many", path: "/one-to-many" },
    ];
    return (
      <div className="safemeet-mob-navbar">
        <div
          className="safemeet-top-strip"
          style={{ display: this.state.position === 0 ? "inherit" : "none" }}
        >
          Proud to be part  SAP.io , MG Motors DP3.0 and Salesforce for startups program. 🎉{" "}
          <a href="https://retechcon.com/award-2021.php" target="_saleassist">
            Read more.
          </a>
        </div>
        <div className="safemeet-container safemeet-mob-navbar-row">
          <div className="safemeet-mob-navbar-row-col-1">
            <Link to="/" onClick={this.handleClickOnLogo}>
              <img src={Logo} alt="SaleAssist.ai" />
            </Link>
          </div>
          <div
            style={{ display: "flex", placeContent: "end" }}
            className="safemeet-mob-navbar-row-col-2"
          >
            <Tooltip title={this.state.isOpen ? "Close" : "Menu"}>
              <div style={{ display: "inline-flex" }}>
                <Hamburger toggled={this.state.isOpen} toggle={this.toggle} />{" "}
              </div>
            </Tooltip>
            {this.state.isOpen && (
              <div className="safemeet-mob-navbar-items">
                <div className="safemeet-container">
                  <Link to="/features" className="link" onClick={this.pricing}>
                    <h3 className="h3">Features</h3>
                  </Link>
                  {["Resources"].map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="safemeet-text-center">
                          <div
                            className="mob-navbar"
                            onClick={() => this.handleClick(index)}
                          >
                            <h3>{`${item} `}</h3>
                            <img
                              src={
                                this.state.CurrentNavIndex === index &&
                                this.state.MobNavItems
                                  ? ArrowUp
                                  : DropDown
                              }
                              alt="down-arrow"
                            />
                          </div>
                          {index === 0 &&
                            this.state.CurrentNavIndex === 0 &&
                            this.state.MobNavItems && (
                              <MobCustomer
                                list_of_navbar_items={ResourcesItems}
                                btn="Book Demo"
                              />
                            )}
                        </div>
                      </React.Fragment>
                    );
                  })}

                  <Link to="/pricing" className="link" onClick={this.pricing}>
                    <h3 className="h3">Pricing</h3>
                  </Link>
                  <Link
                    className="link"
                    to={{ pathname: "https://my.saleassist.ai" }}
                    target="_parent"
                    rel="noopener noreferrer"
                  >
                    <h3 className="h3">Log In</h3>
                  </Link>
                  <div className="h3-btn">
                    <Link to="/demo">
                      <button className="safemeet-btn safemeet-mg-t-1 safemeet-mg-b-1">
                        Book Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
