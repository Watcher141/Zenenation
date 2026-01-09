import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./DeliveryPolicy.css";
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';

const DeliveryPolicy = () => {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <motion.div
        className="policy-card"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Page Title */}
        <h1>Delivery Policy</h1>
        <p className="last-updated">Last Updated: December 2025</p>
        <div className="policy-divider"></div>

        <p className="intro">
          At <strong>ZeneNation</strong>, we aim to deliver your anime
          collectibles safely, securely, and on time. Please read our delivery
          policy carefully.
        </p>

        {/* Section 1 */}
        <section>
          <h3>1. Order Processing</h3>
          <ul>
            <li>Orders are processed within <strong>2–4 business days</strong>.</li>
            <li>Processing time may vary during high-demand periods.</li>
            <li>Orders are confirmed via Instagram or WhatsApp before dispatch.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h3>2. Shipping & Delivery</h3>
          <ul>
            <li>We currently deliver across India.</li>
            <li>Estimated delivery time: <strong>5–10 business days</strong>.</li>
            <li>Delivery timelines may vary based on location and courier services.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h3>3. Packaging</h3>
          <ul>
            <li>All items are packed securely to avoid damage during transit.</li>
            <li>Fragile collectibles receive extra protective packaging.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h3>4. Delays</h3>
          <ul>
            <li>Delays may occur due to weather or logistical issues.</li>
            <li>ZeneNation is not responsible for delays caused by courier partners.</li>
          </ul>
        </section>

        {/* Section 5 — NEW */}
        <section>
          <h3>5. Reporting Damage</h3>
          <ul>
            <li>
              If your product arrives damaged, you must report it within
              <strong> 48 hours </strong> of delivery.
            </li>
            <li>
              Customers must provide a <strong>clear unboxing video </strong>
              showing the product and packaging.
            </li>
            <li>
              The unboxing video must be recorded from the moment the package is
              opened without any cuts or edits.
            </li>
            <li>
              Claims without a valid unboxing video will not be eligible for
              replacement or resolution.
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section>
          <h3>6. Support</h3>
          <p>
            For delivery-related queries or damage reports, please contact us via
            WhatsApp or Instagram Direct Message.
          </p>
        </section>
      </motion.div>
      <FloatingWhatsAppButton />
    </div>
  );
};

export default DeliveryPolicy;
