
import React from 'react';
import { Helmet } from "react-helmet"


const SummerFunFinds = () => {
  const products = [
    {
      title: 'Ayeboovi Toss and Catch Ball Game',
      image: 'https://m.media-amazon.com/images/I/81CVFEoojEL._AC_SX679_.jpg',
      description: 'Outdoor Toys for Kids Yard Games Beach Toys Outside Games for 3 4 5 6 7 8 9 10 Year Old Boys Girls ',
      text: "Classic fun never goes out of style, and the Ayeboovi toss and catch game proves it. This simple-yet-exciting game uses Velcro paddles and fuzzy balls to keep kids engaged while improving hand-eye coordination and motor skills. Lightweight and portable, it’s great for picnics, beach trips, or just burning off energy in the yard. The set comes with multiple paddles and balls so more kids can play at once, and the adjustable straps mean it fits a wide range of hand sizes. A great alternative to screen time.",
      price: '$39.99',
      link: 'https://www.amazon.com/dp/B07FNQFLJ5/ref=cm_sw_r_as_gl_api_gl_i_GKC9CQG37GNZ6RTK72F6?linkCode=ml1&tag=more4kids0a-20',
    },
    {
      title: 'BANZAI: Bump N Bounce Set of One',
      image: 'https://m.media-amazon.com/images/I/61AAyg+d0eL._AC_SX679_.jpg',
      description: '2 inflatable body bumpers included for belly to belly bumping action. Fun and safe cushion inflatable surface.',
      text: "Belly bumping just got better! This BANZAI Bump N Bounce set includes two inflatable body bumpers that let kids (and playful adults) bump, bounce, and laugh without worry. The durable vinyl construction offers a safe cushion for energetic play, while the bright colors and easy inflation make setup a cinch. Great for backyard playdates, birthday parties, or team games, these bumpers turn any open space into a mini arena of fun. It’s physical, hilarious, and totally unforgettable outdoor action.",
      price: '$22.99',
      link: 'https://www.amazon.com/dp/B01B1X3USS/ref=cm_sw_r_as_gl_api_gl_i_KKRECJ1ZC9ZSKCSRGZQA?linkCode=ml1&tag=more4kids0a-20',
    },
    {
      title: '2025 Upgraded Bubble Machine with Remote Control',
      image: 'https://m.media-amazon.com/images/I/71HLrQVTSLL._AC_SX679_.jpg',
      description: 'Automatic Rotation & RGB Lights, 1800mAh Rechargeable Battery, Type-C Charge, Bubble Maker for Kids, Weddings, Birthday Parties, Outdoor Activities.',
      text: "This bubble machine is an outdoor game-changer for kids' events and parties. The 2025 upgrade features automatic rotation, bright RGB lights, and an impressive 1800mAh rechargeable battery that lasts longer than most. With the included remote control, parents can easily turn it on or adjust settings from a distance, making it incredibly user-friendly. It produces a high volume of bubbles that fill the air, turning any backyard into a magical bubble wonderland. Perfect for weddings, birthdays, or simply a sunny afternoon, the high-capacity design ensures non-stop fun. Its portability, quick Type-C charging, and visual effects make it a standout option in the world of bubble machines.",
      price: '$34.99',
      link: 'https://www.amazon.com/dp/B0DPQBS27W/ref=cm_sw_r_as_gl_api_gl_i_RCH125JG58PTE64H0H5X?linkCode=ml1&tag=more4kids0a-20',
    },
    {
      name: "IROO Mini Karaoke Machine for Kids",
      description: "Portable Bluetooth Speaker with 2 Wireless Mics Lights, Karafun Premium Song Family Home Party.",
      image: "https://m.media-amazon.com/images/I/71hFgulklsL._AC_SX679_.jpg",
      text: "If you're looking for a fun and engaging way to keep your kids entertained, the IROO Mini Karaoke Machine is a fantastic pick. This compact karaoke set is more than just a toy—it's a portable Bluetooth speaker with two wireless microphones, complete with colorful lights that create an exciting atmosphere for any living room concert. The sound quality is surprisingly clear for the size, and the dual mics mean siblings or friends can duet together with ease. It’s perfect for family parties, road trips, or even a solo singing session. Whether your child is shy or already a spotlight-stealer, this karaoke machine brings music to life and builds confidence through fun, expressive play.",
      price: "$19.99",
      link: "https://www.amazon.com/dp/B0CGRRGY6S/ref=cm_sw_r_as_gl_api_gl_i_dl_A0KJTW8DX62X5NXNGAFB?linkCode=ml1&tag=more4kids0a-20&th=1"
    },
    {
      name: "Nex Playground",
      description: "The Active Play System for Kids & Families Where Indoor Physical Activity Meets Interactive Family Fun and is Great for Gaming Nights, Parties and Playdates.",
      image: "https://m.media-amazon.com/images/I/71Re8OntVjL._SX522_.jpg",
      text: "The Nex Playground is a game-changer for indoor family entertainment. Designed to get kids moving while having a blast, this interactive play system transforms your living room into a mini activity center. Unlike traditional video games, Nex encourages physical movement, combining screen time with active play. It's excellent for family game nights, parties, or even just burning energy on a rainy day. With a sleek design and intuitive interface, it’s accessible for all ages. Parents will appreciate the active engagement, and kids will be hooked by the immersive games and challenges. It’s a brilliant blend of fitness, fun, and family bonding.",
      price: "$249.99",
      link: "https://www.amazon.com/dp/B0D2JGYX3F/ref=cm_sw_r_as_gl_api_gl_i_9S5EFRBTM1NY9DVN1YPP?linkCode=ml1&tag=more4kids0a-20",
    },
    {
      name: "MindSprout Light-Up Space Twister",
      description: "360° Sit Twist and Spin, Toddler Toys Age 2, 3, 4, 5, Birthday for Boy Girl, 18 Months +, LED Lights, Kids Toy Indoor or Outdoor for 2 Year Old. ",
      image: "https://m.media-amazon.com/images/I/71O2msMDENL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      text: "This futuristic twist on a classic sit-and-spin toy adds an extra level of excitement with 360° motion and built-in LED lights. Designed for toddlers and young kids, the MindSprout Light-Up Space Twister is a thrilling ride that helps develop balance, coordination, and motor skills—all while lighting up the room in a cosmic swirl of color. The sturdy base and kid-safe design make it suitable for indoor and outdoor play. Whether it’s a birthday gift or just a way to keep your little one moving, this toy delivers hours of spinning fun and sensory stimulation in a safe and stylish package.",
      price: "$44.99",
      link: "https://www.amazon.com/dp/B0B1H6T1YH/ref=cm_sw_r_as_gl_api_gl_i_AFEBC19YPRVHYDWPPCZZ?linkCode=ml1&tag=more4kids0a-20",
    },
    {
      title: 'JUMPZYLLA Trampoline',
      image: 'https://m.media-amazon.com/images/I/81ep+akmG5L._AC_SX300_SY300_.jpg',
      description: '1k+ buyers last month it is A 8FT, 10FT ,12FT, 14FT, 15FT, 16FT with Enclosure and Ladder, ASTM Approved Recreational Trampoline for Kids and Adults, Anti-Rust Coated Frame.',
      text:"If you're serious about outdoor fun and fitness, the JUMPZYLLA Trampoline is one of the best investments you can make. Available in multiple sizes from 8 to 16 feet, this trampoline is built for durability and safety with its anti-rust frame, high-quality mat, and fully enclosed safety net. It also comes with a ladder, making it easy for kids to get in and out. ASTM certification means you can trust it’s designed with your child’s safety in mind. Whether you have energetic toddlers or teens who love to bounce, the JUMPZYLLA offers hours of exercise and joy for the whole family.",
      price: '$489.95',
      link: 'https://www.amazon.com/dp/B09Q19MDH9/ref=cm_sw_r_as_gl_api_gl_i_6HYQG687P55N8TBVE8RG?linkCode=ml1&tag=more4kids0a-20',
    },
    {
      title: 'Toss Across Kids Outdoor Game',
      image: 'https://m.media-amazon.com/images/I/710hfr84YbL._AC_SX679_.jpg',
      description: 'Bean Bag Throw for Camping & Family Nights, Get 3-in-a-Row for 2 to 4 Players.',
      text:"Toss Across is a fresh, fun twist on the classic tic-tac-toe game, replacing Xs and Os with bean bag throws and flipping tiles. Perfect for two to four players, this game promotes both strategic thinking and active movement, making it ideal for family game night or backyard fun. The lightweight design makes it easy to transport, so it’s a great pick for camping trips, BBQs, or playdates. Kids love the satisfaction of flipping the targets, and adults get just as competitive. It’s a simple, energetic way to get kids off screens and into a classic outdoor game that never gets old.",
      price: '$23.74',
      link: 'https://www.amazon.com/dp/B075YYPTSM/ref=cm_sw_r_as_gl_api_gl_i_Q0ZW3APXZBAS1GZ0HF5E?linkCode=ml1&tag=more4kids0a-20',
    },
    {
      title: 'TOSY Flying Disc',
      image: 'https://m.media-amazon.com/images/I/81vsAxy1YLL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      description: '16 Million Colors RGB, Extremely Bright, Smart Modes, Camping Essentials for Teens/Kids/Adults/Men/Boys/Girls, Auto Light Up, Patented, Rechargeable, Waterproof, 175g.',
      text:"This is not your average frisbee—it's a high-tech, rechargeable flying disc with vibrant RGB lighting and smart modes that bring serious wow factor to nighttime play. The TOSY Flying Disc lights up in 16 million color combinations, making it mesmerizing to throw and catch after dark. Waterproof and perfectly weighted at 175g, it flies smoothly and feels great in the hand. Ideal for the beach, park, or backyard, it's built to impress kids, teens, and adults alike. Whether you’re a casual thrower or a disc sport enthusiast, this gadgety toy brings fun, fitness, and flair to outdoor adventures.",
      price: '$47.99',
      link: 'https://www.amazon.com/dp/B0C3ZTKRGX/ref=cm_sw_r_as_gl_api_gl_i_D0CSB6JY6MY5J27RWXP2?linkCode=ml1&tag=more4kids0a-20&th=1',
    },
    {
      title: 'Backyard Discovery Sweetwater Cedar Wooden Kids Playhouse Cottage',
      image: 'https://m.media-amazon.com/images/I/81nVPiEmXnL._AC_SX679_.jpg',
      description: 'With Play Kitchen, Snack Bar, Half Door, Toy Phone, Windows, Flowerpot Holders, and Working Doorbell for Outdoor Imaginative Play.',
      text:"Turn your backyard into a world of imagination with this beautifully crafted wooden playhouse. The Sweetwater Cedar Cottage is more than just a play structure—it's a child-sized home complete with a working doorbell, toy phone, play kitchen, snack bar, and even flowerpot holders. Built from durable cedar wood, it’s designed to stand up to outdoor elements while looking charming and cozy. Perfect for creative, pretend play, it helps kids develop social and storytelling skills as they cook call friends or play house. This cottage is the ultimate backyard upgrade for kids who love role-playing and parents who want long-lasting quality and style.",
      price: '$279',
      link: 'https://www.amazon.com/dp/B07ZB14C1R/ref=cm_sw_r_as_gl_api_gl_i_ADFCS8VJ9FKEC0EAZYD8?linkCode=ml1&tag=more4kids0a-20',
    },
];
return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>10 Summer FUN Toys For Kids | My Toy Scout</title>
        <meta
          name="description"
          content="Having fun in the sun? Here are 10 more Summer fun Toys your Kids Need. Summer Activites Toys."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/summer-fun" />
        <meta property="og:title" content="10 Summer FUN Toys For Kids | My Toy Scout" />
        <meta property="og:description" content="Having fun in the sun? Here are 10 more Summer fun Toys your Kids Need. Summer Activites Toys." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/summer-fun" />
        <meta name="twitter:title" content="10 Summer FUN Toys For Kids | My Toy Scout" />
        <meta name="twitter:description" content="Having fun in the sun? Here are 10 more Summer fun Toys your Kids Need. Summer Activites Toys." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
           <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "10 Summer FUN Toys For Kids",
      "description": "Having fun in the sun? Here are 10 more Summer fun Toys your Kids Need. Summer Activites Toys.",
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
      },
      "datePublished": "2025-06-25"
    }
          })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">10 Summer FUN Toys For Kids</h1>
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

export default SummerFunFinds;