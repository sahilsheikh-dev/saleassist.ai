import React, { Component } from 'react'

export default class SimpleCard extends Component {
    render() {
        return (
            <div className="safemeet-simple-card">
                <img src={this.props.image} alt={this.props.image}/>
                <h4>{this.props.title}</h4>
                <p>{this.props.details}</p>
            </div>
        )
    }
}
