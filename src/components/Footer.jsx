import React from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import { FaFacebookF} from "react-icons/fa";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import "./Footer.css";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" }, // <-- Link to About page
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Contact Us", href: "#" },
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

            <motion.div variants={fadeIn("up", 0.7)} className="socials">
              <motion.a whileHover={{ scale: 1.1 }} href="https://www.facebook.com/share/1BnNR7pwsM/" className="social fb">
                <FaFacebookF />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="https://www.instagram.com/its_zenenation?igsh=MWhocm14bHpwdmRucw==" className="social i">
                <FaInstagram />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="social bw">
                <BsWhatsapp />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="https://discord.gg/rRxpSTND6" className="social d">
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
                      <motion.li key={idx} variants={fadeIn("up", 0.1 * (idx + 1))}>
                        {/* Use Link for internal routing */}
                        {link.href.startsWith("/") ? (
                          <Link to={link.href} className="link">
                            {link.name}
                          </Link>
                        ) : (
                          <a href={link.href} className="link">
                            {link.name}
                          </a>
                        )}
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

