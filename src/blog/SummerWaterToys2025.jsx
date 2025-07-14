
import React from 'react';
import { Helmet } from "react-helmet"

// change links for page
// find new products that fit niche then change them out

const SummerWater = () => {
  const products = [
    {
      title: 'VATOS 3-Tier Sand Water Table for Toddlers',
      image: 'https://m.media-amazon.com/images/I/71e4q+EbmhL._AC_SY300_SX300_.jpg',
      description: '36-Piece Kids Water Table Splash Pond Toys Set for Outside Outdoor Backyard, Toddlers Activity Sensory Water Play Table Summer Toys for Boy.',
      text: "Packed with 36 fun accessories, this water table is a toddler’s dream! Perfect for sensory development, outdoor play, and group fun. The multi-tier design keeps water flowing and imaginations growing. Great for messy play without the mess indoors!",
      price: '$45.99',
      link: 'https://www.amazon.com/dp/B0DP8KQRT3/ref=cm_sw_r_as_gl_api_gl_i_RMDR92KRDFGPP365YZHK?linkCode=ml1&tag=more4kids0a-20&th=1',
    },
    {
      title: 'BOUNTECH Inflatable Water Slide',
      image: 'https://m.media-amazon.com/images/I/71pbJjG7eoL._AC_SX679_.jpg',
      description: 'Giant Waterslide Park for Kids Outdoor Fun with Water Soccer Splash Pool, GFCI 750w Blower, Blow up Water Slides Inflatables for Kids and Adults Backyard Party Gifts.',
      text: "The ultimate backyard adventure! This giant inflatable slide turns any yard into a mini water park. Durable, colorful, and packed with fun features like a splash pool and soccer goal. Perfect for birthdays or beating the heat all summer.",
      price: '$349.99',
      link: 'https://www.amazon.com/dp/B0C6KRR7ZJ/ref=cm_sw_r_as_gl_api_gl_i_2Y9WPSM68BPG7TYDS8JF?linkCode=ml1&tag=more4kids0a-20',
    },
      {
        title: '2025 Upgraded Bubble Machine with Remote Control',
        image: 'https://m.media-amazon.com/images/I/71HLrQVTSLL._AC_SX679_.jpg',
        description: 'Automatic Rotation & RGB Lights, 1800mAh Rechargeable Battery, Type-C Charge, Bubble Maker for Kids, Weddings, Birthday Parties, Outdoor Activities.',
        text: "This bubble machine is an outdoor game-changer for kids' events and parties. The 2025 upgrade features automatic rotation, bright RGB lights, and an impressive 1800mAh rechargeable battery that lasts longer than most. With the included remote control, parents can easily turn it on or adjust settings from a distance, making it incredibly user-friendly. It produces a high volume of bubbles that fill the air, turning any backyard into a magical bubble wonderland. Perfect for weddings, birthdays, or simply a sunny afternoon, the high-capacity design ensures non-stop fun. Its portability, quick Type-C charging, and visual effects make it a standout option in the world of bubble machines.",
        price: '$34.99',
        link: 'https://www.amazon.com/dp/B0DPQBS27W/ref=cm_sw_r_as_gl_api_gl_i_FSVZ16K687N2GG69EMWF?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'JOYIN 30 Pcs Diving Pool Toys',
        image: 'https://m.media-amazon.com/images/I/91HEcy+tjsL._AC_SX679_.jpg',
        description: 'Toys for Kids Ages 3-12 Jumbo Set with Storage Bag Pool Games Summer Swim Water FishToys.',
        text: "30 pieces of underwater adventure! These diving toys keep kids swimming, diving, and having a blast all summer long. Durable and brightly colored, they’re easy to spot and come with a handy storage bag. Pool day approved!",
        price: '$29.99',
        link: 'https://www.amazon.com/dp/B07NXB77RH/ref=cm_sw_r_as_gl_api_gl_i_dl_1EQTFVF2XFT29WXJDFW2?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'SOPPYCID 20Pcs Reusable Water Balloons,',
        image: 'https://m.media-amazon.com/images/I/71DKMJH5QJL._AC_SX679_.jpg',
        description: 'Pool Beach Water Toys for Boys and Girls, Outdoor Summer Toys for Kids Ages 3-12, Magnetic Water Ball for Outdoor Activities.',
        text: "These reusable water balloons are a summer sensation! No more messy balloon bits everywhere — just magnetic snap-and-play fun. Super easy for kids to use and a blast at the pool or backyard parties. Eco-friendly and endlessly fun!",
        price: '$59.99',
        link: 'https://www.amazon.com/dp/B0CP7VR975/ref=cm_sw_r_as_gl_api_gl_i_DMZE1Q84R987Z3NSAKKA?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'JOYIN 22.5FT Water Slide and 2 Inflatable Boards',
        image: 'https://m.media-amazon.com/images/I/91FhptWHiXL._AC_SY879_.jpg',
        description: 'Extra Long Heavy Duty Double Lawn Waterslide with Sprinkler for Kids Adults Backyard Summer Water Toy Outdoor Fun, Blue, Green.',
        text: "This mega 22.5-foot water slide transforms any backyard into a mini water park! With its dual-lane design, kids can race each other while zooming down the slick surface on the included inflatable boards. Built-in sprinklers ensure a constant stream of water for a fast, smooth ride, and the extra-long, heavy-duty vinyl material means it can take a beating from energetic kids and even playful adults. Setup is simple, and the vivid blue and green colors add a festive summer vibe. It's an awesome way to beat the heat, encourage active play, and create memories during backyard parties and family gatherings.",
        price: '$59.99',
        link: 'https://www.amazon.com/dp/B0DKSY6CHK/ref=cm_sw_r_as_gl_api_gl_i_Y75EMQP3G3BEF2WGPMW6?linkCode=ml1&tag=more4kids0a-20&th=1',
      },
      {
        title: 'VISTOP Non-Slip Splash Pad for Kids',
        image: 'https://m.media-amazon.com/images/I/812Xgr6XCkL._AC_SY879_.jpg',
        description: 'Thicken Sprinkler Pool Summer Outdoor Water Toys - Fun Backyard Fountain Play Mat for Baby Girls Boys Children.',
        text: "Beat the heat with this safe, non-slip splash pad! Big enough for several kids, it’s a backyard favorite. The water jets are fun and gentle, and the mat stays in place. Great for toddlers and young kids looking to cool off and stay active.",
        price: '$39.95',
        link: 'https://www.amazon.com/dp/B0899WTH85/ref=cm_sw_r_as_gl_api_gl_i_5TNHRM4KJFAMZQM6WHXE?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'Hasbro Twister Splash ',
        image: 'https://m.media-amazon.com/images/I/71Ey5Ff0ETL._AC_SX679_.jpg',
        description: ' THE CLASSIC TWISTER GAME. WITH A SPLASHTASTIC TWIST! Who doesn’t remember playing Twister as a kid? The same classic gameplay that has been tying players up in knots for generations now comes as an outdoor water game for hours of summer fun.',
        text: "This is a fantastic twist—literally—on the classic Twister game! The Twister Splash mat combines physical movement with refreshing water play, making it a top hit during hot summer months. Kids will love the unpredictability of slipping, sliding, and getting soaked as they stretch and balance to match the spinner. It encourages coordination, social interaction, and lots of laughter, making it a great addition to birthday parties, cookouts, or any outdoor playdate. The setup is easy: just attach a garden hose, and you’re ready to go. It’s a fun, active way to stay cool while playing a game everyone already loves.",
        price: '$19.99',
        link: 'https://www.amazon.com/dp/B09CWGF82S/ref=cm_sw_r_as_gl_api_gl_i_NCBWZNM06Z5ZGRNW9SFH?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'Inflatable Jungle Adventure Play Center Spray Kiddie Pool',
        image: 'https://m.media-amazon.com/images/I/81v6TMoRynL._AC_SX679_.jpg',
        description: 'Backyard Kids Water Slide, Outdoor Blow-Up Splash Pad for Toddlers.',
        text: "Turn your backyard into a mini tropical paradise with this Inflatable Jungle Adventure Play Center! It’s more than just a kiddie pool — it’s a full-on splash zone packed with fun features that keep toddlers cool, happy, and busy all summer long. With a wild jungle theme complete with palm trees, slides, and water sprayers, your little adventurers will be sliding, splashing, and giggling for hours. The built-in sprinkler system connects to your hose for a continuous misty rain that adds a whole new level of excitement. The shallow pool base makes it toddler-safe, and the durable vinyl construction means it can stand up to all the jumping, crawling, and tumbling that comes with backyard fun. Parents love it because it's easy to set up and deflate, and kids love it because it feels like a safari waterpark made just for them. Whether you're hosting a playdate or just trying to beat the heat, this inflatable play center brings the vacation vibes straight to your lawn. 🌴 Great for ages 2–6, and perfect for birthdays, BBQs, or just because—it’s a summer must-have!",
        price: '$74.99',
        link: 'https://www.amazon.com/dp/B07MBHK9SY/ref=cm_sw_r_as_gl_api_gl_i_ET0ZP7FZTQ582VW40TTR?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'MAX LIQUIDATOR® 6-Pack Water Blaster Set, Multicolor',
        image: 'https://m.media-amazon.com/images/I/716g9YkIVaL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
        description: 'This Foam Water Shooter Pack Includes 6 Colorful Toys To Provide Hours Of Fun Gameplay For A Group Of Kids Or teens.',
        text: "These lightweight foam water blasters are perfect for all-day water battles. The MAX LIQUIDATOR 6-pack offers a variety of bright, fun colors and works just by pulling and pushing the handle—no complicated triggers or pressure tanks. Safe for ages 3 and up, they're ideal for the pool, beach, or backyard. The range and power are impressive for their size, and they float, making them perfect pool companions. Budget-friendly, durable, and super fun—this set is a must-have for your summer arsenal.",
        price: '$20.13',
        link: 'https://www.amazon.com/dp/B0796JVBJ8/ref=cm_sw_r_as_gl_api_gl_i_W6Q8CQA1ADHDA019R30C?linkCode=ml1&tag=more4kids0a-20',
      },
];
return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>Water Toys That Will Rule Summer 2025 | My Toy Scout</title>
        <meta
          name="description"
          content="From inflatable slides to water blasters, these are the coolest water toys making waves this summer. Perfect for pool days and backyard fun."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/summer-water-toys-2025" />
        <meta property="og:title" content="Water Toys That Will Rule Summer 2025 | My Toy Scout" />
        <meta property="og:description" content="From inflatable slides to water blasters, these are the coolest water toys making waves this summer. Perfect for pool days and backyard fun." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/summer-water-toys-2025" />
        <meta name="twitter:title" content="Water Toys That Will Rule Summer 2025 | My Toy Scout" />
        <meta name="twitter:description" content="From inflatable slides to water blasters, these are the coolest water toys making waves this summer. Perfect for pool days and backyard fun." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
           <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Water Toys That Will Rule Summer 2025",
      "description": "From inflatable slides to water blasters, these are the coolest water toys making waves this summer. Perfect for pool days and backyard fun.",
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
      "datePublished": "2025-07-14"
    }
          })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Water Toys That Will Rule Summer 2025</h1>
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

export default SummerWater;