import React, { Component } from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MobNavbar from '../components/Mob-Navbar/MobNavbar';

export default class Layout3 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar color={this.props.color}/>
                <MobNavbar/>
                {this.props.children}
                <Footer/>
            </React.Fragment>
        )
    }
}
