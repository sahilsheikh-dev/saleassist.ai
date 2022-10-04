import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AiChatImage from "../../assests/sub-banner-images/ai-conversation.svg"

export default class SubBanner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="safemeet-sub-banner-container">
          <div className="safemeet-sub-banner-container-bg-lines"></div>
          <div className="safemeet-sub-banner">
            <div className="safemeet-container safemeet-sub-banner-row">
              <div className="safemeet-sub-banner-row-col-1">
                <div className="safemeet-sub-banner-row-col-1-icons">
                  <img src={this.props.image} alt={this.props.span}/>
                  <span>{this.props.span}</span>
                </div>
                <h1>{this.props.title}</h1>
                <p>{this.props.details}</p>
                <Link  to={this.props.path}><button className="safemeet-btn" >{this.props.btn}</button></Link>
              </div>
              <div className="safemeet-sub-banner-row-col-2">
                <img
                  src={this.props.banner || AiChatImage}
                  alt="..."
                  style={{
                  zIndex: '4'
                }}/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
