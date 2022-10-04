import React, { Component } from 'react';
import DemoImage from "../../assests/one-to-one/1-1 (4).png";
import CustLoveCard from '../Customer-Love-Card/CustLoveCard';


export default class TeamMotivated extends Component {
    render() {
        const card_details = [
            {
                title:"Product promotion and comparison",
                details:"Make it easier for your customers to find what they are looking for by showcasing and comparing products and their features."
            },
            {
                title:"Shopping cart integration",
                details:"Guide and support your customers through the purchasing process with a virtual shopping cart and a secure link to the checkout page."
            },
            {
                title:"Live chat",
                details:"Effortlessly interact with customers who prefer texting over voice and video while still getting the full experience."
            }
        ]
        return (
            <div className="safemeet-team-motivated">
                <div className="safemeet-container">
                    <h1 className="h1">KEEP YOUR TEAMS MOTIVATED.</h1>
                    <p className="p">Reward and track sales from<br/> conversation to conversion.</p>
                    <img src={DemoImage} alt=""/>
                    <div className="safemeet-team-motivated-row safemeet-mg-t-3 safemeet-mg-b-3">
                    {
                        card_details.map((item,index)=>{
                            return(
                                <CustLoveCard key={index} title={item.title} details={item.details}/>
                            );
                        })
                    }
                    </div>
                </div>                
            </div>
        )
    }
}
