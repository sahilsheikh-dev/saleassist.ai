import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class TextImageHome extends Component {
  render() {
    const { title, sub_title, details, btn, video, path,poster } = this.props;
    return (
      <div className="safemeet-mg-t-5 stepBox">
        <div className="safemeet-text-row-col-1">
          <div className="title-head safemeet-sm-mg-b-2">
            <h1 className="title">{title}</h1>
            <h1>{sub_title}</h1>
          </div>
          <p className="safemeet-sm-mg-b-2">
            {details}
          </p>
          <div className="btn ">
            <Link to={path}><button className="safemeet-btn-3">{btn}</button></Link>
          </div>
        </div>
        <div className="safemeet-text-row-col-2">
          <div>
            <video preload="auto" poster={poster} playsInline autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Your Browser doesnot support the video tag
            </video>
          </div>
        </div>
      </div>
    )
  }
}
