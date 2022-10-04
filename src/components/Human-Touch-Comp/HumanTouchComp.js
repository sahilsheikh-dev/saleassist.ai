import React, {Component} from 'react';
import DemoImage from "../../assests/demo-images/human-touch-comp.png"

export default class HumanTouchComp extends Component {
  render() {
    return (
      <div className="safemeet-human-touch-comp-row">
        <div className="safemeet-human-touch-comp-row-col-1">
          <img src={this.props.image || DemoImage} alt="..."/>
        </div>
        <div className="safemeet-human-touch-comp-row-col-2">
          {this.props.card_details.map((item, index) => {
            return (
              <div key={index} className="safemeet-human-touch-comp-row-col-2-2">
                <h1 className="comp-h1">{item.title}</h1>
                <p>{item.details}</p>
              </div>
            )
          })
}
        </div>
      </div>
    )
  }
}
