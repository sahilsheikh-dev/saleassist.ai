import React from 'react'

const AddBox = ({rightArrow}) => {
    return (
    <div className='safemeet-container'>
        <div className="demoStript">
            Get started with Live Selling today
                <a href='https://calendly.com/saleassist/30min' className="btn btn-dark  btnArrow">Request Demo <img src={ rightArrow} alt=''/></a>
        </div>  
    </div>
  )
}

export default AddBox