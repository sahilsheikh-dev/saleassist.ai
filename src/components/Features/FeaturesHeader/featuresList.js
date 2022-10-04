const featuresList = ({img,text}) => {
  return (
      <div className="FeatureListBox">
          <div className="listContent">
            <img src={img} alt='' />
            <p>{text}</p>
          </div>
          <div className="downShape"></div>
       </div>
  )
}
export default featuresList