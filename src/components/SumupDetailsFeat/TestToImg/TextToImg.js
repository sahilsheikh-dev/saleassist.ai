import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class TextToImg extends Component {
  render() {
    const {title, subtitle, details,points,link,Image,logo} = this.props;
    return (
      <div className="safemeet-container safemeet-text-to-img">
        <div className="safemeet-text-to-img-col-1">
          <img src={Image} alt="AI Conversation"/>
        </div>
        <div className="safemeet-text-to-img-col-2">
          <div className="safemeet-blocks">
            <img src={logo} alt="AI logo"/>
            <span>{title}</span>
          </div>
          <div className="safemeet-blocks">
            <h3>{subtitle}</h3>
            <p>{details}
            </p>
          </div>
          <div className="safemeet-blocks">
            <div className='safemeet-points-features'>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.7045 4.28377C13.3111 3.89615 12.678 3.90084 12.2904 4.29424C11.9027 4.68765 11.9074 5.3208 12.3008 5.70842L17.6712 10.9998H4C3.44771 10.9998 3 11.4475 3 11.9998C3 12.5521 3.44772 12.9998 4 12.9998H17.6646L12.3008 18.2847C11.9074 18.6723 11.9027 19.3055 12.2904 19.6989C12.678 20.0923 13.3111 20.097 13.7045 19.7094L20.6287 12.887C21.1256 12.3974 21.1256 11.5958 20.6287 11.1062L13.7045 4.28377Z"
                  fill="#212121"/>
              </svg>
              <span className="details">{points[0]}</span>
            </div>
            <div className='safemeet-points-features'>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.7045 4.28377C13.3111 3.89615 12.678 3.90084 12.2904 4.29424C11.9027 4.68765 11.9074 5.3208 12.3008 5.70842L17.6712 10.9998H4C3.44771 10.9998 3 11.4475 3 11.9998C3 12.5521 3.44772 12.9998 4 12.9998H17.6646L12.3008 18.2847C11.9074 18.6723 11.9027 19.3055 12.2904 19.6989C12.678 20.0923 13.3111 20.097 13.7045 19.7094L20.6287 12.887C21.1256 12.3974 21.1256 11.5958 20.6287 11.1062L13.7045 4.28377Z"
                  fill="#212121"/>
              </svg>
              <span className="details">{points[1]}</span>
            </div>
            <div className='safemeet-points-features'>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.7045 4.28377C13.3111 3.89615 12.678 3.90084 12.2904 4.29424C11.9027 4.68765 11.9074 5.3208 12.3008 5.70842L17.6712 10.9998H4C3.44771 10.9998 3 11.4475 3 11.9998C3 12.5521 3.44772 12.9998 4 12.9998H17.6646L12.3008 18.2847C11.9074 18.6723 11.9027 19.3055 12.2904 19.6989C12.678 20.0923 13.3111 20.097 13.7045 19.7094L20.6287 12.887C21.1256 12.3974 21.1256 11.5958 20.6287 11.1062L13.7045 4.28377Z"
                  fill="#212121"/>
              </svg>
              <span className="details">{points[2]}</span>
            </div>
            <div className='safemeet-points-features'>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.7045 4.28377C13.3111 3.89615 12.678 3.90084 12.2904 4.29424C11.9027 4.68765 11.9074 5.3208 12.3008 5.70842L17.6712 10.9998H4C3.44771 10.9998 3 11.4475 3 11.9998C3 12.5521 3.44772 12.9998 4 12.9998H17.6646L12.3008 18.2847C11.9074 18.6723 11.9027 19.3055 12.2904 19.6989C12.678 20.0923 13.3111 20.097 13.7045 19.7094L20.6287 12.887C21.1256 12.3974 21.1256 11.5958 20.6287 11.1062L13.7045 4.28377Z"
                  fill="#212121"/>
              </svg>
              <span className="details">{points[3]}</span>
            </div>
          </div>
          {/* <div className="safemeet-block">
            <Link className="links" to={link}>Know more
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.002 1L1.00195 11"
                  stroke="#4285F4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
                <path
                  d="M2.66895 1H11.0023V9.33333"
                  stroke="#4285F4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
              </svg>
            </Link>
          </div> */}
        </div>
      </div>
    )
  }
}
