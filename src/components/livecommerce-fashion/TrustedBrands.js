import React from 'react'

const TrustedBrands = ({clientLogo,titile,listArrow}) => {
  return (
    <div className="TrustedBrands">
          <div className='safemeet-container'>
        <h2 className='CommerceHeading'>{ titile}</h2>
              <ul className={`${listArrow?'clientDown':'brandsList'}`}>
                {clientLogo.map((item,index)=>{
                    return(
                      <li key={index}>
                            <img src={item} alt='knowlarity' className='imgResponsive'/>
                        </li>
                    )
                  })}
              </ul>
          </div>
    </div>
  )
}

export default TrustedBrands