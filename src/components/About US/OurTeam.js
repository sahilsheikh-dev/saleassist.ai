import React, {Component} from 'react';
import Chetan from "../../assests/founder/chetan.jpeg";
import DeepJi from "../../assests/founder/deep ji.jpeg";
import Ashish from "../../assests/founder/ashish.jpeg";
export default class OurTeam extends Component {
  render() {
    return (
      <div className="safemeet-container safemeet-our-team">
        <h1>Our Team</h1>
        <div className="safemeet-our-team-flexbox">
        <div className='inner-container'>
          <div className="card">
            <div className="card__side card__side--front card__side--front-1">
              <img src={DeepJi} alt='Deep Malik'/>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__description">
                <h4>Deep Malik</h4>
                <h5>Founder</h5>
              </div>
            </div>
          </div>
          </div>
          <div className='inner-container'>
          <div className="card">
            <div className="card__side card__side--front card__side--front-1">
              <img src={Ashish} alt='Ashish Nanotkal'/>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__description">
                <h4>Ashish Nanotkal</h4>
                <h5>Co-Founder & Tech Lead.</h5>
              </div>
            </div>
          </div>
          </div>
          <div className='inner-container'>
          <div className="card">
            <div className="card__side card__side--front card__side--front-1">
              <img src={Chetan} alt='Chetan Jangir'/>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__description">
                <h4>Chetan Jangir</h4>
                <h5>Co-Founder</h5>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
