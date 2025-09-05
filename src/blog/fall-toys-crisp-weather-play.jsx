
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const FallToysCrispWeatherPlay = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'Fall Favorites: Top Toys for Crisp Weather Play', // ✅ Blog post title
    description: 'Embrace sweater weather with toys designed for cool outdoor fun. From leaf jumpers to nature kits, keep kids active as the seasons change.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/fall-favorites-top-toys-for-crisp-weather-play', // ✅ Blog slug (used in meta)
    datePublished: 'September 05, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'Stomp Rocket Jr Multi-Color Rocket Launcher for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81gZ4p3AKBL._AC_SX679_.jpg', // ✅ Product image
      description: 'Colorful, air-powered foam rocket launcher that flies up to 100 feet—no batteries required.', // ✅ Short description
      text: "The Stomp Rocket Jr. is an all-time favorite for outdoor fun. With a simple stomp, kids launch foam rockets high into the air, sparking giggles and awe. It's a fantastic mix of active play and STEM learning, getting kids to experiment with angles and force. The foam design is safe for younger children, and parents love that it’s easy to set up and totally screen-free. It’s perfect for parks, backyards, and even school science demos.", // ✅ Full review content
      price: '$24.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B00G466HBU/ref=cm_sw_r_as_gl_api_gl_i_CC07ZWYMPNMCGSQXWEKD?linkCode=ml1&tag=more4kids0a-20&linkId=611b35c303b8bc18126dc4288d4e42a1', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Shut The Box Game', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71ehT8+aBWL._AC_SX679_.jpg', // ✅ Product image
      description: 'Classic wooden dice game that blends luck and math—great for family game nights or classroom fun.', // ✅ Short description
      text: "Shut The Box is a timeless tabletop game that entertains while sharpening math skills. Kids practice addition as they roll dice and “shut” numbered tiles, aiming to close as many as possible. This version is well-made with smooth wood and bright numbers. It’s easy to learn, fast-paced, and surprisingly competitive—ideal for both solo play and groups. Great for kids 6+, but even adults get hooked!", // ✅ Full review content
      price: '$18.89', // ✅ Price
      link: ' https://www.amazon.com/dp/B0BRKNXQ21/ref=cm_sw_r_as_gl_api_gl_i_dl_YYT9ZGAGQAE1QWWG0F4C?linkCode=ml1&tag=more4kids0a-20&linkId=ea45e2099f92382abf15931df7135d7f', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Upgrade Dinosaur Kids Camera', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71ZZlAO08TL._AC_SX679_.jpg', // ✅ Product image
      description: 'Kid-friendly camera with a cute dinosaur design, photo/video modes, and games—ideal for ages 3–8.', // ✅ Short description
      text: "This upgraded dinosaur camera is a perfect starter gadget for little shutterbugs. With fun filters, simple buttons, and decent photo quality, it encourages kids to explore the world through their own lens. It also includes mini games and a protective silicone case, making it a great travel or birthday gift. Kids love the dino shape, and parents love seeing their creativity blossom without screen overload.", // ✅ Full review content
      price: '$29.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0BX6NR39M/ref=cm_sw_r_as_gl_api_gl_i_Q967H56RSWRGVF266C9D?linkCode=ml1&tag=more4kids0a-20&linkId=f9dd3cc3e4bd11644b4913122745cddd', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'LiKee Strong Suction Cup Fidget Rotating Sensory Bath Toys', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61vrvG6qu1L._AC_SX679_.jpg', // ✅ Product image
      description: 'Rotating bath toys with suction cups—designed for tactile sensory play during bath time.', // ✅ Short description
      text: "These rotating fidget bath toys stick to any smooth surface and spin with a flick, creating endless fun for toddlers. They’re a hit during bath time but also great on windows, high chairs, or the fridge. The bright colors and smooth spinning action keep kids engaged and calm. They’re great for sensory development and fine motor skills, and since they're BPA-free and easy to clean, they’re also parent-approved.", // ✅ Full review content
      price: '$9.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0CT2Q5XXD/ref=cm_sw_r_as_gl_api_gl_i_7CDBJDHE40CCP90BPT4B?linkCode=ml1&tag=more4kids0a-20&linkId=1b584c881d1e13f6f57192e1066bc5f7 ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Nex Playground', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71Re8OntVjL._SX466_.jpg', // ✅ Product image
      description: 'Immersive motion-based smart gaming system that turns your TV into an active play zone for kids.', // ✅ Short description
      text: "Nex Playground is a game-changer for indoor active play. It transforms any TV into an interactive gaming space using motion tracking—no controllers needed. Kids dance, jump, and play their way through educational games and fitness challenges. The library of content is growing, and it's perfect for ages 4+. It’s a brilliant way to get kids moving while blending fun with learning. Setup is fast, and the gameplay feels intuitive and futuristic.", // ✅ Full review content
      price: '$249.00', // ✅ Price
      link: ' https://www.amazon.com/dp/B0D2JGYX3F/ref=cm_sw_r_as_gl_api_gl_i_N3825RG8NKX3SCP4G8V4?linkCode=ml1&tag=more4kids0a-20&linkId=e3b0df68da1135aa21a623f336f570aa', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Dino Projection Kids Toys for 3-8 Year Olds', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81RDAnRMFOL._AC_SX679_.jpg', // ✅ Product image
      description: "Bring the Jurassic era to your child's bedroom with this Dino Projection toy! Designed for kids ages 3–8, it projects colorful dinosaur images onto walls and ceilings, sparking imagination and bedtime adventures. Easy to use, battery-powered, and perfect for dinosaur lovers.", // ✅ Short description
      text: "This Dino Projection toy isn’t just a fun nightlight—it’s a gateway to prehistoric exploration that encourages curiosity about science and history. Watching the dinosaurs come to life on the ceiling helps kids develop their imagination while subtly introducing them to the fascinating world of paleontology. It’s simple enough for young children to operate, making it a fantastic tool to calm bedtime fears while inspiring a love of learning about ancient creatures.", // ✅ Full review content
      price: '$19.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B083R2P78L/ref=cm_sw_r_as_gl_api_gl_i_7Z3S4SWSF56Z397KHY4S?linkCode=ml1&tag=more4kids0a-20&linkId=87d5b48946739e562a641151352723a4&th=1', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Water Doodle Mat ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/818B3iz2f5L.__AC_SX300_SY300_QL70_ML2_.jpg', // ✅ Product image
      description: "No mess, no fuss—just creative fun! This large water doodle mat lets kids paint with water using refillable pens and stencils. When the water dries, the drawings disappear, ready to start all over again. It’s a screen-free activity that keeps little artists entertained.", // ✅ Short description
      text: "The Water Doodle Mat is a perfect way to engage children’s creativity while keeping mess to a minimum. It promotes fine motor skills and hand-eye coordination as kids practice drawing and writing with water pens. Because the drawings vanish, children get endless opportunities to experiment and express themselves without the worry of ruining paper or walls. This toy also encourages screen-free play, which is so important for early development and imaginative growth.", // ✅ Full review content
      price: '$37.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B07GKWLBN2/ref=cm_sw_r_as_gl_api_gl_i_56TCTQ0MGCQWYYP5YJSK?linkCode=ml1&tag=more4kids0a-20&linkId=1bd1c347632a8ef62ae899598e13896a', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Little Tikes Princess Cozy Coupe Ride-On Toy ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61KOpuEL1cL._AC_SX679_.jpg', // ✅ Product image
      description: "A classic ride-on toy with a magical twist! This Princess Cozy Coupe features a charming design with a removable floorboard, working horn, and durable tires. Perfect for indoor or outdoor play, it encourages active movement and roleplay for toddlers and preschoolers.", // ✅ Short description
      text: "The Princess Cozy Coupe is more than just a cute ride-on—it’s a fantastic way for young children to develop gross motor skills and spatial awareness. By pushing themselves around, kids strengthen their leg muscles and coordination. The roleplay aspect also fosters creativity and social skills, as children imagine adventures behind the wheel. Its durable design means it withstands energetic play both indoors and outdoors, making it a lasting favorite that supports physical activity and imaginative growth.", // ✅ Full review content
      price: '$64.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0097GKTO0/ref=cm_sw_r_as_gl_api_gl_i_AN53Q0REMCPBZFQDME6D?linkCode=ml1&tag=more4kids0a-20&linkId=513ffc3aafe3c9d6044f69498d3532d2', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Gskyer Telescope', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71cb2RCy+aL._AC_SX466_.jpg', // ✅ Product image
      description: "Explore the stars with this beginner-friendly telescope! The Gskyer Telescope is perfect for kids and curious beginners. It comes with a tripod, finder scope, and multiple eyepieces to zoom in on the moon, planets, and even bright stars. Easy setup and a carrying case make it ideal for learning on the go.", // ✅ Short description
      text: "Introducing children to astronomy with the Gskyer Telescope opens a universe of wonder and scientific curiosity. It’s an excellent educational tool that encourages observation skills and patience as kids learn to locate and identify celestial bodies. Stargazing nurtures a sense of scale and perspective about our place in the cosmos. Plus, it can spark interest in science, technology, engineering, and math (STEM) subjects by providing a hands-on learning experience that’s both fun and inspiring.", // ✅ Full review content
      price: '$129.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B081RJ8DW1/ref=cm_sw_r_as_gl_api_gl_i_XZN05E3DK771E6X76XJE?linkCode=ml1&tag=more4kids0a-20&linkId=16fbec5d91091c95924b7edda5bb873b', // ✅ Affiliate link
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

export default FallToysCrispWeatherPlay;