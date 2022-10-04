import React from 'react';
import Layout1 from '../../layout/Layout1';
import {Helmet} from "react-helmet";
import { useParams} from 'react-router-dom';
import BlogData from "../Blogs/blogData.json"
import { Link } from "react-router-dom";

export default function BlogDesc() {
  const { slugs } = useParams();
  // const { histry } = useHistory();
  const BlogDescription = BlogData.filter(id => {
    if (id.id === slugs) {
      return id.id === slugs;
    } 
  });
  if (BlogDescription.length>0) {
    console.log('')
  } else {
    window.location.href='/404'
  }
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
          <title>{BlogDescription[0].blogHeading}</title>
          <meta name="description" content={BlogDescription[0].blogTxt} data-react-helmet="true"/>
          <meta name="keywords" content={BlogDescription[0].blogSubTitile} data-react-helmet="true"/>
      </Helmet>
      
        <Layout1>
        <section className="safemeet-container safemeet-blog-desc">
          <div dangerouslySetInnerHTML={{ __html: BlogDescription[0].blogDetails }}></div>
          <div className='blogListSide'>
            <ul>
              {BlogData.sort((a, b) => b.id - a.id).map((blog, index) => (
                 <Link to={`${blog.id}`}>
                <li>
                  <figure><img src={blog.blogimage} alt="blog - 1 "/></figure>
                  <div className='listconent'>
                    <p className='blogH'>{blog.blogHeading}</p>
                    <p className='dateP'>{blog.authur} <span className='DatePoint'>{ blogDate(index+1)}</span></p>
                  </div>
                  </li>
                  </Link>
              ))}
            </ul>
          </div>
          </section>
        </Layout1>
      </React.Fragment>
  )
}