import React, {Component} from 'react'
import DemoImage from "../../assests/demo-images/human-touch-comp.png"

export default class VideoCallingCard extends Component {
  render() {
    return (
      <div className="safemeet-video-calling-card-row safemeet-mg-t-3">
        <div className="safemeet-video-calling-card-row-col-1">
          {this.props.card_details.map((item, index) => {
            return (
              <div key={index} className="safemeet-video-calling-card-row-col-2-2">
                <h1 className="comp-h1">{item.title}</h1>
                <p>{item.details}</p>
              </div>
            )
          })
}
        </div>
        <div className="safemeet-video-calling-card-row-col-2">
          <img src={DemoImage} alt="..."/>
        </div>
      </div>
    )
  }
}
