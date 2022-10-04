import React, {Component} from 'react';
import Layout1 from '../../layout/Layout1';
import {Helmet} from "react-helmet";
// import MainSection from '../../components/About US/MainSection';
// import HistoryFundClients from '../../components/About US/HistoryFundClients';
// import OurTeam from '../../components/About US/OurTeam';
import NewAboutus from '../../components/About US/about-new'
export default class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>SaleAssist - About Us</title>
        </Helmet>
        <Layout1>
          {/* <MainSection/>
          <HistoryFundClients/>
          <OurTeam/> */}
          <NewAboutus/>
        </Layout1>
      </React.Fragment>
    )
  }
}
