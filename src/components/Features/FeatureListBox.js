import arrowRi from '../../assests/featured/arrowRight.svg'
const FeatureListBox = ({ FeatureAll,iconBg,oddClass,bigImg }) => {
  return (
    <div className={`FeatureBox ${oddClass}`} >
        <figure><img src={`/features/topIcon/${bigImg}.svg`} alt='' className='img-fluid'/></figure>
        {/* <figure><img src='/features/topIcon/AIBig.svg' alt=''/></figure> */}
        <div className="FextureText">
              <h3 className="feHeading">{FeatureAll.heading}</h3>     
              <p className="feSubText">{FeatureAll.subHeading}</p>
              <p className="feText">{FeatureAll.Text}</p>
              <ul className="FeatureAll">
                  {FeatureAll.list.map((list, indx) => (
                      <li key={indx}><span className={`feListIcon ${iconBg}`}><img src={arrowRi} alt=''/> </span> { list.listText}</li>
                ))}
              </ul>
        </div>
    </div>
  )
}

export default FeatureListBox