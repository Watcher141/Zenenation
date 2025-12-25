import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import "./Footer.css";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Terms of Use", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="footer"
    >
      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-dots">
                <span className="dot blue"></span>
                <span className="dot red"></span>
              </div>
              <span className="logo-text">ZeneNation</span>
            </div>

            <p className="footer-desc">
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </p>

            <div className="socials">
              <a href="https://www.facebook.com/share/1Bs83wC4TV/" target="_blank" className="social fb"><FaFacebookF /></a>
              <a href="https://www.instagram.com/its_zenenation/" target="_blank" className="social i"><FaInstagram /></a>
              {/* ✅ WhatsApp DM Redirect */} <a whileHover={{ scale: 1.1 }} href="https://wa.me/918697302404?text=Hello%20ZeneNation!%20I%20am%20interested%20in%20your%20anime%20collectibles." target="_blank" rel="noopener noreferrer" className="social bw" > <BsWhatsapp /> </a>
              <a href="https://discord.gg/rRxpSTND6" target="_blank" className="social d"><FaDiscord /></a>
            </div>
          </div>

          {/* Links + Support */}
          <div className="footer-links">
            <div className="links-grid">

              {/* Company */}
              <div>
                <h3 className="links-title">Company</h3>
                <ul className="links-list">
                  {footerLinks.company.map((link, i) => (
                    <li key={i}>
                      <Link to={link.href} className="link">{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help & Support */}
              <div className="support-box">
                <h3 className="links-title">Help & Support</h3>

                <p><MdLocationOn /> Kolkata, West Bengal</p>

                <p>
                  <FiPhone />{" "}
                  <a href="tel:+918697302404">+91 86973 02404</a>
                </p>

                <p>
                  <BsWhatsapp />{" "}
                  <a href="https://wa.me/918697302404" target="_blank">
                    +91 86973 02404
                  </a>
                </p>

                <p>
                  <MdEmail />{" "}
                  <a href="mailto:zenenationstore@gmail.com">
                    zenenationstore@gmail.com
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ZeneNation</p>
          <p>Team ZeneNation</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
