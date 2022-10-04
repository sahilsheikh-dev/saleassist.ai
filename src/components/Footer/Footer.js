import React, { Component } from "react";
import { Link } from "react-router-dom";
import Linkedin from "../../assests/Logo/linkedin.svg";
import Youtube from "../../assests/Logo/youtube.svg";
import Facebook from "../../assests/Logo/facebook.svg";
import Instagram from "../../assests/Logo/instagram.svg";
import Twitter from "../../assests/Logo/twitter.svg";
import { objectLength } from "../../helpers/Objects";
import { validateFields } from "../../helpers/Text";
import { postCall } from "../../helpers/Api";
import { config } from "../../config";
import indiaFlag from "../../assests/Logo/indiaFlag.jpg";
import usaFlag from "../../assests/Logo/usaFlag.jpg";
import Validation from "../../helpers/inputValidation";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    const form_data = {
      email: "",
      mobile: "",
      countryCode: "+91",
    };
    this.state = { form_data: form_data, renderThanks: false };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  isAllowed = (value, type) => {
    switch (value) {
      case "countryCode":
        return (type === "" || Validation.CountryCode(type)) && type.length < 5;
      case "mobile":
        return (
          (type === "" || Validation.validateNumber(type)) && type.length < 11
        );
      default:
        return true;
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    let validate = this.isAllowed(name, value);
    if (validate) {
      this.setState({ form_data: { ...this.state.form_data, [name]: value } });
    }
  };
  submitForm(e) {
    e.preventDefault();
    if (objectLength(this.state.form_data) === 0) {
      this.setState({ errors: ["Please fill in the form."] });
      return;
    }
    const errors = validateFields(this.state.form_data);

    if (errors.length > 0) {
      this.setState({ errors: errors });
      return;
    }
    postCall({
      url: config.url.INCOMING_WEBHOOKS,
      path: "/form",
      data: {
        form_data: this.state.form_data,
        title: "Subscription request",
      },
      onSuccess: (response) => {
        this.setState({ renderThanks: true });
        const form_data = {
          email: "",
          mobile: "",
          countryCode: "+91",
        };
        this.setState({ form_data: form_data });
      },
    });
  }
  render() {
    return (
      <div
        className="safemeet-footer"
        style={{
          padding: "80px 30px 50px 30px",
        }}
      >
        <div className="safemeet-footer-row safemeet-container">
          <div className="safemeet-footer-row-col-1 footer-nested-row">
            <div className="footer-nested-row-col-1">
              <h4>Company</h4>
              <h2>
                <Link to="/about-us" className="safemeet-footer-links">
                  About Us
                </Link>
              </h2>
              <h2>
                <Link to="/partner" className="safemeet-footer-links">
                  Partner
                </Link>
              </h2>
              <h2>
                <Link to="/Privacy-Policy" className="safemeet-footer-links">
                  Privacy Policy
                </Link>
              </h2>
              <h2>
                <Link to="/Terms-Conditions" className="safemeet-footer-links">
                  Terms & Conditions
                </Link>
              </h2>
            </div>
            <div className="footer-nested-row-col-2">
              <h4>Features</h4>
              <h2>
                <Link to="/features#ai-chat" className="safemeet-footer-links">
                  AI Chat
                </Link>
              </h2>
              <h2>
                <Link
                  to="/features#live-chat"
                  className="safemeet-footer-links"
                >
                  Live Chat
                </Link>
              </h2>
              <h2>
                <Link to="/features#campaign" className="safemeet-footer-links">
                  Campaign
                </Link>
              </h2>
              <h2>
                <Link to="/features#nudges" className="safemeet-footer-links">
                  Nudges
                </Link>
              </h2>
              <h2>
                <Link to="/features#payments" className="safemeet-footer-links">
                  Payments
                </Link>
              </h2>
              <h2>
                <Link
                  to="/features#co-browsing"
                  className="safemeet-footer-links"
                >
                  Co-browsing
                </Link>
              </h2>
              <h2>
                <Link
                  to="/features#video-chat"
                  className="safemeet-footer-links"
                >
                  Video Chat
                </Link>
              </h2>
              <h2>
                <Link to="/one-to-one" className="safemeet-footer-links">
                  One-to-One
                </Link>
              </h2>
              <h2>
                <Link to="/one-to-many" className="safemeet-footer-links">
                  One-to-Many
                </Link>
              </h2>
            </div>
            <div className="footer-nested-row-col-2">
              <h4>Resources</h4>
              <h2>
                <Link to="/demo" className="safemeet-footer-links">
                  Watch a Demo
                </Link>
              </h2>
              <h2>
                <a
                  href="https://platform.saleassist.ai/redoc"
                  target="_saleassist"
                  className="safemeet-footer-links"
                >
                  API Docs
                </a>
              </h2>
              <h2>
                <Link to="/knowledge-base" className="safemeet-footer-links">
                  Knowledgebase
                </Link>
              </h2>
              <h2>
                <Link to="/Live-shopping" className="safemeet-footer-links">
                  Live Shopping
                </Link>
              </h2>
              <h2>
                <Link
                  to="/livecommerce-electronics"
                  className="safemeet-footer-links"
                >
                  Livecommerce Electronics
                </Link>
              </h2>
              <h2>
                <Link
                  to="/livecommerce-jewellery"
                  className="safemeet-footer-links"
                >
                  Livecommerce Jewellery
                </Link>
              </h2>
              <h2>
                <Link
                  to="/livecommerce-furniture"
                  className="safemeet-footer-links"
                >
                  Livecommerce Furniture
                </Link>
              </h2>
              <h2>
                <Link
                  to="/livecommerce-automobile"
                  className="safemeet-footer-links"
                >
                  Livecommerce Automobile
                </Link>
              </h2>
            </div>
          </div>
          <div className="safemeet-footer-row-col-2">
            <h4>Newsletter</h4>
            <p>All updates straight to your inbox.</p>
            <div className="safemeet-footer-col-subs safemeet-mg-b-1">
              {!this.state.renderThanks && (
                <form onSubmit={this.submitForm}>
                  <div className="formInput">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.form_data.email}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <div className="formInput">
                    <div className="fMobileBox">
                      <input
                        type="text"
                        placeholder="Country Code"
                        className="cuntcode"
                        value={this.state.form_data.countryCode}
                        name="countryCode"
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        type="text"
                        placeholder="Mobile"
                        name="mobile"
                        value={this.state.form_data.mobile}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#c4c4c4",
                      cursor: this.state.disable ? "not-allowed" : "pointer",
                    }}
                    disabled={this.state.disable}
                  >
                    Subscribe
                  </button>

                  <i className="safemeet-error">
                    {this.state.errors && this.state.errors.join(" ")}
                  </i>
                </form>
              )}
              {this.state.renderThanks && (
                <div style={{ color: "white", fontStyle: "italic" }}>
                  Thank you for subscribing.
                </div>
              )}
            </div>
            <h4>SOCIAL</h4>
            <div className="safemeet-mg-b-1">
              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/company/safemeet/mycompany/",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Linkedin}
                  className="footer-social-icons safemeet-mg-r-1"
                  alt="Sale Assist Linkedin"
                />
              </Link>
              <Link
                to={{ pathname: "https://twitter.com/salesassist_ai" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Twitter}
                  className="footer-social-icons safemeet-mg-r-1"
                  alt="Sale Assist Twitter"
                />
              </Link>
              <Link
                to={{ pathname: "https://m.facebook.com/SaleAssistAI/" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Facebook}
                  className="footer-social-icons safemeet-mg-r-1"
                  alt="Sale Assist Facebook"
                />
              </Link>
              <Link
                to={{ pathname: "https://www.instagram.com/sale.assist/" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Instagram}
                  className="footer-social-icons safemeet-mg-r-1"
                  alt="Sale Assist Instagram"
                />
              </Link>
              <Link
                to={{
                  pathname:
                    "https://www.youtube.com/channel/UCzS6BNGpNJ0OUPh60QSrXdA",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Youtube}
                  className="footer-social-icons-utube"
                  alt="Sale Assist Youtube"
                />
              </Link>
            </div>
            <h4 className="safemeet-mg-b-1">Address</h4>
            <div className="addressBox">
              <div className="addressDiv">
                <span className="Flag">
                  <img src={usaFlag} alt="" />
                </span>
                <h4>USA</h4>
                <p>Pobox #438, MORRISVILLE, North Carolina, 27560.</p>
              </div>
              <div className="addressDiv">
                <span className="Flag">
                  <img src={indiaFlag} alt="" />{" "}
                </span>
                <h4>India</h4>
                <p>1/22, 2nd Floor, Asaf Ali Road, Delhi, 110002.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="safemeet-container safemeet-footer-end  ">
          <div>
            <Link
              to="/Privacy-Policy"
              className="safemeet-footer-links safemeet-links"
            >
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link
              to="/Terms-Conditions"
              className="safemeet-footer-links safemeet-links"
            >
              Terms & Conditions
            </Link>
          </div>
          <div>
            <a href="/" className="safemeet-footer-links safemeet-links">
              &copy; {new Date().getFullYear()} Saleassist.ai. All rights
              reserved.
            </a>
          </div>
        </div>
      </div>
    );
  }
}
