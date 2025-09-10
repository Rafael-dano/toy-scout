
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const MiniSoccerToysYoungAthletes = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'Mini Soccer Stars: Toys for Aspiring Young Athletes', // ✅ Blog post title
    description: 'Gear up your little striker with soccer balls, goals, and skill-building toys perfect for young players just getting in the game.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/mini-soccer-stars-toys-for-aspiring-young-athletes', // ✅ Blog slug (used in meta)
    datePublished: 'September 10, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'Hover Soccer Ball for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91HUHIUKC1L._AC_SX679_.jpg', // ✅ Product image
      description: "This Hover Soccer Ball glides smoothly over floors, making it perfect for indoor soccer fun. Designed for kids, it’s lightweight, safe, and encourages active play regardless of the weather outside.", // ✅ Short description
      text: "The Hover Soccer Ball is a clever way to bring active play indoors, especially during colder months or rainy days. It promotes physical activity, coordination, and spatial awareness while giving kids a fun way to practice soccer skills in tight spaces. Its smooth glide and soft bumpers ensure safety and easy play, making it a great tool to encourage movement and energy release inside the home.", // ✅ Full review content
      price: '$19.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0D5JX1QQF/ref=cm_sw_r_as_gl_api_gl_i_8E147RRRJ013NS56R4W3?linkCode=ml1&tag=more4kids0a-20&linkId=342669c0b9c657e15282c49e695545e2', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: '6x4 ft Portable Toddler Soccer Goal Training Equipment with Soccer Target', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/811UkmbyrQL._AC_SX679_.jpg', // ✅ Product image
      description: "This lightweight, portable soccer goal with an attached target is perfect for toddlers and young players learning to aim and shoot. Easy to set up and fold down, it’s great for backyard practice or trips to the park.", // ✅ Short description
      text: "Introducing young children to soccer with this portable goal and target fosters early development of coordination, aim, and motor skills. The focused practice of aiming at the target teaches precision and goal-setting in a playful way. Its portability encourages outdoor activity and social play, helping toddlers build confidence and a love for sports while improving physical fitness.", // ✅ Full review content
      price: '$65.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DGYMWG3T/ref=cm_sw_r_as_gl_api_gl_i_N6KDTAVEYD1ASCM2QFPH?linkCode=ml1&tag=more4kids0a-20&linkId=ee886a1b686020a14eecee0092450dd6', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'GlowCity Glow in The Dark Soccer Ball', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61IvLgpbZUL._AC_SX679_.jpg', // ✅ Product image
      description: "Light up evening playtime with this GlowCity Glow in The Dark Soccer Ball. Perfect for twilight or indoor play, it charges in sunlight and glows bright, providing hours of fun when the sun goes down.", // ✅ Short description
      text: "The GlowCity Glow in The Dark Soccer Ball adds an exciting twist to classic soccer, encouraging kids to stay active even as daylight fades. This innovative design helps develop eye-hand coordination and timing in low-light conditions, enhancing spatial awareness and focus. Playing after dark also adds an element of adventure and novelty, keeping children engaged and motivated to practice their skills longer.", // ✅ Full review content
      price: '$32.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B07ZDLN3DX/ref=cm_sw_r_as_gl_api_gl_i_YKKANZRF9FG76QEWTFKH?linkCode=ml1&tag=more4kids0a-20&linkId=74f3bf7d9414bc3a6a00499e44a70db9', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'COUOMOXA Soccer Board Game for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81NJ+LJB9zL._AC_SX679_.jpg', // ✅ Product image
      description: "This engaging soccer board game brings the excitement of the sport indoors. Perfect for kids, it combines strategy and chance as players move their pieces to score goals. A fun way to learn game rules and sportsmanship off the field.", // ✅ Short description
      text: "The COUOMOXA Soccer Board Game offers a fantastic blend of fun and learning that encourages strategic thinking and friendly competition. Kids develop decision-making skills as they plan moves to outscore opponents, while also understanding the basics of soccer gameplay. The social aspect promotes communication and sportsmanship, making it a perfect indoor alternative to keep the soccer spirit alive anytime.", // ✅ Full review content
      price: '$39.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0BRHCDH1M/ref=cm_sw_r_as_gl_api_gl_i_dl_E5QC885100X436G50V28?linkCode=ml1&tag=more4kids0a-20&linkId=ba64089a20b752947c3eca7d803b1a44', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'YOREPEK Soccer Backpack', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/814tqO0sktL._AC_SX679_.jpg', // ✅ Product image
      description: "Durable and roomy, the YOREPEK Soccer Backpack is designed to carry all essential gear for players on the go. Featuring multiple compartments and breathable mesh pockets, it keeps equipment organized and accessible.", // ✅ Short description
      text: "The YOREPEK Soccer Backpack is a practical and stylish companion for young athletes, teaching kids organization and responsibility. Having a designated place for their soccer gear encourages preparation and independence. The backpack’s ergonomic design supports comfort during travel to practice or games, while its durable materials ensure it stands up to active lifestyles.", // ✅ Full review content
      price: '$24.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0BGLKFNDX/ref=cm_sw_r_as_gl_api_gl_i_dl_426NEFS62VW5RTHXJZ2E?linkCode=ml1&tag=more4kids0a-20&linkId=e4a0e189d264e63b906aaf03593a6dd0', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Kids Soccer Goals for Backyard Set', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81PtSg+kA7L._AC_SX679_PIcountsize-20,TopRight,0,0_SH20_.jpg', // ✅ Product image
      description: "Bring the soccer field home with these easy-to-assemble kids’ soccer goals. Perfectly sized for backyard play, they’re lightweight yet sturdy, encouraging outdoor activity and team sportsmanship.", // ✅ Short description
      text: "Having dedicated goals at home motivates kids to practice and enjoy soccer regularly, which improves their coordination and cardiovascular health. These backyard goals provide a safe, inviting space for kids to play both solo and with friends, encouraging teamwork, goal-setting, and healthy competition. Regular outdoor play also boosts mood and physical fitness.", // ✅ Full review content
      price: '$49.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DGGP55H6/ref=cm_sw_r_as_gl_api_gl_i_dl_R0FHPV5DBP19K6667E36?linkCode=ml1&tag=more4kids0a-20&linkId=c6530026051863e61365d5147387f9c1', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Soccer Rebounder Net', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81EROMJR24L._AC_SX679_.jpg', // ✅ Product image
      description: "Practice passing and shooting with this portable soccer rebounder net. It returns the ball back to players, allowing for solo drills and improving ball control skills.", // ✅ Short description
      text: "The Soccer Rebounder Net is a brilliant training tool that helps young players develop precise ball handling and control through repetitive practice. Its bounce-back feature encourages independence, allowing kids to practice without needing a partner. This focused training enhances motor skills, timing, and concentration, essential components of soccer proficiency and confidence.", // ✅ Full review content
      price: '$119.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DJ91WSPB/ref=cm_sw_r_as_gl_api_gl_i_967AYATR09TQYJVVFNKK?linkCode=ml1&tag=more4kids0a-20&linkId=57db035a4a2ce56b086d350dfba0edb8', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Franklin Sports Blackhawk Backyard Soccer Goal ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71ADSrI6enL._AC_SX679_.jpg', // ✅ Product image
      description: "A professional-quality backyard soccer goal that’s easy to set up and built to last. It features a durable frame and net, making it great for serious practice or casual family games.", // ✅ Short description
      text: "The Franklin Sports Blackhawk Goal brings the excitement and challenge of real soccer right to the backyard. It encourages skill-building through practice and play, offering a sturdy, reliable target that stands up to energetic use. Having access to such equipment promotes a healthy, active lifestyle and helps kids develop discipline, focus, and a passion for the sport.", // ✅ Full review content
      price: '$24.97', // ✅ Price
      link: ' https://www.amazon.com/dp/B00WL6LC1W/ref=cm_sw_r_as_gl_api_gl_i_4X1F9TMP90C0KH5Z4V7R?linkCode=ml1&tag=more4kids0a-20&linkId=f2c39e08612ce9e2f8d4537dfda40d9b', // ✅ Affiliate link
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

export default MiniSoccerToysYoungAthletes;