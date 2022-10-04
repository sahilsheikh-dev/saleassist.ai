import React, {Component} from "react";
import Layout1 from "../../layout/Layout1";
import SubBanner from "../../components/Sub-Banner/SubBanner";
import TrustCompanies from "../../components/Trusted-By-Many-Companies/TrustCompanies";
import ShowUHow from "../../components/Show-U-How-Its-Done/ShowUHow";
import SimpleCardShow from "../../components/SimpleCardShow/SimpleCardShow";
import DoEvenMore from "../../components/Do-even-more/DoEvenMore";
import Partnership from '../../components/Partneship/Partnership';
import Demo from "../../components/Demo/Demo";
import TextImage from '../../components/Text-Image/TextImage';
import ImageText from '../../components/Image-Text/ImageText';
import CardHomePresent from '../../components/CardHomePresent/CardHomePresent';
import LifeCycle from '../../components/Life-Cycle/LifeCycle';
import AiChat from "../../assests/sub-banner-icons/ai-chat.svg";
import OnetoMany from "../../assests/one-to-many/One to Many.webp";
import OnetoAny from "../../assests/one-to-any/One to Any.webp";
import AiChatImage from "../../assests/sub-banner-images/ai-conversation.svg"
import {Helmet} from "react-helmet";

export default class AiConver extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>SaleAssist - AI Chat</title>
        </Helmet>
      <Layout1 btn="book-a-demo-white-btn safemeet-btn" color="safemeet-navitem white" activeClass="active-feature active-feature-white">
        <SubBanner
          image={AiChat}
          banner={AiChatImage}
          span="AI Conversation"
          title="Automating customer service is a breeze."
          details="Automated messaging and speech-enabled applications that offer human-like interactions between computers and humans."
          btn="Watch Demo"
          path="/ai-chet-demo?1"/>
        <TrustCompanies/>
        <ShowUHow/>
        <SimpleCardShow/>
        <DoEvenMore/>
        <TextImage
            title={`LIVE VIDEO SHOPPING`}
            sub_title={`ONE-TO-MANY`}
            details={`Live Stream and Enable Interactive One-To-Many video shopping higher engagement with better Conversions.`}
            btn={`Explore the Feature`}
            image={OnetoMany}
            path="/one-to-many"/>
        <ImageText path="/one-to-one?1"/>
        <TextImage
            title={`VIRTUAL ENGAGEMENT`}
            sub_title={`ONE-TO-ANY`}
            details={`Customer record and leave video message and you can respond back at your convenience.`}
            btn={`Explore the Feature`}
            image={OnetoAny}
            path="/one-to-any?1"
            />
        <CardHomePresent/>
        <LifeCycle/>
        <Partnership/>
        <Demo/>
      </Layout1>
      </React.Fragment>
    )
  }
}
