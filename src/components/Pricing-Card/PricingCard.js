import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PricingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: true
    }
  }

  handleMouseEnter = () => {
    if (!this.props.classNameCard) {
      this.setState({ image: false })
    }
  }

  handleMouseLeave = () => {
    if (!this.props.classNameCard) {
      this.setState({ image: true })
    }
  }

  render() {
    const pricing_details = this.props.pricingDetails
    return (
      <div className={this.props.classNameCard ? `safemeet-pricing-card ${this.props.classNameCard}` : "safemeet-pricing-card"} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <h1 className={this.props.classNameTitle ? `safemeet-pricing-card-title ${this.props.classNameTitle}` : "safemeet-pricing-card-title"}>{this.props.Name}</h1>
        <br/>
        {/* <p className={this.props.classNamePrice ? `safemeet-pricing-card-price ${this.props.classNamePrice}` : "safemeet-pricing-card-price"}>{this.props.Price || `-`}</p> */}
        {pricing_details.map((item, index) => {
          return (
            <div key={index} className={this.props.classNameDetails ? `safemeet-pricing-card-details ${this.props.classNameDetails}` : "safemeet-pricing-card-details"}>
              <div className="safemeet-pricing-card-details-col-1">
                {
                  this.props.classNameCard ?
                    <img src={item.wimage} alt={item.image} />
                    :
                    <img src={this.state.image ? item.image : item.wimage} alt={item.image} />
                }
              </div>
              <div className="safemeet-pricing-card-details-col-2">
                {item.details}
              </div>
            </div>
          )
        })
        }
        <button className={this.props.classNameButton ? `safemeet-btn ${this.props.classNameButton}` : "safemeet-btn"}> <Link className={`link ${(this.state.image && !this.props.active) ? `link-white` : `link-black`}`} to="/demo">
          Request Demo
        </Link>
        </button>
      </div>
    )
  }
}
