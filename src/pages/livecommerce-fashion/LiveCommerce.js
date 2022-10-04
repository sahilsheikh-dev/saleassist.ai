import React from 'react';
import Layout4 from '../../layout/Layout4';
import { Helmet } from "react-helmet";
import {useLocation } from 'react-router-dom';
import LiveCommerce from '../../components/livecommerce-fashion/LiveCommerce';
const LiveShopping = () => {
  let pageImg = [
    {
      urlPath:'/livecommerce',
      gifFile: '/features/commerce/liveCommer.gif',
      oneToMany: '/features/commerce/1tomanylivestream.jpg',
      oneToOne: '/features/commerce/tabs.jpg',
      ontToAny:'/features/commerce/livestreamslotbook.jpg'
    },
    {
      urlPath:'/Live-shopping',
      gifFile: '/features/commerce/liveCommer.gif',
      oneToMany: '/features/commerce/1tomanylivestream.jpg',
      oneToOne: '/features/commerce/tabs.jpg',
      ontToAny:'/features/commerce/livestreamslotbook.jpg'
    },
    {
      urlPath:'/livecommerce-electronics',
      gifFile: '/features/Electronics/ezgif.com-gif-maker.gif',
      oneToMany: '/features/Electronics/1tomanylivestream.jpg',
      oneToOne: '/features/Electronics/1to1videoshop.jpg',
      ontToAny:'/features/Electronics/livestreamslotbook.jpg'
    },
    {
      urlPath:'/livecommerce-jewellery',
      gifFile: '/features/Jewelry/ezgif.comgifmaker.gif',
      oneToMany: '/features/Jewelry/1tomanylivestream.jpg',
      oneToOne: '/features/Jewelry/1to1videoshop.jpg',
      ontToAny:'/features/Jewelry/livestreamslotbook.jpg'
    },
    {
      urlPath:'/livecommerce-furniture',
      gifFile: '/features/Furniture/ezgif.comgifmaker.gif',
      oneToMany: '/features/Furniture/1tomanylivestream.jpg',
      oneToOne: '/features/Furniture/1to1videoshop.jpg',
      ontToAny:'/features/Furniture/livestreamslotbook.jpg'
    },
    {
      urlPath:'/livecommerce-automobile',
      gifFile: '/features/Automobile/ezgif.comgifmaker.gif',
      oneToMany: '/features/Automobile/1tomanylivestream.jpg',
      oneToOne: '/features/Automobile/1to1videoshop.jpg',
      ontToAny:'/features/Automobile/livestreamslotbook.jpg'
    }
  ]
  
  const router = useLocation();
  const imageFix = pageImg.filter((x) => x.urlPath === router.pathname);
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>SaleAssist - Live Shopping</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Layout4>
          <LiveCommerce imageFix={imageFix[0]}/>
        </Layout4>
      </React.Fragment>
    )
  
}
export default LiveShopping