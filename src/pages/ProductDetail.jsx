import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";
import { useEffect, useMemo, useState } from "react";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import FloatingTrackButton from "../components/FloatingTrackButton";
import { Helmet } from "react-helmet-async";

const COD_EXTRA = 100;

const ProductDetail = () => {
  const { id } = useParams();
  const product = useMemo(
    () => products.find((p) => p.id === id),
    [id]
  );

  const [activeImg, setActiveImg] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [paymentMode, setPaymentMode] = useState("PREPAID");
  const [loading, setLoading] = useState(true);
  const [imageTransition, setImageTransition] = useState(false);

  /* ===============================
     INITIAL LOAD
  =============================== */
  useEffect(() => {
    if (!product) return;

    setLoading(true);
    setSelectedVariant(null);
    setPaymentMode("PREPAID");
    setActiveImg(product.images?.[0] || "");

    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [product]);

  if (!product) {
    return <h2 className="pd-not-found">Product Not Found</h2>;
  }

  /* ===============================
     VARIANT HANDLING
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
     PRICE + PAYMENT LOGIC
  =============================== */
  const pricing = useMemo(() => {
    const basePrice =
      selectedVariant?.price ?? product.price;

    const isNumeric = typeof basePrice === "number";

    const isCodEligible =
      isNumeric && basePrice > 249;

    const finalPrice =
      paymentMode === "COD" && isCodEligible
        ? basePrice + COD_EXTRA
        : basePrice;

    const mrp = selectedVariant?.mrp || product.mrp;

    const discount =
      isNumeric && mrp && mrp > basePrice
        ? Math.round(((mrp - basePrice) / mrp) * 100)
        : null;

    return {
      basePrice,
      finalPrice,
      mrp,
      discount,
      isCodEligible,
    };
  }, [product, selectedVariant, paymentMode]);

  /* ===============================
     WHATSAPP MESSAGE
  =============================== */
  const getWhatsAppMessage = () => {
    return `Hello ZeneNation 👋

🛍 *I want to buy this product*

📦 Product: ${product.name}
🆔 Product ID: ${product.id}

🎨 Variant: ${selectedVariant?.label || "Base Product"}
💳 Payment Mode: ${paymentMode}
💰 Price: ₹${pricing.finalPrice}

🖼 Image:
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
                className={`pd-main-img ${imageTransition ? "fade" : ""}`}
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
                      activeImg === variant.image ? "active-thumb" : ""
                    }`}
                    onClick={() => selectVariant(variant)}
                  />
                ))}
            </div>
          </div>

          {/* INFO */}
          <div className="pd-info">
            <h1 className="pd-title">{product.name}</h1>

            <div className="pd-price-box">
              <div className="pd-price-top">
                {pricing.discount && (
                  <span className="pd-discount">
                    -{pricing.discount}%
                  </span>
                )}

                <span className="pd-selling-price">
                  ₹{pricing.finalPrice}
                </span>

                <div className="pd-paymode-inline">
                  <button
                    className={`pd-pay-btn ${
                      paymentMode === "PREPAID" ? "active" : ""
                    }`}
                    onClick={() => setPaymentMode("PREPAID")}
                  >
                    Prepaid
                  </button>

                  {pricing.isCodEligible && (
                    <button
                      className={`pd-pay-btn ${
                        paymentMode === "COD" ? "active" : ""
                      }`}
                      onClick={() => setPaymentMode("COD")}
                    >
                      COD
                    </button>
                  )}
                </div>
              </div>

              {pricing.mrp && pricing.mrp > pricing.basePrice && (
                <div className="pd-mrp">
                  M.R.P.: <span>₹{pricing.mrp}</span>
                </div>
              )}

              <p className="pd-delivery-note">
                 {typeof pricing.basePrice === "number" && pricing.basePrice <= 249
                  ? "💸 Will Include Delivery Charges"
                  : paymentMode === "COD" && pricing.isCodEligible
                  ? "💰 COD = Prepaid + ₹100 "
                  : "🚚 Free Delivery"}
              </p>
            </div>

            <p className="pd-desc">
              {selectedVariant?.description || product.description}
            </p>

            {product.hasVariants && (
              <div className="pd-variants">
                <p className="pd-variant-title">Choose Variant</p>
                <div className="pd-variant-options">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.variantId}
                      className={`pd-variant-btn ${
                        selectedVariant?.variantId === variant.variantId
                          ? "active-variant"
                          : ""
                      }`}
                      onClick={() => {
                        selectVariant(variant);
                        window.scrollTo({ top: 0, behavior: "smooth" });
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
              <button className="pd-whatsapp-btn" onClick={openWhatsApp}>
                Message on WhatsApp
              </button>

              <button className="pd-instagram-btn" onClick={openInstagram}>
                Message on Instagram
              </button>
            </div>
          </div>
        </div>

        {/* RECOMMENDED */}
        <div className="pd-related">
          <h2>Recommended for You</h2>
          <div className="pd-related-grid">
            {recommended.map((item) => {
              const discount =
                item.mrp && item.mrp > item.price
                  ? Math.round(((item.mrp - item.price) / item.mrp) * 100)
                  : null;

              return (
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

                    <div className="pd-related-price-box">
                      {discount && (
                        <span className="pd-related-discount">
                          -{discount}%
                        </span>
                      )}
                      <span className="pd-related-price">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <FloatingTrackButton />
        <FloatingWhatsAppButton />
      </div>
    </>
  );
};

export default ProductDetail;
