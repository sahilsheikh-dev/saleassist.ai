import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Logo from "../../assests/Logo/logo.png";
import { validateFields } from "../../helpers/Text";
import Validation from '../../helpers/inputValidation';
import { postCall } from '../../helpers/Api';
import { objectLength } from '../../helpers/Objects';
import { config } from '../../config';
import Layout4 from '../../layout/Layout4';


export default class DemoPage extends Component {
  
  constructor(props) {
    super(props)
    const form_data = {
      name: '',
      email: '',
      mobile_number: '',
      companyName: '',
      websiteName:'',
    }
    this.state = {
      form_data: form_data,
      renderThanks:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }


  componentDidUpdate() {
   if(this.state.renderThanks){
    if (this.state.countDown > 0) {
      setTimeout(() => {
        this.setState({
          countDown: this.state.countDown - 1
        })
      }, 1000);
    }

    if (this.state.countDown === 0) {
      this
        .props
        .history
        .push("/")
    }
   }
  }

  submitForm(e) {
    e.preventDefault();
    if(objectLength(this.state.form_data) === 0) {
      this.setState({errors: ['Please fill in the form.']});
      return;
    }
    const errors = validateFields(this.state.form_data);
    if (errors.length > 0) {
      this.setState({errors: errors});
      return;
    }
    postCall({
      url: config.url.INCOMING_WEBHOOKS,
      path: "/form",
      data: {
        form_data: this.state.form_data,
        title: "Live demo request"
      },
      onSuccess: (response) => {
        this.setState({ renderThanks: true });
        const formFild = {
          name: '',
          email: '',
          mobile_number: '',
          companyName: '',
          websiteName:'',
        }
        this.setState({form_data:formFild})
      }
    });
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    let validate = this.isAllowed(name, value);
    if (validate) {
      this.setState({ form_data: { ...this.state.form_data, [name]: value } });  
    }
    
  }
  isAllowed = (value, type) => {
    switch (value){
      case 'name':
        return (type === '' || (Validation.validateChar(type) && type.length < 100)); 
      case 'mobile_number':
        return ((type === '' || Validation.validateNumber(type)) && type.length < 11);
      default:
        return  true;
    }
  }
  render() {
    const scriptCode = `<script>EmbeddableWidget.mount({source_key: "6dafbb87-da43-442b-ba37-f65098f45ffb", parentElementId: "saleassistEmbed", form_factor: "embed"});</script>`;
    return (
      <Layout4>
        <div className='DemoContainer safemeet-container'>
            <div className='DemoLeft'>
                <div className="safemeet-demo-page-logo">
                  <Link to="/">
                    <img src={Logo} alt="SaleAssist Logo"/>
                  </Link>
                  <div className='loginMobile'>
                    <a className=' signUp' href='https://my.saleassist.ai/auth/login'>Sign Up</a>
                    <a href='https://my.saleassist.ai/auth/login' className={"loginbtn"}>Login </a>
                  </div>
                </div>
                <div className='DemoVideo'>
                <h1 className='demoHeading'>See for yourself.</h1>
                  <div className='embed-responsive'>
                    <iframe src="https://www.youtube.com/embed/f2_QLa7Y0jg" title="YouTube video player"  frameBorder='0' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <p className='DemoText'>Watch the demo to learn. You’ll see how Saleassist can help your business</p>
                  <ul className='DemoList'>
                    <li><span className='iconList one'></span> Revolutioning E-commerce with Video Commerce</li>
                    <li><span className='iconList two'></span> Turn traffic into<br/> revenue</li>
                    <li><span className='iconList three'></span> Enables Recommendation led Sales and upsell</li>
                    <li><span className='iconList four'></span> Boost your sales <br/>conversions</li>
                    <li><span className='iconList five'></span> Best Sales Interface is Your Face </li>
                    <li><span className='iconList six'></span> Video Commerce is the future</li>
                  </ul>
                </div>
            </div>
            <div className='DemoRight'>
              <div className="safemeet-demo-page-logo loginDesk">
              <a className=' signUp' href='https://my.saleassist.ai/auth/login'>Sign Up</a>
                    <a href='https://my.saleassist.ai/auth/login' className={"loginbtn"}>Login </a>
                </div>
              <h2 className='getInTeach'>Please Get in Touch</h2>
              <p className='getInSub'>You're just a few clicks away from increasing your sales number with Live Video Shopping. Fill in the form and we'll be in touch soon</p>
              {this.state.renderThanks?<p className='thanksMsg'>Thanks for requesting a demo. We’ll get in touch very soon.</p>:null}
              <div className='formBox'>
              <form onSubmit={this.submitForm}>
                  <div className='formGroup'>
                    <span className='formIcon name'></span>
                    <input
                      type="text"
                      name="name"
                      value={this.state.form_data.name}
                      placeholder="Name*"
                      className='formControl'
                      onChange={(e) => {
                      this.handleChange(e);
                    }}
                      required/>
                  </div>
                  <div className='formGroup'>
                    <span className='formIcon email'></span>
                    <input
                      
                      type="email"
                    name="email"
                    value={this.state.form_data.email}
                      placeholder="Email*"
                      className='formControl'
                      onChange={(e) => {
                      this.handleChange(e);
                    }}
                      required/>
      
                    </div>
                  <div className='formGroup'>
                    <span className='formIcon mobile'></span>
                    <input
                      type="text"
                    name="mobile_number"
                    value={this.state.form_data.mobile_number}
                      placeholder="Mobile Number*"
                      className='formControl'
                      onChange={(e) => {this.handleChange(e)}}
                      required/>
                  </div>
                  <div className='formGroup'>
                    <span className='formIcon companyName'></span>
                    <input
                      type="text"
                    name="companyName"
                    value={this.state.form_data.companyName}
                      placeholder="Company Name*"
                      className='formControl'
                      onChange={(e) => {this.handleChange(e)}}
                      required/>
                  </div>
                  <div className='formGroup'>
                    <span className='formIcon websiteName'></span>
                    <input
                      type="text"
                    name="websiteName"
                    value={this.state.form_data.websiteName}
                      placeholder="Website URL*"
                      className='formControl'
                      onChange={(e) => {this.handleChange(e)}}
                      required/>
                  </div>
                  <div className='formGroup'>
                    <button
                      className="safemeet-btn submit_btn"
                      type='submit'
                      >Request Demo
                    </button>
                    </div>
                    <div style={{ color: "red", fontStyle: "italic" }}>{this.state.errors && this.state.errors.join(" ")}
                    
                    </div>
                    </form>
              </div>
            </div>
          </div>
      </Layout4>
        // <div className="safemeet-container safemeet-demo-page">
        //   <div className="safemeet-demo-page-logo">
        //     <Link to="/">
        //       <img src={Logo} alt="SaleAssist Logo"/>
        //     </Link>
        //     <Link to={{pathname:"https://my.saleassist.ai/#/workspace/agent_zone"}} target="_blank">
        //       <button className={"safemeet-btn"}>
        //         Login </button>
        //     </Link>
        //   </div>
        //   <div className="safemeet-demo-page-row">
        //     <div className="safemeet-demo-page-row-col-1">
        //       <h1 style={{
        //         marginBottom: "30px !important"
        //       }}>See for yourself.</h1>
        //       <p style={{
        //         marginBottom: "30px !important",
        //         lineHeight: "50px"
        //       }}>Watch the demo to learn. You'll see how Saleassist can help your business:</p>
        //       <div className="safemeet-demo-page-row-col-1-1">
        //         <ul>
        //           <li>&bull; Gather more reviews on the sites that matter</li>
        //           <li>&bull; Turn website traffic into real-world customers</li>
        //           <li>&bull; Communicate with customers via text</li>
        //           <li>&bull; Collect payments quickly from anywhere</li>
        //           <li>&bull; Win repeat business</li>
        //         </ul>
        //       </div>
        //     </div>
        //     <div className="safemeet-demo-page-row-col-2">
        //     {/* <div id="saleassistEmbed"></div> */}
        //       {
        //         !this.state.renderThanks && <div className="safemeet-demo-page-row-col-2-inner">
        //         <h3>Please get in touch</h3>
        //         <br/>
        //         <form onSubmit={this.submitForm}>
        //         <input
        //           type="text"
        //           name="name"
        //           placeholder="Name*"
        //           onChange={(e) => {
        //           this.handleChange(e);
        //         }}
        //           required/>
  
        //         <br/>
  
        //         <input
        //           style={{
        //           margin: '20px 0'
        //         }}
        //           type="email"
        //           name="email"
        //           placeholder="Email*"
        //           onChange={(e) => {
        //           this.handleChange(e);
        //         }}
        //           required/>
  
        //         <br/>
  
        //         <input
        //           style={{
        //           margin: '0px 0 10px 0'
        //         }}
        //           type="text"
        //           name="mobile_number"
        //           placeholder="Mobile Number*"
        //           onChange={(e) => {this.handleChange(e)}}
        //           required/>
  
        //         <button
        //           className="safemeet-btn"
        //           type='submit'
        //           >Watch Demo
        //         </button>
        //         <div style={{color:"red",fontStyle:"italic"}}>{this.state.errors && this.state.errors.join(" ")}</div>
        //         </form>
        //       </div>
        //       }
              // {
              //   this.state.renderThanks && <div style={{
              //     position: 'relative'
              //   }}>
              //     <ReactPlayer url="https://www.youtube.com/watch?v=yhscwSAodA0" playing height="340px" width="100%"/>
              //     <br/><br/>
              //     <h3 className='demo-page-h3'>Thanks for Requesting Demo. We will get in touch with you shortly.</h3>
              //   </div>
              // }
        //     </div>
        //   </div>
        // </div>
      
    )
  }
}
