import React, { Component } from 'react'

export default class LifeCycleCard2 extends Component {
    render() {
        return (
            <div className="safemeet-life-cycle-2">
                <img src={this.props.image} alt={this.props.alt}/>
                <h4 className="grey-color">{this.props.title}</h4>
                <p>{this.props.details}</p>
            </div>
        )
    }
}
