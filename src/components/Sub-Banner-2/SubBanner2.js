import React, {Component} from 'react';

export default class SubBanner2 extends Component {
  render() {
    const { title, sub_title, BannerImage, details } = this.props;
    return (
      <div className="safemeet-sub-banner-2">
        <div className="safemeet-container">
          <h1>{title}</h1>
          <h1>{sub_title}</h1>
          <img src={BannerImage} alt="..."/>
          <h4>{details}
          </h4>
        </div>
      </div>
    )
  }
}
