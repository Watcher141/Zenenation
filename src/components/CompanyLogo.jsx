import React from "react";
import slack from "/images/L1.png";
import amazon from "/images/L2.png";
import woocommerce from "/images/L3.png";
import meundies from "/images/L4.png";
import sitepoint from "/images/L5.png";
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
