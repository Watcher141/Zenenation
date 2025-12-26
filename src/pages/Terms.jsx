import React from "react";
import { motion } from "framer-motion";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-wrapper">
      <motion.div 
        className="terms-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="terms-header">
          <div className="icon-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <h1>Terms & Conditions</h1>
          <p>Welcome to ZeneNation. Please read these terms carefully.</p>
        </div>

        <div className="terms-body">
          <section className="terms-item">
            <span className="step-number">01</span>
            <h2>Acceptance of Terms</h2>
            <p>By accessing and using ZeneNation, you agree to be bound by these terms. If you do not agree, please refrain from using our services.</p>
          </section>

          <section className="terms-item">
            <span className="step-number">02</span>
            <h2>Product Authenticity</h2>
            <p>We guarantee that all anime collectibles sold on our platform are 100% authentic. Any claims regarding damages must be reported within 48 hours of delivery.</p>
          </section>

          <section className="terms-item">
            <span className="step-number">03</span>
            <h2>User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account password. ZeneNation is not liable for unauthorized access resulting from user negligence.</p>
          </section>

          <section className="terms-item">
            <span className="step-number">04</span>
            <h2>Limitation of Liability</h2>
            <p>ZeneNation shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.</p>
          </section>

          <div className="terms-notice">
            <p><strong>Note:</strong> We reserve the right to update these terms at any time without prior notice.</p>
          </div>
        </div>

        <div className="terms-footer">
          <button href="https://wa.me/918697302404?text=Hello%20ZeneNation!%20I%20have%20some%20in%20questions%20about%20your%20Terms%20&%20Conditions." target="_blank" rel="noopener noreferrer" className="contact-btn">I Have Questions</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;
