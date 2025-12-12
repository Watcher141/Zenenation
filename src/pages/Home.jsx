import "./Home.css";
import { products } from "../data/products";

const Home = () => {
    return (
        <div className="soft-container">

            {/* HERO SECTION */}
            <section className="soft-hero">

                {/* LEFT TEXT */}
                <div
                    className="soft-left"
                    data-aos="fade-right"
                    data-aos-duration="900"
                >
                    <h1 className="soft-title">
                        Anime <span>Collectibles</span>
                    </h1>

                    <p className="soft-desc">
                        A curated collection of aesthetic anime accessories.
                    </p>

                    <a href="#products">
                        <button
                            className="soft-btn"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Browse Collection
                        </button>
                    </a>
                </div>

                {/* RIGHT IMAGE */}
                <div
                    className="soft-right"
                    data-aos="fade-left"
                    data-aos-duration="900"
                >
                    <img
                        src="/images/katana.png"
                        alt="Anime Katana"
                        className="soft-hero-product"
                    />
                </div>

            </section>

            {/* NEW ARRIVALS SECTION */}
            <section className="new-arrivals">
                <h2 className="section-title">New Arrivals</h2>

                <div className="arrival-grid">
                    {products.slice(0, 4).map((item, index) => (
                        <div
                            className="arrival-card"
                            key={item.id}
                            onClick={() => window.location.href = `/product/${item.id}`}
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                        >
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* FEATURED PRODUCTS */}
            <section className="soft-products" id="products">
                <h2 className="section-title" data-aos="fade-up">
                    Featured Items
                </h2>

                <div className="soft-product-grid">
                    {products.slice(0, 6).map((item, index) => (
                        <div
                            className="soft-card"
                            key={item.id}
                            onClick={() => window.location.href = `/product/${item.id}`}
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay={index * 120}
                            data-aos-easing="ease-out-cubic"
                        >
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CATEGORY SECTION */}
            <section className="category-section">
                <h2 className="section-title">Shop by Category</h2>

                <div className="category-grid">
                    <div
                        className="category-card"
                        onClick={() => window.location.href = "/category/keychain"}
                        data-aos="fade-up"
                    >
                        <img src="/images/katana.png" alt="Keychains" />
                        <h3>Keychains</h3>
                    </div>

                    <div
                        className="category-card"
                        onClick={() => window.location.href = "/category/mascot"}
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        <img src="/images/katana.png" alt="Mascots" />
                        <h3>Figures & Mascot</h3>
                    </div>

                    <div
                        className="category-card"
                        onClick={() => window.location.href = "/category/armory"}
                        data-aos="fade-up"
                        data-aos-delay="300"
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
