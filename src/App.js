import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Main from "./pages/index";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <ScrollToTop/>
          <Main/>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}
