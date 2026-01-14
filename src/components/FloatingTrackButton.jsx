import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import "./FloatingTrackButton.css";

const FloatingTrackButton = () => {
  const trackUrl = "https://zenenation.ordertracking.in/";

  return (
    <a
      href={trackUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-track-button"
      aria-label="Track your order"
    >
      <FaTruckFast size={26} />
    </a>
  );
};

export default FloatingTrackButton;
