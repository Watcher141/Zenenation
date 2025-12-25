import React from "react";
import slack from "/images/slack.png";
import amazon from "/images/amazon.png";
import woocommerce from "/images/woocommerce.png";
import meundies from "/images/meundies.png";
import sitepoint from "/images/sitepoint.png";
import "./CompanyLogo.css";

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <section className="logo-section">
      <div className="logo-label">
        Proud partner at <br />
        <strong>Hubspot & Segment</strong>
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
