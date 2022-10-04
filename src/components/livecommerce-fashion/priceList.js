import cancel from '../../assests/LiveShopping/cancel.svg'
import checked from '../../assests/LiveShopping/checked.svg'
const priceList = ({titile,priceTag,pirceFeture,classList,btnLink,setModal}) => {
  return (
    <div className={`priceListBox ${classList}`}>
        {/* <p className='priceTitle btn btn-dark'>{titile}</p> */}
          <div className="priceTag" dangerouslySetInnerHTML={{ __html: priceTag }}></div>
          <ul className='FetureList'>
                {pirceFeture.map((list, index) => (
                  
                  // {list.text === 'All Awesome Features'?}
                    <li key={index}>{list.text === 'All Awesome Features'?<span className='AwesomeshowMore' onClick={()=>{setModal(true)}}><img src={checked} alt=''/> {list.text} <span className='showPluse'>+</span> </span>:<><img src={checked} alt=''/> {list.text}</>}  {list.showPluse?<span className='showPluse'>+</span>:null}</li>
                ))}
          </ul>
      <a className="btn btn-choose" href={btnLink}>{ titile}</a>
    </div>
  )
}

export default priceList