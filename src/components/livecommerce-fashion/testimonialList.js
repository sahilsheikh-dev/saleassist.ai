const testimonialList = ({ceoName,position,about,imgPath,boxNumber}) => {
  return (
    <div class={`founderBox ${boxNumber}`}>
        <div className='founderImg'><img src={imgPath}  alt=''/>	</div>
          <h4>{ ceoName}</h4>
          <span>{ position}</span>
          <p>{ about}</p>
    </div>
  )
}

export default testimonialList