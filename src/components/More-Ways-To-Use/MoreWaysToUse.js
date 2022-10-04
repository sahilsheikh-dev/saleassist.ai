import React, { Component } from 'react'
import MoreWaysCard from '../More-Ways-Card/MoreWaysCard'

export default class MoreWaysToUse extends Component {
    render() {
        const {title_2, click_btn_path} = this.props;
        return (
            <div className="safemeet-container safemeet-more-ways-to-use">
                <h1 className="h1">MORE WAYS TO USE SALEASSIST</h1>
                <div className="safemeet-more-ways-to-use-row">
                    <MoreWaysCard bg_color="#484747" onclick_path="/features" />
                    <MoreWaysCard bg_color="#4285F4" title= {title_2 + " Virtual Shopping"} sub_title={"Assist shoppers with live " + title_2 + " product advice via chat and video calling."} onclick_path={click_btn_path} />
                </div>
            </div>
        )
    }
}
