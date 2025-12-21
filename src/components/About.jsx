import React from "react";
import { motion } from "framer-motion";
import "../components/About.css";

const teamMembers = [
  {
    name: "Tamal Mukherjee",
    role: "Finance & Inventory Management",
    photo: "/images/team/tamal.jpg",
    desc: "Manages financial planning, budgeting, and inventory flow to ensure smooth operations and product availability across ZeneNation."
  },
  {
    name: "Rony Maity",
    role: "Packaging",
    photo: "/images/team/rony.jpg",
    desc: "Responsible for secure, aesthetic, and damage-free packaging so every anime collectible reaches customers in perfect condition."
  },
  {
    name: "Anish Kumar Das",
    role: "Media Communication",
    photo: "/images/team/anish.jpg",
    desc: "Handles brand communication, social media presence, and promotional content to connect ZeneNation with the anime community."
  },
  {
    name: "Monojit Das",
    role: "Web Developer",
    photo: "/images/team/monojit.jpg",
    desc: "Works on frontend and backend development to ensure a fast, responsive, and user-friendly anime collectibles platform."
  },
  {
    name: "Priyansu Dhar",
    role: "Web Developer",
    photo: "/images/team/priyansu.jpg",
    desc: "Focuses on UI/UX, performance optimization, and modern web technologies to deliver a smooth shopping experience."
  }
];

const About = () => {
  return (
    <div className="about-container">

      {/* Our Goal Section */}
      <motion.section
        className="about-goal"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="goal-text">
          <h2>Our Goal</h2>
          <p>
            ZeneNation is an anime collectibles platform built for true fans.
            Our goal is to bring authentic, high-quality anime merchandise
            with a smooth and enjoyable shopping experience.
          </p>
          <ul>
            <li>✔ Deliver genuine anime collectibles</li>
            <li>✔ Ensure safe packaging and fast delivery</li>
            <li>✔ Build a trusted anime community</li>
            <li>✔ Combine design, technology, and fandom</li>
          </ul>
        </div>
      </motion.section>

      {/* Our Team Section */}
      <motion.section
        className="about-team"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Team</h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card detailed"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="team-photo"
                onError={(e) => {
                  e.target.src = "/images/placeholder.png";
                }}
              />
              <h3>{member.name}</h3>
              <span className="role">{member.role}</span>
              <p className="desc">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default About;