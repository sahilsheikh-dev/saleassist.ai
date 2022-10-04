import React, {Component} from 'react';
import NavbarCard from '../Navbar-Card/NavbarCard';
import Clients from "../../assests/navbar-card-icons/Clients.svg";
import ClientsStory from "../../assests/navbar-card-icons/ClientsStory.svg";
import One2Any from "../../assests/navbar-card-icons/One2Any.svg";
import Testimonials from "../../assests/navbar-card-icons/Testimonials.svg";
import One2Many from "../../assests/navbar-card-icons/One2Many.svg";
import One2One from "../../assests/navbar-card-icons/One2One.svg";
import Demo from "../../assests/demo-images/Demo111.svg";
import {Link} from "react-router-dom"
export default class Customers extends Component {
  render() {
    return (
      <div className="safemeet-navitem-item">
        <div className="safemeet-container safemeet-navitem-item-customer-row">
          <div className="safemeet-navitem-item-customer-row-col-1">
            <Link to="/client-story?2" className="flex-1">
              <div className="safemeet-mg-b-1">
                <NavbarCard
                  image={ClientsStory}
                  title={`CLIENTS STORY`}
                  details={`Automating customer service is a breeze. Our happy customers`}/>
              </div>
            </Link>
            <Link to="/clients?2" className="flex-1">
              <div className="safemeet-mg-b-1">
                <NavbarCard
                  image={Clients}
                  title={`CLIENTS`}
                  details={`Number of clients to us for their development. We are here to grow you.`}/>
              </div>
            </Link>
            <Link to="/testimonials?2" className="flex-1">
              <div className="safemeet-mg-b-1">
                <NavbarCard
                  image={Testimonials}
                  title={`Testimonials`}
                  details={`Third party statement that comments on how good SaleAssist is`}/>
              </div>
            </Link>
          </div>
          <div className="safemeet-navitem-item-customer-row-col-2">
            <div className="safemeet-mg-b-1">
              <Link to="/one-to-one?2" className="flex-1">
              <NavbarCard
                image={One2One}
                title={`ONE-TO-ONE`}
                details={`Interactive video shopping between one customer and your sales agent.`}/>
            </Link>
            </div>
            <div className="safemeet-mg-b-1">
              <Link to="/one-to-many?2" className="flex-1">
              <NavbarCard
                image={One2Many}
                title={`ONE-TO-MANY`}
                details={`A powerful add-on that converts.Easy-to-use on any ecommerce platform.`}/>
            </Link>
            </div>
            <div className="safemeet-mg-b-1">
              <Link to="/one-to-any?2" className="flex-1">
              <NavbarCard
                image={One2Any}
                title={`ONE-TO-ANY`}
                details={`SaleAssist.ai is AI powered multi-channel Live customer engagement for your business`}/>
              </Link>
            </div>
          </div>
          <div className="safemeet-navitem-item-customer-row-col-3 safemeet-text-center">
            <p className="safemeet-text-left">WHAT IS SALEASSIST?</p>
            <div className="safemeet-text-center">
              <img src={Demo} alt={`...`}/>
            </div>
            <p>Get an overview of the Saleassist platform and how it works.
            </p>
            <Link to="/demo"><button className="safemeet-btn">Learn more</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
