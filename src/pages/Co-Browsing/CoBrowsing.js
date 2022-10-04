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
import CoBrow from "../../assests/sub-banner-icons/co-browsing.svg";
import CoBrowsingImage from "../../assests/sub-banner-images/co-browsing.svg";
import OnetoMany from "../../assests/one-to-many/One to Many.webp";
import OnetoAny from "../../assests/one-to-any/One to Any.webp";
import {Helmet} from "react-helmet";

export default class CoBrowsing extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>SaleAssist - Co-browsing</title>
        </Helmet>
      <Layout1 btn="book-a-demo-white-btn safemeet-btn" color="safemeet-navitem white" activeClass="active-feature active-feature-white">
        <SubBanner
          banner={CoBrowsingImage}
          image={CoBrow}
          span="Co-Browsing"
          title="Browse together buy forever."
          details="Join with your friends and family members to buy something together with the help of SaleAssist Co-Browsing."
          btn="Watch Demo"
          path="/co-browsing-demo"/>
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
        <ImageText path="/one-to-one"/>
        <TextImage
            title={`VIRTUAL ENGAGEMENT`}
            sub_title={`ONE-TO-ANY`}
            details={`Customer record and leave video message and you can respond back at your convenience.`}
            btn={`Explore the Feature`}
            image={OnetoAny}
            path="/one-to-any"
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
