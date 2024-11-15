import React, { Component } from "react";
import { config } from "../../config";
import { postCall } from "../../helpers/Api";
import { objectLength } from "../../helpers/Objects";
import { validateFields } from "../../helpers/Text";
import Validation from "../../helpers/inputValidation";
import { color } from "@mui/system";
export default class FormBody extends Component {
  constructor(props) {
    super(props);
    const form_data = {
      name: "",
      email: "",
      mobile_number: "",
      countryCode: "+91",
    };
    this.state = {
      form_data: form_data,
      renderThanks: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

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
        title: "Demo request",
      },
      onSuccess: (response) => {
        this.setState({ renderThanks: true });
        const formFild = {
          name: "",
          email: "",
          mobile_number: "",
          countryCode: "+91",
        };
        this.setState({ form_data: formFild });
      },
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    let validate = this.isAllowed(name, value);
    if (validate) {
      this.setState({ form_data: { ...this.state.form_data, [name]: value } });
    }
    // this.state.form_data[e.target.name] = e.target.value;
  };
  isAllowed = (value, type) => {
    switch (value) {
      case "name":
        return (
          type === "" || (Validation.validateChar(type) && type.length < 100)
        );
      case "mobile_number":
        return (
          (type === "" || Validation.validateNumber(type)) && type.length < 11
        );
      default:
        return true;
    }
  };
  render() {
    return (
      <>
        {!this.state.renderThanks && (
          <form onSubmit={this.submitForm}>
            <div className="safemeet-home-page-row-col-1 mx-auto">
              <div className="safemeet-sale-fast-sale-live">
                <h2 className="hero-head">
                  Sell <span>Fast</span>, Sell
                  <span> Live</span>
                </h2>
              </div>
            </div>
            <div className="safemeet-input-flex">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                style={{
                  background: "transparent",
                }}
                value={this.state.form_data.name}
                required
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </div>
            <div className="safemeet-input-flex">
              <input
                type="email"
                name="email"
                style={{
                  background: "transparent",
                }}
                value={this.state.form_data.email}
                placeholder="Email*"
                required
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </div>
            <div className="safemeet-input-flex input-group">
              <div className="input-selectBox">
                <input
                  type="text"
                  name="countryCode"
                  placeholder="+91"
                  required
                  disabled={true}
                  maxLength="4"
                  value={this.state.form_data.countryCode}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                {/* <select className='form-control'>
                      <option value="+91">+91</option>
                    </select> */}
              </div>
              <input
                type="text"
                name="mobile_number"
                placeholder="Mobile number*"
                style={{
                  background: "transparent",
                }}
                required
                value={this.state.form_data.mobile_number}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </div>
            <div className="safemeet-input-flex">
              <button
                style={{
                  background: "#000000",
                  color: "#FFFFFF",
                  fontWeight: "500",
                  border: "none",
                }}
                type="submit"
              >
                Request Demo
              </button>
            </div>
          </form>
        )}
        {this.state.renderThanks && (
          <div
            style={{
              // backgroundColor: "rgba(255, 255, 255, 0.4)",
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              display: "inline-block",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                borderRadius: "200px",
                height: "100px",
                width: "100px",
                margin: "0 auto 20px auto",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
                width={"100%"}
                style={{
                  maxWidth: "500px",
                }}
              />
            </div>
            <h3
              style={{
                color: "#000000",
                fontWeight: "500",
                size: "100px",
                marginBottom: "10px",
              }}
            >
              Success
            </h3>

            <span
              style={{
                color: "#404F5E",
                size: "20px",
                margin: "0",
                fontWeight: "500",
              }}
            >
              Thank you for submitting your request;
              <br /> we'll be in touch shortly!
            </span>
          </div>
        )}
        <div style={{ color: "red", fontStyle: "italic" }}>
          {this.state.errors && this.state.errors.join(" ")}
        </div>
      </>
    );
  }
}
