import React from "react";

const Profile = () => {
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
          width: "350px",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#007bff",
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "36px",
            fontWeight: "bold",
            margin: "0 auto 20px",
          }}
        >
          DP
        </div>

        <h2
          style={{
            margin: "0 0 10px",
            color: "#333",
          }}
        >
          Dhandapani
        </h2>

        <p
          style={{
            margin: "0 0 20px",
            color: "#666",
            fontSize: "16px",
          }}
        >
          Software Engineer
        </p>

        <div
          style={{
            borderTop: "1px solid #ddd",
            paddingTop: "20px",
            textAlign: "left",
          }}
        >
          <p>
            <strong>Email:</strong> dhandapani@example.com
          </p>

          <p>
            <strong>Location:</strong> Tamil Nadu, India
          </p>

          <p>
            <strong>Experience:</strong> 5+ Years
          </p>
        </div>

        <button
          style={{
            marginTop: "15px",
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
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;