
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const BrainBoostingToysAfterSchool = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: '7 Brain-Boosting Toys for After-School Wind Down', // ✅ Blog post title
    description: 'These calming yet stimulating toys help kids relax after school while reinforcing cognitive skills through fun and play.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/brain-boosting-after-school-toys', // ✅ Blog slug (used in meta)
    datePublished: 'August 15, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'Fat Brain Toys Air Toobz', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71xosN2CvgL._AC_SX679_.jpg', // ✅ Product image
      description: 'A sensory STEM toy with flexible tubes that pop, bend, and connect—perfect for open-ended exploration.', // ✅ Short description
      text: "Air Toobz are a hands-on, tactile experience that turns STEM into serious fun. Kids can twist, pull, and build wild contraptions using the flexible, air-popping tubes. It encourages creativity, fine motor skill development, and basic engineering principles, all disguised as play. Whether solo or collaborative, this toy has endless replay value. Great for both home and classroom environments, and perfect for kids who love to fidget or invent.", // ✅ Full review content
      price: '$159.95', // ✅ Price
      link: 'https://www.amazon.com/dp/B0C21LRH2K/ref=cm_sw_r_as_gl_api_gl_i_N94AK9GBTCS35HD8FCGE?linkCode=ml1&tag=more4kids0a-20&linkId=03e5e6452df1db1915c3b3446b97b8f5 ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Fat Brain Toys SpinAgain', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61Xxud+RnVL._AC_SX679_.jpg', // ✅ Product image
      description: 'A gravity-powered stacking toy with vibrant spinning discs designed for toddlers and early learners.', // ✅ Short description
      text: "SpinAgain is a mesmerizing blend of motion, color, and learning. Young children stack chunky discs onto a corkscrew pole and watch them spin down in a flurry of movement. Beyond the sensory fun, it promotes hand-eye coordination, cause-and-effect learning, and spatial awareness. Built from high-quality materials and safe for toddlers, it's a favorite for both parents and educators looking to make learning feel magical.", // ✅ Full review content
      price: '$37.95', // ✅ Price
      link: ' https://www.amazon.com/dp/B016F5QJQW/ref=cm_sw_r_as_gl_api_gl_i_2EYEA0ZV13HTGJXZJ15R?linkCode=ml1&tag=more4kids0a-20&linkId=f0e2564c4b23fdd94b7bd40d03d423a7', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'STEM Logic Road Builder Toys: Board Game', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81FHJ4FE-cL._AC_SX679_.jpg', // ✅ Product image
      description: 'A hands-on logic game where kids build a working road path to reach their goal, perfect for developing problem-solving skills.', // ✅ Short description
      text: "This board game combines critical thinking with construction, tasking kids with building functional roads that complete various puzzles. It’s STEM learning in disguise—encouraging logical sequencing, spatial planning, and persistence. With a progressive difficulty curve and tactile puzzle pieces, it's as fun as it is brain-boosting. Whether played solo or with a friend, it’s an excellent addition to any educational toy shelf.", // ✅ Full review content
      price: '$39.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0D8VJ2VVY/ref=cm_sw_r_as_gl_api_gl_i_N5GRBXN6ECPMCX7NTY01?linkCode=ml1&tag=more4kids0a-20&linkId=74610722b394add71f143b563748e512', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Sensory Fidget Toys for Kids Toddler', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81N0c2ZOByL._AC_SX679_.jpg', // ✅ Product image
      description: 'A vibrant assortment of sensory toys designed to calm, engage, and entertain toddlers and young kids.', // ✅ Short description
      text: 'This sensory fidget pack is a treasure chest of textures, colors, and satisfying interactions. Perfect for toddlers and early learners, it includes a mix of poppers, stretchy strings, squishy toys, and more. Great for classroom calming corners, travel activities, or daily sensory play, each toy is small enough for little hands but big enough on benefits—helping with focus, anxiety, and fine motor development. It’s an excellent value for the variety and quality provided.', // ✅ Full review content
      price: '$9.89', // ✅ Price
      link: ' https://www.amazon.com/dp/B0D7Q8VM8C/ref=cm_sw_r_as_gl_api_gl_i_dl_0W38CQCRQSBWE5ZZTJZZ?linkCode=ml1&tag=more4kids0a-20&linkId=3ab4f8d7c36d28c14640ca5c8bd16419&th=1', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Skillmatics Search and Find Educational Game', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81CUjY8bDzL._AC_SX679_.jpg', // ✅ Product image
      description: 'A reusable, wipe-clean activity set that helps children develop observation skills while having fun.', // ✅ Short description
      text: "Skillmatics hits the mark again with this clever, mess-free game. Kids use a dry-erase marker to circle items in busy, themed illustrations—turning each page into a visual adventure. The themes are fun, from animals to vehicles to seasons, and the wipe-clean boards mean hours of repeated use. It’s portable, durable, and sparks focus and conversation. A top pick for road trips or quiet-time learning at home.", // ✅ Full review content
      price: '$29.97', // ✅ Price
      link: ' https://www.amazon.com/dp/B08PFHW3R5/ref=cm_sw_r_as_gl_api_gl_i_Q9KJRWAKJEZ6DHE7SNTK?linkCode=ml1&tag=more4kids0a-20&linkId=d74fed50118413499d3df81a9255d716', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Skillmatics Guess in 10 Animal Planet,', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81i169CgFhL._AC_SX679_.jpg', // ✅ Product image
      description: 'A quick-thinking, family-friendly card game where players ask up to 10 questions to guess the mystery animal.', // ✅ Short description
      text: "Guess in 10 is like 20 Questions but kid-approved and animal-focused! Players use deductive reasoning to ask strategic yes/no questions that narrow down possibilities—from habitats and diets to physical features. It’s educational without feeling like a lesson, and the fast-paced format keeps even short attention spans hooked. Great for family game night or classroom fun, this is a smart way to build vocabulary and critical thinking at the same time.", // ✅ Full review content
      price: '$14.97', // ✅ Price
      link: ' https://www.amazon.com/dp/B07RMJ8SG6/ref=cm_sw_r_as_gl_api_gl_i_TYWK06PBD36TE6XZ7ZK3?linkCode=ml1&tag=more4kids0a-20&linkId=8674aff07130e3672d1e1f9214d55876', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: '12 Pack Funny Sensory Fidget Toys,', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81kDPSaREDL._AC_SX679_.jpg', // ✅ Product image
      description: 'A fun-filled 12-pack of mini sensory toys that squish, stretch, pop, and spin to entertain and relax kids.', // ✅ Short description
      text: "This mega-pack is a crowd-pleaser—perfect for birthday goodie bags, classroom prizes, or stress relief during schoolwork. It includes an assortment of satisfying fidget toys like mochi squishies, stress balls, and pop tubes. Kids love the variety, and parents appreciate the way these toys keep hands busy and minds focused. It’s also a great option for sensory-seeking children or kids who need help staying grounded in overwhelming environments.", // ✅ Full review content
      price: '$19.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B09N2Q4PWM/ref=cm_sw_r_as_gl_api_gl_i_Z0J4V9G4QK8RGKJ07KNB?linkCode=ml1&tag=more4kids0a-20&linkId=1aadea00097991c948cf625b00266e8e ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>{blogMeta.title} | My Toy Scout</title>
        <meta name="description" content={blogMeta.description} />

        {/* Facebook Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mytoyscout.netlify.app${blogMeta.slug}`} />
        <meta property="og:title" content={`${blogMeta.title} | My Toy Scout`} />
        <meta property="og:description" content={blogMeta.description} />
        <meta property="og:image" content={blogMeta.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://mytoyscout.netlify.app${blogMeta.slug}`} />
        <meta name="twitter:title" content={`${blogMeta.title} | My Toy Scout`} />
        <meta name="twitter:description" content={blogMeta.description} />
        <meta name="twitter:image" content={blogMeta.image} />

        {/* Schema Markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blogMeta.title,
            "description": blogMeta.description,
            "image": blogMeta.image,
            "author": { "@type": "Person", "name": "Rafael Agredano" },
            "publisher": {
              "@type": "Organization",
              "name": "My Toy Scout",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png"
              }
            },
            "datePublished": blogMeta.datePublished
          })}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">{blogMeta.title}</h1> {/* ✅ Change title display */}

      <div className="space-y-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-1/3 h-48 object-cover rounded mb-4 md:mb-0 md:mr-6"
            />

            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>

              {/* ⭐ Badge Rating System */}
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-yellow-400 text-xl ${i < product.rating ? '' : 'opacity-20'}`}>
                    🟰
                  </span>
                ))}
                <span className="ml-2 text-sm text-gray-600">{product.rating}/5 Scout Badges</span>
              </div>

              <p className="text-gray-700 mb-2">{product.text}</p> {/* ✅ Full review */}
              <p className="text-sm text-gray-500 mb-2">{product.description}</p> {/* ✅ Short description */}
              <p className="text-green-600 font-bold mb-4">{product.price}</p> {/* ✅ Price */}

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Buy Now on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrainBoostingToysAfterSchool; 