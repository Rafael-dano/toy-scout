import React from 'react';
import { Helmet } from 'react-helmet';

// find new products that fit niche then change them out

const educationalToys = [
  {
    title: 'LeapFrog Learning Friends 100 Animals Book',
   // the below line is gonna be replaced with a path image
    image: 'https://m.media-amazon.com/images/I/71R0R6awcbL._AC_SL1310_.jpg',
    // use this pathing below
    // image: "/images/toys/robot-kit.jpg",
    description: 'Leapfrog Holiday Birthday Party Interactive Bilingual Take-Along Animals Book - Learning Bundle for Kids With Music and Colors',
    price: '$25.09',
    link: 'https://www.amazon.com/dp/B08PTN36M8?tag=more4kids0a-20',
  },
  // above is only real item
  {
    title: 'Melissa & Doug Wooden Building Blocks Set',
    image: 'https://m.media-amazon.com/images/I/81e5z2+9YgL._AC_SL1500_.jpg',
    description: '100-piece set of wooden blocks in four colors and nine shapes to inspire creative building.',
    price: '$19.99',
    link: 'https://www.amazon.com/dp/B00008W72D?tag=YOUR_AFFILIATE_TAG',
  },
  {
    title: 'Osmo - Genius Starter Kit for iPad',
    image: 'https://m.media-amazon.com/images/I/71p6L5Rk5zL._AC_SL1500_.jpg',
    description: 'Combines physical play with digital learning in five interactive games.',
    price: '$99.99',
    link: 'https://www.amazon.com/dp/B07NQ5YGDW?tag=YOUR_AFFILIATE_TAG',
  },
  {
    title: 'Educational Insights GeoSafari Jr. Kidnoculars',
    image: 'https://m.media-amazon.com/images/I/71c5lK0z0UL._AC_SL1500_.jpg',
    description: 'Focus-free binoculars designed specifically for preschoolers.',
    price: '$14.99',
    link: 'https://www.amazon.com/dp/B0007ODFTS?tag=YOUR_AFFILIATE_TAG',
  },
  {
    title: 'VTech Touch and Learn Activity Desk Deluxe',
    image: 'https://m.media-amazon.com/images/I/81Y5WuARqpL._AC_SL1500_.jpg',
    description: 'Interactive desk with five activity pages to explore letters, numbers, music, and more.',
    price: '$54.99',
    link: 'https://www.amazon.com/dp/B01COSEKQ2?tag=YOUR_AFFILIATE_TAG',
  },
  // Add more products as needed
];

export default function EducationalToys() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>Top Educational Toys for Kids</title>
        <meta
          name="description"
          content="Discover the best educational toys for kids that combine fun and learning. Perfect for developing essential skills."
        />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Top Educational Toys for Kids</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {educationalToys.map((toy, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img
              src={toy.image}
              alt={toy.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{toy.title}</h2>
            <p className="text-gray-700 mb-2">{toy.description}</p>
            <p className="text-gray-900 font-bold mb-2">{toy.price}</p>
            <a
              href={toy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
