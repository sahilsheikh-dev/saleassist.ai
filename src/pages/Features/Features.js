import React, {Component} from 'react'
import Layout3 from '../../layout/Layout3';
import FeaturesNew from '../../components/Features/FeaturesNew'

export default class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout3 color="safemeet-navitem white">
         <FeaturesNew/>
        </Layout3>
      </React.Fragment>
    )
  }
}
