import React from 'react'
import { Link } from 'react-router-dom';
const PartnerShip = ({title, icon}) => {
  return (
    <section className='ourpartnerLogo'>
			  <div className="container">
			  <div className="heading">{title} { icon?<img src={icon} alt=''/>:null}</div>
				  <ul>
					  <li>
						  <img src="aboutus/part1.jpg" alt=''/>
					  </li>
					  <li>
						  <img src="aboutus/part2.jpg" alt=''/>
					  </li>
					  <li>
						  <img src="aboutus/part3.jpg" alt=''/>
					  </li>
					  <li>
						  <img src="aboutus/part4.jpg" alt=''/>
					  </li>
					  <li>
						  <img src="aboutus/part5.jpg" alt=''/>
					  </li>
					  <li>
						  <img src="aboutus/part6.jpg" alt=''/>
					  </li>
					  <li>
						  <img src="aboutus/part7.jpg" alt=''/>
					  </li>
					  <li>
						  <img src="aboutus/logo-salesforce.svg" alt=''/>
					  </li>
				  </ul>
				  <p className='partnerLink'>Want to be a partner <Link to="/partner">Click here</Link></p>
			  </div>	  
            </section>
  )
}

export default PartnerShip