import React from 'react'
import grow from '../../assests/Partnership/whyGrow.svg'
import scale from '../../assests/Partnership/scale.svg'
import message from '../../assests/Partnership/message.svg'
const whyPartner = () => {
  return (
      <>
          <div className='safemeet-container'>
            <div className='whyPartner'>
                <h3 className='whyHeading'>Why partner with Saleassist?</h3>
                <ul>
                    <li>
                        <figure>
                            <img src={grow} alt=''/>
                        </figure>
                        <h3>Grow with the industry leader</h3>
                        <p>Earn commission on clients you refer to us, and get in front of our 250+ customers, too.</p>
                    </li>
                    <li>
                        <figure><img src={scale} alt=''/></figure>
                        <h3>Scale your clients' reach</h3>
                        <p>Help your clients engage their customers better through a personal Business Messenger.</p>
                    </li>
                    <li>
                        <figure><img src={message} alt=''/></figure>
                        <h3>Become a messaging expert</h3>
                        <p>Outsmart the competition with our technical product enablement and go-to-market resources.</p>
                    </li>
                </ul>
            </div>
          </div>
      </>
  )
}
export default whyPartner;