import React, { Component } from 'react';
import Message from "../../assests/ai-chat/msg.svg";
import Profile from "../../assests/ai-chat/profile.svg";
import Recycle from "../../assests/ai-chat/recycle.svg";
import SimpleCard from "../../components/Simple-Card/SimpleCard";

export default class SimpleCardShow extends Component {
    render() {
        const card_data = [
            { image: Message, title: 'Talk how they want to talk.', details: 'Powerful business conversations start by meeting your leads on their preferred mode of communication—text.' },
            { image: Profile, title: 'Stop fishing for contact info.', details: 'You’ll start out with a name and a real phone number, so you can just focus on providing great service and closing the deal.' },
            { image: Recycle, title: 'Keep the conversation going.', details: 'You’re not tied to a live chat and neither are your customers, so your leads stay hot even after they leave your site.' }
        ]
        return (
            <div className="safemeet-container safemeet-simple-card-show safemeet-mg-t-5">
                {
                    card_data.map((item, index) => {
                        return (
                            <SimpleCard key={index} image={item.image} title={item.title} details={item.details} />
                        )
                    })
                }
            </div>
        )
    }
}
