import React from 'react'
const KnowDetails = ({knowData,menuScroll }) => {
  return (
      <div className="knowShow" >
      {knowData.map((data, indx) => (
          <div key={indx} className="knowList" id={`know${indx+1}`} ref={menuScroll}>
            <h3>{ data.heading}</h3>
            <p dangerouslySetInnerHTML={{ __html: data.DetailsText }}></p>
            <div className='imageSection' dangerouslySetInnerHTML={{ __html: data.Image }}></div>
        </div>
        ))}</div>

  )
}

export default KnowDetails