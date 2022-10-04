import React, {Component} from 'react';
import FeaturesCustomerLove from '../../components/FeaturesCustomerLove/FeaturesCustomerLove';
import HumanTouch from '../../components/Human-Touch/HumanTouch';
import MoreWaysToUse from '../../components/More-Ways-To-Use/MoreWaysToUse';
import SubBanner2 from '../../components/Sub-Banner-2/SubBanner2';
import TeamMotivated from '../../components/Team-Motivated/TeamMotivated';
import VideoCalling from '../../components/Video-Calling/VideoCalling';
import Layout3 from "../../layout/Layout3";
import SubBannerImage from "../../assests/demo-images/one-to-one.png";
// import PeopleTaking from '../../components/People-Taking/PeopleTaking';

export default class OnetoAny extends Component {
  render() {
    const card_details = [
        {
          title: "WATCH",
          details: "Welcome online visitors. Showcase new and favorite products."
        }, {
          title: "CHAT",
          details: "Assist shoppers with live 1-to-1 advice via chat and video calling."
        }, {
          title: "SHOP",
          details: "Customers can seamlessly add products to their cart and buy online."
        }
      ]

      const card_details1 = [
        {
          title: "SHOT",
          details: "With Saleassist, associates can effortlessly create their own short-form, shoppable videos."
        }, {
          title: "TAG",
          details: "Tag products to let customers easily shop the look."
        }, {
          title: "SHARE",
          details: "Teams upload stories and you moderate. Then the selling begins."
        }
      ]
    return (
      <Layout3 color="safemeet-navitem white">
        <SubBanner2
          details="First impressions matter. Engage your shoppers and drive conversion."
          title="ONE-TO-ANY"
          sub_title="VIDEO SHOPPING"
          BannerImage={SubBannerImage}/>
        <FeaturesCustomerLove/>
        <HumanTouch title="WATCH, CHAT, SHOP." sub_title="Just like shopping in real life." card_details={card_details}/>
        <VideoCalling card_details={card_details1} title="Turn your experts into influencers." sub_title="Less clerk, more Kardashian."/>
        <TeamMotivated/> 
        {/* <PeopleTaking/> */}
        <MoreWaysToUse title_2="One to many" click_btn_path="/one-to-many"/>
      </Layout3>
    )
  }
}
