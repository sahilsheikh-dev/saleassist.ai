import React, { Component } from 'react';
import CustLoveCard from '../Customer-Love-Card/CustLoveCard';

export default class FeaturesCustomerLove extends Component {
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
            <div className="safemeet-feature-customer-love">
                <div className="safemeet-container">
                    <h1>FEATURES CUSTOMERS LOVE</h1>
                    <div className="safemeet-feature-customer-love-row">
                    {
                              card_details.map((item,index)=>{
                            return(
                                <CustLoveCard key={index} title={item.title} details={item.details}/>
                            );
                        })
                    }
                    {
                        // this.props.card_details.map((item,index)=>{
                        //     return(
                        //         <CustLoveCard key={index} title={item.title} details={item.details}/>
                        //     );
                        // })
                    }
                    </div>
                </div>
            </div>
        )
    }
}
