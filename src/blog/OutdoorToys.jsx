import React from 'react';

// find new products that fit niche then change them out

const OutdoorToys = () => {
  const products = [
    {
      title: 'Razor A Kick Scooter',
      image: 'https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SL1500_.jpg',
      description: 'Lightweight and durable, perfect for kids aged 5 and up.',
      price: '$27.49',
      link: 'https://www.amazon.com/dp/B000FK7C5A?tag=YOUR_AFFILIATE_TAG',
    },
    {
      title: 'Step2 Play and Fold Jr. Slide',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71c5Xgk2yXL._AC_SL1500_.jpg',
      description: 'Compact slide ideal for toddlers, easy to fold and store.',
      price: '$89.99',
      link: 'https://www.amazon.com/dp/B00W4A1L6U?tag=YOUR_AFFILIATE_TAG',
    },
    {
      title: 'Stomp Rocket Jr. Glow',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71K1e0v6ZTL._AC_SL1500_.jpg',
      description: 'Launches glow-in-the-dark rockets up to 100 feet.',
      price: '$18.99',
      link: 'https://www.amazon.com/dp/B00000K3BR?tag=YOUR_AFFILIATE_TAG',
    },
    {
      title: 'Little Tikes Easy Score Basketball Set',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81dZ0p5iY-L._AC_SL1500_.jpg',
      description: 'Adjustable hoop for growing kids, includes 3 balls.',
      price: '$62.04',
      link: 'https://www.amazon.com/dp/B01C5A2WJO?tag=YOUR_AFFILIATE_TAG',
    },
    {
      title: '3-in-1 Kids Sand & Water Picnic Table',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81k0p6sWcUL._AC_SL1500_.jpg',
      description: 'Convertible table with umbrella for versatile outdoor play.',
      price: '$119.99',
      link: 'https://www.amazon.com/dp/B01N6GQ4V0?tag=YOUR_AFFILIATE_TAG',
    },
    {
      title: 'Step2 All Around Playtime Patio with Canopy',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81X1Z3q3ZLL._AC_SL1500_.jpg',
      description: 'Outdoor kitchen and playset with canopy for shade.',
      price: '$182.33',
      link: 'https://www.amazon.com/dp/B01B1V1A6I?tag=YOUR_AFFILIATE_TAG',
    },
    {
      title: 'TERRAMUS Double-Tier Kids Water Table',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81X1Z3q3ZLL._AC_SL1500_.jpg',
      description: 'Engaging water play with multiple levels and accessories.',
      price: '$94.99',
      link: 'https://www.amazon.com/dp/B08P2K9Z6T?tag=YOUR_AFFILIATE_TAG',
    },
    {
      title: 'Fisher-Price On-the-Go Baby Dome',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81X1Z3q3ZLL._AC_SL1500_.jpg',
      description: 'Portable play space with canopy and toys for infants.',
      price: '$47.99',
      link: 'https://www.amazon.com/dp/B01N6GQ4V0?tag=YOUR_AFFILIATE_TAG',
    },
    {
      title: 'Little Tikes First Slide',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81X1Z3q3ZLL._AC_SL1500_.jpg',
      description: 'Perfect beginner slide for toddlers, easy to assemble.',
      price: '$34.00',
      link: 'https://www.amazon.com/dp/B01C5A2WJO?tag=YOUR_AFFILIATE_TAG',
    },
    {
      title: 'Nerf N-Strike Elite Disruptor',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81X1Z3q3ZLL._AC_SL1500_.jpg',
      description: 'Quick-draw blaster with rotating drum for action-packed play.',
      price: '$9.99',
      link: 'https://www.amazon.com/dp/B01IK52TDM?tag=YOUR_AFFILIATE_TAG',
    },
    // Add more products as needed
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Top Outdoor Toys for Kids</h1>
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
