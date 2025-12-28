import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [activeImg, setActiveImg] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);

  /* ===============================
     BASE / VARIANT HANDLING
  =============================== */

  const selectBase = () => {
    setSelectedVariant(null);
    setActiveImg(product.images?.[0] || "");
  };

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
     WHATSAPP MESSAGE BUILDER
  =============================== */

  const getWhatsAppMessage = () => {
    const price = selectedVariant
      ? selectedVariant.price
      : product.basePrice;

    const variantName = selectedVariant
      ? selectedVariant.label
      : "Base Product";

    const variantId = selectedVariant
      ? selectedVariant.variantId
      : "N/A";

    const image =
      selectedVariant?.image || product.images?.[0] || "";

    return `Hello ZeneNation 👋

🛍 *I want to buy this product*

📦 Product Name: ${product.name}
🆔 Product ID: ${product.id}

🎨 Variant: ${variantName}
🆔 Variant ID: ${variantId}

💰 Price: ${price}

🖼 Product Image:
${image}

Please confirm availability.`;
  };

  /* ===============================
     WHATSAPP REDIRECT
  =============================== */

  const whatsappNumber = "918697302404"; // country code, no +

  const openWhatsApp = () => {
    const message = encodeURIComponent(getWhatsAppMessage());
    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  /* ===============================
     INSTAGRAM REDIRECT
  =============================== */

  const instagramUsername = "zenenation.in";

  const openInstagram = () => {
    window.open(
      `https://www.instagram.com/${instagramUsername}/`,
      "_blank"
    );
  };

  /* ===============================
     RECOMMENDED PRODUCTS
  =============================== */

  const recommended = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pd-wrapper">
      <div className="pd-container">
        {/* IMAGE GALLERY */}
        <div className="pd-gallery">
          <img
            src={activeImg || "/images/placeholder.png"}
            className="pd-main-img"
            alt={product.name}
            onError={(e) =>
              (e.target.src = "/images/placeholder.png")
            }
          />

          <div className="pd-thumbs">
            <img
              src={product.images?.[0]}
              alt="Base"
              className={`pd-thumb-img ${
                !selectedVariant ? "active-thumb" : ""
              }`}
              onClick={selectBase}
            />

            {product.hasVariants &&
              product.variants.map((variant) => (
                <img
                  key={variant.variantId}
                  src={variant.image}
                  alt={variant.label}
                  className={`pd-thumb-img ${
                    activeImg === variant.image
                      ? "active-thumb"
                      : ""
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
            {selectedVariant
              ? selectedVariant.price
              : product.basePrice}
          </p>

          <p className="pd-desc">
            {selectedVariant
              ? selectedVariant.description
              : product.description}
          </p>

          {product.hasVariants && (
            <div className="pd-variants">
              <p className="pd-variant-title">Choose Variant</p>
              <div className="pd-variant-options">
                {product.variants.map((variant) => (
                  <button
                    key={variant.variantId}
                    className={`pd-variant-btn ${
                      selectedVariant?.variantId ===
                      variant.variantId
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

          {/* CTA BUTTONS */}
          <div className="pd-cta-group">
            <button
              className="pd-whatsapp-btn"
              onClick={openWhatsApp}
            >
              Message on WhatsApp
            </button>

            <button
              className="pd-instagram-btn"
              onClick={openInstagram}
            >
              Message on Instagram
            </button>
          </div>
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




