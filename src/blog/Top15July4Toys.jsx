
import React from 'react';
import { Helmet } from "react-helmet"

// link july forth image 

const Top15July4Toys = () => {
  const products = [
    {
        title: 'Alpine Muffy Baby Ear Protection for Babies and Toddlers',
        image: 'https://m.media-amazon.com/images/I/71KH7xz2vdL._SX679_.jpg',
        description: 'For Babies and Toddlers up to 36 Months - CE & ANSI Certified - Noise Reduction Earmuffs - Comfortable Baby Headphones Against Hearing Damage & Improves Sleep.',
        text: "These earmuffs are a game-changer for parents! Whether you're at a concert, fireworks show, or just want to protect your little one's sensitive ears, the Alpine Muffy delivers. Super soft, adjustable, and stylish, they help babies sleep through noise while keeping their hearing safe. A must-have for toddlers up to 3 years old!",
        price: '$29.99',
        link: 'https://www.amazon.com/dp/B07KCKWGSG/ref=cm_sw_r_as_gl_api_gl_i_Z7JP4HVGR63031H3H1C7?linkCode=ml1&tag=more4kids0a-20',
      },
  {
    title: 'ArtCreativity Light Up Magic Ball Toy Wand for Kids',
    image: 'https://m.media-amazon.com/images/I/61a3oEtO0sL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    description: 'Spinning Lights & Colors - Fun Gift, Easter Basket Stuffers for Toddler, Party Entertainment, Autism Sensory Rooms, Classroom Prizes.',
    text: "Pure sensory fun! The spinning lights and colors are mesmerizing for little ones and a great tool for playtime or sensory rooms. It’s lightweight, easy to use, and makes a perfect party favor or classroom prize. Just a tap and it lights up the fun!",
    price: '$19.98',
    link: 'https://www.amazon.com/dp/B07RG7DDW6/ref=cm_sw_r_as_gl_api_gl_i_dl_EKGEA08NFZEHW32D3CK2?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Flying Orb Ball',
    image: 'https://m.media-amazon.com/images/I/81DI8oy7JIL._AC_SY300_SX300_.jpg',
    description: ' Dazzling Lights, Magic Hover Spinner, Cool Boomerang Drone, Floating Cosmic Globe, Kids Outdoor Toys.',
    text: "This futuristic spinner keeps kids entertained for hours! With cool boomerang action and glowing lights, it’s perfect for indoor or outdoor play. Easy to launch and safe to catch, it encourages movement and coordination while looking like magic in motion.",
    price: '$20.99',
    link: 'https://www.amazon.com/dp/B08RDHNN9B/ref=cm_sw_r_as_gl_api_gl_i_DJ543Q08Q0SAP1QECP2C?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Fun Forts Glow Fort Building Kit for Kid',
    image: 'https://m.media-amazon.com/images/I/81wmVzG5JwL._AC_SX679_.jpg',
    description: '81 Pack Glow in The Dark STEM Building Toys Indoor Outdoor Play Tent for Kids Construction Toys with 53 Rods and 28 Spheres.',
    text: "An imaginative dream come true! Kids can build their own glowing forts, castles, or rocket ships. The glow-in-the-dark rods add a special twist that makes bedtime or sleepovers extra exciting. Great for STEM learning too!",
    price: '$33.95',
    link: 'https://www.amazon.com/dp/B08D1SFXRH/ref=cm_sw_r_as_gl_api_gl_i_WYM7NDNVRJ9PZJ5QARV4?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'SOPPYCID 20Pcs Reusable Water Balloons,',
    image: 'https://m.media-amazon.com/images/I/71DKMJH5QJL._AC_SX679_.jpg',
    description: 'Pool Beach Water Toys for Boys and Girls, Outdoor Summer Toys for Kids Ages 3-12, Magnetic Water Ball for Outdoor Activities.',
    text: "These reusable water balloons are a summer sensation! No more messy balloon bits everywhere — just magnetic snap-and-play fun. Super easy for kids to use and a blast at the pool or backyard parties. Eco-friendly and endlessly fun!",
    price: '$59.99',
    link: 'https://www.amazon.com/dp/B0CP7VR975/ref=cm_sw_r_as_gl_api_gl_i_D527583A4Y7RHAS9NNXA?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'BANZAI: Bump N Bounce Set of One',
    image: 'https://m.media-amazon.com/images/I/61AAyg+d0eL._AC_SX679_.jpg',
    description: '2 inflatable body bumpers included for belly to belly bumping action. Fun and safe cushion inflatable surface.',
    text: "Endless giggles guaranteed! Slip into these inflatable body bumpers and bump, bounce, and roll around safely. It’s physical fun without the bruises. Great for parties or active outdoor play, especially for siblings or best friends.",
    price: '$22.99',
    link: 'https://www.amazon.com/dp/B01B1X3USS/ref=cm_sw_r_as_gl_api_gl_i_9E2SMS3804X1DQBGYQX4?linkCode=ml1&tag=more4kids0a-20&th=1',
  },
  {
    title: 'BOUNTECH Inflatable Water Slide',
    image: 'https://m.media-amazon.com/images/I/71pbJjG7eoL._AC_SX679_.jpg',
    description: 'Giant Waterslide Park for Kids Outdoor Fun with Water Soccer Splash Pool, GFCI 750w Blower, Blow up Water Slides Inflatables for Kids and Adults Backyard Party Gifts.',
    text: "The ultimate backyard adventure! This giant inflatable slide turns any yard into a mini water park. Durable, colorful, and packed with fun features like a splash pool and soccer goal. Perfect for birthdays or beating the heat all summer.",
    price: '$349.99',
    link: 'https://www.amazon.com/dp/B0C6KRR7ZJ/ref=cm_sw_r_as_gl_api_gl_i_R324SMHJS6G0FXTB03DN?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: '2025 Upgraded Bubble Machine with Remote Control',
    image: 'https://m.media-amazon.com/images/I/71HLrQVTSLL._AC_SX679_.jpg',
    description: 'Automatic Rotation & RGB Lights, 1800mAh Rechargeable Battery, Type-C Charge, Bubble Maker for Kids, Weddings, Birthday Parties, Outdoor Activities.',
    text: "This bubble machine is a party essential! With a remote control, LED lights, and endless bubbles, it's perfect for birthdays, weddings, or everyday backyard fun. Rechargeable and mess-free — it's every parent’s dream.",
    price: '$34.99',
    link: 'https://www.amazon.com/dp/B0DPQBS27W/ref=cm_sw_r_as_gl_api_gl_i_WNXHRYEA71Y1D3K5K01W?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Ayeboovi Toss and Catch Ball Game',
    image: 'https://m.media-amazon.com/images/I/81CVFEoojEL._AC_SX679_.jpg',
    description: 'Outdoor Toys for Kids Yard Games Beach Toys Outside Games for 3 4 5 6 7 8 9 10 Year Old Boys Girls ',
    text: "A timeless classic with modern quality! This toss-and-catch set boosts hand-eye coordination while encouraging active play. Great for the beach, yard, or park. Kids of all ages (and even adults) can join in the fun!",
    price: '$39.99',
    link: 'https://www.amazon.com/dp/B07FNQFLJ5/ref=cm_sw_r_as_gl_api_gl_i_DESZWQQ280DT0QE2XXAY?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'JOYIN 30 Pcs Diving Pool Toys',
    image: 'https://m.media-amazon.com/images/I/91HEcy+tjsL._AC_SX679_.jpg',
    description: 'Toys for Kids Ages 3-12 Jumbo Set with Storage Bag Pool Games Summer Swim Water FishToys.',
    text: "30 pieces of underwater adventure! These diving toys keep kids swimming, diving, and having a blast all summer long. Durable and brightly colored, they’re easy to spot and come with a handy storage bag. Pool day approved!",
    price: '$29.99',
    link: 'https://www.amazon.com/dp/B07NXB77RH/ref=cm_sw_r_as_gl_api_gl_i_dl_SV2VEQZXBP0D3F5HHV54?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'VISTOP Non-Slip Splash Pad for Kids',
    image: 'https://m.media-amazon.com/images/I/812Xgr6XCkL._AC_SY879_.jpg',
    description: 'Thicken Sprinkler Pool Summer Outdoor Water Toys - Fun Backyard Fountain Play Mat for Baby Girls Boys Children.',
    text: "Beat the heat with this safe, non-slip splash pad! Big enough for several kids, it’s a backyard favorite. The water jets are fun and gentle, and the mat stays in place. Great for toddlers and young kids looking to cool off and stay active.",
    price: '$39.95',
    link: 'https://www.amazon.com/dp/B0899WTH85/ref=cm_sw_r_as_gl_api_gl_i_878BRJ36T2AVY63FQBGQ?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'VATOS 3-Tier Sand Water Table for Toddlers',
    image: 'https://m.media-amazon.com/images/I/71e4q+EbmhL._AC_SY300_SX300_.jpg',
    description: '36-Piece Kids Water Table Splash Pond Toys Set for Outside Outdoor Backyard, Toddlers Activity Sensory Water Play Table Summer Toys for Boy.',
    text: "Packed with 36 fun accessories, this water table is a toddler’s dream! Perfect for sensory development, outdoor play, and group fun. The multi-tier design keeps water flowing and imaginations growing. Great for messy play without the mess indoors!",
    price: '$45.99',
    link: 'https://www.amazon.com/dp/B0DP8KQRT3/ref=cm_sw_r_as_gl_api_gl_i_E613PKHNZK0PF5CCVBND?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'OFFICIALLY LICENSED BY FORD BRONCO RAPTOR: For Kids',
    image: 'https://m.media-amazon.com/images/I/71i5lY0O+LL._AC_SX679_.jpg',
    description: 'Licensed Ford Bronco Raptor 24V 2 Seater Kids Ride on Toys, Battery Powered Electric Ride on Car, Remote Control Electric Car w/Led Lights, Music, High Low Speed .',
    text: "Ride in style with this officially licensed Ford Bronco Raptor! It fits two kids and features working LED lights, music, and remote control for safety. It’s a premium ride-on car that looks and feels like the real thing — perfect for mini explorers.",
    price: '$379.98',
    link: 'https://www.amazon.com/dp/B0DB5C3QTS/ref=cm_sw_r_as_gl_api_gl_i_NNFZCK5SMXN7169PC7BM?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'TOSY Flying Disc',
    image: 'https://m.media-amazon.com/images/I/81vsAxy1YLL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    description: '16 Million Colors RGB, Extremely Bright, Smart Modes, Camping Essentials for Teens/Kids/Adults/Men/Boys/Girls, Auto Light Up, Patented, Rechargeable, Waterproof, 175g.',
    text: "This is not your average frisbee! The TOSY flying disc lights up with 16 million color options and smart modes, making it perfect for evening play. Rechargeable and waterproof, it’s great for teens, adults, and anyone who loves playing catch after sunset.",
    price: '$47.99',
    link: 'https://www.amazon.com/dp/B0C3ZTKRGX/ref=cm_sw_r_as_gl_api_gl_i_SSM8EJJSM80YMYKKQZX1?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Stomp Rocket Jr. Glow',
    image: 'https://m.media-amazon.com/images/I/71ev0RHeBgL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    description: 'On Sale The Stomp Rocket Ultra LED Rocket Launcher will have your Little One Amazed.',
    text: "Launch into fun with this glow-in-the-dark stomp rocket! Kids get active as they jump and watch their rocket soar. It’s STEM play with a big wow factor, encouraging outdoor excitement and curiosity about flight.",
    price: '$34.99',
    link: 'https://www.amazon.com/dp/B00FFJZ010/ref=cm_sw_r_as_gl_api_gl_i_BK4ERSDAS01VZ16AMM78?linkCode=ml1&tag=more4kids0a-20&th=1',
  },
];
return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>Top 15 July 4TH Toys for Kids | My Toy Scout</title>
        <meta
          name="description"
          content="Having fun in the sun? Check out these Summer Toys that are Must haves. Summer Activites Toys."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/july-4th" />
        <meta property="og:title" content="Top 15 July 4TH Toys for Kids | My Toy Scout" />
        <meta property="og:description" content="TOP JULY 4TH toys and gear for Kids." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/july-4th" />
        <meta name="twitter:title" content="Top 15 July 4TH Toys for Kids | My Toy Scout" />
        <meta name="twitter:description" content="TOP JULY 4TH toys and gear for Kids." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
           <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Top 15 July 4TH Toys for Kids",
      "description": "JULY 4TH Top toys and gear for Kids.",
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
          "url": "https://mytoyscout.netlify.app/blog/july-4th"
      },
      "datePublished": "2025-06-16"
    }
          })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Top 15 July 4TH Toys for Kids</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2"><strong><bold>Description:   </bold></strong>{product.description}</p>
            <p className="text-green-500 font-bold mb-2"><strong><bold>Review:   </bold></strong>{product.text}</p>
            <p className="text-green-600 font-bold mb-4">{product.price}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top15July4Toys;