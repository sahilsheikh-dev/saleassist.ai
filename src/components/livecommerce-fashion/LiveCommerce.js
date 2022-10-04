import React from 'react'
import CommerceHeader from './commerceHeader'
import OurBrand from './TrustedBrands'
import Testimonial from './Testimonial'
import HowWorks from './HowitWorks'
import Number from './NumberBox'
import AddBox from './AddBox'
import Pricetable from './PriceTable'
import CommFaq from './CommFaq'
import ourclient6 from "../../assests/pricing/logo1.png";
import ourclient1 from "../../assests/pricing/logo2.png";
import ourclient2 from "../../assests/pricing/logo3.png";
import ourclient4 from "../../assests/pricing/logo5.png";
import ourclient7 from "../../assests/pricing/logo7.jpg";
import ourclient8 from "../../assests/pricing/logo8.jpg";
import ourclient9 from "../../assests/pricing/logo9.jpg";
import ourclient10 from "../../assests/pricing/logo10.jpg";
import rightArrow from './../../assests/LiveShopping/rightArrow.svg'
const LiveCommerce = ({imageFix}) => {
  const clientLogo = [ourclient7, ourclient8, ourclient9, ourclient10, ourclient6, ourclient1, ourclient2, ourclient4];
  const bestLogo= ['aboutus/part1.jpg','aboutus/part4.jpg','aboutus/part6.jpg','aboutus/logo-salesforce.svg','aboutus/iologo.png','aboutus/part7.jpg','aboutus/part2.jpg','aboutus/part3.jpg']
  return (
    <>
      <CommerceHeader rightArrow={rightArrow} imageFix={imageFix}/>
      <OurBrand clientLogo={clientLogo} titile={'Trusted By The Best'}/>
        <Testimonial />
      <HowWorks rightArrow={ rightArrow} imageFix={imageFix}/>
        <Number />
        <Pricetable />
        <AddBox rightArrow={ rightArrow}/>
      <OurBrand clientLogo={bestLogo} titile="WE ARE BACKED BY BEST" listArrow={true}/>
        <CommFaq />
      </>
  )
}

export default LiveCommerce