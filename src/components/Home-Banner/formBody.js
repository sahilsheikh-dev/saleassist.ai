import React, { Component } from "react";
import { config } from "../../config";
import { postCall } from "../../helpers/Api";
import { objectLength } from "../../helpers/Objects";
import { validateFields } from "../../helpers/Text";
import Validation from "../../helpers/inputValidation";
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
            <div className="safemeet-input-flex">
              <input
                type="text"
                name="name"
                placeholder="Name*"
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
                required
                value={this.state.form_data.mobile_number}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </div>
            <div className="safemeet-input-flex">
              <button type="submit">Request Demo</button>
            </div>
          </form>
        )}
        {this.state.renderThanks && (
          <div style={{ color: "green", fontStyle: "italic" }}>
            Thank you for submitting your request.
          </div>
        )}
        <div style={{ color: "red", fontStyle: "italic" }}>
          {this.state.errors && this.state.errors.join(" ")}
        </div>
      </>
    );
  }
}
