import React from "react";

const Product = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "320px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <img
          src="https://via.placeholder.com/320x200"
          alt="Product"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "20px",
          }}
        >
          <h2
            style={{
              margin: "0 0 10px",
              color: "#333",
            }}
          >
            Wireless Headphones
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            High-quality wireless headphones with noise cancellation
            and excellent battery life.
          </p>

          <p
            style={{
              color: "#007bff",
              fontSize: "24px",
              fontWeight: "bold",
              margin: "15px 0",
            }}
          >
            ₹2,999
          </p>

          <button
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#007bff",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;