
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const IndoorActiveToysForFall = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'Toys That Help Kids Stay Active Indoors This Fall', // ✅ Blog post title
    description: 'Don’t let cold weather slow your kids down! These toys turn any living room into a fun, fitness-friendly play space.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/toys-that-help-kids-stay-active-indoors-this-fall', // ✅ Blog slug (used in meta)
    datePublished: 'September 08, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'Hasbro Twister Party Classic Board Game', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/714LbaV4HQL.__AC_SX300_SY300_QL70_ML2_.jpg', // ✅ Product image
      description: "Get ready to laugh and stretch! Twister is the classic party game that challenges players to put their hands and feet on colored spots without falling over. Great for kids, families, and party guests of all ages—it’s physical, funny, and timeless.", // ✅ Short description
      text: "Twister combines physical activity with social interaction, making it a valuable game for developing coordination, balance, and flexibility. It also encourages players to think quickly and problem-solve under fun, sometimes silly pressure. Beyond the physical benefits, Twister fosters laughter and bonding, helping children build confidence and teamwork skills in a lighthearted environment. It’s a timeless game that blends exercise and social learning seamlessly.", // ✅ Full review content
      price: '$19.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B008J87PVC/ref=cm_sw_r_as_gl_api_gl_i_PS91M216XYY3RJYYYBBQ?linkCode=ml1&tag=more4kids0a-20&linkId=f2fe68ea0a60201e27512fb4e4ec5809', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Powza 3 in 1 Musical Jump', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61OS13x4-cL._AC_SX679_.jpg', // ✅ Product image
      description: "This colorful 3-in-1 musical jump toy combines a trampoline, interactive game, and musical instrument for kids. It features lights and sounds that respond to jumping, encouraging physical activity while promoting rhythm and coordination in young children.", // ✅ Short description
      text: "The Powza 3 in 1 Musical Jump is a fantastic way to combine energetic play with sensory development. As kids jump and interact with the lights and sounds, they improve their balance, coordination, and cardiovascular health. The musical feedback encourages rhythmic movement and listening skills, making it a multi-sensory experience that helps develop gross motor skills and auditory processing in an engaging, joyful way.", // ✅ Full review content
      price: '$29.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0CTG1HXKN/ref=cm_sw_r_as_gl_api_gl_i_dl_D0NPNNAP7TSY04GA5BS9?linkCode=ml1&tag=more4kids0a-20&linkId=e3735af65b21227da5dba49e08d36926', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'BooTaa 29" Large Dart Board for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71CRKRGYHCL._AC_SX679_.jpg', // ✅ Product image
      description: "This large, kid-friendly dart board is designed with safety in mind, featuring soft-tip darts and bright colors. It’s perfect for improving hand-eye coordination, focus, and strategic thinking in a fun, competitive way.", // ✅ Short description
      text: "The BooTaa Dart Board makes practicing precision and concentration exciting for kids. Using soft-tip darts ensures safe play while teaching children to aim and control their movements. This game encourages strategic thinking as players calculate scores and plan their throws. It’s a great activity to foster patience, focus, and friendly competition in a supportive environment.", // ✅ Full review content
      price: '$27.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B08JGNRJ8P/ref=cm_sw_r_as_gl_api_gl_i_955P81D4TJDRNWSJT494?linkCode=ml1&tag=more4kids0a-20&linkId=b7f3427a52ed2525b62084b2f3ea0575 ', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Geospace Original Walkaroo JR. Aluminum Lightweight Stilts with Ergonomic Design for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/618ArvIud+L._AC_SY300_SX300_.jpg', // ✅ Product image
      description: "Lightweight aluminum stilts designed specifically for kids, with an ergonomic design and adjustable height. These stilts help develop balance, coordination, and confidence while providing a fun physical challenge.", // ✅ Short description
      text: "Learning to walk on stilts with the Geospace Walkaroo JR. offers children a unique way to build balance and muscle control. The ergonomic design makes it easier and safer for beginners to practice, while the adjustable height allows growth and skill development over time. This activity promotes physical confidence and focus, challenging kids to master a new motor skill in a playful, rewarding way.", // ✅ Full review content
      price: '$59.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B00175XCCU/ref=cm_sw_r_as_gl_api_gl_i_JWM6K04C8V68CJC4RRAW?linkCode=ml1&tag=more4kids0a-20&linkId=94e12bdba30e7864e2fd13243a29f9c6', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Mattel Games UNO Attack Mega Hit', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/811yAqFNxKL._AC_SX679_.jpg', // ✅ Product image
      description: "UNO Attack adds an exciting twist to the classic card game with a card launcher that can surprise players by shooting out a handful of cards. It keeps everyone on their toes and adds more excitement and unpredictability.", // ✅ Short description
      text: "UNO Attack combines classic gameplay with a dynamic new element that enhances strategic thinking and quick decision-making. The surprise card launcher adds unpredictability, teaching kids to adapt their strategies on the fly. Playing this game develops counting, color recognition, and social skills like turn-taking and sportsmanship in a fun, high-energy setting.", // ✅ Full review content
      price: '$23.85', // ✅ Price
      link: ' https://www.amazon.com/dp/B08GLK316Z/ref=cm_sw_r_as_gl_api_gl_i_QXK9HGCNCBC2VZ9D65M1?linkCode=ml1&tag=more4kids0a-20&linkId=b2e2cd3d07b1dca1f54276c66459c54d', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Gskyer Telescope', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71cb2RCy+aL._AC_SX466_.jpg', // ✅ Product image
      description: "Explore the stars with this beginner-friendly telescope! The Gskyer Telescope is perfect for kids and curious beginners. It comes with a tripod, finder scope, and multiple eyepieces to zoom in on the moon, planets, and even bright stars. Easy setup and a carrying case make it ideal for learning on the go.", // ✅ Short description
      text: "The Gskyer Telescope opens up a universe of discovery for young astronomers, providing a hands-on way to explore space and develop scientific thinking. It fosters patience, observation skills, and a deeper appreciation for the natural world. Using this telescope, kids gain an understanding of celestial movements and the vastness of space, inspiring curiosity that can spark lifelong learning in STEM fields.", // ✅ Full review content
      price: '$129.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B081RJ8DW1/ref=cm_sw_r_as_gl_api_gl_i_FXHQ6MQYA7F3WNVDMCVW?linkCode=ml1&tag=more4kids0a-20&linkId=fd7b77a0e0c4a43878372f79f19a483a ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Toy Box Chest', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71KUq4WEYbL._AC_SX679_.jpg', // ✅ Product image
      description: "Keep playrooms neat and organized with this spacious Toy Box Chest. Its sturdy construction and child-safe design provide a perfect storage solution for toys, books, and games, encouraging kids to develop tidying habits early.", // ✅ Short description
      text: "A well-organized space fosters a calm and creative environment for children, and this Toy Box Chest makes tidying up fun and easy. By having a dedicated place for toys, kids learn responsibility and organization skills, which are important for their independence. The chest’s durable build ensures it can handle daily use, while its size accommodates a variety of toys, making cleanup an engaging part of playtime rather than a chore.", // ✅ Full review content
      price: '$23.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0BM88KCXG/ref=cm_sw_r_as_gl_api_gl_i_MC0GGPMFH3K659QDC7TT?linkCode=ml1&tag=more4kids0a-20&linkId=8f1a96cf20fa4a2c4dfd636bdd4a003e ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Nex Playground', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71Re8OntVjL._SX466_.jpg', // ✅ Product image
      description: "This vibrant, multi-activity Nex Playground features slides, climbing structures, and interactive panels to keep kids physically active and mentally engaged. Perfect for backyard fun, it promotes healthy outdoor play.", // ✅ Short description
      text: "The Nex Playground is an ideal setup to encourage active play and social interaction. Climbing, sliding, and exploring on this playground help develop gross motor skills, balance, and coordination. The variety of activities stimulates curiosity and problem-solving, while playing outdoors boosts mood and overall health. This playground offers a safe and exciting environment where children can develop confidence and teamwork.", // ✅ Full review content
      price: '$249.00', // ✅ Price
      link: ' https://www.amazon.com/dp/B0D2JGYX3F/ref=cm_sw_r_as_gl_api_gl_i_MG10PX1FT2KHCEK6BN3X?linkCode=ml1&tag=more4kids0a-20&linkId=cbadc09da642ecae1a3eaab786e731db', // ✅ Affiliate link
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

export default IndoorActiveToysForFall;