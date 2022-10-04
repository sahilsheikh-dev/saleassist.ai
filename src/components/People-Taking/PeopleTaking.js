import React, {Component} from 'react'
import TestimonialCard from '../Testimonial-Card/TestimonialCard'

export default class PeopleTaking extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="safemeet-people-taking">
          <div className="safemeet-container">
            <h1>People are talking</h1>
          </div>
        </div>
        <div className="safemeet-people-taking-row">
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
        </div>
      </React.Fragment>
    )
  }
}
