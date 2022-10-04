import React from 'react'

const ourClient = ({ globe, arrowWhiteright, clientLogo,title,btn,margin }) => {
  const TalkTo = () => {
    // EmbeddableWidget.mount({source_key: '3c5b6406-e37b-4c2d-b609-4f85c3e1630b', form_factor: 'button'})
  }
  return (
    <>
        <section className={`clients ${margin?'margin70':null}`}>
            <div className="container">
              <div className="clientsBox">
            <h3>{title} { globe?<figure><img src={globe} alt='Globe'/></figure>:null}</h3>
                <div className='mainDiv'>
                  <div className='leftDiv'>
                <ul>
               
                {clientLogo.map((item,index)=>{
                    return(
                      <li key={index}>
                            <figure> <img src={item} alt='knowlarity'/> </figure>
                        </li>
                    )
                  })}
                        {/* <li>
                           <a href="https://cdn.shopify.com"> <figure> <img src={ourclient} alt='knowlarity'/> </figure></a>
                        </li>
                        <li>
                            <a href="https://media.viveks.com/"><figure> <img src={ourclient1} alt='knowlarity'/> </figure></a>
                        </li>
                        <li>
                            <a href="https://www.megastores.com"> <figure> <img src={ourclien2} alt='knowlarity'/> </figure></a>
                        </li>
                        <li>
                            <a href="http://autohangaradvantage.com"><figure> <img src={ourclient3} alt='knowlarity'/> </figure></a>
                        </li>
                        <li>
                            <a href="https://www.mintifi.com"> <figure> <img src={ourclient4} alt='knowlarity'/> </figure></a>
                        </li> */}
                      </ul>
                  </div>
                  {btn?<div className='rightDiv'>
                    <a href='/demo' className="btnBlack" onClick={TalkTo}>TALK TO SALES <figure> <img src={ arrowWhiteright} alt="talk tor sale"/></figure></a>
                  </div>:null}
                  
                </div>
              </div>
            </div>
          </section>      
    </>
  )
}

export default ourClient