import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default class DoEvMoCard extends Component {
  render() {
    return (
      <div className="safemeet-do-even-more-card safemeet-mg-t-2">
        <div className="safemeet-do-even-more-card-upper">
          {/* <div className="msg-box">Thank you for selecting us. Would you mind leaving a review using the link below?</div>
            <div className="msg-box">Leave a review!
                <p><a className="msg-box-link">https://shri.co/634f7</a></p>
            </div> */}

          {/* <div className="meeting-schedule">
              Meeting Schedule @1pm
            </div>
            <div className="btns">
              <div className="accept">
                accept
              </div>
              <div className="change-time">
                change time
              </div>
            </div> */}

          {/* <div className="msg-box">Hey Shri 👋 you are having
a special offer of 10% saving
with this link: cdmp.co/6dfr7</div> */}

          {/* <div className="msg-box">Hello Shri  👋
Have a questions? Ask me!</div> */}

          {/* <div className="msg-box-left">Only 5 stocks Available!</div> */}
          {this.props.children}
        </div>
        <div className="safemeet-do-even-more-card-lower">
          <div className="safemeet-do-even-more-card-lower-row">
            <img src={this.props.image} alt={this.props.span}/>
            <span>{this.props.span}</span>
          </div>
          <h4>{this.props.title}</h4>
          <Link to={this.props.path}><button className="btn-learn-more">{this.props.btn}</button></Link>
        </div>
      </div>
    )
  }
}
