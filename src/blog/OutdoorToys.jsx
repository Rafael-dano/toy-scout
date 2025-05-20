import React from 'react';
import { Helmet } from "react-helmet"

// find new products that fit niche then change them out

const OutdoorToys = () => {
  const products = [
    {
      title: 'VISTOP Non-Slip Splash Pad for Kids and Dog',
      image: 'https://m.media-amazon.com/images/I/61dH+kWpX8L._AC_SX679_.jpg',
      description: 'Thicken Sprinkler Pool Summer Outdoor Water Toys - Fun Backyard Fountain Play Mat for Baby Girls Boys Children or Pet Dog.',
      price: '$49.95',
      link: 'https://a.co/d/5goI6uc',
    },
    {
      title: 'VATOS 3-Tier Sand Water Table for Toddlers',
      image: 'https://m.media-amazon.com/images/I/71e4q+EbmhL._AC_SY300_SX300_.jpg',
      description: '36-Piece Kids Water Table Splash Pond Toys Set for Outside Outdoor Backyard, Toddlers Activity Sensory Water Play Table Summer Toys for Boy.',
      price: '$45.99',
      link: 'https://a.co/d/0j1acFl',
    },
    {
      title: 'Stomp Rocket Jr. Glow',
      image: 'https://m.media-amazon.com/images/I/71ev0RHeBgL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      description: 'On Sale The Stomp Rocket Ultra LED Rocket Launcher will have your Little One Amazed.',
      price: '$34.99',
      link: 'https://a.co/d/9IR59eI',
    },
    {
      title: 'Little Tikes Cozy Coupe Dinosaur',
      image: 'https://m.media-amazon.com/images/I/81Lg7Hp2Y0L.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      description: 'The Dino cozy Coupe has a fun design, A parent push handle and a removable floorboard. Parents and kids will both love the ride!',
      price: '$64.99',
      link: 'https://a.co/d/43g9qZw',
    },
    {
      title: 'POP N GO PLAYPEN',
      image: 'https://m.media-amazon.com/images/I/417oFi-e8-L._SX300_SY300_QL70_FMwebp_.jpg',
      description: 'Outdoor Baby Playpen for Babies and Toddlers - Baby Beach Tent, Foldable, Portable W/Canopy, Travel Bag, & Mosquito Net - Pop Up Pack and Play Tent .',
      price: '$119.99',
      link: 'https://a.co/d/cEoCTpw',
    },
    {
      title: 'Backyard Discovery Sweetwater Cedar Wooden Kids Playhouse Cottage',
      image: 'https://m.media-amazon.com/images/I/81nVPiEmXnL._AC_SX679_.jpg',
      description: 'With Play Kitchen, Snack Bar, Half Door, Toy Phone, Windows, Flowerpot Holders, and Working Doorbell for Outdoor Imaginative Play.',
      price: '$279',
      link: 'https://a.co/d/gFZrTUh',
    },
    {
      title: 'JUMPZYLLA Trampoline',
      image: 'https://m.media-amazon.com/images/I/81ep+akmG5L._AC_SX300_SY300_.jpg',
      description: '1k+ buyers last month it is A 8FT, 10FT ,12FT, 14FT, 15FT, 16FT with Enclosure and Ladder, ASTM Approved Recreational Trampoline for Kids and Adults, Anti-Rust Coated Frame.',
      price: '$489.95',
      link: 'https://a.co/d/inyWXZh',
    },
    {
      title: 'TOSY Flying Disc',
      image: 'https://m.media-amazon.com/images/I/81vsAxy1YLL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      description: '16 Million Colors RGB, Extremely Bright, Smart Modes, Camping Essentials for Teens/Kids/Adults/Men/Boys/Girls, Auto Light Up, Patented, Rechargeable, Waterproof, 175g.',
      price: '$47.99',
      link: 'https://a.co/d/89QNcsI',
    },
    {
      title: 'JOYIN 22.5ft Water Slides and 2 Bodyboards',
      image: 'https://m.media-amazon.com/images/I/81l+1rz2NdL._AC_SY300_SX300_.jpg',
      description: 'Lawn Water Slide Summer Slip Waterslides Water Toy with Build in Sprinkler for Backyard Outdoor Water Fun for Kids.',
      price: '$39.99',
      link: 'https://a.co/d/1kKuMRX',
    },
    {
      title: 'Toss Across Kids Outdoor Game',
      image: 'https://m.media-amazon.com/images/I/710hfr84YbL._AC_SX679_.jpg',
      description: 'Bean Bag Throw for Camping & Family Nights, Get 3-in-a-Row for 2 to 4 Players.',
      price: '$23.74',
      link: 'https://a.co/d/cBWzqwW',
    },
    // Add more products as needed
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>Top 10 Outdoor Toys for Kids | My Toy Scout</title>
        <meta
          name="description"
          content="Having fun in the sun? Check out these Outdoor Toys that are Must haves. Outdoor Activites Toys."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/outdoor-toys" />
        <meta property="og:title" content="Top 10 Outdoor Toys for Kids | My Toy Scout" />
        <meta property="og:description" content="Having fun in the sun? Check out these Outdoor Toys that are Must haves. Outdoor Activites Toys." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/outdoor-toys" />
        <meta name="twitter:title" content="Top 10 Outdoor Toys for Kids | My Toy Scout" />
        <meta name="twitter:description" content="Having fun in the sun? Check out these Outdoor Toys that are Must haves. Outdoor Activites Toys." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
          {/* <script type="application/ld+json">
    {
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Top 10 Outdoor Toys for Kids",
      "description": "Having fun in the sun? Check out these Outdoor Toys that are Must haves. Outdoor Activites Toys.",
      "image": "https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png",(blog post url)
      "author": {
        "@type": "Person",
        "name": "Rafael Agredano"
      },
      "publisher": {
        "@type": "Organization",
        "name": "My Toy Scout",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mytoyscout.netlify.app/blog/outdoor-toys" (toy scout url)
      },
      "datePublished": "2025-06-02"
    }
          }
        </script>*/}
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Top 10 Outdoor Toys for Kids</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-green-600 font-bold mb-4">{product.price}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutdoorToys;
