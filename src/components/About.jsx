import React from "react";
import { motion } from "framer-motion";
import "../components/About.css";
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import FloatingTrackButton from '../components/FloatingTrackButton';
const teamMembers = [
  {
    name: "Tamal Mukherjee",
    role: "Finance & Inventory",
    photo: "/images/team/tamal.jpg",
    desc: "Manages financial planning, budgeting, and inventory flow to ensure smooth operations and product availability across ZeneNation."
  },
  {
    name: "Rony Maity",
    role: "Marketing & Optimization Manager",
    photo: "/images/team/rony.jpg",
    desc: "Plans and executes marketing strategies while continuously analyzing and optimizing campaigns to maximize reach, engagement, and conversions also manages day-to-day operations and workflow optimization & focuses on improving efficiency."
  },
  {
    name: "Anish Kumar Das",
    role: "Media Communication",
    photo: "/images/team/anish.jpg",
    desc: "Handles brand communication, social media presence, and promotional content to connect ZeneNation with the anime community."
  },
  {
    name: "Monojit Das",
    role: "Backend Developer",
    photo: "/images/team/monojit.jpg",
    desc: "Works on Backend development to maintain the server-side logic, databases, and APIs that power applications and ensure secure, efficient data handling."
  },
  {
    name: "Priyansu Dhar",
    role: "Frontend & UI/UX Developer",
    photo: "/images/team/priyansu.jpg",
    desc: "Focuses on Frontend & UI/UX, performance optimization, website responsivenesss, Features addition and modern web technologies to deliver a smooth shopping experience."
  }
];

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="about-page">
      <header className="about-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About ZeneNation
        </motion.h1>
      </header>

      <main className="about-content">
        {/* Goal Section */}
        <motion.section 
          className="section-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-title-box">
            <div className="accent-line"></div>
            <h2>Our Vision</h2>
          </div>
          
          <div className="goal-card">
            <p className="goal-intro">
              ZeneNation is more than just a store; it's a hub for the anime community. 
              We bridge the gap between high-quality Japanese collectibles and fans worldwide 
              through technology and passion.
            </p>
            <ul className="goal-list">
              <li><span className="check">✔</span> 100% Genuine Merchandise</li>
              <li><span className="check">✔</span> Community-Driven Approach</li>
              <li><span className="check">✔</span> Secure & Aesthetic Packaging</li>
              <li><span className="check">✔</span> Tech-First Shopping Experience</li>
            </ul>
          </div>
        </motion.section>

        {/* Team Section */}
        <section className="section-container">
          <div className="section-title-box">
            <div className="accent-line"></div>
            <h2>The Squad</h2>
          </div>

          <motion.div 
            className="team-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="member-card-horizontal"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="member-photo-container">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://ui-avatars.com/api/?name=" + member.name + "&background=00b4d8&color=fff";
                    }}
                  />
                </div>
                <div className="member-info">
                  <span className="member-role">{member.role}</span>
                  <h3>{member.name}</h3>
                  <p className="member-desc">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <FloatingTrackButton />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default About;