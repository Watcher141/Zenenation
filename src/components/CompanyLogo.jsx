import React from "react";
import slack from "/images/b2_rbg.png";
import amazon from "/images/b3_rbg.png";
import woocommerce from "/images/banner1-removebg-preview.png";
import meundies from "/images/b4_rbg.png";
import sitepoint from "/images/b5_rbg.png";
import "./CompanyLogo.css";

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <section className="logo-section">
      <div className="logo-label">
        Irresistible Offers & Benefits<br />
        <strong>Don't Miss the Opportunity !!</strong>
      </div>

      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, index) => (
            <img src={logo} key={index} alt="company logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogo;
