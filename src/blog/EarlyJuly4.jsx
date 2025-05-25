
import React from 'react';
import { Helmet } from "react-helmet"

// find new products that fit niche then change them out

const EarlyJuly4 = () => {
  const products = [
    {
    title: 'ArtCreativity Light Up Magic Ball Toy Wand for Kids',
    image: 'https://m.media-amazon.com/images/I/61a3oEtO0sL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    description: 'Spinning Lights & Colors - Fun Gift, Easter Basket Stuffers for Toddler, Party Entertainment, Autism Sensory Rooms, Classroom Prizes.',
    text: "This spinning light-up wand is a mesmerizing sensory delight, making it a favorite among toddlers, preschoolers, and children who love visual stimulation. The swirling lights and colorful patterns create an engaging experience that captures attention and promotes imaginative play. Ideal for sensory rooms, party entertainment, or classroom rewards, the wand is lightweight and easy for small hands to grip. Its durable construction withstands enthusiastic play, and the lights are bright enough to be exciting but not overwhelming. Whether used during playtime, added to Easter baskets, or handed out as party favors, this toy is both fun and therapeutic—especially for children with sensory processing needs.",
    price: '$19.98',
    link: 'https://www.amazon.com/dp/B07RG7DDW6/ref=cm_sw_r_as_gl_api_gl_i_dl_JR1WJ3P32A95BV1R63QW?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: '2025 Upgraded Bubble Machine with Remote Control',
    image: 'https://m.media-amazon.com/images/I/71HLrQVTSLL._AC_SX679_.jpg',
    description: 'Automatic Rotation & RGB Lights, 1800mAh Rechargeable Battery, Type-C Charge, Bubble Maker for Kids, Weddings, Birthday Parties, Outdoor Activities.',
    text: "This bubble machine is an outdoor game-changer for kids' events and parties. The 2025 upgrade features automatic rotation, bright RGB lights, and an impressive 1800mAh rechargeable battery that lasts longer than most. With the included remote control, parents can easily turn it on or adjust settings from a distance, making it incredibly user-friendly. It produces a high volume of bubbles that fill the air, turning any backyard into a magical bubble wonderland. Perfect for weddings, birthdays, or simply a sunny afternoon, the high-capacity design ensures non-stop fun. Its portability, quick Type-C charging, and visual effects make it a standout option in the world of bubble machines.",
    price: '$34.99',
    link: 'https://www.amazon.com/dp/B0DPQBS27W/ref=cm_sw_r_as_gl_api_gl_i_KHNHCMGW3KF6RCS4RJ0S?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Alpine Muffy Baby Ear Protection for Babies and Toddlers',
    image: 'https://m.media-amazon.com/images/I/71KH7xz2vdL._SX679_.jpg',
    description: 'For Babies and Toddlers up to 36 Months - CE & ANSI Certified - Noise Reduction Earmuffs - Comfortable Baby Headphones Against Hearing Damage & Improves Sleep.',
    text: "These earmuffs are a must-have for parents concerned about their little ones' hearing, especially at loud events like fireworks shows, sporting games, concerts, or busy outdoor environments. Designed specifically for babies and toddlers up to 36 months, the Alpine Muffy Baby earmuffs are lightweight, ultra-comfortable, and made with safe materials. CE and ANSI certified, they effectively reduce harmful noise without muffling everyday sounds too drastically. The adjustable headband grows with your baby and ensures a snug fit without putting pressure on sensitive areas. Not only do these protect hearing, but they can also help babies sleep better in noisy surroundings.",
    price: '$29.99',
    link: 'https://www.amazon.com/dp/B07KCKWGSG/ref=cm_sw_r_as_gl_api_gl_i_34W6JXGK2PYDSAD2YKMQ?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'JOYIN 22.5FT Water Slide and 2 Inflatable Boards',
    image: 'https://m.media-amazon.com/images/I/91FhptWHiXL._AC_SY879_.jpg',
    description: 'Extra Long Heavy Duty Double Lawn Waterslide with Sprinkler for Kids Adults Backyard Summer Water Toy Outdoor Fun, Blue, Green.',
    text: "This mega 22.5-foot water slide transforms any backyard into a mini water park! With its dual-lane design, kids can race each other while zooming down the slick surface on the included inflatable boards. Built-in sprinklers ensure a constant stream of water for a fast, smooth ride, and the extra-long, heavy-duty vinyl material means it can take a beating from energetic kids and even playful adults. Setup is simple, and the vivid blue and green colors add a festive summer vibe. It's an awesome way to beat the heat, encourage active play, and create memories during backyard parties and family gatherings.",
    price: '$59.99',
    link: 'https://www.amazon.com/dp/B0DKSY6CHK/ref=cm_sw_r_as_gl_api_gl_i_MZ3VHQX8MJJR6PDJSJZD?linkCode=ml1&tag=more4kids0a-20&th=1',
  },
  {
    title: ' Kidoozie Sand N Splash Activity table',
    image: 'https://m.media-amazon.com/images/I/51IEUYnxtaL._AC_SX679_.jpg',
    description: 'Toddler Sensory Kids Table with Lid, Sensory Bin Compatible Lid. For Indoor or Outdoor Use.',
    text: "This sensory activity table is a versatile indoor/outdoor toy that provides hours of imaginative and tactile fun for toddlers. Kids can dig, pour, and build in the sand or splash and scoop in the water. The table includes accessories and features a durable lid that doubles as a sensory bin cover—perfect for easy storage or travel. Its compact size makes it ideal for patios, playrooms, or balconies. It supports cognitive development and fine motor skills as children explore textures and creative play. Ideal for toddlers who love sensory experiences but need a mess-contained alternative to sandbox play.",
    price: '$19.99',
    link: 'https://www.amazon.com/dp/B01N6IKSSZ/ref=cm_sw_r_as_gl_api_gl_i_4BYPCN84WVVYRAGW82M7?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: ' 55" Trampoline for Kids with Enclosure',
    image: 'https://m.media-amazon.com/images/I/71+l6s98NHL._AC_SY879_.jpg',
    description: '55" Trampoline for Kids with Enclosure, 440lbs Capacity Indoor & Outdoor Toddler Trampoline with Adjustable Gymnastics Bar & Toys, for Boys & Girls.',
    text: "This 55' trampoline is more than just a bouncing toy—it's a mini gym that supports active play, coordination, and balance for toddlers and young children. With a secure enclosure net and padded frame, it's designed with safety in mind. The adjustable gymnastics bar adds a new layer of fun, helping children practice flips, stretches, or monkey bar-like activities. Whether used indoors or outdoors, the trampoline is sturdy enough to handle multiple kids thanks to its high 440lb capacity. Easy to assemble and visually appealing, it's perfect for kids who need a safe space to release energy all year round.",
    price: '$139.99',
    link: 'https://www.amazon.com/dp/B0CTB74BVK/ref=cm_sw_r_as_gl_api_gl_i_C62R75M7GFK4Y2CJSKQW?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Hasbro Twister Splash ',
    image: 'https://m.media-amazon.com/images/I/71Ey5Ff0ETL._AC_SX679_.jpg',
    description: ' THE CLASSIC TWISTER GAME. WITH A SPLASHTASTIC TWIST! Who doesn’t remember playing Twister as a kid? The same classic gameplay that has been tying players up in knots for generations now comes as an outdoor water game for hours of summer fun.',
    text: "This is a fantastic twist—literally—on the classic Twister game! The Twister Splash mat combines physical movement with refreshing water play, making it a top hit during hot summer months. Kids will love the unpredictability of slipping, sliding, and getting soaked as they stretch and balance to match the spinner. It encourages coordination, social interaction, and lots of laughter, making it a great addition to birthday parties, cookouts, or any outdoor playdate. The setup is easy: just attach a garden hose, and you’re ready to go. It’s a fun, active way to stay cool while playing a game everyone already loves.",
    price: '$19.99',
    link: 'https://www.amazon.com/dp/B09CWGF82S/ref=cm_sw_r_as_gl_api_gl_i_7E773J0N8C0QD3M9896G?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Flying Orb Ball',
    image: 'https://m.media-amazon.com/images/I/81DI8oy7JIL._AC_SY300_SX300_.jpg',
    description: ' Dazzling Lights, Magic Hover Spinner, Cool Boomerang Drone, Floating Cosmic Globe, Kids Outdoor Toys.',
    text: "This innovative toy is like something out of a sci-fi movie. The Flying Orb Ball levitates, spins, and glows with dazzling LED lights, captivating kids and adults alike. With a flick of the wrist, you can make it fly, hover, or boomerang back to your hand. The compact design and safe outer shell make it ideal for indoor and outdoor use. It’s USB rechargeable and built to handle crashes, making it both durable and eco-friendly. Great for improving hand-eye coordination and sparking creative play, the orb encourages kids to stay active while engaging with futuristic tech in a safe, fun way.",
    price: '$20.99',
    link: 'https://www.amazon.com/dp/B08RDHNN9B/ref=cm_sw_r_as_gl_api_gl_i_6V2BVFTK00615RCXWPT7?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'NewFamily Dustless Chalk',
    image: 'https://m.media-amazon.com/images/I/719DlHRyuJL._AC_SX679_.jpg',
    description: 'Dustless Chalk for Kids, Colored Sidewalk Chalk With Holder,Non-Toxic Washable Toddlers Chalks Drawing Writing for Outdoor Art Play,Blackboard(12 Pcs).',
    text: "This dustless chalk set is perfect for little artists who love drawing outside on sidewalks or inside on chalkboards. The vibrant colors and ergonomic design make it easy for toddlers to hold, while the dust-free formula ensures less mess for parents to clean up. The included chalk holder helps keep hands clean and reduces breakage, extending the lifespan of each piece. Non-toxic and washable, this set is ideal for schools, daycare centers, or at-home learning environments. Whether your child is doodling flowers, writing their name, or creating hopscotch squares, this chalk inspires creativity and outdoor fun in a mess-free way.",
    price: '$13.99',
    link: 'https://www.amazon.com/dp/B0C4KTZMVM/ref=cm_sw_r_as_gl_api_gl_i_76DRQSSS8DNBF4RQFB5W?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: ' Unique Boys Patriotic Stars Stripes 4th of July Short Set',
    image: 'https://m.media-amazon.com/images/I/81ZeNVuZI7S._AC_SY741_.jpg',
    description: ' Red, White and Blue American flag designs will get your little one feeling proud to be an American this 4th of July! Perfect for the Independence Day barbeque or fireworks show! Queue the Star Spangled Banner!',
    text: "This adorable 4th of July short set is a festive must-have for patriotic summer celebrations. Featuring bold red, white, and blue colors and an American flag-inspired design, it's the perfect outfit for parades, BBQs, or family fireworks night. Made from lightweight, breathable fabric, the set keeps your child cool and comfortable even in the heat. The shorts have a stretchy waistband for a comfy fit, and the matching top completes the all-American look. It’s both stylish and functional, making your little one photo-ready while allowing for free movement during play or celebration.",
    price: '$18.99',
    link: 'https://www.amazon.com/dp/B08XYB5VBG/ref=cm_sw_r_as_gl_api_gl_i_QBDNY5M7CEDE2AN5JFRZ?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: ' Enlifety 2-6T Toddler Girls Summer Dress Ruffle Sleeve Casual Dresses with Matching Shorts',
    image: 'https://m.media-amazon.com/images/I/71T8r9PebPL._AC_SX569_.jpg',
    description: ' Red, White and Blue American flag designs will get your little one feeling proud to be an American this 4th of July! Perfect for the Independence Day barbeque or fireworks show! Queue the Star Spangled Banner!',
    text: "This adorable 4th of July short set is a festive must-have for patriotic summer celebrations. Featuring bold red, white, and blue colors and an American flag-inspired design, it's the perfect outfit for parades, BBQs, or family fireworks night. Made from lightweight, breathable fabric, the set keeps your child cool and comfortable even in the heat. The shorts have a stretchy waistband for a comfy fit, and the matching top completes the all-American look. It’s both stylish and functional, making your little one photo-ready while allowing for free movement during play or celebration.",
    price: '$14.99',
    link: 'https://www.amazon.com/dp/B0CZHTHJGQ/ref=cm_sw_r_as_gl_api_gl_i_XWXS5VD0R1DZFC0PH13J?linkCode=ml1&tag=more4kids0a-20',
  },
];
return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>TOP JULY 4TH Toys for Kids | My Toy Scout</title>
        <meta
          name="description"
          content="Early Finds on Outdoor Kids Toys for The Forth of July. "
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/outdoor-toys" />
        <meta property="og:title" content="TOP JULY 4TH Toys for Kids | My Toy Scout" />
        <meta property="og:description" content="Early Finds on Outdoor Kids Toys for The Forth of July." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/outdoor-toys" />
        <meta name="twitter:title" content="TOP JULY 4TH Toys for Kids | My Toy Scout" />
        <meta name="twitter:description" content="Early Finds on Outdoor Kids Toys for The Forth of July." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
           <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "TOP JULY 4TH Toys for Kids",
      "description": "Early Finds on Outdoor Kids Toys for The Forth of July .",
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
          "url": "https://mytoyscout.netlify.app/blog/outdoor-toys"
      },
      "datePublished": "2025-06-12"
    }
          })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">TOP JULY 4TH Toys for Kids</h1>
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

export default EarlyJuly4;
