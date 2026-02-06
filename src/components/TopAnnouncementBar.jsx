import "./TopAnnouncementBar.css";

const TopAnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="fade fade-left"></div>

      <div className="announcement-track">
        <span>🚚 Free Shipping on Prepaid orders over ₹249</span>
        <span>🚚 Free Shipping on Prepaid orders over ₹249</span>
        <span>🚚 Free Shipping on Prepaid orders over ₹249</span>
        <span>🚚 Free Shipping on Prepaid orders over ₹249</span>
        <span>🚚 Free Shipping on Prepaid orders over ₹249</span>
      </div>

      <div className="fade fade-right"></div>
    </div>
  );
};

export default TopAnnouncementBar;
