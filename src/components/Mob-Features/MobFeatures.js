import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class MobFeatures extends Component {
  handleClick = () => {
    document.body.style.overflow = 'scroll';
  }
  render() {
    return (
      <ul>
        <li>
          <Link className="link" to="/ai-chat" onClick={this.handleClick}>
          AI Conersations
          </Link>
        </li>
        <li>
          <Link className="link" to="/live-chat" onClick={this.handleClick}>
          Live Chat
          </Link>
        </li>
        <li>
          <Link className="link" to="/qr-code" onClick={this.handleClick}>
          QR Code
          </Link>
        </li>
        <li>
          <Link className="link" to="/video-chat" onClick={this.handleClick}>
          Video Chat
          </Link>
        </li>
        <li>
          <Link className="link" to="/nudges" onClick={this.handleClick}>
          Nudges
          </Link>
        </li>
        <li>
          <Link className="link" to="/campaign" onClick={this.handleClick}>
          Campaign Pages
          </Link>
        </li>
        <li>
          <Link className="link" to="/co-browsing" onClick={this.handleClick}>
          Co-Browsing
          </Link>
        </li>
        <li>
          <Link className="link" to="/video-review" onClick={this.handleClick}>
          Video Review
          </Link>
        </li>
        <li>
        <Link className="link" to={{ pathname: "https://my.saleassist.ai/" }} target='_parent' rel="noopener noreferrer"><button className="safemeet-btn" onClick={this.handleClick}>
            Try Free Version</button></Link>
        </li>
      </ul>
    )
  }
}
