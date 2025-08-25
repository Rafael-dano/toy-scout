
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const FallSportsFanGearKids = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'Fall Sports Fan Gear for Mini Football & Soccer Fans', // ✅ Blog post title
    description: 'Get kids in the game with fan gear, mini sports kits, and themed toys that let them celebrate their favorite teams in style.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/fall-sports-fan-toys-2025', // ✅ Blog slug (used in meta)
    datePublished: 'August 25, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'Portable Neck Fan, Hands Free Bladeless, 360° Cooling Personal Fan', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61wNF9vOVwL._AC_SX679_.jpg', // ✅ Product image
      description: 'A sleek, wearable fan designed to keep you cool with bladeless safety, adjustable airflow, and 360° directional cooling.', // ✅ Short description
      text: 'This Portable Neck Fan is a must-have for summer adventures, road trips, theme parks, or even hot afternoons around the house. Its bladeless design makes it safe for kids and long hair, while the hands-free wearable style keeps your hands and pockets free. With multiple speed settings and 360° airflow control, it delivers a steady breeze exactly where you need it—whether that’s your neck, face, or shoulders. It’s surprisingly quiet too, so you can use it while talking, reading, or even napping. The battery lasts for hours on a single charge, and the lightweight build means you’ll forget you’re even wearing it—until you notice you’re the only one not sweating. Perfect for parents chasing after kids, travelers on the go, or anyone needing a personal chill zone without lugging around a bulky fan.', // ✅ Full review content
      price: '$34.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B09PCSR9SX/ref=cm_sw_r_as_gl_api_gl_i_TZAB3XVDVQP35B5B2K3B?linkCode=ml1&tag=more4kids0a-20&linkId=2f3e0887d3f936fed0897feb6033a57d&th=1', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Sport-Brella Super-Brella SPF 50+ Sun and Rain Canopy Umbrella for Camping', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61C1eHxTGoL._AC_SX679_.jpg', // ✅ Product image
      description: 'A large, rugged umbrella with side flaps and SPF 50+ protection—great for beach trips, sideline games, and all-day outdoor adventures.', // ✅ Short description
      text: 'The Sport-Brella Super-Brella is your personal weather shield. Whether it’s blistering sun or unexpected rain, this oversized canopy has you covered—literally. With built-in side flaps and mesh windows, it creates an enclosed, breezy shelter that offers shade, wind protection, and privacy all in one. Ideal for camping, sporting events, beach days, or kids’ soccer games, the SPF 50+ fabric ensures serious sun protection while the sturdy frame holds strong in the wind. It folds down compactly, making it easy to toss in the trunk or strap to a backpack. Families love how quickly it sets up, and the wide coverage means you can sit comfortably with a chair or lay out with a blanket underneath. It’s a game-day essential that makes waiting on the sidelines way more enjoyable.', // ✅ Full review content
      price: '$74.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0047ZADSI/ref=cm_sw_r_as_gl_api_gl_i_J9MFER0K8WR40J52PCCD?linkCode=ml1&tag=more4kids0a-20&linkId=a5bdb953c3fe338202d3e7b9ef1508c7', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'EAGLE PEAK Pop Up Canopy Tent with Wheeled Carry Bag', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61q4al7GovL._AC_SX679_.jpg', // ✅ Product image
      description: 'A heavy-duty 10’ x 10’ pop-up canopy with easy one-person setup, water-resistant fabric, and a rollable carry bag for portable convenience.', // ✅ Short description
      text: "If you’re tired of struggling with pop-up tents that require three adults and a prayer, the EAGLE PEAK Canopy is your upgrade. This tent is a breeze to set up—literally one person can do it in under 60 seconds thanks to its central hub design. The 150D Oxford fabric offers reliable sun and light rain protection, while the reinforced steel frame stands strong through backyard parties, tailgates, or long tournament weekends. It folds down easily into the included wheeled bag, so transporting it from car to field is effortless. It’s the kind of canopy that turns your tailgate or team base into a home base. Whether you're shielding snacks, gear, or grandparents from the heat, this tent gets the job done. Bonus points for the adjustable height settings and built-in vent that keeps air circulating on hot days ", // ✅ Full review content
      price: '$129.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B07NYXYC8X/ref=cm_sw_r_as_gl_api_gl_i_6N4EKFCW7C1F1A8ZH1TR?linkCode=ml1&tag=more4kids0a-20&linkId=9b9a66c73b884685c61378fc16e65a78', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Everlasting Comfort Stadium Seats with Back Support ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/817B6nmUHPL._AC_SX679_.jpg', // ✅ Product image
      description: 'A thickly padded, adjustable reclining seat for bleachers or outdoor benches, with built-in pockets and straps for easy carrying.', // ✅ Short description
      text: "Bleacher seats don’t have to feel like punishment—and the Everlasting Comfort Stadium Seat proves it. With thick memory foam cushioning and six reclining positions, this seat brings comfort to long games, concerts, or outdoor movie nights. It features built-in armrests, back support, and storage pockets for your phone, snacks, or program. The waterproof bottom keeps you dry on damp benches, and the straps let you carry it backpack-style when you’re on the move. Whether you're a sports parent, concertgoer, or tailgate regular, this seat lets you enjoy the experience instead of counting down the minutes until you can stretch. Once you try it, you’ll never go back to bare bleachers again.", // ✅ Full review content
      price: '$49.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DTTX717J/ref=cm_sw_r_as_gl_api_gl_i_G4FVBXQFJBN3S3DMPJQ3?linkCode=ml1&tag=more4kids0a-20&linkId=1ae5e86b88b23d9ef86afc619c288457&th=1', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Stadium Seats for Bleachers with Integral Cutting Memory Foam', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/811LCKhnPRL._AC_SX679_.jpg', // ✅ Product image
      description: 'Ergonomic stadium seats with firm memory foam, anti-slip rubber grips, and wide back support—engineered for long-lasting comfort.', // ✅ Short description
      text: "For those who want a more structured, supportive feel, these Stadium Seats with Integrated Memory Foam are a standout. The high-density cushion provides a firm but comfortable base, perfect for anyone with back issues or simply tired of flimsy bleacher padding. Anti-slip rubber on the base prevents sliding, even on slick metal benches, and the wide seat and tall backrest keep you properly supported through the fourth quarter or the encore. Some versions include cup holders or side pouches—great for keeping your essentials within arm’s reach. It’s a practical, durable seat that feels like a portable recliner. Ideal for sports families who spend weekends at tournaments or for those looking to upgrade their comfort without dragging around bulky folding chairs.", // ✅ Full review content
      price: '$39.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DJVWD5M3/ref=cm_sw_r_as_gl_api_gl_i_AVT05CY30HZ5C2VSBH70?linkCode=ml1&tag=more4kids0a-20&linkId=ae5854e0c2f9b75a00fac456be01d878', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'BLAVOR Solar Charger Power Bank', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81MiYNnpJkL._AC_SY450_.jpg', // ✅ Product image
      description: 'A rugged, portable solar power bank with wireless charging, multiple ports, and built-in flashlight — ideal for outdoor use, emergencies, or long game days.', // ✅ Short description
      text: "The BLAVOR Solar Charger Power Bank is a reliable piece of gear for parents, coaches, or campers who need their devices powered at all times. What makes it stand out is the thoughtful, outdoor-focused design—IPX5 waterproofing, shock resistance, and dust protection make it tough enough to handle real-life conditions. The addition of wireless charging is a great bonus, especially when you're juggling multiple devices on the go. While you’ll want to charge it by wall before heading out, the solar backup is a useful emergency feature. The LED flashlight has three modes and is surprisingly bright, making it a practical companion for evening events or power outages. This is a true just in case item that earns its keep over time.", // ✅ Full review content
      price: '$29.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B07FDXDB3W/ref=cm_sw_r_as_gl_api_gl_i_N4794ZWAM2E2K0RQCG1T?linkCode=ml1&tag=more4kids0a-20&linkId=dda23fdc6bb66bf7e545f46e67f90e8e', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'EastPoint Sports Go! Gater Cornhole – Light-Up and Travel Versions', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71PCo02POUL._AC_SX679_.jpg', // ✅ Product image
      description: 'A glow-in-the-dark cornhole set that’s lightweight, portable, and built for both day and night backyard or tailgate fun.', // ✅ Short description
      text: "The EastPoint Go! Gater Cornhole set brings fresh energy to a classic outdoor game. The built-in LED lights are bright enough to keep gameplay going long after sunset, adding a fun nighttime twist. It’s easy to carry thanks to its lightweight frame, and it stores compactly, which is a huge bonus if you're short on trunk space or storage. The plastic build isn't professional tournament grade, but it’s durable enough for kids and adults to enjoy repeatedly without worrying about breaking it. Whether you're looking to spice up a family gathering, tailgate, or camping trip, this set delivers on fun, portability, and ease of use.", // ✅ Full review content
      price: '$36.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B07D6FBZTV/ref=cm_sw_r_as_gl_api_gl_i_KCRS1MXETJN6T9D8FYVE?linkCode=ml1&tag=more4kids0a-20&linkId=2b7f864feb8275416973c95239d84514', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'ZOMAKE Large Golf Umbrella for Rain Heavy Duty', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61d68GeSEyL._AC_SX679_.jpg', // ✅ Product image
      description: 'Oversized, windproof umbrella with automatic open and ergonomic handle — made to protect you and your gear from harsh weather.', // ✅ Short description
      text: "The ZOMAKE Large Golf Umbrella is the kind of coverage you didn’t realize you needed until you’re stuck in a storm. It’s wide enough to comfortably shelter two people—or one person plus a backpack, stadium seat, or gear bag. The automatic open is smooth and fast, which you’ll appreciate when the rain starts suddenly. But its real strength lies in the wind resistance—the double canopy design vents air instead of flipping, which keeps you dry and saves you the embarrassment of fighting a broken umbrella. This is one of those “buy it once, use it forever” products that ends up living in your car or game-day bag all season long.", // ✅ Full review content
      price: '$44.35', // ✅ Price
      link: ' https://www.amazon.com/dp/B071KFPM9S/ref=cm_sw_r_as_gl_api_gl_i_ZF5EC70ZTSTEC5XCNRQZ?linkCode=ml1&tag=more4kids0a-20&linkId=ab2d503526fdd83f0165d8f4a92d76cb', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Two-Color Poms and Megaphone Sets, School Spirit, Noisemakers', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61zQmcgBxiL._AC_SX679_.jpg', // ✅ Product image
      description: 'A cheer-ready combo set with flashy poms and a handheld megaphone, designed for spirited support at games, parades, or school events.', // ✅ Short description
      text: "Whether you're cheering from the bleachers or leading a group of little fans, this Pom and Megaphone set is a blast. The pom-poms are lightweight but full, and they create a great visual effect with every shake—especially in sunlight or under stadium lights. The megaphone is surprisingly sturdy for a plastic piece, with a wide enough mouth to amplify sound effectively without being too bulky for kids. It’s a budget-friendly way to bring extra energy to youth sports games, pep rallies, or themed birthday parties. If you're building a game-day kit or a school spirit box, this set is a fun, easy win", // ✅ Full review content
      price: '$27.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B08BW5JC2Y/ref=cm_sw_r_as_gl_api_gl_i_BWQJN46H6JEBP39XH4JV?linkCode=ml1&tag=more4kids0a-20&linkId=663989860b76b871bae5e3775a4ef6c5&th=1&psc=1', // ✅ Affiliate link
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

export default FallSportsFanGearKids;