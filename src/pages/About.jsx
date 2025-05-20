import React from 'react';
import '../styles/About.css';
import mascotAbout from '../assets/mascot-about.png';
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About My Toy Scout | Curated Toys for Kids | My Toy Scout </title>
        <meta name="description" content="Learn about My Toy Scout — your trusted guide for finding the best kids toys. We research and recommend top products parents love." />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.yoursite.com/" />
          <meta property="og:title" content="About Toy Scout | My Toy Scout | Curated Toys for Kids" />
          <meta property="og:description" content="Learn about My Toy Scout — your trusted guide for finding the best kids toys. We research and recommend top products parents love." />
          <meta property="og:image" content="https://www.yoursite.com/images/og-image.jpg" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://www.yoursite.com/" />
          <meta name="twitter:title" content="About Toy Scout | My Toy Scout | Curated Toys for Kids" />
          <meta name="twitter:description" content="Learn about My Toy Scout — your trusted guide for finding the best kids toys. We research and recommend top products parents love." />
          <meta name="twitter:image" content="https://www.yoursite.com/images/og-image.jpg" />
      </Helmet>
      <h1>About My Toy Scout</h1>
      <section className="p-4">
        <p>Welcome to My Toy Scout our Kids Toy Review Site! We're passionate about sharing top-rated, fun, and educational toys that your children will love.</p>
        <p>As Amazon affiliates, we curate the best toys to save you time and money. Happy shopping!</p>
        <img
          src={mascotAbout}
          alt="About Mascot"
          className="float-right ml-4 mb-2 rounded-xl shadow-md"
          style={{ width: '350px', maxWidth: '100%' }}
        />
      </section>
    </div>
  );
};
 
export default About;
