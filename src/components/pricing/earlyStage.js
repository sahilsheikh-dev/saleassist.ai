import React from 'react'

const earlyStage = ({Rectangle,arrowRight}) => {
  return (
      <>
        <section className="earlyStage ">
            <div className="container">
              <div className="earlyStageBox">
                <figure>
                    <img src={ Rectangle} alt="Rectangle"/>
                </figure>
                <h3>Early stage company?</h3>
                <p>Eligible startups can get advanced Saleassist features with<br/><span>Discounted Price</span> for upto one year.</p>
                <a href='/demo' className="btn btnOutline">
                    Apply Now <img src={ arrowRight} alt="right arrow"/>
                </a>
              </div>
            </div>
        </section>
      </>
  )
}

export default earlyStage