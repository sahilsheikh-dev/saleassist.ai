import FormBody from "../Home-Banner/formBody"
import imgbarCode from '../../assests/featured/barCode.svg'
const barCode = () => {
  return (
      <>
        <div className='safemeet-container'>
              <div className='featureBarCode '>
                  <div className='BarCodeText'>
                    <figure><img src={imgbarCode} alt=''/> </figure>
                    <h3 className="brHeading">Scan QR code,<br/>start using Saleassist</h3>
                  </div>
                  <div className='BarCodeForm safemeet-home-page-row-col-1'>
                    <h3 className="barCodeFormHeading">Try SaleAssist Today</h3>
                    <FormBody />
                  </div>
              </div>      
        </div>
      </>
  )
}

export default barCode