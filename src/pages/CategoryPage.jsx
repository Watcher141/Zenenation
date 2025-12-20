import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "./CategoryPage.css";

const readableNames = {
    keychain: "Keychains",
    mascot: "Mascots",
    armory: "Armory"
};

const CategoryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();

    const categoryProducts = products.filter(
        (item) => item.category === category
    );

    return (
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
                                src={product.images[0]}
                                alt={product.name}
                                onError={(e) => {
                                    e.target.src = "/images/placeholder.png";
                                }}
                            />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default CategoryPage;
