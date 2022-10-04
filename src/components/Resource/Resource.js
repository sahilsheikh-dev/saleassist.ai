import React, { Component } from 'react';
import NavbarCard from '../Navbar-Card/NavbarCard';
import One2Any from "../../assests/navbar-card-icons/One2Any.svg";
import One2Many from "../../assests/navbar-card-icons/One2Many.svg";
import One2One from "../../assests/navbar-card-icons/One2One.svg";
import Demo from "../../assests/demo-images/Demo111.svg";
import Github from "../../assests/navbar-card-icons/Github.svg";
import Apidocs from '../../assests/navbar-card-icons/API-docs.svg';
import Blogs from "../../assests/navbar-card-icons/Blogs.svg";
import { Link } from "react-router-dom";

export default class Resource extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="safemeet-navitem-item">
          <div className="safemeet-container safemeet-navitem-item-customer-row">
            <div className="safemeet-navitem-item-customer-row-col-1">
              <Link  to='/blogs' className="flex-1">
                <div className="safemeet-mg-b-1">
                  <NavbarCard
                    image={Blogs}
                    title={`BLOGS`}
                    details={`Updated content for Read About SaleAssist's new features and new version updates`} />
                </div>
              </Link>
              <Link to={{ pathname: "https://platform.SaleAssist.ai/redoc" }} target='_parent' rel="noopener noreferrer" className="flex-1">
                <div className="safemeet-mg-b-1">
                  <NavbarCard
                    image={Apidocs}
                    title={`API DOCS`}
                    details={`Easy documentation which will guide About integration, maintenance and use our product`} />
                </div>
              </Link>
              <Link to={{ pathname: "/partner" }} rel="noopener noreferrer" className="flex-1">
                <div className="safemeet-mg-b-1">
                  <NavbarCard
                    image={Github}
                    title={`PARTNERS`}
                    details={`Official repository for basic idea about how to integrate Saleassist with your product`} />
                </div>
              </Link>
            </div>
            <div className="safemeet-navitem-item-customer-row-col-2">
              <div className="safemeet-mg-b-1">
                <Link to="/one-to-one" className="flex-1">
                  <NavbarCard
                    image={One2One}
                    title={`ONE-TO-ONE`}
                    details={`Interactive video shopping between one customer and your sales agents.`} />
                </Link>
              </div>
              <div className="safemeet-mg-b-1">
                <Link to="/one-to-many" className="flex-1">
                  <NavbarCard
                    image={One2Many}
                    title={`ONE-TO-MANY`}
                    details={`A powerful add-on that converts.Easy-to-use on any ecommerce platform.`} />
                </Link>
              </div>
              <div className="safemeet-mg-b-1">
               
              </div>
            </div>
            <div className="safemeet-navitem-item-customer-row-col-3 safemeet-text-center">
              <p>ASK AS ANYTHING ?</p>
              <div className="safemeet-text-center">
                <img src={Demo} alt={`...`} />
              </div>
              <p>Book a demo to evaluate if Saleassist is right for your business.
              </p>
              <Link to="/demo"> <button className="safemeet-btn">BOOK A DEMO</button></Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
