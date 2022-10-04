import { useState } from 'react'
const HowitWorks = ({ rightArrow, imageFix }) => {
  const howt = [
    {
      tabImg: imageFix.oneToMany,
      tabTitle: 'One To Many',
      title: 'Help Your Customers See, Interact & Buy - Live',
      text:' SaleAssist Lets You Showcase Your Best Sellers To Your Audience Live On All Social Channels. While Going Live, You Can Also Interact Via Chat or Video & Convert Them Into Buyers.'
    },
    {
      tabImg: imageFix.oneToOne,
      tabTitle: 'One To One',
      title: 'Personalized, 1-1 Video Consultations, Directly From Your Online Store',
      text:' Your Sales Team Can Now See The Shopper’s Buying Journey, Make Recommendations With Photos & Videos And Engage With Your Customers Real-Time, Just Like In-Store.'
    },
    {
      tabImg: imageFix.ontToAny,
      tabTitle: 'One To Any',
      title: 'Drive Engagement With a Large Audience, In One Go',
      text:'Welcome Shoppers With Short Videos, Showcase New Products, Talk About Offers And Drive Engagement From Visitors. Assist High Intent Customers With Shoppable Videos That Help Seamlessly Add To Cart And Buy.'
    }
  ]
  const [cureenttab, setcureenttab] = useState(1);
  return (
    <div className='safemeet-container'>
          <h2 className='CommerceHeading'>Streaming & Shopping, In 3 Easy Ways</h2>
          <p className='howSubText'>Drive Traffic, Engagement and Conversions Using Interactive Video Experiences That Create Loyal Customers For Your Brand.</p>
          <ul className="worksTab">
          {howt.map((tablist, index) => (
            <li key={index} className={`${index+1===cureenttab?'active':null}`} onClick={()=>setcureenttab(index+1)}>{ tablist.tabTitle}</li>
           ))}
          </ul>
        {howt.map((tabsContnet, inx) => (
          <div className={`tabsContent ${inx+1===cureenttab?'active':null}`}>
              <div className="tabsText">
                <h1 className='Ecoheading'>{tabsContnet.title}</h1>
                <p>{tabsContnet.text}</p>
                <a href='https://calendly.com/saleassist/30min' className="btn btn-dark  btnArrow">
                  Request Demo <img src={rightArrow} alt=''/>
                </a>
              </div>
              <div className="tabsVideo">
                    <img src={tabsContnet.tabImg} className='imgResponsive' alt='' />
              </div>
            </div>
            ))}
    </div>
  )
}

export default HowitWorks