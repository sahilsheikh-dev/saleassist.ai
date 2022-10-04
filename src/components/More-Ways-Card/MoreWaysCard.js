import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MoreWaysCard extends Component {
    render() {
        const {title, sub_title, onclick_path} = this.props;
        return (
            <div className="safemeet-more-ways-card" style={{backgroundColor:`${this.props.bg_color}`}}>
                <h1>{ title || "FEATURES"}</h1>
                <p>{ sub_title || "Keep customers more interactive and explain your product easily."}</p>
                <Link to={onclick_path}><button className="btn-more-ways">Learn More</button></Link>
            </div>
        )
    }
}
