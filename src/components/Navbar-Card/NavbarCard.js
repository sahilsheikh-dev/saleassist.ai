import React, {Component} from 'react';

export default class NavbarCard extends Component {
  render() {
    return (
      <div className="safemeet-navbar-card">
        <div className="safemeet-navbar-card-col-1">
          <img src={this.props.image} alt={this.props.image}/>
        </div>
        <div className="safemeet-navbar-card-col-2">
          <h5>{this.props.title}</h5>
          <p>{this.props.details}
          </p>
        </div>
      </div>
    )
  }
}
