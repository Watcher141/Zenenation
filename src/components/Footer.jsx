import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
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
        <motion.div variants={fadeIn("up", 0.3)} className="footer-grid">

          {/* Brand */}
          <motion.div variants={fadeIn("right", 0.4)} className="footer-brand">
            <motion.div variants={fadeIn("down", 0.5)} className="footer-logo">
              <div className="logo-dots">
                <span className="dot blue"></span>
                <span className="dot red"></span>
              </div>
              <span className="logo-text">ZeneNation</span>
            </motion.div>

            <motion.p variants={fadeIn("up", 0.6)} className="footer-desc">
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </motion.p>

            {/* Social Icons */}
            <motion.div variants={fadeIn("up", 0.7)} className="socials">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/share/1Bs83wC4TV/"
                target="_blank"
                rel="noopener noreferrer"
                className="social fb"
              >
                <FaFacebookF />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/its_zenenation/"
                target="_blank"
                rel="noopener noreferrer"
                className="social i"
              >
                <FaInstagram />
              </motion.a>

              {/* ✅ WhatsApp DM Redirect */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/918697302404?text=Hello%20ZeneNation!%20I%20am%20interested%20in%20your%20anime%20collectibles."
                target="_blank"
                rel="noopener noreferrer"
                className="social bw"
              >
                <BsWhatsapp />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://discord.gg/rRxpSTND6"
                target="_blank"
                rel="noopener noreferrer"
                className="social d"
              >
                <FaDiscord />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeIn("left", 0.4)} className="footer-links">
            <div className="links-grid">
              {Object.entries(footerLinks).map(([category, links], i) => (
                <motion.div key={category} variants={fadeIn("up", 0.3 * (i + 1))}>
                  <motion.h3 variants={textVariant(0.2)} className="links-title">
                    {category}
                  </motion.h3>

                  <ul className="links-list">
                    {links.map((link, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeIn("up", 0.1 * (idx + 1))}
                      >
                        <Link to={link.href} className="link">
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div variants={fadeIn("up", 0.8)} className="footer-bottom">
          <p>© {new Date().getFullYear()} ZeneNation</p>
          <p>Team ZeneNation</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;


