import React, { Component } from "react";
import Layout1 from "../../layout/Layout1";
import HomeBanner from "../../components/Home-Banner/HomeBanner";
import Showcase from "../../components/Showcase/Showcase";
import Partnership from "../../components/Partneship/Partnership";
import Demo from "../../components/Demo/Demo";
import TextImageHome from "../../components/Text-Image/TextImageHome";
import TextImage from "../../components/Text-Image/TextImage";
import ImageText from "../../components/Image-Text/ImageText";
import CardHomePresent from "../../components/CardHomePresent/CardHomePresent";
import LifeCycle from "../../components/Life-Cycle/LifeCycle";
import OnetoManyPoster from "../../assests/one-to-many/One to Many.webp";
import OnetoAnyPoster from "../../assests/one-to-any/one-to-any.webp";
import NewsPaper from "../../components/NewsPaper/NewsPaper";
import VideoTestimonial from "../../components/Videotestimonial/VideoTestimonial";
import { Helmet } from "react-helmet";
import Slider from "react-slick";

export default class Home extends Component {
  render() {
    // const settings = {
    //   dots: true,
    //   arrows: false,
    //   infinite: false,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   speed: 500,
    // };
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>SaleAssist --- SELL FAST SELL LIVE</title>
          <script src="https://use.typekit.net/foobar.js"></script>
          {/* <script>try{Typekit.load({ async: true })}catch(e){}</script> */}
        </Helmet>
        <Layout1>
          <HomeBanner />
          <Showcase />

          <TextImage
            title={`LIVE VIDEO SHOPPING`}
            sub_title={`ONE-TO-MANY`}
            details={`Live Stream and Enable Interactive One-To-Many video shopping higher engagement with better Conversions.`}
            btn={`Explore the Feature`}
            video={"https://sawidget.azureedge.net/one-to-many.mp4"}
            path={`/one-to-many`}
            poster={OnetoManyPoster}
          />

          <ImageText path="/one-to-one" />

          <TextImage
            title={`VIRTUAL ENGAGEMENT`}
            sub_title={`ONE-TO-ANY`}
            details={`Customer record and leave video message and you can respond back at your convenience.`}
            btn={`Explore the Feature`}
            video={"https://sawidget.azureedge.net/one-to-any.mp4"}
            poster={OnetoAnyPoster}
            path={`/one-to-any`}
          />

          {/* <TextImageHome
              title={`LIVE VIDEO SHOPPING`}
              sub_title={`ONE-TO-MANY`}
              details={`Live Stream and Enable Interactive One-To-Many video shopping higher engagement with better Conversions.`}
              btn={`Explore the Feature`}
              video={"https://sawidget.azureedge.net/one-to-many.mp4"}
              path={`/one-to-many`} 
                poster={OnetoManyPoster} />
              <TextImageHome
              title={`ONE-TO-ONE`}
              sub_title={`VIRTUAL SHOPPING`}
              details={`Give retail store like personalized and assisted shopping experience with live One-On-One Video chat.`}
              btn={`Explore the Feature`}
              video={"https://sawidget.azureedge.net/one-to-one.mp4"}
              path={`/one-to-many`} 
              poster={OnetoManyPoster}/>
              <ImageText path="/one-to-one" />  
              <TextImageHome
              title={`VIRTUAL ENGAGEMENT`}
              sub_title={`ONE-TO-MANY`}
              details={`Customer record and leave video message and you can respond back at your convenience.`}
              btn={`Explore the Feature`}
              video={"https://sawidget.azureedge.net/one-to-any.mp4"}
              path={`/one-to-many`} 
              poster={OnetoAnyPoster}/>   */}

          {/* <br/>
            <br/>
          <div className='safemeet-container'>
            <hr className="safemeet-sumup-hr"></hr>
          </div> */}

          <CardHomePresent />
          <Partnership />
          <VideoTestimonial />
          <LifeCycle />
          <NewsPaper />
          <Demo />
        </Layout1>
      </React.Fragment>
    );
  }
}
