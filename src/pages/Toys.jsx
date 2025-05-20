import React from 'react';
import ToyCard from '../components/ToyCard';
import { allToys } from '../data/allToyData';
import '../styles/Toys.css';
import { Helmet } from "react-helmet";

const Toys = () => {
  return (
    <div className="toys-page">
      <Helmet>
        <title>Shop Outdoor & Educational Toys | My Toy Scout</title>
        <meta name="description" content="Browse top-rated toys by category: outdoor, educational, STEM, and more. Find fun, safe toys for every age and interest." />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yoursite.com/" />
      <meta property="og:title" content="Shop Outdoor & Educational Toys | My Toy Scout" />
     <meta property="og:description" content="Browse top-rated toys by category: outdoor, educational, STEM, and more. Find fun, safe toys for every age and interest." />
      <meta property="og:image" content="https://www.yoursite.com/images/og-image.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.yoursite.com/" />
      <meta name="twitter:title" content="Shop Outdoor & Educational Toys | My Toy Scout" />
      <meta name="twitter:description" content="Browse top-rated toys by category: outdoor, educational, STEM, and more. Find fun, safe toys for every age and interest." />
      <meta name="twitter:image" content="https://www.yoursite.com/images/og-image.jpg" />
      </Helmet>
      <h1>All Toys</h1>
      <div className="toy-grid">
        {allToys.map(toy => (
          <ToyCard key={toy.id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Toys;
