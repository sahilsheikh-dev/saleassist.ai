import React, { Component } from 'react';
import Navbar from "../components/Navbar/Navbar";
import MobNavbar from '../components/Mob-Navbar/MobNavbar';
import Footer from '../components/Footer/Footer';

export default class Layout2 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar btn={this.props.btn} color={this.props.color} activeClass={this.props.activeClass}/>
                <MobNavbar/>
                {this.props.children}
                <Footer/>
            </React.Fragment>
        )
    }
}