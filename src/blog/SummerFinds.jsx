
import React from 'react';
import { Helmet } from "react-helmet"

// change links add review
// find new products that fit niche then change them out

const SummerFinds = () => {
  const products = [
    {
    title: 'SOPPYCID 20Pcs Reusable Water Balloons,',
    image: 'https://m.media-amazon.com/images/I/71DKMJH5QJL._AC_SX679_.jpg',
    description: 'Pool Beach Water Toys for Boys and Girls, Outdoor Summer Toys for Kids Ages 3-12, Magnetic Water Ball for Outdoor Activities.',
    text: "These magnetic reusable water balloons are a game-changer for outdoor summer fun. With a soft silicone design and magnetic seal, they open upon impact and refill in seconds—no tying required! The 20-pack offers enough for group games and repeated use, making them an eco-friendly, mess-free upgrade from traditional water balloons. They're perfect for backyard battles, pool parties, or beach trips, and kids ages 3–12 will love how easy and safe they are to use. Durable and colorful, they hold up well and dry quickly, making cleanup a breeze. A fun, reusable option the whole family will enjoy all summer long.",
    price: '$59.99',
    link: 'https://www.amazon.com/dp/B0CP7VR975/ref=cm_sw_r_as_gl_api_gl_i_46YSS5FK00KJGRCA91PV?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'JOYIN Big Bubble Wands Set Bulk for Kids',
    image: 'https://m.media-amazon.com/images/I/8117s2tbtyL._AC_SX679_.jpg',
    description: 'Summer Outdoor Activity Party Favors, 18 Pcs Giant Bubble Maker with Tray, 12" Large, 6 Pcs Solution Suitable for All Age People.',
    text: "Get ready for giant, gleaming bubbles! This bulk JOYIN set includes 18 oversized wands, a bubble tray, and 6 bottles of bubble solution—perfect for birthdays, BBQs, or neighborhood play. The 12” wands create massive bubbles with minimal effort, ideal for kids and adults alike. Whether you're setting up a party station or just adding some whimsy to your day, this set delivers hours of open-ended, outdoor entertainment. Plus, it’s non-toxic and safe for little hands. Bring on the smiles, laughter, and floating magic.",
    price: '$24.99',
    link: 'https://www.amazon.com/dp/B091GH44TL/ref=cm_sw_r_as_gl_api_gl_i_DFTSRAXERDZ71J8EJHHS?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'BANZAI: Bump N Bounce Set of One',
    image: 'https://m.media-amazon.com/images/I/61AAyg+d0eL._AC_SX679_.jpg',
    description: '2 inflatable body bumpers included for belly to belly bumping action. Fun and safe cushion inflatable surface.',
    text: "Belly bumping just got better! This BANZAI Bump N Bounce set includes two inflatable body bumpers that let kids (and playful adults) bump, bounce, and laugh without worry. The durable vinyl construction offers a safe cushion for energetic play, while the bright colors and easy inflation make setup a cinch. Great for backyard playdates, birthday parties, or team games, these bumpers turn any open space into a mini arena of fun. It’s physical, hilarious, and totally unforgettable outdoor action.",
    price: '$22.99',
    link: 'https://www.amazon.com/dp/B01B1X3USS/ref=cm_sw_r_as_gl_api_gl_i_QAVG0R2VWEKNE0EV57MT?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'MAX LIQUIDATOR® 6-Pack Water Blaster Set, Multicolor',
    image: 'https://m.media-amazon.com/images/I/716g9YkIVaL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
    description: 'This Foam Water Shooter Pack Includes 6 Colorful Toys To Provide Hours Of Fun Gameplay For A Group Of Kids Or teens.',
    text: "These lightweight foam water blasters are perfect for all-day water battles. The MAX LIQUIDATOR 6-pack offers a variety of bright, fun colors and works just by pulling and pushing the handle—no complicated triggers or pressure tanks. Safe for ages 3 and up, they're ideal for the pool, beach, or backyard. The range and power are impressive for their size, and they float, making them perfect pool companions. Budget-friendly, durable, and super fun—this set is a must-have for your summer arsenal.",
    price: '$20.13',
    link: 'https://www.amazon.com/dp/B0796JVBJ8/ref=cm_sw_r_as_gl_api_gl_i_HEXEZKWJE73ZVM9YB4QN?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Ayeboovi Toss and Catch Ball Game',
    image: 'https://m.media-amazon.com/images/I/81CVFEoojEL._AC_SX679_.jpg',
    description: 'Outdoor Toys for Kids Yard Games Beach Toys Outside Games for 3 4 5 6 7 8 9 10 Year Old Boys Girls ',
    text: "Classic fun never goes out of style, and the Ayeboovi toss and catch game proves it. This simple-yet-exciting game uses Velcro paddles and fuzzy balls to keep kids engaged while improving hand-eye coordination and motor skills. Lightweight and portable, it’s great for picnics, beach trips, or just burning off energy in the yard. The set comes with multiple paddles and balls so more kids can play at once, and the adjustable straps mean it fits a wide range of hand sizes. A great alternative to screen time.",
    price: '$39.99',
    link: 'https://www.amazon.com/dp/B07FNQFLJ5/ref=cm_sw_r_as_gl_api_gl_i_XG97N8TFQ555NRC7AQWZ?linkCode=ml1&tag=more4kids0a-20&th=1',
  },
  {
    title: 'Bunch O Balloons Tropical Party by ZURU',
    image: 'https://m.media-amazon.com/images/I/81qMELDxTTL._AC_SX679_.jpg',
    description: '200+ Rapid-Filling Self-Sealing Tropical Colored Water Balloons for Outdoor Family, Friends, Children Summer Fun.',
    text: "Forget tying balloons—these Bunch O Balloons fill and seal over 200 tropical-themed water balloons in seconds. Just attach to a hose, watch them inflate, and you're ready to go! Great for parties or spontaneous backyard fun, the vibrant colors and fast setup make this a hit with kids and a lifesaver for parents. They're biodegradable too, adding eco-friendliness to the fun. Whether it's a summer bash or weekend battle, this pack turns any day into a water wonderland.",
    price: '$16.99',
    link: 'https://www.amazon.com/dp/B0B44PDCLC/ref=cm_sw_r_as_gl_api_gl_i_FDJS4MCS96P44ZP3MZMP?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'JOYIN 30 Pcs Diving Pool Toys',
    image: 'https://m.media-amazon.com/images/I/91HEcy+tjsL._AC_SX679_.jpg',
    description: 'Toys for Kids Ages 3-12 Jumbo Set with Storage Bag Pool Games Summer Swim Water FishToys.',
    text: "This jumbo diving toy set is packed with colorful underwater treasures that make pool time feel like an exciting adventure. With rings, torpedoes, fish, and more, it’s perfect for kids practicing their swimming and diving skills in a fun, interactive way. Everything stores neatly in the included mesh bag, making clean-up and travel easy. Whether you’re at the neighborhood pool or on vacation, this set keeps kids diving, chasing, and laughing for hours.",
    price: '$29.99',
    link: 'https://www.amazon.com/dp/B07NXB77RH/ref=cm_sw_r_as_gl_api_gl_i_HTVM43BC2VH5KHP74712?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'BOUNTECH Inflatable Water Slide',
    image: 'https://m.media-amazon.com/images/I/71pbJjG7eoL._AC_SX679_.jpg',
    description: 'Giant Waterslide Park for Kids Outdoor Fun with Water Soccer Splash Pool, GFCI 750w Blower, Blow up Water Slides Inflatables for Kids and Adults Backyard Party Gifts.',
    text: "Bring the water park to your backyard with the BOUNTECH inflatable water slide. This massive playset features a dual water slide, splash pool, soccer area, and climbing wall, plus a powerful 750w GFCI blower for quick inflation. Built from durable materials and reinforced stitching, it's safe for both kids and adults. It’s perfect for birthdays or weekend fun and handles hours of activity without deflating. A summer splurge that turns your yard into a resort-level attraction.",
    price: '$349.99',
    link: 'https://www.amazon.com/dp/B0C6KRR7ZJ/ref=cm_sw_r_as_gl_api_gl_i_RK4ZDJ9X0V1TMFKDAKKN?linkCode=ml1&tag=more4kids0a-20&th=1',
  },
  {
    title: 'Fun Forts Glow Fort Building Kit for Kid',
    image: 'https://m.media-amazon.com/images/I/81wmVzG5JwL._AC_SX679_.jpg',
    description: '81 Pack Glow in The Dark STEM Building Toys Indoor Outdoor Play Tent for Kids Construction Toys with 53 Rods and 28 Spheres.',
    text: "Creativity meets STEM with this glow-in-the-dark fort building kit. With 53 flexible rods and 28 connectors, kids can build castles, tunnels, spaceships, and more—all that light up in the dark for nighttime adventures. It’s a hands-on way to encourage problem-solving, teamwork, and imaginative play. Great for sleepovers, rainy days, or backyard camping. The pieces are easy to assemble and stay secure during play. A wonderful screen-free activity that keeps kids building and dreaming.",
    price: '$33.95',
    link: 'https://www.amazon.com/dp/B08D1SFXRH/ref=cm_sw_r_as_gl_api_gl_i_DDRKBT86E6G6JD7A06Q9?linkCode=ml1&tag=more4kids0a-20&th=1',
  },
  {
    title: 'VISTOP Non-Slip Splash Pad for Kids',
    image: 'https://m.media-amazon.com/images/I/812Xgr6XCkL._AC_SY879_.jpg',
    description: 'Thicken Sprinkler Pool Summer Outdoor Water Toys - Fun Backyard Fountain Play Mat for Baby Girls Boys Children.',
    text: "Cool off with confidence using this extra-thick, non-slip splash pad by VISTOP. Designed with safety and fun in mind, it features anti-slip material, vibrant colors, and a built-in sprinkler system that sprays water from the sides. Kids love jumping, running, and splashing, while parents appreciate the easy setup and drain. It’s large enough for group play and folds down for storage. A safe, affordable way to turn your backyard into a water playground during hot summer days.",
    price: '$39.95',
    link: 'https://www.amazon.com/dp/B0899WTH85/ref=cm_sw_r_as_gl_api_gl_i_854JW81R21VEGT50C4AX?linkCode=ml1&tag=more4kids0a-20',
  },
];
return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>10 Summer Finds For Kids | My Toy Scout</title>
        <meta
          name="description"
          content="Having fun in the sun? Check out these Summer Toys that are Must haves. Summer Activites Toys."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/summer-finds" />
        <meta property="og:title" content="10 Summer Finds For Kids | My Toy Scout" />
        <meta property="og:description" content="Having fun in the sun? Check out these Summer Toys that are Must haves. Summer Activites Toys." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/summer-finds" />
        <meta name="twitter:title" content="10 Summer Finds For Kids | My Toy Scout" />
        <meta name="twitter:description" content="Having fun in the sun? Check out these Summer Toys that are Must haves. Summer Activites Toys." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
           <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "10 Summer Finds For Kids",
      "description": "Having fun in the sun? Check out these Summer Toys that are Must haves. Summer Activites Toys.",
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
          "url": "https://mytoyscout.netlify.app/blog/summer-finds"
      },
      "datePublished": "2025-06-02"
    }
          })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">10 Summer Finds For Kids</h1>
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

export default SummerFinds;
