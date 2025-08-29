
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const EducationalSportsToysKids = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'Educational Toys for Kids Who Love Sports Stats', // ✅ Blog post title
    description: 'Combine sports with learning using toys that teach kids about stats, scores, strategy, and the math behind the game.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/sports-stats-educational-toys', // ✅ Blog slug (used in meta)
    datePublished: 'August 29, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'LED Hover Soccer Ball - Air Power Training Ball Playing Football Indoor Outdoor Game', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71hylTblzML._AC_SX679_.jpg', // ✅ Product image
      description: 'A floating soccer ball toy that glides across smooth surfaces with LED lights, designed for indoor or outdoor play without breaking the furniture.', // ✅ Short description
      text: "The LED Hover Soccer Ball is a creative twist on traditional kick-around fun, especially when outdoor space is limited. It floats on a cushion of air, gliding smoothly across tile, hardwood, or low-pile carpet—making it perfect for living rooms, basements, or school gyms. The soft foam bumper around the edges protects both furniture and kids' toes from unintended collisions, and the bright LED lights make playtime more exciting, especially in low light. It’s surprisingly durable and holds kids’ attention better than most indoor toys. Parents love that it channels energy into active play without risking broken windows. A must-have for rainy days or game-day halftime entertainment.", // ✅ Full review content
      price: '$17.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B07X5NN5GN/ref=cm_sw_r_as_gl_api_gl_i_GXWWSG7E9YESY4AWF4Q9?linkCode=ml1&tag=more4kids0a-20&linkId=12d44e837c800ed4af572a9501cd33e4', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'BooTaa 29" Large Dart Board for Kids, Kids Dart Board with Sticky Balls', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71CRKRGYHCL._AC_SX679_.jpg', // ✅ Product image
      description: 'A jumbo, soft dartboard that comes with safe sticky balls — a family-friendly alternative to traditional darts that’s fun for all ages.', // ✅ Short description
      text: "The BooTaa Large Dart Board is an instant crowd-pleaser that brings the competitive fun of darts without any of the danger. At 29 inches wide, it’s big enough to create a satisfying target area that even younger kids can hit with ease. The sticky balls are lightweight but adhere surprisingly well to the velcro surface, making scoring consistent and fun. It’s easy to hang on a door, tree, or wall, and it folds away neatly when not in use. Whether you're throwing a backyard party, planning a rainy-day activity, or just looking to keep siblings entertained together, this dart board delivers safe, skill-building fun without the cleanup or worry.", // ✅ Full review content
      price: '$27.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B08JGNRJ8P/ref=cm_sw_r_as_gl_api_gl_i_TSXZ688WG2HB8H4G7XF7?linkCode=ml1&tag=more4kids0a-20&linkId=4aa8538fa87341c682f41a99f77da6f2', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'COUOMOXA Soccer Board Game for Kids: Mini Foosball Table Game ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81NJ+LJB9zL._AC_SY300_SX300_.jpg', // ✅ Product image
      description: 'A compact, tabletop soccer game that mimics foosball — perfect for desks, travel, or rainy-day game battles between siblings.', // ✅ Short description
      text: "The COUOMOXA Soccer Board Game packs big energy into a small space, making it a standout option for road trips, kitchen table fun, or after-school play. The setup is simple, but the game is surprisingly engaging with flick-to-score action that brings out competitive instincts. It's small enough for even young children to manage comfortably but entertaining enough for adults to get into, too. The durable plastic frame and smooth puck motion ensure consistent gameplay. It’s also a clever way to build hand-eye coordination and reaction time without screen time. If you're looking to stock your game shelf with something compact yet high-replay, this one’s a winner.", // ✅ Full review content
      price: '$39.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0BRHCDH1M/ref=cm_sw_r_as_gl_api_gl_i_dl_35JWDW06H8KK5N5ZE6QN?linkCode=ml1&tag=more4kids0a-20&linkId=1087084543775eb1ddb8e33aafde0484', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'TOSY Flying Ring - 16 Million Color RGB or 12 LEDs', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91HHiCi7wwL._AC_SX679_.jpg', // ✅ Product image
      description: 'A high-tech, ultra-bright flying disc with customizable LED lights — built for nighttime outdoor play and next-level backyard games.', // ✅ Short description
      text: "The TOSY Flying Ring takes the classic Frisbee and launches it into the future. This isn’t just a glowing disc—it’s a programmable light show with multiple LED modes that make it one of the coolest nighttime toys on the market. It flies like a dream, with a smooth, balanced design that holds its trajectory even in wind. The rechargeable battery means no replacing AAAs, and the lights stay vibrant for long sessions. Whether you're at the beach, a family picnic, or just out after sunset, the TOSY is a surefire way to draw a crowd and create lasting memories. It’s more than a toy — it’s an event in motion.", // ✅ Full review content
      price: '$19.00', // ✅ Price
      link: ' https://www.amazon.com/dp/B0CMP9M725/ref=cm_sw_r_as_gl_api_gl_i_dl_PQ3E1YNCS01RC9VGDGD2?linkCode=ml1&tag=more4kids0a-20&linkId=0e25e4a38bc216e3fd6a0d6e0dbef8b0', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'ESSENSON Binoculars for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/716mqATM19L._AC_SY450_.jpg', // ✅ Product image
      description: 'A lightweight, shockproof pair of real binoculars made for kids—perfect for nature walks, birdwatching, and backyard exploring.', // ✅ Short description
      text: "The ESSENSON Binoculars are a gateway to adventure for young explorers. With a sturdy, shockproof design and easy-to-adjust focus, these binoculars help kids feel like real scientists in the field. The soft rubber around the eyepieces adds comfort and safety, especially for younger users, and the 8x magnification offers a surprisingly clear view of distant trees, animals, or sports action. They're small enough to fit comfortably in little hands but built tough enough to withstand outdoor tumbles. Whether you're camping, hiking, or just encouraging curiosity in the backyard, these binoculars turn everyday moments into discovery missions.", // ✅ Full review content
      price: '$6.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B094PPC8KP/ref=cm_sw_r_as_gl_api_gl_i_dl_8RS0Q7YCHAED697DT2GN?linkCode=ml1&tag=more4kids0a-20&linkId=f8d6624df0c16a86348b4df4560f9275', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: ' RC Cars Toys for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81pa-dG26dL._AC_SX679_.jpg', // ✅ Product image
      description: 'A fast, durable remote control car with easy-to-use controls, designed for indoor and outdoor racing thrills for kids of all ages.', // ✅ Short description
      text: "This RC Car is the kind of toy that sparks endless energy and excitement the moment it’s unboxed. It’s zippy, responsive, and built for all kinds of terrain—so it handles grass, gravel, or indoor floors with equal ease. The remote is intuitive even for younger kids, and the car itself feels sturdy enough to survive flips, crashes, and full-throttle racing across the driveway. What really makes this a standout toy is its combination of speed and control—it’s fast enough to be thrilling, but not so fast that it becomes frustrating. A great starter RC for kids, and fun enough that even adults won’t mind taking a few turns.", // ✅ Full review content
      price: '$29.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0CTWHSSM8/ref=cm_sw_r_as_gl_api_gl_i_0N20BS10F53CC3R0GENN?linkCode=ml1&tag=more4kids0a-20&linkId=4ff57d1ffec31e4359259b4d9a40950a ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Toys Rocket Launcher for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81NZcBB59eL._AC_SX679_.jpg', // ✅ Product image
      description: 'A foot-powered foam rocket launcher that sends colorful rockets flying high—simple, safe, and seriously fun for outdoor play.', // ✅ Short description
      text: "The Toys Rocket Launcher brings back the pure joy of analog outdoor fun. Kids step on the air pump and watch as foam rockets launch high into the air, with satisfying speed and surprising distance. It’s an easy setup—no batteries or charging cables—and it gets kids moving and giggling from the first launch. The rockets are made of soft, durable foam that’s safe even if they come down on someone's head. Great for parties, backyard challenges, or just everyday play, this launcher encourages active movement, coordination, and creative games. A hit with kids of all ages—and parents love that it burns off energy.", // ✅ Full review content
      price: '$19.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DH1RD67X/ref=cm_sw_r_as_gl_api_gl_i_dl_FSKZ1JEWGMHGWB8PB63K?linkCode=ml1&tag=more4kids0a-20&linkId=d35747805c934ebaf25991968bb66252', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Boomerang for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81ucFH88leL._AC_SX679_.jpg', // ✅ Product image
      description: 'A soft, easy-to-throw boomerang made just for kids, designed to return smoothly and safely with minimal effort.', // ✅ Short description
      text: "This kid-friendly boomerang is a fantastic intro to a classic skill toy. Unlike traditional boomerangs that require precision and strength, this one is made of lightweight, flexible material that’s forgiving and easy to throw. It actually comes back—especially with a little practice—which gives kids a great sense of achievement. The bright colors make it easy to track in the air, and it’s soft enough that missed catches won’t hurt. Whether you’re at the park or in the backyard, it’s a surprisingly engaging toy that helps improve coordination and patience, while still being lighthearted and just plain fun.", // ✅ Full review content
      price: '$22.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B08C81Y6DG/ref=cm_sw_r_as_gl_api_gl_i_ZFK5D9CPQPTX9NSBKRN8?linkCode=ml1&tag=more4kids0a-20&linkId=fad3629c8e0672bbdf6de5c46f860a92 ', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'JOYIN Giant Inflatable Bowling Set for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71JGV4OkIRL._AC_SX679_.jpg', // ✅ Product image
      description: 'A jumbo-sized inflatable bowling set that turns your backyard into a goofy, giggle-filled game zone—safe, fun, and perfect for parties.', // ✅ Short description
      text: "The JOYIN Giant Inflatable Bowling Set is pure oversized fun. The pins stand nearly three feet tall, and the inflatable ball is big enough for little ones to easily roll or kick toward a satisfying strike. Setup is quick, and once inflated, the bright, cartoonish design really catches kids' attention. It's especially great for birthday parties, playdates, or even family game night outside. The set is lightweight but durable enough for repeat play, and safe for toddlers and older kids alike. Bonus: it’s just as hilarious to watch as it is to play—adults will want in on the action too.", // ✅ Full review content
      price: '$29.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0D97JQX6S/ref=cm_sw_r_as_gl_api_gl_i_XH303YRNG716QH34XJQC?linkCode=ml1&tag=more4kids0a-20&linkId=633a60a632a393c01417431086327aae', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Dude Perfect Tabletop Roll', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71KswMvovtL._AC_SX679_.jpg', // ✅ Product image
      description: 'A fast-paced, trick-shot-inspired tabletop game from the Dude Perfect crew—ideal for competitive fun with friends or solo challenges.', // ✅ Short description
      text: "The Dude Perfect Tabletop Roll game packs the energy of viral trick shots into a compact, high-action tabletop format. It’s all about timing, coordination, and a bit of friendly trash talk as players launch balls down the ramp to land in scoring zones. It’s quick to learn and has just enough challenge to keep things interesting, especially with the varying ways to play. Fans of Dude Perfect will appreciate the branding and flair, but even kids who’ve never seen the videos will have a blast competing for the highest score. It's engaging for all ages and makes for a great break-time game between homework or chores.", // ✅ Full review content
      price: '$19.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0CRK8T8M6/ref=cm_sw_r_as_gl_api_gl_i_ZVPRGQ3X6RQXR0K0QZ6T?linkCode=ml1&tag=more4kids0a-20&linkId=1892f28ecfb563ba4bed32d6321cfd15', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
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

export default EducationalSportsToysKids;