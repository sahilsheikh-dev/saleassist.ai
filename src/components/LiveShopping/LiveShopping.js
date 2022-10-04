import React from 'react'
import video from '../../assests/LiveShopping/website-main-section.gif'
import logoLive from '../../assests/LiveShopping/logo-white.svg'
import user from '../../assests/LiveShopping/user.svg'
import callicon from '../../assests/LiveShopping/call.svg'
import awardIcon from '../../assests/LiveShopping/award.svg'
import downloadIcon from '../../assests/LiveShopping/downloadIcon.svg';
import easyTo from '../../assests/LiveShopping/easyTo.svg';
import livesales from '../../assests/LiveShopping/livesales.svg';
import omniSetup from '../../assests/LiveShopping/omni-Setup.svg';
import offlineStore from '../../assests/LiveShopping/offlineStore.svg';
import onlineStore from '../../assests/LiveShopping/onlineStore.svg';
import mockupimg from '../../assests/LiveShopping/mockupimg.png';
import vicon from '../../assests/LiveShopping/V-icon.jpg';

import OurClient from '../../components/pricing/ourClient'
import arrowWhiteright from "../../assests/pricing/arrowWhite-right.png";
import ourclient6 from "../../assests/pricing/logo1.png";
import ourclient1 from "../../assests/pricing/logo2.png";
import ourclient2 from "../../assests/pricing/logo3.png";
import ourclient4 from "../../assests/pricing/logo5.png";
import ourclient7 from "../../assests/pricing/logo7.jpg";
import ourclient8 from "../../assests/pricing/logo8.jpg";
import ourclient9 from "../../assests/pricing/logo9.jpg";
import ourclient10 from "../../assests/pricing/logo10.jpg";
import PartnerShip from '../About US/PartnerShip';
const LiveShopping = () => {
    const clientLogo = [ ourclient7,ourclient8,ourclient9,ourclient10,ourclient6, ourclient1, ourclient2, ourclient4 ];
    return (
      <>
        <section className="topStrip">
           In Top Add a Running Strip,  Made Into Salesforce For Startups
        </section>
          <section className="bannerSection">
            <div className="safemeet-container">
                <div className="logoSection">
                    <div className="logo">
                        <img src={logoLive} alt='Live shoping' className='img-fluid' />      
                    </div>
                    <button className="btn btn-demo">Book Live Demo</button>
                </div>
                <div className="bannerHeading">
                    <h2>The #1 in Live Video Shopping</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
                <div className="bannerVideoBox">
                    <div className="formBox">
                        <div className="formInput">
                            <span className="icon">
                                <img src={user} alt='userIcon' />      
                            </span>
                            <input type="text" name="" className="form-control" placeholder='Name'/>
                        </div>
                        <div className="formInput">
                            <span className="icon"><img src={callicon} alt='userIcon' /> </span>
                            <input type="text" name="" className="form-control" placeholder='Phone Number'/>
                        </div>
                        <button className="btn btn-dark">
                            Request Demo
                        </button>
                    </div>
                    <div className="gifBox">
                        <img src={video} alt='Live shopping' className="img-fluid"/>
                    </div>
                </div>
            </div>
          </section>
            <OurClient title='Our Trusted Brands' btn={false} margin={false} clientLogo={clientLogo} arrowWhiteright={arrowWhiteright} />
            <div className="safemeet-container">
                <h2 className='numberHeading'>In Number</h2>
                <div className='clientNumber'>
                    <div className='numberBox'>
                        <p className='numberX'>8<span>x</span></p>
                        <p className='numberText'>Increase Revenue Upto 8x</p>
                    </div>
                    <div className='numberBox'>
                        <p className='numberX'>$300</p>
                        <p className='numberText'>Sell Upto $300/Min With live Streaming</p>
                    </div>
                    <div className='numberBox'>
                        <p className='numberX'>5-10<span>x</span></p>
                        <p className='numberText'>Increpase Conversion Rates 5-10x</p>
                    </div>
                </div>
                <h2 className='numberHeading'>SaleAssist wins 2021 Re Tech Award</h2>
                <div className='AwardBox'>
                    <figure><img src={ awardIcon} alt='Awrd' className='img-fluid'/></figure>
                    <div className='awardText'>
                        <p>We are proud and honoured to announce that we were chosen as the winners of Re tech’s 2021 Innovation Award. Recognised as the thought-leaders in retail transformation, we are fusing luxury and technology together and enhancing the customer experience.</p>
                        <button className='btn btn-dark'>Read More</button>
                    </div>
                </div>
            </div>
            <div className='safemeet-container'>
                <div className='saleOffer'>
                    <h2 className='numberHeading'>SaleAssist Offers You</h2>
                    <div className='OfferBox '>
                        <ul className='OfferIcon rever'>
                            <li><figure className='offIcon'><img src={downloadIcon } className='img-fluid' alt='No Need to Download App'/> </figure> No Need to Download App</li>
                            <li><figure className='offIcon'><img src={easyTo } className='img-fluid' alt='Easy To Use And Access'/> </figure> Easy To Use And Access</li>
                            <li><figure className='offIcon'><img src={livesales } className='img-fluid' alt='Multichannel Live Sales'/> </figure> Multichannel Live Sales</li>
                        </ul>
                        <div className='mobImg'>
                            <img src={mockupimg} className='img-fluid' alt='mokup' />
                        </div>
                        <ul className='OfferIcon'>
                            <li><figure className='offIcon'><img src={onlineStore } className='img-fluid' alt='Online Store'/> </figure> Online Store</li>
                            <li><figure className='offIcon'><img src={offlineStore } className='img-fluid' alt='Offline Store'/> </figure> Offline Store</li>
                            <li><figure className='offIcon'><img src={omniSetup } className='img-fluid' alt='Omni-Channel Setup'/> </figure> Omni-Channel Setup</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <PartnerShip title='You Are in Safe Hands' icon={vicon}/>
            <div className='safemeet-container'>
                <div className='sellerToday'>
                    <h3 className='sellerHeading'>Schedule Your Demo to Join Comment Sold’s Active<br />Community of 7000+ Live Sellers Today!</h3>
                    <div className="formBox sellerFrom">
                        <div className="formInput">
                            <span className="icon">
                                <img src={user} alt='userIcon' />      
                            </span>
                            <input type="text" name="" className="form-control" placeholder='Name'/>
                        </div>
                        <div className="formInput">
                            <span className="icon"><img src={callicon} alt='userIcon' /> </span>
                            <input type="text" name="" className="form-control" placeholder='Phone Number'/>
                        </div>
                        <button className="btn btn-dark">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>    
      </>
  )
}

export default LiveShopping