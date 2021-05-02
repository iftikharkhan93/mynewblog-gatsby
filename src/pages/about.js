import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div className="global-wrapper">
        {/* <div className="about"> */}
        <p className="about-title">About Me</p>
        <div className="about-img">
          <img src="/images/about-me.JPG" />
        </div>
        <div className="about-content">
          <p>Hi, I’m Iftikhar. Nice to meet you.</p>
          <p>
            Since beginning my journey as a freelance designer nearly 3 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>

        <h1>
            A good quote to live by

        </h1>
          <blockquote className="quote">
            <quote >"To travel is to live"
                </quote>
          </blockquote>


        </div>
        <div className="about-main-img">
          <img src="/images/IMG_6224.JPG" />
        </div>

      
        
        {/* </div> */}
      </div>
    </Layout>
  );
};




export default About;
