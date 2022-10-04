import React from 'react'
import knowData from '../../knowledgeData/knowledgeData.json'
const LeftMenu = ({ mainList,subActive,isActive,setsubActive }) => {
  const scrolldiv = (element,id) => {
    setsubActive(id);
    var ele = document.getElementById(element);   
    var headerOffset = 100;
    var elementPosition = ele.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({top:offsetPosition});
  }
  return (
      <>
        <div className="knowLeft">
            <ul>
                <li className={`${isActive ===1?'active':null}`} ><span onClick={()=>mainList(1)}>Installation & setup</span>
                    <ul className="subMenu">
                      {knowData && knowData['Installation & setup'].map((data, indx) => (
                         data.heading !== ''?<li className={`subDropdown ${subActive === indx+1?'active':''}`} key={indx} onClick={()=>scrolldiv('know'+(indx+1),indx+1)}><span>{ data.heading}</span></li>:null 
                      ))}
                    </ul>
                </li>
                <li className={`${isActive ===2?'active':null}`} ><span onClick={()=>mainList(2)}>Get Started</span>
                    <ul className="subMenu">
                      {knowData && knowData.GetStarted.map((data, indx) => (
                         data.heading !== ''?<li className={`subDropdown ${subActive === indx+1?'active':''}`} key={indx} onClick={()=>scrolldiv('know'+(indx+1),indx+1)}><span>{ data.heading}</span></li>:null 
                      ))}
                    </ul>
                </li>
                <li className={`${isActive ===3?'active':null}`} ><span onClick={()=>mainList(3)}>Widget Integration</span>
                    <ul className="subMenu">
                      {knowData && knowData.WidgetIntegration.map((data, indx) => (
                         data.heading !== ''?<li className={`subDropdown ${subActive === indx+1?'active':''}`} key={indx} onClick={()=>scrolldiv('know'+(indx+1),indx+1)}><span>{ data.heading}</span></li>:null 
                      ))}
                    </ul>
                </li>
                <li className={`${isActive ===4?'active':null}`} ><span onClick={()=>mainList(4)}>Reach Back to Leads</span>
                    <ul className="subMenu">
                     {knowData && knowData.ReachBackLeads.map((data, indx) => (
                          data.heading !== ''?<li className={`subDropdown ${subActive === indx+1?'active':''}`} key={indx} onClick={()=>scrolldiv('know'+(indx+1),indx+1)}><span>{ data.heading}</span></li>:null
                      ))}
                      {/* {[...Array.from(Array(5).keys())].map((num, i) => <li className={`${subActive === num+1?'active':''}`} key={i} onClick={()=>scrolldiv('know'+(num+1))}><span>Step {num+1}</span></li>)} */}
                    </ul>
                </li>
                <li className={`single ${isActive ===5?'active':null}`} onClick={()=>mainList(5)}>
                    <span>Tutorials</span>
                </li>
            </ul>
        </div>
    </>
  )
}
export default LeftMenu
