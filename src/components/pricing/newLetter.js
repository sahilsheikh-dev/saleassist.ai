import React, { useState } from 'react';
import { config } from '../../config';
import { postCall } from '../../helpers/Api';
import { objectLength } from '../../helpers/Objects';
import { validateFields } from '../../helpers/Text';
import Validation from '../../helpers/inputValidation'
const NewLetter = () => {
  const [form_data, setform_data] = useState({
    email: '',
    mobile_number:''
  });
  const [error, setError] = useState(null);
  const [renderThanks, setrenderThanks] = useState(false);
  function submitForm(e) {
   e.preventDefault();
    if(form_data.newsEmail === '' && form_data.mobile_number === '') {
      // setState({errors: ['Please fill in the form.']});
      setError('Please fill in the form');
      return;
    }else{}
    postCall({
      url: config.url.INCOMING_WEBHOOKS,
      path: "/form",
      data: {
        form_data:form_data,
        title: "Demo request"
      },
      onSuccess: (response) => {
        setrenderThanks(true);
      }
    });
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    let validate = isAllowed(name, value);
    if(validate){
      setform_data({ ...form_data, [name]: value });
    }
  }
  const isAllowed = (value, type) => {
    switch (value){
      case 'name':
        return (type === '' || (Validation.validateChar(type) && type.length < 100)); 
      case 'mobile_number':
        return ((type === '' || Validation.validateNumber(type)) && type.length < 11);
      default:
        return  true;
    }
  }
  return (
      <>
        <section className="newsLetter">
            <div className="container">
              <div className="newletterBox">
                <div className="newsLetterText">
                  <h2>You're just a few clicks away<br/> from boosting your sales with<br/> Live Video Shopping.</h2>
                  <ul>
                    <li>
                      We'll give you a full introduction on how to get started.
                      <span>It takes less than a week to go live with your first show!</span>
                    </li>
                    <li>
                      We'll show you performance tips to get the best KPIs.
                      <span>Live Video Shopping has proven to skyrocket conversion!</span>
                    </li>
                    <li>
                      We'll teach you to go live like the world's biggest brands.
                      <span>Prepare to be inspired!</span>
                    </li>
                  </ul>
                </div>
            <div className="newsInput">
              {renderThanks ? <span style={{ color: 'green', fontStyle: 'italic' }}>Thank you for submitting your request.</span> : <>
              <h4>Fill in the form and we'll be in touch soon</h4>
                  <div className="formGroup">
                    Your Business Email*
                    <input type="text" required="required" name="email" className="form-control" placeholder="yourname@company.com" onChange={(e) => handleChange(e)} value={form_data.email} />
                    <input type="text" required="required" name="mobile_number" className="form-control" placeholder="Enter Mobile" onChange={(e) => handleChange(e)} value={form_data.mobile_number}/>
                    <span style={{color:'red', fontSize:'14px',textAlign:'left',width:'100%',marginBottom:'10px'}}>{error}</span>
                    <span>Saleassist values your privacy! We will only contact you about our products. You may unsubscribe at any time. For more info, please review our Privacy Policy.</span>
                  </div>
                  <button className="btn btnBlack" type='submit' onClick={(e)=>submitForm(e)}>Subscribe Now</button>
              </>}
                  
                </div>
              </div>
              
            </div>
          </section>  
      </>
  )
}

export default NewLetter