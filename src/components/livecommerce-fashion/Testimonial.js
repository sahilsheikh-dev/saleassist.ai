import TestimonialList from "./testimonialList"
let testimonal = [
	{
		imgPath:'aboutus/testi2.png',
		className:'one',
		ceoName: 'Vishal',
		position: 'VP - Viveks.com',
		about: 'It has a lot of features including live call, qr code , video feedbacks , payment options and live video shopping and this definitely give us better customer experience and better conversions. SaleAssists support system is really very good. Compare to other brands saleassist is better of. I would recommend to give it a try.'
	},
	{
		imgPath:'aboutus/testi1.png',
		className:'two',
		ceoName: 'Ashish Roy',
		position: 'Head of Sales & BI -  Blox.xyz',
		about: 'its really very very convenient for us and our customers as well. In todays time everyone look at convenience and how fast i can move to the next level and SaleAssist really helps our customers to come to that level.  Online briefing of products becomes very very easy with SaleAssist. One of the best feature is AI chat which is really easy. Kudos to the team !'
	}
]
const Testimonial = () => {
  return (
    <div className='safemeet-container'>
		  <div className="ceoFounder">
			  {testimonal.map((testi, inx) => (
				  <TestimonialList key={inx} boxNumber={testi.className} ceoName={testi.ceoName} imgPath={testi.imgPath} position={testi.position} about={testi.about}/>
			  ))}
			  
			  {/* <TestimonialList boxNumber='two' ceoName={ 'Lorem Ipsum'} imgPath='aboutus/team1.png' position='CEO, Founder' about='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'/>
			  <TestimonialList boxNumber='three' ceoName={ 'Lorem Ipsum'} imgPath='aboutus/team1.png' position='CEO, Founder' about='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'/>
			  <TestimonialList boxNumber='four' ceoName={ 'Lorem Ipsum'} imgPath='aboutus/team1.png' position='CEO, Founder' about='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'/> */}
			
		</div>      
    </div>
  )
}

export default Testimonial