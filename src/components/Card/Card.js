import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className={`safemeet-card ${this.props.NameOfClass}`}>
        <img src={this.props.image} alt={this.props.image}/>
        <div className="safemeet-card-title safemeet-mg-t-2 safemeet-mg-b-2">{this.props.title || "title"}</div>
        <div className="safemeet-card-description">{this.props.description || `Our customer success team will ensure a smooth
            launch and help you maximize performance.`
}

          <ul>
            {this.props.bullet_points && this
              .props
              .bullet_points
              .map((item, index) => {
                return (
                  <li key={index}>&#8226;{" "}{item}</li>
                )
              })
            }
          </ul>
        </div>
      </div> */}
        {/* <div className={`safemeet-card ${this.props.NameOfClass}`}> */}
        <div className={`flip-card `}>
          <div className="flip-card-inner">
            <div className={`flip-card-front ${this.props.className}`}>
              <img src={this.props.image} alt={this.props.image} />
              <div
                className="safemeet-card-title safemeet-mg-t-2 safemeet-mg-b-1"
                style={{
                  fontSize: "24px",
                }}
              >
                {this.props.title}
              </div>
              <div className="safemeet-card-description">
                {this.props.description}
              </div>
              <div className="click-here">Click here to know more</div>
            </div>
            <div className="flip-card-back">
              <div className="safemeet-card-title safemeet-mg-t-2 safemeet-mg-b-2">
                {this.props.title}
              </div>
              <ul>
                {this.props.bullet_points &&
                  this.props.bullet_points.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}
