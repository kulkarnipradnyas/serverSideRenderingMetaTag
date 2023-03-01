import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import "./App.css";



const App = () => {
 const [productId, setProductId]= useState(null)
 useEffect(()=>{
setTimeout(()=>{
  setProductId(1)
},2000)
 },[])


  return <HelmetProvider>

    <div>
      <Helmet >

      <title>{`Product ${productId || "custom"}`}</title>
      <meta name="title" content="Product custom tag"/>
      <meta name="description" content="description"/>
        {/* Facebook */}
      <meta property="og:url" content="https://55eb-110-226-177-162.in.ngrok.io/product"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="custom meta"/>
      <meta property="og:description" content="𝕋𝕙𝕚𝕤 𝕄𝕖𝕥𝕒 𝕋𝕒𝕘𝕤 App 𝔾𝕖𝕟𝕖𝕣𝕒𝕥𝕠𝕣 𝕚𝕤 ♡"/>
      <meta property="og:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"/>
      <meta property="og:site_name" content="Site name"/>
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@Pradnya"/>
      <meta name="twitter:creator" content="@Pradnya"/>
      <meta name="twitter:title" content="custom meta"/>
      <meta name="twitter:description" content="𝕋𝕙𝕚𝕤 𝕄𝕖𝕥𝕒 𝕋𝕒𝕘𝕤 App 𝔾𝕖𝕟𝕖𝕣𝕒𝕥𝕠𝕣 𝕚𝕤 ♡"/>
      <meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"></meta>
      <meta property="twitter:url" content="https://55eb-110-226-177-162.in.ngrok.io/product" />


      </Helmet>
      <button style={{background:"red"}}>Me button</button>
      <h1>Product {productId}</h1>
      <p>Product {productId} details go here...</p>
    </div>

  </HelmetProvider>
}

export default App;
