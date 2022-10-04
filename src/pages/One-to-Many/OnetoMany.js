import React, {Component} from 'react';
import FeaturesCustomerLove from '../../components/FeaturesCustomerLove/FeaturesCustomerLove';
import HumanTouch from '../../components/Human-Touch/HumanTouch';
import MoreWaysToUse from '../../components/More-Ways-To-Use/MoreWaysToUse';
import SubBanner2 from '../../components/Sub-Banner-2/SubBanner2';
import SubBannerImage from '../../assests/one-to-many/1 - many (1).png';
import HumanTouchImage from '../../assests/one-to-many/1 - many (2).png';
import TeamMotivated from '../../components/Team-Motivated/TeamMotivated';
import VideoCalling from '../../components/Video-Calling/VideoCalling';
import Layout3 from "../../layout/Layout3";
// import SubBannerImage from "../../assests/demo-images/one-to-one.png";
// import PeopleTaking from '../../components/People-Taking/PeopleTaking';

export default class OnetoMany extends Component {
  render() {
    const cutomer_love = [
      {
          title:"Engage with your audience",
          details:"Showcase shoppable looks and gather the feedback and engagement in real time."
      },
      {
          title:"Filter potential customers",
          details:"Filter out potential customers that have a high purchase intent and end up dealing with your business via live video shopping."
      },
      {
          title:"Convert more shoppers",
          details:"Improve sales conversions by encouraging customers to buy online as confidently as they do in-store."
      }
  ]
    const human_touch_details = [
        {
          title: "WATCH",
          details: "Showcase your products to your online audience."
        }, {
          title: "Consult",
          details: "Consult 1-to-1 with the interested shoppers via chat or vide"
        }, {
          title: "Buy",
          details: "Customers can easily add products to their cart and complete the purchase process."
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
          details="Unlock the power of interactive live video shopping with One-To-Many"
          title="ONE-TO-MANY"
          sub_title="VIDEO SHOPPING"
          BannerImage={SubBannerImage}/>
        <FeaturesCustomerLove card_details={cutomer_love}/>
        <HumanTouch image={HumanTouchImage} title="WATCH, CHAT, SHOP." sub_title="Just like shopping in real life." card_details={human_touch_details}/>
        <VideoCalling card_details={card_details1} title="Turn your experts into influencers." sub_title="Less clerk, more Kardashian."/>
        <TeamMotivated/> 
        {/* <PeopleTaking/> */}
        <MoreWaysToUse title_2="One to one" click_btn_path = "/one-to-any"/>
      </Layout3>
    )
  }
}
