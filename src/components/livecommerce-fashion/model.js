
import checked from '../../assests/LiveShopping/checked.svg'
const Model = ({ pirceFeture,model,setModal }) => {
  return (
      <>
        <div class={`modal fade ${model?'active':null}`} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">All Awesome Features</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>{setModal(false)}}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul className='FetureList'>
                                {pirceFeture.map((list, index) => (
                                
                                // {list.text === 'All Awesome Features'?}
                                    <li key={index}><img src={checked} alt=''/> {list.text}  {list.showPluse?<span className='showPluse'>+</span>:null}</li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default Model