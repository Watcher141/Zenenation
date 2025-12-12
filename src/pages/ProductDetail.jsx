import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product Not Found</h2>;
    }

    // Instagram DM Link
    const instagramUsername = "animeaurastore"; // <-- change this to your IG username
    const message = `Hello! I'm interested in this product:\n${product.name}\n\nProduct ID: ${product.id}`;
    const encodedMessage = encodeURIComponent(message);
    const igLink = `https://www.instagram.com/${instagramUsername}/?chat&text=${encodedMessage}`;

    return (
        <div className="pd-container" data-aos="fade-up">

            <div className="pd-card">
                
                {/* LEFT IMAGE */}
                <div className="pd-image-box">
                    <img src={product.image} alt={product.name} className="pd-image" />
                </div>

                {/* RIGHT DETAILS */}
                <div className="pd-info">
                    <h1 className="pd-title">{product.name}</h1>
                    <p className="pd-price">{product.price}</p>

                    <p className="pd-desc">
                        {product.description || "A high-quality anime collectible made with premium craftsmanship."}
                    </p>

                    <button 
                        className="pd-instagram-btn"
                        onClick={() => window.open(igLink, "_blank")}
                    >
                        Message on Instagram
                    </button>
                </div>

            </div>

        </div>
    );
};

export default ProductDetail;
