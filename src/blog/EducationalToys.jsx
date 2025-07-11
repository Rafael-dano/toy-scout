import React from 'react';
import { Helmet } from 'react-helmet';


const educationalToys = [
  {
    title: 'LeapFrog Learning Friends 100 Animals Book',
    image: 'https://m.media-amazon.com/images/I/71R0R6awcbL._AC_SX679_.jpg',
    description: 'Leapfrog Holiday Birthday Party Interactive Bilingual Take-Along Animals Book - Learning Bundle for Kids With Music and Colors',
    price: '$28.97',
    link: 'https://www.amazon.com/dp/B08PTN36M8/ref=cm_sw_r_as_gl_api_gl_i_XA7KV128G05F52FA71CC?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'ORSEN 8.5 Inch LCD Doodle Board Tablet Toy',
    image: 'https://m.media-amazon.com/images/I/61OWTDHny6L._AC_SX466_.jpg',
    description: 'Dinosaur Drawing Pad for Kids 2-6 Years Old - Christmas and Birthday Gifts.',
    price: '$17.98',
    link: 'https://www.amazon.com/dp/B09FZ42BTP/ref=cm_sw_r_as_gl_api_gl_i_HXVTDDGZC7ZRRRYH61C5?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'QuTZ Talking Phonics Flash Cards',
    image: 'https://m.media-amazon.com/images/I/717ylGsAN8L._AC_SX679_.jpg',
    description: 'Mastering Numbers, Letter Sound, Improving Reading Skills by Blending and Segmenting Words, Home School Supplies, Preschool Learning Activities for Toddlers 3-8.',
    price: '$34.99',
    link: 'https://www.amazon.com/dp/B0D9GWFW4B/ref=cm_sw_r_as_gl_api_gl_i_dl_HHZK0G0F0QGJ4MSN8K0X?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Talking Flash Cards for Toddlers',
    image: 'https://m.media-amazon.com/images/I/717aNXUrs5L.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    description: 'Montessori Language Learning with 224 Words, Pocket Speech Therapy and Autism Playthings, Child Sensory Educational Device.',
    price: '$9.99',
    link: 'https://www.amazon.com/dp/B0CRYJB6GK/ref=cm_sw_r_as_gl_api_gl_i_X9KPSYYA5PVPN8DW62JX?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'KOKODI Talking Pen Books Sets',
    image: 'https://m.media-amazon.com/images/I/811LNtOedEL._AC_SX679_.jpg',
    description: 'Interactive Audio Sound Books Kids Learning Electronic Toys for Boys Girls, Autism Sensory Games, Early Educational Gifts Birthday Gifts for Toddlers Kids.',
    price: '$49.99',
    link: 'https://www.amazon.com/dp/B0DFCKK62Q/ref=cm_sw_r_as_gl_api_gl_i_dl_RQFBT5SSNRP9BJEYRG5N?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Craft Box for Kids ',
    image: 'https://m.media-amazon.com/images/I/81LdspSpaYL._AC_SX679_.jpg',
    description: '10 Creative Arts and Crafts for Kids Ages 4-8, Fun, No Mess Educational Preschool & Homeschool Art Projects, Toddler Crafts Kit Supplies, 3 4 5 6 7 8 Year Old.',
    price: '$29.99',
    link: 'https://www.amazon.com/dp/B09XBPLP2D/ref=cm_sw_r_as_gl_api_gl_i_BW8HMAY2SZTK765QSAGZ?linkCode=ml1&tag=valeriafinds2-20&th=1',
  },
  {
    title: 'Childrens Color Classification Toys',
    image: 'https://m.media-amazon.com/images/I/71jQg4-iICL._AC_SX679_.jpg',
    description: 'Counting Animal Matching Games Color Sorting Toys with Bowls. Preschool Learning Activities for Math Educational Sensory Training Montessori STEM Sets Gift for Toddlers Kids Boys Girls Ages 3 4 5 6.',
    price: '$12.99',
    link: 'https://www.amazon.com/dp/B09W8VPZBM/ref=cm_sw_r_as_gl_api_gl_i_dl_2RK5MFR3H385A5AJR215?linkCode=ml1&tag=valeriafinds2-20&th=1',
  },
  {
    title: 'Snap Circuits Jr. SC-100 Electronics Exploration Kit',
    image: 'https://m.media-amazon.com/images/I/91THy3rMlCL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
    description: 'STEM Educational Toy for Kids 8 +, Circuit Board for Kids, Electronics for Kids, Kids Engineering Kit, Over 100 Projects, 28 pieces.',
    price: '$29.99',
    link: 'https://www.amazon.com/dp/B00008BFZH/ref=cm_sw_r_as_gl_api_gl_i_QN9AZ27GW78PNPY5N2SW?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Educational Insights GeoSafari Jr. Microscope',
    image: 'https://m.media-amazon.com/images/I/71XC1NcMMyL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    description: 'Talking Microscope Featuring Bindi Irwin: Microscope for Kids, STEM & Science Toy, Interactive Learning, Ages 3+.',
    price: '$53.19',
    link: 'https://www.amazon.com/dp/B072QH418H/ref=cm_sw_r_as_gl_api_gl_i_TT2BP6KPNPSKDX1RY53R?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'LeapFrog Mr Pencils Scribble Write',
    image: 'https://m.media-amazon.com/images/I/71zFIMeY3EL._AC_SX679_.jpg',
    description: 'Mr. Pencil shows kids how to write uppercase and lowercase letters step-by-step, then transforms the letters into animated animals and more.',
    price: '$24.99',
    link: 'https://www.amazon.com/dp/B0BRXPG99Q/ref=cm_sw_r_as_gl_api_gl_i_754613WSW31XWJCCT2B3?linkCode=ml1&tag=more4kids0a-20',
  },
  // Add more products as needed
];

export default function EducationalToys() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>Top 10 Educational Toys for Summer | My Toy Scout </title>
        <meta
          name="description"
          content="Discover the best educational toys for kids that combine fun and learning. Perfect for developing essential skills."
        />
         {/* Open Graph / Facebook */}
         <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/educational-toys" />
        <meta property="og:title" content="Top 10 Educational Toys for Summer | My Toy Scout" />
        <meta property="og:description" content="Discover the best educational toys for kids that combine fun and learning. Perfect for developing essential skills." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/educational-toys" />
        <meta name="twitter:title" content="Top 10 Educational Toys for Summer | My Toy Scout" />
        <meta name="twitter:description" content="Discover the best educational toys for kids that combine fun and learning. Perfect for developing essential skills." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
        <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Top 10 Educational Toys for Summer",
      "description": "Discover the best educational toys for kids that combine fun and learning. Perfect for developing essential skills.",
      "image": "https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png", 
      "author": {
        "@type": "Person",
        "name": "Rafael Agredano"
      },
      "publisher": {
        "@type": "Organization",
        "name": "My Toy Scout",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" 
        }
      },
      "datePublished": "2025-06-04"
       })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Top Educational Toys for Kids This Summer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {educationalToys.map((toy, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img
              src={toy.image}
              alt={toy.title}
              className="w-full h-48 object-cover mb-4 rounded"
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
