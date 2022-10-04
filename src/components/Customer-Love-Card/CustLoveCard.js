import React, { Component } from 'react'

export default class CustLoveCard extends Component {
    render() {
        return (
            <div className="safemeet-customer-love-card">
                <h5>{this.props.title}</h5>
                <p>{this.props.details}</p>
            </div>
        )
    }
}
