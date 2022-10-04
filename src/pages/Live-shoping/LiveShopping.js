import React, {Component} from 'react';
import Layout4 from '../../layout/Layout4';
import { Helmet } from "react-helmet";
import LiveShoppings from '../../components/LiveShopping/LiveShopping';
export default class LiveShopping extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>SaleAssist - Live Shopping</title>
        </Helmet>
        <Layout4>
            <LiveShoppings/>
        </Layout4>
      </React.Fragment>
    )
  }
}
