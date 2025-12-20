import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [activeImg, setActiveImg] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);

  // 🔹 Select BASE product
  const selectBase = () => {
    setSelectedVariant(null);
    setActiveImg(product.images?.[0] || "");
  };

  // 🔹 Select VARIANT
  const selectVariant = (variant) => {
    setSelectedVariant(variant);
    setActiveImg(variant.image);
  };

  useEffect(() => {
    if (!product) return;
    selectBase();
  }, [product]);

  if (!product) {
    return <h2 className="pd-not-found">Product Not Found</h2>;
  }

  /* ===============================
     📸 IMAGE TO SEND IN INSTAGRAM
  =============================== */

  const imageToSend = selectedVariant
    ? selectedVariant.image
    : product.images?.[0];

  /* ===============================
     📩 INSTAGRAM REDIRECT (SMART)
  =============================== */

  const instagramUsername = "its_zenenation";

  const openInstagram = () => {
    const message = `Hello! I'm interested in buying:

Product: ${product.name}
${selectedVariant ? `Variant: ${selectedVariant.label}` : "Variant: Base"}

Price: ${selectedVariant ? selectedVariant.price : product.basePrice}

Product Image:
${imageToSend}
`;

    const encodedMsg = encodeURIComponent(message);

    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // 📱 Mobile → Open DM with pre-filled message + image link
      window.open(
        `https://www.instagram.com/direct/new/?text=${encodedMsg}`,
        "_blank"
      );
    } else {
      // 🖥 Desktop → Open profile (most reliable)
      window.open(
        `https://www.instagram.com/${instagramUsername}/`,
        "_blank"
      );

      // Optional: copy message to clipboard for desktop users
      navigator.clipboard?.writeText(message);
    }
  };

  /* ===============================
     ⭐ RECOMMENDED PRODUCTS
  =============================== */

  const recommended = products
    .filter((p) => p.id !== product.id)
    .map((p) => ({
      ...p,
      score:
        (p.category === product.category ? 50 : 0) +
        (p.popularityScore || 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <div className="pd-wrapper">

      {/* MAIN PRODUCT */}
      <div className="pd-container">

        {/* IMAGE GALLERY */}
        <div className="pd-gallery">
          <img
            src={activeImg || "/images/placeholder.png"}
            className="pd-main-img"
            alt={product.name}
            onError={(e) => (e.target.src = "/images/placeholder.png")}
          />

          {/* BASE + VARIANT THUMBS */}
          <div className="pd-thumbs">
            {/* Base image */}
            <img
              src={product.images?.[0]}
              alt="Base"
              className={`pd-thumb-img ${!selectedVariant ? "active-thumb" : ""
                }`}
              onClick={selectBase}
            />

            {/* Variant images */}
            {product.hasVariants &&
              product.variants.map((variant) => (
                <img
                  key={variant.variantId}
                  src={variant.image}
                  alt={variant.label}
                  className={`pd-thumb-img ${activeImg === variant.image ? "active-thumb" : ""
                    }`}
                  onClick={() => selectVariant(variant)}
                />
              ))}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="pd-info">
          <h1 className="pd-title">{product.name}</h1>

          <p className="pd-price">
            {selectedVariant ? selectedVariant.price : product.basePrice}
          </p>

          <p className="pd-desc">
            {selectedVariant
              ? selectedVariant.description
              : product.description}
          </p>

          {/* VARIANTS */}
          {product.hasVariants && (
            <div className="pd-variants">
              <p className="pd-variant-title">Choose Variant</p>

              <div className="pd-variant-options">
                {product.variants.map((variant) => (
                  <button
                    key={variant.variantId}
                    className={`pd-variant-btn ${selectedVariant?.variantId === variant.variantId
                        ? "active-variant"
                        : ""
                      }`}
                    onClick={() => selectVariant(variant)}
                  >
                    <img
                      src={variant.image}
                      alt={variant.label}
                      className="pd-variant-img"
                    />
                    <span>{variant.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <button
            className="pd-instagram-btn"
            onClick={openInstagram}
          >
            Message on Instagram
          </button>
        </div>
      </div>

      {/* RECOMMENDED */}
      <div className="pd-related">
        <h2>Recommended for You</h2>

        <div className="pd-related-grid">
          {recommended.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="pd-related-link"
            >
              <div className="pd-related-card">
                <img src={item.images?.[0]} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price || item.basePrice}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
