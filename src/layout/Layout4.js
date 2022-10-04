import React, { Component } from 'react';
import Footer from "../components/Footer/Footer";

export default class Layout4 extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
                <Footer/>
            </React.Fragment>
        )
    }
}
