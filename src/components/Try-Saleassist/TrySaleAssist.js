import React, { Component } from "react";
import Barcode from "../../assests/barcode/barcode.webp";
import emailjs from "emailjs-com";
import Validation from "../../helpers/inputValidation";
export default class TrySaleAssist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      renderThanks: false,
      renderForm: true,
    };
    this.form = React.createRef();
  }
  handleChange = (e) => {
    let valiDate = this.isAllowed(e.target.name, e.target.value);
    if (valiDate) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  isAllowed = (value, type) => {
    console.log(value, "value");
    console.log(type, "type");
    switch (value) {
      case "name":
        return (
          type === "" || (Validation.validateChar(type) && type.length < 100)
        );
      case "mobile":
        return (
          (type === "" || Validation.validateNumber(type)) && type.length < 11
        );
      default:
        return true;
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xwqkv7o",
        "template_r1kefut",
        this.form.current,
        "user_Hp94NyLHBaLnD5XLsegfc"
      )
      .then(
        (result) => {
          this.setState({
            name: "",
            email: "",
            mobile: "",
            renderThanks: true,
            renderForm: false,
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            name: "",
            email: "",
            mobile: "",
            renderThanks: true,
            renderForm: false,
          });
        }
      );
  };
  render() {
    const { name, email, mobile } = this.state;
    return (
      <div className="safemeet-container safemeet-try-saleassist">
        <div className="safemeet-demo-row-col-2 safemeet-text-center">
          <img src={Barcode} alt="bar code" />
          <h1
            style={{
              marginTop: "15px",
              fontSize: "clamp(1rem,2vw,1.4rem)",
              fontStyle: "italic",
              opacity: "0.6",
            }}
          >
            Scan QR code, start using saleassist
          </h1>
        </div>
        <div className="safemeet-try-saleassist-col-2">
          {this.state.renderForm && (
            <form ref={this.form} onSubmit={this.handleSubmit}>
              <h2>Try Saleassist Today</h2>
              <input
                onChange={this.handleChange}
                name="name"
                type="text"
                value={name}
                placeholder="Name"
                required
              />
              <input
                onChange={this.handleChange}
                name="email"
                type="email"
                value={email}
                placeholder="Email"
                required
              />
              <input
                onChange={this.handleChange}
                name="mobile"
                type="text"
                value={mobile}
                placeholder="Mobile Number"
                required
              />
              <button type="submit" className="safemeet-btn">
                Get Started
              </button>
            </form>
          )}
          {this.state.renderThanks && (
            <h3
              style={{
                textAlign: "center",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              Thanks, Our Agent will contant you shortly.
            </h3>
          )}
        </div>
      </div>
    );
  }
}
