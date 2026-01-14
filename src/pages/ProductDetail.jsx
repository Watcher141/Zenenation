import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";
import { useEffect, useMemo, useState } from "react";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import { Helmet } from "react-helmet-async";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useMemo(
    () => products.find((p) => p.id === id),
    [id]
  );

  const [activeImg, setActiveImg] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageTransition, setImageTransition] = useState(false);

  /* ===============================
     INITIAL LOAD
  =============================== */
  useEffect(() => {
    if (!product) return;

    setLoading(true);
    setSelectedVariant(null);
    setActiveImg(product.images?.[0] || "");

    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [product]);

  if (!product) {
    return <h2 className="pd-not-found">Product Not Found</h2>;
  }

  /* ===============================
     VARIANT HANDLING (ANIMATED)
  =============================== */
  const selectVariant = (variant) => {
    if (selectedVariant?.variantId === variant.variantId) return;

    setImageTransition(true);
    setSelectedVariant(variant);

    setTimeout(() => {
      setActiveImg(variant.image);
      setImageTransition(false);
    }, 120);
  };

  const selectBase = () => {
    if (!selectedVariant) return;

    setImageTransition(true);
    setSelectedVariant(null);

    setTimeout(() => {
      setActiveImg(product.images?.[0] || "");
      setImageTransition(false);
    }, 120);
  };

  /* ===============================
     PRICE CALCULATION
  =============================== */
  const pricing = useMemo(() => {
    const sellingPrice = selectedVariant
      ? selectedVariant.price
      : product.price;

    const mrp = selectedVariant?.mrp || product.mrp;

    const discount =
      mrp && mrp > sellingPrice
        ? Math.round(((mrp - sellingPrice) / mrp) * 100)
        : null;

    return { sellingPrice, mrp, discount };
  }, [product, selectedVariant]);

  /* ===============================
     WHATSAPP MESSAGE
  =============================== */
  const getWhatsAppMessage = () => {
    return `Hello ZeneNation 👋

🛍 *I want to buy this product*

📦 Product Name: ${product.name}
🆔 Product ID: ${product.id}

🎨 Variant: ${selectedVariant?.label || "Base Product"}
🆔 Variant ID: ${selectedVariant?.variantId || "N/A"}

💰 Price: ₹${pricing.sellingPrice}

🖼 Product Image:
${activeImg}

Please confirm availability.`;
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(getWhatsAppMessage());
    window.open(
      `https://wa.me/918697302404?text=${message}`,
      "_blank"
    );
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/zenenation.in/", "_blank");
  };

  /* ===============================
     RECOMMENDED
  =============================== */
  const recommended = useMemo(
    () => products.filter((p) => p.id !== product.id).slice(0, 3),
    [product.id]
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
      <div className="pd-wrapper">
        <div className="pd-container">
          {/* IMAGE GALLERY */}
          <div className="pd-gallery">
            {loading ? (
              <div className="skeleton skeleton-img" />
            ) : (
              <img
                src={activeImg}
                className={`pd-main-img ${imageTransition ? "fade" : ""
                  }`}
                alt={product.name}
                onError={(e) =>
                  (e.currentTarget.src = "/images/placeholder.png")
                }
              />
            )}

            <div className="pd-thumbs">
              <img
                src={product.images?.[0]}
                alt="Base"
                className={`pd-thumb-img ${!selectedVariant ? "active-thumb" : ""
                  }`}
                onClick={selectBase}
              />

              {product.hasVariants &&
                product.variants.map((variant) => (
                  <img
                    key={variant.variantId}
                    src={variant.image}
                    alt={variant.label}
                    className={`pd-thumb-img ${activeImg === variant.image
                      ? "active-thumb"
                      : ""
                      }`}
                    onClick={() => selectVariant(variant)}
                  />
                ))}
            </div>
          </div>

          {/* INFO */}
          <div className="pd-info">
            {loading ? (
              <>
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-price" />
                <div className="skeleton skeleton-text" />
              </>
            ) : (
              <>
                <h1 className="pd-title">{product.name}</h1>

                <div className="pd-price-box">
                  <div className="pd-price-top">
                    {pricing.discount && (
                      <span className="pd-discount">
                        -{pricing.discount}%
                      </span>
                    )}
                    <span className="pd-selling-price">
                      ₹{pricing.sellingPrice.toLocaleString()}
                    </span>
                  </div>

                  {pricing.mrp && pricing.mrp > pricing.sellingPrice && (
                    <div className="pd-mrp">
                      M.R.P.:{" "}
                      <span>₹{pricing.mrp.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <p className="pd-desc">
                  {selectedVariant?.description ||
                    product.description}
                </p>
              </>
            )}

            {product.hasVariants && (
              <div className="pd-variants">
                <p className="pd-variant-title">Choose Variant</p>
                <div className="pd-variant-options">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.variantId}
                      className={`pd-variant-btn ${selectedVariant?.variantId ===
                        variant.variantId
                        ? "active-variant"
                        : ""
                        }`}
                      onClick={() => {
                        selectVariant(variant);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
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
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <div className="pd-related-card">
                  <img src={item.images?.[0]} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>₹{item.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <FloatingWhatsAppButton />
      </div>
    </>
  );
};

export default ProductDetail;
