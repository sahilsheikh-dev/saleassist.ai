import React, {Component} from 'react';
import ClientImage from "../../assests/demo-images/nadeem.jpeg";

export default class TestimonialCard extends Component {
  render() {
    return (
      <div className="safemeet-testimonial-card">
        <div className="safemeet-testimonial-card-row">
          <div>
            <img src={ClientImage} alt='...'/>
          </div>
          <div>
            <h6>Sunny</h6>
            <p>@Tech Lead, Ejohri</p>
          </div>
        </div>
        <p className="safemeet-testimonial-card-p">
          "Built-in sales attribution means team members get the credit when they make
          sales online.Built-in sales attribution means team members get the credit when
          they make sales online.Built-in sales attribution means team members get the
          credit when they make sales online."
        </p>
      </div>
    )
  }
}
