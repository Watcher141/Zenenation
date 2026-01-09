import React from "react";
import "./PrivacyPolicy.css";
import { motion } from "framer-motion";
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';

const PrivacyPolicy = () => {
  return (
    <div className="policy-wrapper">
      <motion.div 
        className="policy-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="policy-header">
          <h1>Privacy Policy</h1>
          <p>Last Updated: December 2025</p>
        </header>

        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>At ZeneNation, we collect information to provide better services to our users. This includes:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, and shipping details when you make a purchase.</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our website.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. How We Use Information</h2>
          <p>We use the information we collect to process your orders, maintain your account, and send you updates about our latest anime collections.</p>
        </section>

        <section className="policy-section">
          <h2>3. Data Security</h2>
          <div className="security-note">
            <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored behind secured networks.</p>
          </div>
        </section>

        <footer className="policy-footer">
          <p>If you have questions regarding this policy, contact us at <strong>zenenationstore@gmail.com</strong></p>
        </footer>
      </motion.div>
      <FloatingWhatsAppButton />
    </div>
  );
};

export default PrivacyPolicy;
