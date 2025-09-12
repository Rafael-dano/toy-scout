
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const StemSportsToysLearning = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'STEM Sports Toys That Teach More Than Just the Game', // ✅ Blog post title
    description: 'Merge learning with athletics using these STEM toys that build skills in math, physics, and teamwork—all through sports.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/stem-sports-toys-that-teach-more-than-just-the-game', // ✅ Blog slug (used in meta)
    datePublished: 'September 12, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'Smartivity 3in1 Basketball, Soccer, Bowling', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71W+jKynPRL._AC_SX679_.jpg', // ✅ Product image
      description: "This versatile 3-in-1 sports set lets kids switch between basketball, soccer, and bowling, all in one compact design. It’s perfect for developing a range of motor skills and keeping children active and entertained.", // ✅ Short description
      text: "The Smartivity 3in1 sports set is a brilliant way to introduce kids to multiple sports while keeping playtime fresh and exciting. Each game targets different skills—shooting hoops improves hand-eye coordination, kicking the soccer ball develops foot control, and bowling teaches aim and precision. This multi-sport approach nurtures agility, concentration, and healthy competition, supporting physical development in a fun, dynamic way.", // ✅ Full review content
      price: '$24.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0CZDJN6Q8/ref=cm_sw_r_as_gl_api_gl_i_CS39HJBEWAZRTJTC2GKR?linkCode=ml1&tag=more4kids0a-20&linkId=486cd6f3f09591d86469dbc37ad6a4fd ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Smartivity DIY Pinball Machine Toy', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81DnRd3iJGL.__AC_SY300_SX300_QL70_ML2_.jpg', // ✅ Product image
      description: "This DIY pinball machine kit lets kids build their own working arcade game from scratch. It’s a hands-on STEM project that encourages creativity, problem-solving, and engineering skills.", // ✅ Short description
      text: "Building the Smartivity DIY Pinball Machine provides kids with an immersive STEM experience, blending creativity with mechanical learning. Assembling the parts teaches patience, fine motor skills, and an understanding of basic physics concepts like motion and force. Playing the finished pinball game then rewards them with hands-on feedback, fostering pride and encouraging further curiosity in engineering and design.", // ✅ Full review content
      price: '$34.29', // ✅ Price
      link: 'https://www.amazon.com/dp/B08P5XGHJG/ref=cm_sw_r_as_gl_api_gl_i_NZDGQZ0PJYPTN3ZWSVNM?linkCode=ml1&tag=more4kids0a-20&linkId=9d3b5715d3976e5d489235450ef7b3ba ', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Animal Bean Bag Toss Game Toy Outdoor Toss Game', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91Je-vPHsfL._AC_SX679_.jpg', // ✅ Product image
      description: "This outdoor bean bag toss game features colorful animal targets that bring fun and friendly competition to any backyard. It’s ideal for developing hand-eye coordination and social play.", // ✅ Short description
      text: "The Animal Bean Bag Toss game is a wonderful way to combine outdoor fun with skill development. Kids practice precision and timing as they aim for the targets, which boosts their hand-eye coordination and concentration. The game’s playful design invites social interaction, teaching turn-taking and sportsmanship, while providing healthy physical activity in a relaxed, enjoyable setting.", // ✅ Full review content
      price: '$35.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B08V1R43HT/ref=cm_sw_r_as_gl_api_gl_i_T58ZMQ3BPG3XPFSJ14E4?linkCode=ml1&tag=more4kids0a-20&linkId=40bc98a64f9c63a157b951b001a0178e', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Smartivity 2in1 Hydraulic Airplanes & Darts Launcher', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71RlwkaLfoL._AC_SX679_.jpg', // ✅ Product image
      description: "This 2-in-1 kit allows kids to build and launch hydraulic airplanes and dart shooters, combining hands-on construction with exciting play. It’s a perfect blend of STEM learning and active fun.", // ✅ Short description
      text: "The Smartivity 2in1 Hydraulic kit encourages kids to explore the principles of hydraulics and aerodynamics through hands-on building. Assembling the airplanes and darts launcher develops fine motor skills and problem-solving abilities, while launching the toys brings physics concepts to life in a tangible way. This engaging experience nurtures curiosity, experimentation, and a sense of accomplishment.", // ✅ Full review content
      price: '$29.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B08J3XJ1GK/ref=cm_sw_r_as_gl_api_gl_i_ZSKRB37FETF131QK9G9Z?linkCode=ml1&tag=more4kids0a-20&linkId=4b42627be39230cf231ae61ee4c7b95a', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'GMAOPHY Bow and Arrow', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81MFWXcNFiL._AC_SX679_.jpg', // ✅ Product image
      description: "This safe, lightweight bow and arrow set for kids offers hours of imaginative play and target practice. Designed with safety tips and easy handling, it’s perfect for beginners.", // ✅ Short description
      text: "The GMAOPHY Bow and Arrow set is an excellent tool for developing focus, hand-eye coordination, and patience in young archers. Learning to aim and shoot encourages discipline and control, while imaginative play boosts creativity and storytelling skills. Its safety features ensure worry-free fun, making it a wonderful way to build confidence and fine motor skills in an active, engaging way.", // ✅ Full review content
      price: '$39.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0B4J69MPL/ref=cm_sw_r_as_gl_api_gl_i_0V4NZ6HC4PQBQYWY3A0K?linkCode=ml1&tag=more4kids0a-20&linkId=9078ff17b15615a88f3f3d69f2ab14b6', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Upgraded Kids Toy Golf Set with Dinosaur Automatic Golf Returner', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71R5ZclzmnL._AC_SX679_.jpg', // ✅ Product image
      description: "This upgraded golf set for kids features a fun dinosaur-themed design and an automatic golf ball returner, making practicing putts easy and entertaining. It’s a great way to introduce young players to the basics of golf.", // ✅ Short description
      text: "The dinosaur golf set makes learning golf approachable and exciting for kids by combining play with skill development. The automatic ball return encourages repetitive practice, helping children build hand-eye coordination and fine motor skills. The dinosaur theme adds an imaginative twist, turning practice into an adventure that fosters focus, patience, and a love for the game.", // ✅ Full review content
      price: '$39.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0F1CKN84T/ref=cm_sw_r_as_gl_api_gl_i_NXX97C2Y90Q7PFB9GYED?linkCode=ml1&tag=more4kids0a-20&linkId=1e4e61680a1e32abc15c5da3582a0898', // ✅ Affiliate link
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

export default StemSportsToysLearning;