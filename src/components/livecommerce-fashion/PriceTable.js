import React, { useState } from 'react'
import PriceList from './priceList'
import Model from './model'
import offerbg from '../../assests/LiveShopping/offerbg.svg'
const PriceTable = () => {
  const [model, setModal] = useState(false);
  let Starter = [
    {
      yes:true,
      text:'Upto 5 Users'
    },
    {
      yes:true,
      text:'Upto 500 unique Leads Capture per month'
    },
    {
      yes:true,
      text:'Fortnightly Live Sell Show - Bid/Buy/Book'
    },
    {
      yes:true,
      text:'5 AI Videos'
    },
    {
      yes:true,
      text:'5 Shoppable Video Links'
    },
    {
      yes:true,
      text:'All Awesome Features'
    },
    {
      yes:true,
      text:'Unlimited Widget/Button'
    },
    {
      yes:true,
      text:'Unlimited Video / Audio Call'
    },
    {
      yes:true,
      text:'Custom Lead Capture Form'
    },
    {
      yes:true,
      text:'Group Video Shopping'
    },
    {
      yes:true,
      text:'Live Chat'
    },
    {
      yes:true,
      text:'Nudges'
    },
    {
      yes:true,
      text:'Mobile App'
    },
  ]
  const Awesome = [
    {
      yes:true,
      text:'Custom Lead Capture Form'
    },
    {
      yes:true,
      text:'Welcome Video in Widget'
    },
    {
      yes:true,
      text:'Live Video Call'
    },
    {
      yes:true,
      text:'Live Audio Call'
    },
    {
      yes:true,
      text:'Live Stream Selling - Buy/Bid/Book'
    },
    {
      yes:true,
      text:'Video Message'
    },
    {
      yes:true,
      text:'Audio Message'
    },
    {
      yes:true,
      text:'Group Video Shop Scheduling'
    },
    {
      yes:true,
      text:'Live Chat'
    },
    {
      yes:true,
      text:'Nudges'
    },
    {
      yes:true,
      text:'User Mobile App'
    }
  ]
  
  let Statanderd = [
    {
      yes:true,
      text:'Upto 15 Users'
    },
    {
      yes:true,
      text:'Upto 2000 unique Lead Capture per month'
    },
    {
      yes:true,
      text: 'Weekly Live Sell Show - Bid/Buy/Book',
      
    },
    {
      yes:true,
      text:'15 AI Videos'
    },
    {
      yes:true,
      text:'15 Shoppable Video Links'
    },
    {
      yes:true,
      text:'Everything in Standard',
      showPluse:true
    },
    {
      yes:true,
      text:'Queue Management'
    },
    {
      yes:true,
      text:'Auto Video Testimonials Messages'
    },
    {
      yes:true,
      text:'Agent Analytics'
    },
    {
      yes:true,
      text:'Role Based Permissions'
    },
    {
      yes:true,
      text:'Auto Cart Abandonment Messages'
    },
  ]
  let pro=[
    {
      yes:true,
      text:'Upto 30 Users'
    },
    {
      yes:true,
      text:'Upto 10000 unique Lead Capture per month'
    },
    {
      yes:true,
      text: 'Daily Live Sell Show - Bid/Buy/Book',
      
    },
    {
      yes:true,
      text:'30 AI Videos'
    },
    {
      yes:true,
      text:'30 Shoppable Video Links'
    },
    {
      yes:true,
      text:'Everything in Popular',
      showPluse:true
    },
    {
      yes:true,
      text:'Receive Payment'
    },
    {
      yes:true,
      text:'Agent Escalation/Handover'
    },
    {
      yes:true,
      text:'Menu/IP based routing'
    },
    {
      yes:true,
      text:'API & Webhooks'
    },
    {
      yes:true,
      text:'Dedicated support'
    },
  ]
  return (
    <>
      <div className='safemeet-container'>
      <h2 className='CommerceHeading'>Pricing</h2>
      <div className='earlyBird'>
        <p>Early Bird Pricing - Valid till 31<sup>st</sup> August 2022</p>
        <p>Setup Charges Waived Off - Valid till 31<sup>st</sup> August 2022</p>
        <p>Pay Annual & get 20% Off</p>
        <img src={offerbg} alt=''/>
      </div>
      <div className="pricingBox">
        <PriceList titile={'Get Started'} setModal={setModal}  classList='freeList' btnLink='https://beta.saleassist.ai/demo'  priceTag={'Standard'} pirceFeture={Starter} />      
        <PriceList titile={'Get Started'} classList='proList' btnLink='https://beta.saleassist.ai/demo'  priceTag={'Popular'} pirceFeture={Statanderd} />      
        <PriceList titile={'Get Started'} classList='Enterprise' btnLink='https://beta.saleassist.ai/demo' priceTag={'Premium'} pirceFeture={pro} />      
      </div>
      <div className='shortDetails'>
        <p>* MAU - Monthly Active Users</p>
        <p>* Optional - Additional MAU, Recording, OTP, AI Videos</p>
      </div>
      <p className='enterpriseCustomer'>If you are an Enterprise customer, get a custom quote form us.<br/>
        <span>Get custom features, dedicated support & more</span>
      </p>
    </div>
    <Model pirceFeture={Awesome} model={model} setModal={setModal }/>
    </>
  )
}

export default PriceTable