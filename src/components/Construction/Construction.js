import React, {Component} from 'react';
import Condtruct from "../../assests/construction/construction.png"

export default class Construction extends Component {
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
          this.props.history.push("/")
        }
      }
  render() {
    return (
      <div className="safemeet-construction">
        <div className="safemeet-construction-row">
          <img src={Condtruct} alt="contruction pic"/>
          <h1>This page is under production. comming soon...</h1>
          <h1 className="safemeet-mg-t-3">Page will be redirect to homepage in <span>{this.state.countDown}</span></h1>
        </div>
      </div>
    )
  }
}
