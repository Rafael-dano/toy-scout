
import React from 'react';
import { Helmet } from "react-helmet"

// change links to this page
// find new products that fit niche then change them out

const BackyardToys = () => {
  const products = [
    {
        title: 'SLOOSH Bubble Lawn Mower Toddler Toy ',
        image: 'https://m.media-amazon.com/images/I/91K3VGf3fsL._AC_SX679_.jpg',
        description: ' Kids Bubble Machine Summer Outdoor Push Toy Games, Backyard Garden Outside Play Toddlers Preschool Boys Girls Birthday Gifts.',
        text: "If you're looking for a toy that gets toddlers moving and laughing, the SLOOSH Bubble Lawn Mower is the ultimate backyard winner. As kids push this colorful mower around, it blows a stream of magical bubbles, creating joy with every step. It’s a fantastic way to encourage outdoor active play while developing gross motor skills. The design is lightweight and toddler-friendly, with a vibrant, cheerful look that captures attention instantly. While it may require a good supply of bubble solution for extended use, the endless giggles it brings make that a small price to pay. This toy turns your lawn into a bubble-filled wonderland—perfect for summer fun or birthday parties.",
        price: '$39.99',
        link: ' https://www.amazon.com/dp/B0BZXNZZ67/ref=cm_sw_r_as_gl_api_gl_i_6W3F9X1S5DDAE81XFV85?linkCode=ml1&tag=more4kids0a-20&linkId=cde7ccd05ec62b11eaa198c7aafd2d40&th=1',
      },
      {
        title: 'Little Tikes Rocking Horse Blue',
        image: 'https://m.media-amazon.com/images/I/61Q6kp0iiYL._AC_SX679_.jpg',
        description: 'TRADITIONAL ROCKING HORSE: This is one of Little Tikes classic items. Children will learn balance and coordination. Durable enough to last for generations!',
        text: "Classic, iconic, and built to last—the Little Tikes Rocking Horse in Blue has been a staple of childhood for generations. Its durable plastic frame, low seat, and easy-grip handles make it incredibly safe and approachable for toddlers just finding their balance. It's small enough to fit indoors but rugged enough for backyard use too. While it doesn’t play music or light up like modern toys, its simplicity is part of its timeless charm. This rocking horse delivers hours of independent, screen-free play while helping build coordination and muscle strength. For parents looking for a toy that’s nostalgic and still loved today, this is a rocking good choice.",
        price: '$34.99',
        link: ' https://www.amazon.com/dp/B003ICWTME/ref=cm_sw_r_as_gl_api_gl_i_NRGD10DPYZ5343Y10WW8?linkCode=ml1&tag=more4kids0a-20&linkId=3419daf05cd78538810b842a0cd255e6&th=1',
      },
      {
        title: 'Meland Kids Camping Set with Tent',
        image: 'https://m.media-amazon.com/images/I/71hSkNw0uIL._AC_SX679_.jpg',
        description: ' Toddler Toys for Boys with Campfire, Camping Toys for Kids Indoor Outdoor Pretend Play, Gift Idea for Boys Age 3,4,5,6 Year Old Birthday Christmas.',
        text: "Bring the adventure of camping indoors or into the backyard with the Meland Kids Camping Set. This fun-filled set includes a play tent, pretend campfire, lantern, binoculars, and tons of accessories to fuel imaginative roleplay. Kids can pretend to roast marshmallows, catch bugs, and explore the wilderness all from their living room. It’s an ideal toy for building social skills and creativity, especially in group play. The tent is easy to pop up and fold down, though it may not withstand rough outdoor weather. For kids obsessed with the great outdoors, this set turns every day into an epic expedition.",
        price: '$36.99',
        link: 'https://www.amazon.com/dp/B07Q4NFMNS/ref=cm_sw_r_as_gl_api_gl_i_5045XTJRB2H7HBKT1FWD?linkCode=ml1&tag=more4kids0a-20&linkId=63ec1241a767ec32a08212f4b0222a6e&th=1',
      },
      {
        title: 'PACEARTH 40 Inch Saucer Tree Swing',
        image: 'https://m.media-amazon.com/images/I/81N5XOn+jzL._AC_SY300_SX300_.jpg',
        description: ' Flying 900lb Weight Capacity 2 Added Hanging Straps Adjustable Multi-Strand Ropes Colorful Safe and Durable Swing Seat for Children.',
        text: "Upgrade your backyard into a playground paradise with the PACEARTH 40-Inch Saucer Tree Swing. This spacious, round swing holds up to 660 lbs and is designed for multiple kids to enjoy at once. With durable ropes, strong fabric, and a weather-resistant frame, it’s built to last through all seasons. It provides endless hours of entertainment, helping kids burn energy, improve balance, and experience the thrill of flight. Installation is simple, though you’ll need a sturdy tree or swing frame. It’s a perfect gift for families looking to bring more laughter and movement outdoors.",
        price: '$49.99',
        link: 'https://www.amazon.com/dp/B07CSL91V5/ref=cm_sw_r_as_gl_api_gl_i_GD0TTWHQH894A9VAH5WN?linkCode=ml1&tag=more4kids0a-20&linkId=048a0598a8d1fbbc8ec68f6556ddee4a&th=1',
      },
      {
        title: 'Veslier Construction Truck Toy',
        image: 'https://m.media-amazon.com/images/I/81Mzrz0CsFL._AC_SX679_.jpg',
        description: ' Toys for Boys Girls Age 1 2 3 4 5 6 Years Old，Carrier Transport Trucks for Kids 1-3 3-5 Year Old，Christmas Birthday Gift Toddler Toys.',
        text: "Let your little builder take the lead with the Veslier Construction Truck Toy set—a vibrant, hands-on play experience for construction-loving kids. With detailed dump trucks, excavators, and more, each vehicle encourages storytelling, fine motor development, and mechanical curiosity. The toys are perfectly sized for small hands and made with non-toxic, high-quality materials. Some parts may detach with aggressive play, but overall, this set withstands typical toddler energy. It’s the kind of toy that keeps kids busy for hours while introducing them to STEM concepts like motion, cause and effect, and simple machinery—all through pretend play.",
        price: '$26.99',
        link: ' https://www.amazon.com/dp/B0CC9B97Q2/ref=cm_sw_r_as_gl_api_gl_i_5YAEMY5DE9ERKCXH4N0Z?linkCode=ml1&tag=more4kids0a-20&linkId=1a3e98b05feed165745f5ad5d5391823&th=1',
      },
      {
        title: 'Liberry Toddler Golf Set',
        image: 'https://m.media-amazon.com/images/I/71j5ntRY6sL._AC_SX679_.jpg',
        description: ' Upgraded Kids Golf Cart with Unique Shoulder Strap Design, Indoor and Outdoor Golf Toys for Boys and Girls Aged 1-5 Years Old.',
        text: "Introduce your little one to the joys of golf with the Liberry Toddler Golf Set, a vibrant and fun way to boost hand-eye coordination and motor skills. Designed with safety and simplicity in mind, this set includes lightweight clubs and colorful balls that are easy for small hands to grasp. It's a great indoor and outdoor activity, perfect for active toddlers who love to swing, aim, and score. The durable plastic holds up well even with enthusiastic play, though the clubs may not be ideal for rough terrain or larger kids. Still, for a first-time golf experience that teaches patience, precision, and focus, this set is a total hole-in-one.",
        price: '$32.99',
        link: ' https://www.amazon.com/dp/B0B5ZLCBJM/ref=cm_sw_r_as_gl_api_gl_i_V0REZARC5TW8W32E8EHE?linkCode=ml1&tag=more4kids0a-20&linkId=70a29d21e863f0d804112fb89b7c2add&th=1',
      },
      {
        title: ' Tiki Torch Bubble Machine',
        image: 'https://m.media-amazon.com/images/I/714oV45JnkL._AC_SX679_.jpg',
        description: ' Bubble Machine with Lights and Music, Bubble Blower and Wand, Rechargable Outdoor Toy for Kids Teens Adults, 4 Feet Tall, Includes 4oz Bubble Solution.',
        text: "Turn your backyard into a tropical wonderland with the Tiki Torch Bubble Machine, a unique twist on bubble fun that doubles as vibrant decor. This creative toy blows a continuous stream of bubbles from a torch-shaped design, creating a magical, beachy atmosphere at birthday parties, BBQs, or playdates. The motor is powerful enough to impress, and the visual appeal adds flair to any outdoor setting. While you’ll want to keep extra bubble solution on hand for extended sessions, the eye-catching design and nonstop bubbles make it a must-have for outdoor entertainment.",
        price: '$14.99',
        link: ' https://www.amazon.com/dp/B0DTJ6WHHH/ref=cm_sw_r_as_gl_api_gl_i_Q4D949V0533JXRYAKPEA?linkCode=ml1&tag=more4kids0a-20&linkId=4b8617391de6c93e8e0658851ee2d88c&th=1',
      },
      {
        title: 'Outdoor flying disc toy',
        image: 'https://m.media-amazon.com/images/I/61VhOUmtFLL._AC_SX679_.jpg',
        description: ' Outside Toys for Kids Ages 4-8 - Manual Capture Catching Game - Toddler Chasing Toy for Boys & Girls, Ages 3-7 - Outdoor Fun Family Games.',
        text: "The Outdoor Flying Disc Toy is a high-flying favorite that brings energy and excitement to parks, beaches, and backyards. With its aerodynamic design, it glides smoothly through the air, encouraging kids to run, catch, and engage in cooperative play. It's lightweight yet sturdy, making it safe for younger players while still delivering satisfying distance and speed. Though wind can affect flight in some environments, this disc is a fantastic tool for improving reflexes, coordination, and social interaction. It’s a simple yet timeless way to turn screen-free time into fun-filled movement.",
        price: '$17.95',
        link: ' https://www.amazon.com/dp/B0CF8LHP8F/ref=cm_sw_r_as_gl_api_gl_i_VFR8MV9Q844CBBGBA89D?linkCode=ml1&tag=more4kids0a-20&linkId=38d454b64e8bb5fa95efcc440ea62cb5&th=1',
      },
      {
        title: 'FUNLIO 3-in-1 Toddler Swing Set with 4 Sandbags',
        image: 'https://m.media-amazon.com/images/I/61EOPFp2DML._AC_SX679_.jpg',
        description: 'Indoor/Outdoor Baby Swing with Foldable Metal Stand, Kids Swing Set for Backyard, Clear Instructions, Easy to Assemble & Store.',
        text: "The FUNLIO 3-in-1 Toddler Swing Set brings playground-level excitement right to your home with a swing, slide, and basketball hoop all in one. Designed for safety and versatility, it includes four stabilizing sandbags to keep things grounded and worry-free. It’s perfect for toddlers and preschoolers who want an all-in-one activity center that fosters physical development and creative play. The swing’s harness provides extra support for little ones, and the slide’s gentle slope is beginner-friendly. Assembly takes some time, but once set up, it offers hours of joy across multiple types of play.",
        price: '$89.99',
        link: 'https://www.amazon.com/dp/B098QF1Q8B/ref=cm_sw_r_as_gl_api_gl_i_MGN0WAS60MZ9VV2NY9F5?linkCode=ml1&tag=more4kids0a-20&linkId=28225beb086a05b08bf635c33a75fca7&th=1',
      },
      {
        title: 'Toddler Basketball Hoop',
        image: 'https://m.media-amazon.com/images/I/61zxZ2SEgdL._AC_SX679_.jpg',
        description: ' Indoor Mini Adjustable Basketball Goal with Ball Pump Outdoor Toys Backyard Game Outside Pool Basketball Toys for 1 2 3 4 Year Old Boy Girl Kid Toy Age 2-4 4-8 Birthday Gift.',
        text: "Fuel your toddler’s love for hoops with this adjustable Toddler Basketball Hoop that makes scoring big dreams a daily reality. It’s the perfect height for little athletes and helps develop motor coordination, balance, and a sense of accomplishment with each successful shot. Its sturdy base can be filled with sand or water for extra stability, and the vibrant colors make it visually inviting. While it may require occasional retightening with frequent use, the fun-to-learn factor and active play benefits far outweigh the maintenance. This hoop is a slam dunk for early learners.",
        price: '$39.99',
        link: 'https://www.amazon.com/dp/B0BXLGVHBT/ref=cm_sw_r_as_gl_api_gl_i_HMZEJSXXY5YBZP7GFKPP?linkCode=ml1&tag=more4kids0a-20&linkId=76f1c7dff61276b8ab0f9796aea6285d&th=1 ',
      },
      {
        title: 'AppleRound Pack of 4 Toy Sports Balls',
        image: ' https://m.media-amazon.com/images/I/81S+7h513XL._AC_SX466_.jpg',
        description: ' Toy Sports Balls with 1 Pump for Toddlers and Kids: 5-Inch Basketball, 5-Inch Soccer Ball, 5-Inch Playground Ball, 6.5-Inch Football (Mixed Bundle).',
        text: "Introduce your child to the thrill of sports with the AppleRound Pack of 4 Toy Sports Balls—featuring mini versions of soccer, basketball, football, and baseball. Each ball is soft, lightweight, and perfectly sized for tiny hands, making them ideal for both indoor and outdoor play. These colorful balls help toddlers build coordination, grip strength, and an early love of movement. They inflate easily and come with a pump, although you may need to re-inflate them after heavy use. Whether in the living room or backyard, these balls are ready to roll, bounce, and fly with every giggle and cheer.",
        price: '$14.75',
        link: 'https://www.amazon.com/dp/B00Y8EGGXE/ref=cm_sw_r_as_gl_api_gl_i_dl_1T9Z0GXABH729SFZB7R9?linkCode=ml1&tag=more4kids0a-20&linkId=7b70df7048c42183ede43b61566a6ec9&th=1',
      },
];
return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>Best Backyard Toys for Toddlers | My Toy Scout</title>
        <meta
          name="description"
          content="Turn your backyard into a toddler paradise with these outdoor toys made for active play, sensory exploration, and summer giggles."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/backyard-toys-for-toddlers" />
        <meta property="og:title" content="Best Backyard Toys for Toddlers | My Toy Scout" />
        <meta property="og:description" content="Turn your backyard into a toddler paradise with these outdoor toys made for active play, sensory exploration, and summer giggles." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/backyard-toys-for-toddlers" />
        <meta name="twitter:title" content="Best Backyard Toys for Toddlers | My Toy Scout" />
        <meta name="twitter:description" content="Turn your backyard into a toddler paradise with these outdoor toys made for active play, sensory exploration, and summer giggles." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
           <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Best Backyard Toys for Toddlers",
      "description": "Turn your backyard into a toddler paradise with these outdoor toys made for active play, sensory exploration, and summer giggles.",
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
          "url": "https://mytoyscout.netlify.app/blog/backyard-toys-for-toddlers"
      },
      "datePublished": "2025-07-21"
    }
          })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Best Backyard Toys for Toddlers</h1>
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

export default BackyardToys;