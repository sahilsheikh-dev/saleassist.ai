import React, {Component} from 'react';
import Layout1 from '../../layout/Layout1';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import BlogImage1 from "../../assests/blog/Person.svg";
import BlogData from "./blogData.json"
export default class Blogs extends Component {
  render() {
    function formatDate(date){
      var dd = date.getDate() -5;
      var mm = date.getMonth()+1;
      var yyyy = date.getFullYear();
      if(dd<10) {dd='0'+dd}
      if(mm<10) {mm='0'+mm}
      date = mm+'/'+dd+'/'+yyyy;
      return date
    }
    function blogDate(date) {
      var d = new Date();
      d.setDate(d.getDate() - date);
      return formatDate(d)
    }
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>SaleAssist - Blogs</title>
        </Helmet>
        <Layout1>
          <section className="safemeet-container safemeet-blogs">
            <div className='blog-heading'>
              <h2>Articles & Blog Posts</h2>
              {/* <img src={ BlogImage1} className='haedingImg'/> */}
            </div>
            <div className="blog-main">
              {BlogData.sort((a, b) => b.id - a.id).map((blog, index) => (
                <div className={`safemeet-blogs-container ${index === 0 ? 'blogFulll' : null}`} id={index} key={index}>
                  <Link to={`blog-desc/${blog.id}`}>
                  <div className="safemeet-blogs-container-1">
                    <img src={blog.blogimage} alt="blog - 1 "/>
                  </div>
                  <div className="safemeet-blogs-container-2">
                    {/* <h4>{blog.blogSubTitile}</h4> */}
                    <h2>{blog.blogHeading}</h2>
                    <p>{blog.blogListText}</p>
                      <p className='authur'>
                        <figure><img src={BlogImage1} alt="person" /></figure>
                        <div className='authurName'>
                        {blog.authur} <span className='DatePoint'>{blogDate(index + 1)}</span>
                        </div>
                      </p>
                    {/* <p dangerouslySetInnerHTML={{__html:blog.blogDetails}}></p> */}
                    {index === 0?<button className="btn-black">Read More</button>:''}
                    </div>
                    </Link>
                </div>
              ))}
            </div>
          </section>
        </Layout1>
      </React.Fragment>
    )
  }
}