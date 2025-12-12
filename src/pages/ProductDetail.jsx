import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [activeImg, setActiveImg] = useState(
    product?.images ? product.images[0] : ""
  );

  if (!product) {
    return <h2 className="pd-not-found">Product Not Found</h2>;
  }

  // Instagram message link
  const instagramUsername = "animeaurastore";
  const msg = `Hello! I'm interested in buying: ${product.name}`;
  const encoded = encodeURIComponent(msg);
  const igLink = `https://www.instagram.com/${instagramUsername}/?chat&text=${encoded}`;

  // Related products (same category)
  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  // ⭐ Recommended for You Algorithm
  const recommended = products
    .filter((p) => p.id !== product.id)
    .map((p) => ({
      ...p,
      score:
        (p.category === product.category ? 50 : 0) +
        (p.popularityScore || 0)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <div className="pd-wrapper">
      <div className="pd-container">

        {/* LEFT: IMAGE GALLERY */}
        <div className="pd-gallery">
          <img src={activeImg} className="pd-main-img" alt={product.name} />

          <div className="pd-thumbs">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className={`pd-thumb-img ${activeImg === img ? "active-thumb" : ""}`}
                onClick={() => setActiveImg(img)}
                alt="thumb"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="pd-info">
          <h1 className="pd-title">{product.name}</h1>
          <p className="pd-price">{product.price}</p>

          <p className="pd-desc">{product.description}</p>

          <button
            className="pd-instagram-btn"
            onClick={() => window.open(igLink, "_blank")}
          >
            Message on Instagram
          </button>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {/* <div className="pd-related">
        <h2>Related Products</h2>

        <div className="pd-related-grid">
          {related.length === 0 ? (
            <p>No related products found.</p>
          ) : (
            related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`}>
                <div className="pd-related-card">
                  <img src={item.images[0]} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div> */}


      {/* ⭐ RECOMMENDED FOR YOU SECTION */}
      <div className="pd-related">
        <h2>Recommended for You</h2>

        <div className="pd-related-grid">
          {recommended.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <div className="pd-related-card">
                <img src={item.images[0]} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
