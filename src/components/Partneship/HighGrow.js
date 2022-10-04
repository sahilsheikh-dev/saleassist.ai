import React from 'react'
import Born from "../../assests/Partnership/born.png";
import Schbang from "../../assests/Partnership/schbang.png";
import Aceturtle from "../../assests/Partnership/aceturtle.png";
import Greenhonchos from "../../assests/Partnership/greenhonchos.png";
import Arvind from "../../assests/Partnership/arvind.png";
import Adapty from "../../assests/Partnership/adapty.png";
import Knowlarity from "../../assests/Partnership/knowlarity.png";
import Shoptimize from "../../assests/Partnership/shoptimize.png";
const images = [Born,Schbang,Aceturtle,Greenhonchos,Adapty,Arvind,Knowlarity,Shoptimize]
const HighGrow = () => {
  return (
      <>
          <div className='safemeet-container'>
            <div className='highGrow'>
                <h3 className='HightHeading'>Join our other high-growth app partners</h3>
                <ul>
                    {images.map((img, index) => (
                        <li key={index}>
                            <img src={img} alt={img}/>
                        </li>
                    ))}
                    
                </ul>
            </div>
          </div>
          
      </>
  )
}

export default HighGrow