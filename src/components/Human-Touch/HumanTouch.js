import React, { Component } from 'react'
import HumanTouchComp from '../Human-Touch-Comp/HumanTouchComp'

export default class HumanTouch extends Component {
    render() {
        const {title,sub_title} = this.props;
        return (
            <div className="safemeet-container safemeet-human-touch safemeet-mg-t-3">
                <h1>{title ||"THE HUMAN TOUCH."}</h1>
                <p>{sub_title || "Just like shopping in real life."}</p>
                <HumanTouchComp image={this.props.image} card_details={this.props.card_details}/>
            </div>
        )
    }
}
