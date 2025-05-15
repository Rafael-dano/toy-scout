import React from "react";
import "../styles/toycard.css";

export default function ToyCard({ toy }) {
  return (
    <div className="toy-card">
      <img
        src={toy.image}
        alt={toy.title}
        className="toy-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/200x160?text=Image+Not+Found";
        }}
      />
      <h2 className="text-lg font-bold">{toy.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{toy.description}</p>
      <p className="price">{toy.priceRange}</p>
      <a
        href={toy.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand text-white py-2 px-4 rounded hover:bg-yellow-600 inline-block mt-2"
      >
        Buy on Amazon
      </a>
    </div>
  );
}
