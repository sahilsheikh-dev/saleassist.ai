import React, {Component} from 'react';
import FeaturesCustomerLove from '../../components/FeaturesCustomerLove/FeaturesCustomerLove';
import HumanTouch from '../../components/Human-Touch/HumanTouch';
import MoreWaysToUse from '../../components/More-Ways-To-Use/MoreWaysToUse';
import SubBanner2 from '../../components/Sub-Banner-2/SubBanner2';
import TeamMotivated from '../../components/Team-Motivated/TeamMotivated';
import VideoCalling from '../../components/Video-Calling/VideoCalling';
import Layout3 from "../../layout/Layout3";
import SubBannerImage from "../../assests/one-to-one/1-1 (1).png";


export default class OnetwoOne extends Component {
  render() {
    const card_details = [
        {
          title: "MATCH SHOPPERS AND EXPERTS",
          details: "Match shoppers to the best available product expert or nearest store."
        }, {
          title: "SHARE PHOTOS AND VIDEOS",
          details: "Share photos and videos that help shoppers make more informed choices."
        }, {
          title: "PERSONALIZED RECOMMENDATIONS",
          details: "Follow what shoppers are browsing and adding to cart, while sharing real time re" +
              "commendations."
        }
      ]

      const card_details1 = [
        {
          title: "1-TO-1 video calls",
          details: "Provide video consultations in real time, without needing to make appointments."
        }, {
          title: "No downloads necessary",
          details: "No need for Zoom or Hangouts. Shoppers can video call directly from your online store."
        }, {
          title: "Privacy for customers",
          details: "Customers can choose to mute themselves and turn off their camera."
        }
      ]
    return (
      <Layout3 color="safemeet-navitem white">
        <SubBanner2
          details="Interactive video shopping between one customer and your sales agents an
            effective way to bring a personal touch to your ecommerce."
            title="ONE-TO-ONE"
            sub_title="VIRTUAL SHOPPING"
            BannerImage={SubBannerImage}/>
        <FeaturesCustomerLove/>
        <HumanTouch card_details={card_details}/>
        <VideoCalling card_details={card_details1}/>
        <TeamMotivated/> 
        {/* <PeopleTaking/> */}
        <MoreWaysToUse title_2="One to Many" click_btn_path="/one-to-many"/>
      </Layout3>
    )
  }
}
