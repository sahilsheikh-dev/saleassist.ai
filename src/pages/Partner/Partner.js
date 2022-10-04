import React, { Component } from "react";
import Layout1 from "../../layout/Layout1";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Barcode from "../../assests/barcode/barcode.webp";
import { postCall } from "../../helpers/Api";
import { config } from "../../config";
import peopleSvg from "../../assests/Partnership/2peopleillustration.svg";
import { validateFields } from "../../helpers/Text";
import { objectLength } from "../../helpers/Objects";
import Faq from "./../../components/pricing/faq";
import WhyPartner from "../../components/Partneship/whyPartner";
import Born from "../../assests/Partnership/born.png";
import Schbang from "../../assests/Partnership/schbang.png";
import Aceturtle from "../../assests/Partnership/aceturtle.png";
import Greenhonchos from "../../assests/Partnership/greenhonchos.png";
import Arvind from "../../assests/Partnership/arvind.png";
import Adapty from "../../assests/Partnership/adapty.png";
import Knowlarity from "../../assests/Partnership/knowlarity.png";
import Shoptimize from "../../assests/Partnership/shoptimize.png";
import faqData from "../../faqData/partner.json";
const images = [
  {
    img: Born,
    path: "https://www.borngroup.com/",
  },
  {
    img: Schbang,
    path: "https://www.schbang.com/",
  },
  {
    img: Aceturtle,
    path: "https://www.aceturtle.com/",
  },
  {
    img: Greenhonchos,
    path: "https://www.greenhonchos.com/",
  },
  {
    img: Adapty,
    path: "https://adapty.io/",
  },
  {
    img: Arvind,
    path: "https://www.arvindfashions.com/",
  },
  {
    img: Knowlarity,
    path: "https://www.knowlarity.com/",
  },
  {
    img: Shoptimize,
    path: "https://www.shoptimize.ai/",
  },
];
export default class Partner extends Component {
  constructor() {
    super();
    this.state = {
      form_data: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.contact_form = null;
  }

  componentDidMount() {
    this.contact_form = document.querySelector("#contact_form");
  }

  submitForm(e) {
    e.preventDefault();
    if (objectLength(this.state.form_data) === 0) {
      this.setState({ errors: ["Please fill in the form."] });
      return;
    }
    const errors = validateFields(this.state.form_data);

    if (errors.length > 0) {
      this.setState({ errors: errors });
      return;
    }
    postCall({
      url: config.url.INCOMING_WEBHOOKS,
      path: "/form",
      data: {
        form_data: this.state.form_data,
        title: "Partner request",
      },
      onSuccess: (response) => {
        this.setState({ renderThanks: true });
      },
    });
  }

  handleChange = (e) => {
    this.state.form_data[e.target.name] = e.target.value;
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>SaleAssist - Partner</title>
        </Helmet>
        <Layout1>
          {/* <div className="safemeet-container safemeet-partner">
            <h1>Join the Saleassist Partner Program</h1>
            <p>Saleassist is a Live Commerce SaaS that empowers businesses with real-time
              virtual shopping, allowing them to engage, convert, and retain more customers.
              Finally, a partnership program that allows you to focus on sales. Retail
              Saleassist's trusted eCommerce solution with the greatest profit margins in the
              industry and help the world connect better. Let’s be partners in communications!</p>
            <div className="safemeet-blackbox" id="contact_form">
              {!this.state.renderThanks && <form onSubmit={this.submitForm}>
                <h3>Contact us to get started</h3>
                <div className="safemeet-input-flex">
                  <div className="safemeet-input-flex-col-1">
                    <input type="text" placeholder="First Name" name="first_name" onChange={e => this.handleChange(e)}/>
                  </div>
                  <div className="safemeet-input-flex-col-1">
                    <input type="text" placeholder="Last Name" name="last_name" onChange={e => this.handleChange(e)}/>
                  </div>
                </div>
                <div className="safemeet-input-flex">
                  <div className="safemeet-input-flex-col-1">
                    <input type="text" placeholder="Company Name" name="company_name" onChange={e => this.handleChange(e)}/>
                  </div>
                  <div className="safemeet-input-flex-col-1">
                    <input type="email" placeholder="Email" name="email" onChange={e => this.handleChange(e)}/>
                  </div>
                </div>
                <div className="safemeet-input-flex">
                  <div className="safemeet-input-flex-col-1">
                    <input type="text" placeholder="Mobile number" name="mobile_number" onChange={e => this.handleChange(e)}/>
                  </div>
                  <div className="safemeet-input-flex-col-1">
                    <button className="btn" type='submit'>Get Started</button>
                  </div>
                </div>
                <div style={{color:"red",fontStyle:"italic"}}>{this.state.errors && this.state.errors.join(" ")}</div>
              </form>}
              {
                this.state.renderThanks && <div style={{padding: "20px"}}>
                  <div style={{position:'absolute',zIndex:1,left:'50%',whiteSpace:"nowrap",transform:"translate(-50%,-50%)",color:'green'}}>
                    <h1 className='demo-page-h1'>Thank you for your interest.</h1>
                    <h3 className='demo-page-h3'>We will get in touch with you shorly.</h3>
                  </div>
  
                </div>
              }
            </div>
            <h6>Already a partner? Sign in
              {" "}<a href="https://my.saleassist.ai">here</a>
            </h6>
            <hr className="safemeet-sumup-hr"/>
          </div>
          <div className="safemeet-container safemeet-partner-program">
            <h1>Why join our<br/>Partner Program</h1>
            <div className="safemeet-card-container-part">
              <div className="part-card">
                <img src=""/>
                <h5>Be armed with battle cards</h5>
                <p>These cheat sheets provide you with all of the information you need to close
                  deals successfully and more sales—premium access of features, benefits, FAQs,
                  and other details.</p>
              </div>
              <div className="part-card">
                <img src=""/>
                <h5>Work with a trusted pro</h5>
                <p>An exclusive account manager will help you with critical collateral,
                  resolving problems, closing sales, and conducting training sessions.</p>
              </div>
            </div>
            <div className="safemeet-card-container-part">
              <div className="part-card">
                <img src=""/>
                <h5>Get better with feedback</h5>
                <p>During regular feedback sessions, discuss comprehensive reports, important
                  sales KPIs, and develop stronger sales tactics.</p>
              </div>
              <div className="part-card">
                <img src=""/>
                <h5>Know your software</h5>
                <p>With detailed demos, you can gain a thorough understanding of the product.
                  Provide your clients with all of the information they require.</p>
              </div>
            </div>
            <div className="safemeet-card-container-part">
              <div className="part-card">
                <img src=""/>
                <h5>The talk track hack</h5>
                <p>With a talk track, you can have flawless conversations. Effectively probe and
                  pitch clients and confidently negotiate.</p>
              </div>
              <div className="part-card">
                <img src=""/>
                <h5>Quick query resolution</h5>
                <p>Saleassist guarantees a quick resolution to all of your queries. So, if you
                  have any concerns, we will address them.</p>
              </div>
            </div>
          </div> */}
          {/* <div className="safemeet-container safemeet-quote">
            <h1>“Saleassist has brought incredible value to our clients and exceeds in terms
              of value, delivery of leads, integration options, and higher rankings. The
              platform is convenient and easy to use for both customers and clients.”</h1> */}
          {/* <div>
              <img src=""/>
              <div>
                <p>name</p>
                <p>Designation</p>
              </div>
            </div> */}
          {/* </div> */}

          <div className="safemeet-container">
            <div className="safemeet-ready-to-join">
              <div className="fullImg">
                <img src={peopleSvg} alt="" />
              </div>
              <div className="safemeet-ready-to-join-col-1">
                <h1
                  style={{
                    marginTop: "15px",
                    fontSize: "clamp(0.8rem,2vw,1rem)",
                    fontStyle: "italic",
                    opacity: "0.6",
                    marginBottom: "20px",
                  }}
                >
                  Scan QR code,
                  <br />
                  start using SaleAssist
                </h1>
                <img src={Barcode} alt="" />
              </div>
              <div className="safemeet-ready-to-join-col-2 leftLine">
                <h1>
                  Ready to join our
                  <br />
                  partner program?
                </h1>
                <p>
                  Welcome to the future of retail! Do you want to help your
                  customers succeed with Live Video Shopping while getting a
                  kickback? Then you’re the perfect match for our Saleassist
                  Partner program.
                </p>
                <Link to="/demo">
                  <button className="safemeet-btn">Become a Partner</button>
                </Link>
              </div>
            </div>
          </div>
          <WhyPartner />
          <section className="ourpartnerLogo partner">
            <div className="container">
              <div className="heading">
                Join our other high-growth app partners
              </div>
              <ul>
                {images.map((img, index) => (
                  <li key={index}>
                    <a
                      href={img.path}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src={img.img} alt={img} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Faq faqData={faqData} />
        </Layout1>
      </React.Fragment>
    );
  }
}
