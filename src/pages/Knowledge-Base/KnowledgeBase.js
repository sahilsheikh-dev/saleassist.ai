import React, {Component} from "react";
import Layout1 from "../../layout/Layout1";
import { Helmet } from "react-helmet";
import Knowladge from '../../components/KnowledgeBase/KnowledgeBase'

export default class Clients extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>SaleAssist - Clients</title>
        </Helmet>
      <Layout1>
        <Knowladge/>
      </Layout1>
      </React.Fragment>
    )
  }
}
