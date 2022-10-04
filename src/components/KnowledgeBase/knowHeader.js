import React from 'react'
import searchIcon from '../../assests/knowladgeBase/search.svg';
const KnowHeader = ({handleSearch,searchInput}) => {
  return (
      <>
        <section className="knowHeader">
        	<h1>SaleAssist Knowledgebase</h1>
        </section>
        <div className="searchBox">
            <input type="text" name="searchBox"  value={searchInput} placeholder="Search Documentation" onChange={(e)=>handleSearch(e.target.value)}/>
            <button><img src={searchIcon} alt=''/> Search</button>
        </div>
      </>
  )
}

export default KnowHeader