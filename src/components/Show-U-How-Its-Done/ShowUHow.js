import React, { Component } from 'react';
import VideoContainer from "../../assests/video-container/aa.png"

export default class ShowUHow extends Component {
    render() {
        return (
            <div className="safemeet-container safemeet-show-u-how safemeet-mg-t-4">
                <h1>WE’LL SHOW YOU HOW IT’S DONE</h1>
                <div className="safemeet-show-u-how-video-container">
                    <img src={VideoContainer} alt="video container"/>
                </div>
            </div>
        )
    }
}
