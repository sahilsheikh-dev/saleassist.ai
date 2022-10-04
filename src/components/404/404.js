import React, {Component} from 'react';

export default class FourZeroFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countDown: 5
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        countDown: this.state.countDown - 1
      })
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.countDown > 0) {
      setTimeout(() => {
        this.setState({
          countDown: this.state.countDown - 1
        })
      }, 1000);
    }

    if (this.state.countDown === 0) {
      this
        .props
        .history
        .push("/")
    }
  }
  render() {
    return (
      <div className="Four-404-error">
        <div className="safemeet-container Four-404-error-row">
          <div className="Four-404-error-row-col-1">
            <svg
              className="shadow four-1"
              viewBox="0 0 132 194"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M77.9988 194V155.969H6.96819L0 135.39L51.0252 0.717041H90.5865L46.08 117.677H77.9988V84.855L85.4166 61.1505H116.886V117.677H131.946V148.935L116.886 155.969V194H77.9988Z"
                fill="#3E404E"/>
            </svg>
            <svg
              className="zero"
              viewBox="0 0 152 151"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M145.379 45.8927C162.084 83.8277 144.666 128.032 106.476 144.625C68.285 161.218 23.7834 143.917 7.07852 105.982C-9.6264 68.0467 7.79118 23.8429 45.9818 7.24972C84.1724 -9.34342 128.674 7.95762 145.379 45.8927Z"
                fill="url(#paint0_linear)"/>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="45.9818"
                  y1="7.24984"
                  x2="105.797"
                  y2="144.92"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C50D15"/>
                  <stop offset="1" stopColor="#280001"/>
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="shadow four-2"
              viewBox="0 0 132 194"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M77.9988 194V155.969H6.96819L0 135.39L51.0252 0.717041H90.5865L46.08 117.677H77.9988V84.855L85.4166 61.1505H116.886V117.677H131.946V148.935L116.886 155.969V194H77.9988Z"
                fill="#3E404E"/>
            </svg>
          </div>
          <h1>Page will be redirect to homepage in{" "}
            <span>{this.state.countDown}</span>
          </h1>
        </div>
      </div>
    )
  }
}
