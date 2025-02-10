import React from "react";

const DestinationCard = ({ name, location, image, description, price }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        overflow: "hidden",
        maxWidth: "320px",  // Increased width for better balance
        textAlign: "center",
        padding: "16px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "180px", // Increased height for better visibility
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div style={{ padding: "12px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", margin: "8px 0" }}>{name}</h2>
        <p style={{ fontSize: "14px", color: "#555", margin: "4px 0" }}>{location}</p>
        <p style={{ fontSize: "14px", color: "#444", margin: "10px 0" }}>{description}</p>
        <p style={{ fontSize: "18px", fontWeight: "bold", color: "#007bff", marginTop: "10px" }}>{price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
