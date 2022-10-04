import React from 'react'
import Slider from "react-slick";
import PartnerShip from './PartnerShip'
import { Link } from 'react-router-dom';
const settings = {
	dots: true,
	arrows: false,
	variableWidth: false,
	infinite: true,
	autoplay: true,
    autoplaySpeed: 2000,
	slidesToShow: 3,
	slidesToScroll: 1,
	speed: 500,
	responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
}
const aboutnew = () => {
  return (
      <React.Fragment>
          <section className="aboutFirstFold">
	<div className="container">
		<div className='aboutBox'>
			<h1>ABOUT US</h1>
			<div className='aboutHeading'>
				<h2>Deliver The Best <br/> Customer Experience.</h2>
				<p>SaleAssist.ai is a B2B SAAS Live Video Commerce solution offering  “Live Shopping & Live Streaming” to enhance “customer engagement & sales conversions”</p>				
			</div>

			<div className="btnArea">
						  <a href='https://my.saleassist.ai' target="_blank" rel="noopener noreferrer"><button className="btnBlue">TRY US</button></a>
						  <Link to="/demo"><button className="btnBlack">TALK TO AN EXPERT</button></Link>
				
			</div>			  
		</div>
	</div>
</section>

<section className="fiveMagic">
	<div className="container">
		<div className="heading">5 Magic Modes of SaleAssist</div>
		<div className="magicBox">
			
			<ul>
				<li> 
					<span>LIVE</span>
					<figure><img src="aboutus/live.png" alt='LIVE' className="imgResponsive"/></figure>
				</li>
				<li> 
					<span>MESSAGE</span>
					<figure><img src="aboutus/message.png" alt='MESSGAE' className="imgResponsive" /></figure>
				</li>
				<li> 
					<span>SCHEDULE</span>
					<figure><img src="aboutus/schedule.png" alt='SCHEDULE' className="imgResponsive" /></figure>
				</li>
				<li> 
					<span>BROADCAST</span>
					<figure><img src="aboutus/brodcast.png" alt='BROADCAST' className="imgResponsive" /></figure>
				</li>
				<li> 
					<span>SUPPORT</span>
					<figure><img src="aboutus/support.png" alt='SUPPORT' className="imgResponsive" /></figure>
				</li>
				
			</ul>
		</div>	
	</div>
</section>

<section className="doForYou">
	<div className="container">
		<div className="heading">Changes that SaleAssist does for you</div>
		<div className="slidebox">
					 
			
				<Slider {...settings}>
					<div className='slidItem'>
						<img src="aboutus/slide1.png" alt='slider' className="imgResponsive" />
							  </div>	
							  <div className='slidItem'>
						<img src="aboutus/slide2.png" alt='slider' className="imgResponsive" />
							  </div>
							  <div className='slidItem'>
						<img src="aboutus/slide3.png" alt='slider' className="imgResponsive" />
							  </div>
							  <div className='slidItem'>
						<img src="aboutus/slide4.jpg" alt='slider' className="imgResponsive" />
							  </div>
							  <div className='slidItem'>
						<img src="aboutus/slide5.jpg" alt='slider' className="imgResponsive" />
							  </div>
							  <div className='slidItem'>
						<img src="aboutus/slide6.jpg" alt='slider' className="imgResponsive" />
							  </div>
							  <div className='slidItem'>
						<img src="aboutus/slide7.jpg" alt='slider' className="imgResponsive" />
							  </div>
							  <div className='slidItem'>
						<img src="aboutus/slide8.jpg" alt='slider' className="imgResponsive" />
							  </div>	
							  <div className='slidItem'>
						<img src="aboutus/slide9.jpg" alt='slider' className="imgResponsive" />
							  </div>
							  <div className='slidItem'>
						<img src="aboutus/slide10.jpg" alt='slider' className="imgResponsive" />
							  </div>
							  <div className='slidItem'>
						<img src="aboutus/slide11.jpg" alt='slider' className="imgResponsive" />
					</div>	
				</Slider>			  
				
			
		</div>	
	</div>
</section>
<section className="team">
			  <div className="container">
				  <h2 className='heading'>Our Team</h2>
				<p className='subtext'>Our founders, <strong> Deep Malik, Chetan Jangir and Ashish Nanotkar</strong> have vast expertise in retail innovation, Live Video engagement, Video sales & support and Co-browsing. They launched Sale Assist after realizing the lack of customer engagement as the key reason for poor sale conversions.</p>
		<ul>
			<li>
				<figure className="pic">
					<img src='aboutus/team1.png' className='imgResponsive' alt=''/>		  
				</figure>
				  <div className='teamDetails'>
					<p>
						<span>Ashish Nanotkar</span>
					  <small>Co-Founder</small>
					</p>
				    <a href="https://www.linkedin.com/in/nanotkarashish/" rel="noopener noreferrer" target="_blank"> <figure><img src="aboutus/linkedin.png" alt='Ashish Nanotkat' className="imgResponsive" /></figure></a>
			      </div>
			</li>

			<li>
				<figure className="pic"><img src='aboutus/team2.png' alt='' className='imgResponsive'/></figure>
				  <div className='teamDetails'>
					<p>
					<span>Deep Malik</span>
				    <small>Co-Founder</small>			  
					</p>
				    <a href="https://www.linkedin.com/in/deep-malik-1544581a8/" rel="noopener noreferrer" target="_blank"><figure><img src="aboutus/linkedin.png" alt='Deep Malik' className="imgResponsive" /></figure></a>
			      </div>
			</li>

			<li>
				<figure className="pic"><img src='aboutus/team3.png' alt='' className='imgResponsive'/></figure>
				  <div className='teamDetails'>
					<p>
					<span>Chetan Jangir</span>
				    <small>Co-Founder</small>			  
					</p>
				    <a href="https://www.linkedin.com/in/chetanjangir/" rel="noopener noreferrer" target="_blank"><figure><img src="aboutus/linkedin.png" alt='Chetan Jangir' className="imgResponsive" /></figure></a>
			      </div>
			</li>

		</ul>
		
		
	</div>
</section>

<section className="joinOurJourney">
	<div className="container">
		<div className="box">
			<div className="heading">Join Our Journey</div>
			<div className='joinbox'>
				<div className="leftDiv">
							<figure><img src="aboutus/aboutGif.gif" alt='ec-' className="imgResponsive" /></figure></div>
					
						
					
						<a href='https://my.saleassist.ai'>	<button className="btnBlue">Get started</button></a>
						{/* <Link to="/demo"> <button className="btnBlack">TALK TO AN EXPERT</button></Link> */}
					
							  
			</div>
		</div>
	</div>
</section>
	<PartnerShip title='Partnerships & Recognitions'/>
    </React.Fragment>
  )
}

export default aboutnew;