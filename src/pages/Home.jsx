import { useEffect, useState } from "react";
import "./Home.css";
import { products } from "../data/products";
import CompanyLogo from "../components/CompanyLogo";

const bannerImages = [
  "/images/B22.jpg",
  "/images/B12.png",
  "/images/B33.png",
];

const Home = () => {
  // 🔥 Automatically choose New Arrivals & Featured
  const newArrivals = products.filter((p) => p.isNew);
  const featuredItems = products.filter((p) => p.isFeatured);

  // 🔁 Banner slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="soft-container">

      {/* ================= HERO SLIDER ================= */}
      <section className="hero-slider">
        {bannerImages.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* HERO CONTENT (CENTER BOTTOM) */}
        <div className="hero-content">
          <h1>
            Anime & Game <span>Collectibles</span>
          </h1>
          <p>
            A curated collection of aesthetic anime and game accessories.
          </p>
          <a href="#products">
            <button className="hero-btn">Browse Collection</button>
          </a>
        </div>

        {/* DOT INDICATORS */}
        <div className="hero-dots">
          {bannerImages.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* ================= COMPANY LOGOS ================= */}
      <section>
        <CompanyLogo />
      </section>

      {/* ================= NEW ARRIVALS ================= */}
      <section className="new-arrivals">
        <h2 className="section-title">New Arrivals</h2>

        <div className="arrival-grid">
          {newArrivals.length > 0 ? (
            newArrivals.map((item, index) => (
              <div
                className="arrival-card"
                key={item.id}
                onClick={() =>
                  (window.location.href = `/product/${item.id}`)
                }
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <img
                  src={item.images?.[0] || "/images/placeholder.png"}
                  alt={item.name}
                />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            ))
          ) : (
            <p className="empty-text">No new arrivals yet.</p>
          )}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="soft-products" id="products">
        <h2 className="section-title">Featured Items</h2>

        <div className="soft-product-grid">
          {featuredItems.length > 0 ? (
            featuredItems.map((item, index) => (
              <div
                className="soft-card"
                key={item.id}
                onClick={() =>
                  (window.location.href = `/product/${item.id}`)
                }
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <img
                  src={item.images?.[0] || "/images/placeholder.png"}
                  alt={item.name}
                />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            ))
          ) : (
            <p className="empty-text">No featured items yet.</p>
          )}
        </div>
      </section>

      {/* ================= CATEGORY SECTION ================= */}
      <section className="category-section">
        <h2 className="section-title">Shop by Category</h2>

        <div className="category-grid">
          <div
            className="category-card"
            onClick={() =>
              (window.location.href = "/category/keychain")
            }
          >
            <img src="/images/DemonSlayer.jpeg" alt="Keychains" />
            <h3>Keychains</h3>
          </div>

          <div
            className="category-card"
            onClick={() =>
              (window.location.href = "/category/mascot")
            }
          >
            <img src="/images/Labubu3.jpg" alt="Mascots" />
            <h3>Figures & Mascot</h3>
          </div>

          <div
            className="category-card"
            onClick={() =>
              (window.location.href = "/category/armory")
            }
          >
            <img src="/images/katana.png" alt="Armory" />
            <h3>Mini Armory</h3>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
