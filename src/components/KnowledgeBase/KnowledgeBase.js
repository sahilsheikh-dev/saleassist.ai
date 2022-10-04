import React, { useEffect, useState,useRef } from 'react'
import LeftMenu from './knowledgLeftMenu';
import KnowHeader from './knowHeader';
import KnowDetails from './knowDetails';
import knowData from '../../knowledgeData/knowledgeData.json'
const KnowledgeBase = () => {
  const [subActive, setsubActive] = useState(-1);
  const [stepDataAll, setstepDataAll] = useState(0);
  const [currentData, setcurrentData] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const menuScroll = useRef(null);
  const [isActive, setisActive] = useState(-1);
  const mainList = (id) => {
    if (isActive === id) {
      setisActive(-1);
    } else {
      setisActive(id);
    }
    if (id === 1) {
      setstepDataAll(knowData['Installation & setup']);
      setcurrentData(knowData['Installation & setup']);
    }else if(id ===2 ){
      setstepDataAll(knowData.GetStarted);
      setcurrentData(knowData.GetStarted);
    } 
    else if (id === 3) {
      setstepDataAll(knowData.WidgetIntegration);
      setcurrentData(knowData.WidgetIntegration);
    }else if (id === 4) {
      setstepDataAll(knowData.ReachBackLeads);
      setcurrentData(knowData.ReachBackLeads);
    } else if (id === 5) {
      setstepDataAll(knowData.Tutorials);
      setcurrentData(knowData.Tutorials);
    }
  }
  // console.log(knowData.GetStarted);
  useEffect(() => {
   
    const agr = async () => {
      if (knowData) {
        setstepDataAll(knowData.GetStarted);
        setcurrentData(knowData.GetStarted);
      }
    }
    agr();
  }, []);
  const handleSearch = (value) =>{
    setsearchInput(value)
    if(value === ''){
        setcurrentData(stepDataAll)
    }else{
        const newArry = stepDataAll.filter(stepDataAll =>JSON.stringify(stepDataAll).match(new RegExp(value,"i")))
        setcurrentData(newArry)
    }
  }
  return (
    <>
      <KnowHeader handleSearch={handleSearch} searchInput={ searchInput}/>
      <div className="safemeet-container knowMainBox">
        <LeftMenu subActive={subActive} isActive={isActive} setsubActive={ setsubActive} mainList={ mainList}/>
        {currentData && currentData.length>0? <KnowDetails  menuScroll={menuScroll} knowData={ currentData}/>:null}
      </div>
    </>
  )
}

export default KnowledgeBase