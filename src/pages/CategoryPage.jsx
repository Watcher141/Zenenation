import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "./CategoryPage.css";

const readableNames = {
    keychains: "Keychains",
    katana: "Mini Katana",
    karambit: "Karambits"
};

const CategoryPage = () => {
    const { category } = useParams();

    // Filter products by category
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
                            onClick={() =>
                                (window.location.href = `/product/${product.id}`)
                            }
                        >
                            <img src={product.image} alt={product.name} />
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
