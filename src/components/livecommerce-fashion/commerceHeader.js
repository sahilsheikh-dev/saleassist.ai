import logoWhite from '../../assests/Logo/logo-white.png';

const commerceHeader = ({rightArrow,imageFix}) => {
  return (
    <header className='liveCommerceHeader'>
        <div className="safemeet-container">
            <div className="logo">
                <img src={logoWhite} className='imgresponsive' alt='Logo' />      
            </div>
            <div className="Commercebanner">
                <div className="CommercebannerText">
                    <h1>Sell Through Live Video, Convert 30% More</h1>
                    <p>The Future of Selling In Retail Is Live Video. We Made It Easy For You to Use SaleAssist  and Be Future Ready, Now</p>
                    <a href='https://calendly.com/saleassist/30min' className="btn btn-dark btnArrow">
                        Book a Demo <img src={rightArrow} alt='' />
                    </a>
                  </div>
                  <div className='GifBox'>
                      <img src={imageFix.gifFile} alt='' className='imgresponsive'/>
                  </div>
            </div>
        </div>
    </header>
  )
}

export default commerceHeader