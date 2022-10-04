import React, { Component } from 'react'
import VideoCallingCard from '../Video-Calling-Card/VideoCallingCard'

export default class VideoCalling extends Component {
    render() {
        return (
            <div className="safemeet-video-calling">
                <div className="safemeet-container">
                    <h1>{this.props.title || "1-TO-1 VIDEO CALLING."}</h1>
                    <p>{this.props.sub_details || "Virtual consultations, made easy."}</p>
                    <VideoCallingCard card_details={this.props.card_details}/>
                </div>
            </div>
        )
    }
}
