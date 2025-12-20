import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import "./Footer.css";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Career", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "WhatsApp", href: "#" },
      { name: "Support 24", href: "#" },
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
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="footer-grid"
        >
          {/* Brand */}
          <motion.div variants={fadeIn("right", 0.4)} className="footer-brand">
            <motion.div
              variants={fadeIn("down", 0.5)}
              className="footer-logo"
            >
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

            <motion.div variants={fadeIn("up", 0.7)} className="socials">
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="social fb">
                <FaFacebookF />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="social x">
                <FaXTwitter />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="social in">
                <FaLinkedinIn />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeIn("left", 0.4)} className="footer-links">
            <div className="links-grid">
              {Object.entries(footerLinks).map(([category, links], i) => (
                <motion.div
                  key={category}
                  variants={fadeIn("up", 0.3 * (i + 1))}
                >
                  <motion.h3
                    variants={textVariant(0.2)}
                    className="links-title"
                  >
                    {category}
                  </motion.h3>

                  <ul className="links-list">
                    {links.map((link, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeIn("up", 0.1 * (idx + 1))}
                      >
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={link.href}
                          className="link"
                        >
                          {link.name}
                        </motion.a>
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
