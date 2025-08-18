
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const YouthFootballGearToys = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'Youth Football Essentials: Gear & Toys for Practice & Play', // ✅ Blog post title
    description: 'Kick off the football season with gear and toys that help young players train, practice safely, and fuel their passion for the game.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/youth-football-toys-essentials', // ✅ Blog slug (used in meta)
    datePublished: 'August 18, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: '8 x 8ft Football Nets for Throwing,Football Target', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81Ws7-RUrML._AC_SX679_.jpg', // ✅ Product image
      description: 'Large, durable target net for quarterback drills, throwing accuracy, and solo football practice.', // ✅ Short description
      text: "This 8x8 ft football net is a total game-changer for aspiring quarterbacks. Whether you're training in the backyard or prepping for youth league tryouts, the size gives you a wide surface to practice long throws and short passes with confidence. The target zones help improve aim, and the setup is surprisingly easy and sturdy—even during windy days. Coaches, parents, and kids love it for solo drills or fun weekend training sessions.", // ✅ Full review content
      price: '$79.98', // ✅ Price
      link: ' https://www.amazon.com/dp/B0BX68DBKT/ref=cm_sw_r_as_gl_api_gl_i_0JW96916RAX2BXS5N3ND?linkCode=ml1&tag=more4kids0a-20&linkId=d42891cfad2f48de138ed31ca13884da&th=1', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Franklin Sports Youth + Adult Footballs - Extra Grip 1000 Official Size,', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81zLTxWAueL._AC_SY450_.jpg', // ✅ Product image
      description: 'A high-quality football designed for all ages with extra grip for better control and performance.', // ✅ Short description
      text: "This Franklin football delivers a pro feel at a family-friendly price. The extra grip texture is perfect for learning proper technique, especially for younger players or casual backyard games. The weight and size match official standards, making it great for both training and pick-up games. Whether it's your kid's first pass or a friendly family scrimmage, this ball feels legit in your hands and holds up through rough play.", // ✅ Full review content
      price: '$14.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B001CEMIXK/ref=cm_sw_r_as_gl_api_gl_i_5E9YXP2F9EY5DE8JJ7E0?linkCode=ml1&tag=more4kids0a-20&linkId=42997be0c2a1ae956057fff3b89695a2', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Franklin Sports Youth NFL Football Receiver Gloves ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/813UjojquTL._AC_SX679_.jpg', // ✅ Product image
      description: 'Performance football gloves with tacky palms and a snug fit designed specifically for youth players.', // ✅ Short description
      text: "These gloves are a confidence booster for any young wide receiver. The sticky palms give excellent grip, even in cooler weather, and the breathable material keeps hands cool during high-energy plays. With NFL branding and bold designs, kids feel like pros—while improving their catch rate at practice or in games. A great upgrade for flag football players or weekend warriors looking to sharpen their skills.", // ✅ Full review content
      price: '$24.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B074PSRT9W/ref=cm_sw_r_as_gl_api_gl_i_S7S467DVPMKKVPWHW9SZ?linkCode=ml1&tag=more4kids0a-20&linkId=02a398995956a3389840516cdd39e15e', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Agility Ladder Speed Training Equipment Set-20ft Agility Ladder,12 Soccer Cones,4 Hurdles, Jump Rope, Running Parachute', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71DEMaYMjCL._AC_SX679_.jpg', // ✅ Product image
      description: 'Complete training set for young athletes, including a 20ft ladder, cones, hurdles, jump rope, and resistance parachute.', // ✅ Short description
      text: "If you're building a future MVP, this is your starter kit. The agility ladder is long enough for real drills, the hurdles and cones build quick feet and balance, and the resistance parachute adds just the right challenge for speed workouts. Everything fits neatly in the carry bag, making it easy to bring to the park or team practice. Whether your kid is into football, soccer, or general conditioning, this set brings variety, fun, and real athletic development.", // ✅ Full review content
      price: '$59.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B08SKBH8DM/ref=cm_sw_r_as_gl_api_gl_i_dl_Z9CQCR93KF1Z7VXKQMGW?linkCode=ml1&tag=more4kids0a-20&linkId=07afa5cc5a684c8361646cc01d3dc619 ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'GlowCity Glow in The Dark Footbal', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/41a0z+SvezL._AC_.jpg', // ✅ Product image
      description: 'A light-up LED football perfect for nighttime games, backyard fun, and glow-in-the-dark sports parties.', // ✅ Short description
      text: 'The GlowCity football turns regular tosses into nighttime showdowns. It lights up brilliantly on impact, making it easy to track even during low light. Kids love the glowing effect, and parents appreciate the safety of evening play. It’s a fun way to keep the game going after sunset—especially during fall evenings or sleepovers. Batteries last longer than expected, and it feels just like a real football.', // ✅ Full review content
      price: '$34.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B00GMP3Z6S/ref=cm_sw_r_as_gl_api_gl_i_J37GGDMM4E5MJ4DKT8YW?linkCode=ml1&tag=more4kids0a-20&linkId=e815e7350b54cbc4b7b7afa1de352adf', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'ZELUS 7x4 ft Football Kicking Net, Portable Football Throwing Net with Target Zone Attachment', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/910yBAXCf8L.__AC_SX300_SY300_QL70_ML2_.jpg', // ✅ Product image
      description: 'Portable football practice net with a focus target, ideal for quarterbacks and kickers alike.', // ✅ Short description
      text: "The ZELUS net is perfect for serious training or backyard drills. Whether your kid wants to improve passing accuracy or kicking strength, this net holds up strong and sets up easily. The attached target helps focus their aim, and its portable design means you can bring it to the park or school field. It’s well-made, doesn’t tip over easily, and gives young athletes real-time feedback on performance.", // ✅ Full review content
      price: '$84.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0DB1M87VM/ref=cm_sw_r_as_gl_api_gl_i_6XDJ8RQA6RYR57RA2FQ3?linkCode=ml1&tag=more4kids0a-20&linkId=5013ecc299f55d198a0d31d3f062750f ', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'SOAR NFL Shockbox LED Wireless Bluetooth Speaker', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71eW2k4Gk+L._AC_SX522_.jpg', // ✅ Product image
      description: 'Compact LED Bluetooth speaker with official NFL team logos, ideal for football fans of all ages.', // ✅ Short description
      text: "This SOAR speaker is a touchdown for football fans who want to bring the vibes wherever they go. The sound is solid for its size, and the glowing LED lights pulse with your music—adding extra flair to game day setups or backyard training. With official NFL branding, it makes a great gift, stocking stuffer, or gear upgrade for kids who love to rep their team in style.", // ✅ Full review content
      price: '$28.16', // ✅ Price
      link: ' https://www.amazon.com/dp/B07SWNG3NT/ref=cm_sw_r_as_gl_api_gl_i_K9HRH9W50Y9540M0C1TH?linkCode=ml1&tag=more4kids0a-20&linkId=7fce6dcce2b704e6127e15f49f1246df', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'P.BLAKE Football Cross Necklace ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61yRJ6WE0FL._AC_SY535_.jpg', // ✅ Product image
      description: 'Stylish stainless steel necklace featuring a football-shaped pendant with a cross design—durable and meaningful.', // ✅ Short description
      text: "This necklace is more than just sportswear—it’s a personal statement piece. It blends faith and football in a stylish, lightweight design that's perfect for daily wear or gifting. The chain feels sturdy without being heavy, and the engraved cross adds a layer of meaning many athletes appreciate. Whether it’s for motivation, inspiration, or fashion, this necklace scores every time.", // ✅ Full review content
      price: '$11.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DLS7GFHF/ref=cm_sw_r_as_gl_api_gl_i_22WMB2X9Z1DBEAHGA7KC?linkCode=ml1&tag=more4kids0a-20&linkId=ce7b1c095a0c8c79046d605ef187e861', // ✅ Affiliate link
      rating: 3, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Disc Soccer Cones for Training Kids with Mesh Bag & Strap ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71z48fa7OdL._AC_SX679_.jpg', // ✅ Product image
      description: 'Bright, durable training cones for kids’ sports drills and games—includes carrying bag and strap.', // ✅ Short description
      text: "These cones are a must-have for any youth coach, PE teacher, or parent setting up backyard games. The bright colors grab kids' attention, while the lightweight design makes setup and cleanup a breeze. The included mesh bag and strap are super handy—no more loose cones rolling around the garage. They're flexible, sturdy, and can be used for soccer, football, tag, and even obstacle courses.", // ✅ Full review content
      price: '$8.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0C2LZYXXT/ref=cm_sw_r_as_gl_api_gl_i_11C0W50HT8GJZPEPSBRG?linkCode=ml1&tag=more4kids0a-20&linkId=f3037ab3e4808a8431d0119b4ecdab38', // ✅ Affiliate link
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

export default YouthFootballGearToys;