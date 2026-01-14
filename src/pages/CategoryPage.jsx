import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "./CategoryPage.css";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import FloatingTrackButton from '../components/FloatingTrackButton';
import { Helmet } from "react-helmet-async";

const readableNames = {
    keychain: "Keychains",
    mascot: "Mascots",
    armory: "Armory",
};

const CategoryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();

    const categoryProducts = products.filter(
        (product) => product.category === category
    );

    return (
        <>
        <Helmet>
              <title>Zenenation | Anime Collectibles, Keychains & Merch</title>
              <meta
                name="description"
                content="Buy premium anime keychains, collectibles, mini armory items & custom anime merch at Zenenation."
              /> 
            </Helmet>
        <div className="cat-container">
            <h1 className="cat-title" data-aos="fade-up">
                {readableNames[category] || "Products"}
            </h1>

            {categoryProducts.length === 0 ? (
                <p className="cat-empty">No products found in this category.</p>
            ) : (
                <div className="cat-grid">
                    {categoryProducts.map((product, index) => (
                        <div
                            className="cat-card"
                            key={product.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            <img
                                src={product.images?.[0]}
                                alt={product.name}
                                onError={(e) => {
                                    e.currentTarget.src = "/images/placeholder.png";
                                }}
                            />
                            <h3>{product.name}</h3>

                            {/* PRICE */}
                            <div className="cat-price-box">
                             {product.mrp && product.mrp > product.price && (
                              <span className="cat-discount">
                                -{Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
                              </span>
                              )}
                              <span className="cat-price">
                                  ₹{product.price.toLocaleString()}
                              </span>
                            </div>

                        </div>
                    ))}
                </div>
            )}

            <FloatingTrackButton />
            <FloatingWhatsAppButton />
        </div>
        </>
    );
};

export default CategoryPage;
