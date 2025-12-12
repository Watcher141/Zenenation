import "./Home.css";
import { products } from "../data/products";

const Home = () => {

    // 🔥 Automatically choose New Arrivals & Featured
    const newArrivals = products.filter(p => p.isNew);
    const featuredItems = products.filter(p => p.isFeatured);

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

                {/* RIGHT HERO IMAGE */}
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
                    {newArrivals.length > 0 ? (
                        newArrivals.map((item, index) => (
                            <div
                                className="arrival-card"
                                key={item.id}
                                onClick={() => (window.location.href = `/product/${item.id}`)}
                                data-aos="zoom-in"
                                data-aos-delay={index * 150}
                            >
                                <img src={item.images[0]} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        ))
                    ) : (
                        <p className="empty-text">No new arrivals yet.</p>
                    )}
                </div>
            </section>

            {/* FEATURED PRODUCTS */}
            <section className="soft-products" id="products">
                <h2 className="section-title" data-aos="fade-up">
                    Featured Items
                </h2>

                <div className="soft-product-grid">
                    {featuredItems.length > 0 ? (
                        featuredItems.map((item, index) => (
                            <div
                                className="soft-card"
                                key={item.id}
                                onClick={() => (window.location.href = `/product/${item.id}`)}
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay={index * 120}
                                data-aos-easing="ease-out-cubic"
                            >
                                <img src={item.images[0]} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        ))
                    ) : (
                        <p className="empty-text">No featured items yet.</p>
                    )}
                </div>
            </section>

            {/* CATEGORY SECTION */}
            <section className="category-section">
                <h2 className="section-title">Shop by Category</h2>

                <div className="category-grid">

                    {/* KEYCHAINS */}
                    <div
                        className="category-card"
                        onClick={() => (window.location.href = "/category/keychain")}
                        data-aos="fade-up"
                    >
                        <img src="/images/katana.png" alt="Keychains" />
                        <h3>Keychains</h3>
                    </div>

                    {/* MASCOTS */}
                    <div
                        className="category-card"
                        onClick={() => (window.location.href = "/category/mascot")}
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        <img src="/images/katana.png" alt="Mascots" />
                        <h3>Figures & Mascot</h3>
                    </div>

                    {/* ARMORY */}
                    <div
                        className="category-card"
                        onClick={() => (window.location.href = "/category/armory")}
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
