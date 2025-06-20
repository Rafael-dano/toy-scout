import React from 'react';
import { Helmet } from "react-helmet"

// change links for page
// find new products that fit niche then change them out

const PrimeDay = () => {
  const products = [
    {
        title: 'Rechargeable Bubble Machine for Kids ',
        image: 'https://m.media-amazon.com/images/I/71OOEDab7XL._AC_SX679_.jpg',
        description: 'Extra Large Bubbles with Bubble-in-Bubble Effects, Fast Automatic Bubble Maker Toy with 8oz Solution, Bubble Blower for Indoor/Outdoor Play, Party, Wedding, Gift',
        text: "Bring endless smiles and giggles to your backyard with the Rechargeable Bubble Machine for Kids! This high-powered bubble blaster churns out a mesmerizing flurry of shimmering bubbles that instantly elevate any party, playdate, or picnic. It’s USB-rechargeable, making it both eco-friendly and wallet-friendly—no more endless batteries to replace! Parents love how easy it is to clean and refill, while kids are hypnotized by the constant stream of bubbly magic. The sturdy, kid-safe build stands up to spills and little hands. While it’s lightweight and portable, some may wish the charge lasted just a bit longer for extra-long play sessions. Still, it's the ultimate summer toy that guarantees hours of outdoor fun and laughter.",
        price: '$39.99',
        link: 'https://www.amazon.com/dp/B0DV49FZJG?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2B03WTDNTBLK7&linkCode=tr1&tag=more4kids0a-20&linkId=amzn1.campaign.2B03WTDNTBLK7_1750377765488',
      },
      {
        title: 'BunMo Color-Changing Silly Suckers',
        image: 'https://m.media-amazon.com/images/I/61PhIgzcFOL._AC_SX679_.jpg',
        description: 'Suction Cup Toys - Interactive Sensory Suction Cup Toys - Safe, Durable no Hole Bath Toys - Non-Mouthable Toy 3+ - Color Changing 10 Pack',
        text: "The BunMo Color-Changing Silly Suckers are the perfect blend of sensory satisfaction and imaginative play! These vibrant fidget toys stick, pop, and stretch, providing hours of tactile fun that’s as visually stimulating as it is soothing. They’re designed to change colors with temperature, adding a magical twist that keeps kids (and even adults) engaged. Teachers and parents rave about their calming benefits for fidgety fingers and their durable, dishwasher-safe design. While younger kids may need help separating the suction cups when tightly stuck, the sheer variety of shapes and the satisfying pop make them irresistible. Whether used during playtime or as a classroom calm-down tool, these silly suckers are a hit.",
        price: '$19.99',
        link: 'https://www.amazon.com/dp/B0D4YDXL63?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3PT1OCLP7RI3Y&linkCode=tr1&tag=more4kids0a-20&linkId=amzn1.campaign.3PT1OCLP7RI3Y_1750377657678&th=1',
      },
      {
        title: ' The GarveeLife 2 seater 4 wheeler truck car',
        image: 'https://m.media-amazon.com/images/I/71gknno+q-L._AC_SX679_.jpg',
        description: 'ride on toy showcases a striking design that resembles real vehicles, equipped with bright LED lights, rugged treaded tires, a three-point seat belt, and a handy toy shovel at the rear, enhancing playtime and ensuring every ride feels genuine',
        text: "The GarveeLife 2-Seater 4-Wheeler Truck Car is the ultimate ride-on vehicle for kids who dream big. With its bold design, real working headlights, and dual-seat layout, this truck delivers the thrill of adventure and the joy of shared play. It runs smoothly on multiple terrains and includes parental remote control for added safety and peace of mind. Kids love the built-in Bluetooth music system and realistic dashboard—it’s like driving a real car! Assembly does take some patience, and the size requires outdoor space, but once it’s up and running, this truck becomes the highlight of every afternoon. For families seeking a toy that grows with their kids, this rugged, feature-packed ride is hard to beat.",
        price: '$349.99',
        link: 'https://www.amazon.com/dp/B0F2FJ16N3?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.30OYV6161S1CL&linkCode=tr1&tag=more4kids0a-20&linkId=amzn1.campaign.30OYV6161S1CL_1750377620558&th=1',
      },
      {
        title: 'Glaf Tricycle for Toddlers 1-3',
        image: 'https://m.media-amazon.com/images/I/61mPPq89XrL._AC_SX679_.jpg',
        description: 'Toddler Bike Tricycles with Push Handle 2-4 Years Baby Bike Boys and Girls Balance Bike Birthday Toys with Removable Pedals Adjustable Seat Height and Backrest (Blue)',
        text: "Designed with both style and stability in mind, the Glaf Tricycle for Toddlers is a wonderful first set of wheels for your little one. Ideal for kids aged 1 to 3, this trike has a sleek, ergonomic frame with soft-grip handlebars and a high-back seat for extra support. Parents love the adjustable design that transforms as your toddler grows, while little riders adore the smooth glide and vibrant color options. It’s lightweight yet durable enough for sidewalk cruises or park adventures. While it doesn’t fold up for compact storage, it more than makes up for it with comfort, control, and a safe introduction to pedal power. It’s a toddler favorite that encourages both fun and confidence.",
        price: '$79.99',
        link: 'https://www.amazon.com/dp/B0D78X18RK?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3SM7DGP0IGHK2&linkCode=tr1&tag=more4kids0a-20&linkId=amzn1.campaign.3SM7DGP0IGHK2_1750377562630&th=1',
      },
      {
        title: 'SLOOSH Non-Slip Splash Pad Sprinkler',
        image: 'https://m.media-amazon.com/images/I/A1YjpYKsg+L._AC_SX679_.jpg',
        description: 'Outdoor Water Toys Play Mat for Toddlers Kids Dogs, Outside Thickened Sprinkler Pool Party Durable Backyard Fountain for Girls Boys Pets (72in, Blue)',
        text: "Turn your backyard into a water wonderland with the SLOOSH Non-Slip Splash Pad Sprinkler! This vibrant, inflatable pad offers a refreshing escape from the heat while delivering sensory-rich fun that kids can't get enough of. The built-in sprinklers create a gentle misting fountain, while the non-slip surface ensures safe, active play. Easy to hook up to any standard garden hose, it inflates quickly and provides hours of entertainment. Some parents note that it needs a flat, grassy surface to perform at its best, but when set up properly, it's an absolute hit. Perfect for toddlers and young kids, this splash pad keeps summer play cool, safe, and memorable.",
        price: '$19.99',
        link: 'https://www.amazon.com/dp/B0DKNBRP7X?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3ID0IAXFYTACC&linkCode=tr1&tag=more4kids0a-20&linkId=amzn1.campaign.3ID0IAXFYTACC_1750377495481',
      },
      {
        title: 'KOKODI LCD Writing Tablet',
        image: 'https://m.media-amazon.com/images/I/71JXJ0I9e-L._AC_SX679_.jpg',
        description: 'Gifts for Kids 10 Inch Colorful Toddler Doodle Board Drawing Tablet, Erasable Reusable Electronic Drawing Pads, Educational and Learning Toys for Kids',
        text: "Unleash your child’s inner artist or budding writer with the KOKODI LCD Writing Tablet—a mess-free, eco-conscious solution for drawing, doodling, and learning on the go. With just one button to clear the screen, it’s endlessly reusable and perfect for road trips, restaurants, or quiet time at home. The screen is bright and colorful without being harsh on the eyes, and it’s lightweight enough for even small hands to carry. While older kids might outgrow its simplicity, it’s absolutely ideal for preschoolers learning letters, numbers, or exploring their creativity. With no ink, no paper, and no fuss, this tablet makes expression easy, fun, and guilt-free.",
        price: '$19.99',
        link: 'amazon.com/dp/B082KFTF41?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2J534WTV9NMME&linkCode=tr1&tag=more4kids0a-20&linkId=amzn1.campaign.2J534WTV9NMME_1750376623828',
      },
      {
        title: 'Magnetic Tiles Kids Toy',
        image: 'https://m.media-amazon.com/images/I/81i-qidPfrL._AC_SX679_.jpg',
        description: 'STEM Magnet Toy for Toddler Magnetic Blocks Building Preschool Learning Sensory Montessori Toys for 3+ Year Old Boys and Girls, Safe Creativity Toddler Kids Toy 40PCS',
        text: "Ignite your child’s imagination with this Magnetic Tiles Kids Toy set, a vibrant collection of buildable shapes that inspire hours of hands-on creativity. These magnetic building blocks snap together with satisfying ease, allowing children to explore architecture, color recognition, and basic geometry—all while having a blast. The high-quality magnets ensure structures stay sturdy, even during big builds, and the translucent pieces shimmer like stained glass in sunlight. While cleanup can take a moment due to their stickiness, the developmental benefits far outweigh any minor inconvenience. Ideal for STEM play, this set is perfect for solo play or group projects, helping kids think critically while bringing their dream creations to life.",
        price: '$29.98',
        link: 'https://www.amazon.com/dp/B0BGLTYW59?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1CIIHI1QXI5PO&linkCode=tr1&tag=more4kids0a-20&linkId=amzn1.campaign.1CIIHI1QXI5PO_1750376568044',
      },
      {
        title: 'KOKODI Talking Pen Books Sets',
        image: 'https://m.media-amazon.com/images/I/811LNtOedEL._AC_SX679_.jpg',
        description: 'Learning Electronic Toys for Boys Girls, Autism Sensory Games, Early Educational Gifts Birthday Gifts for Toddlers Kids Age 2 3 4 5',
        text: "Learning comes alive with the KOKODI Talking Pen Books Set, an interactive adventure into phonics, numbers, and stories that your child can actually hear read aloud. The smart pen responds with words, sounds, and songs—turning reading into a multisensory experience that boosts vocabulary and engagement. Parents love the ease of use and how it encourages independent learning, while children are drawn to the fun illustrations and friendly voice prompts. The pen’s volume is adjustable and the audio quality is impressively clear. Some users mention needing a quick setup guide to get started, but once it’s working, it becomes a cherished part of any toddler’s early literacy journey.",
        price: '$49.99',
        link: 'https://www.amazon.com/dp/B0DFCKK62Q?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.MKSQ22TTW4SL&linkCode=tr1&tag=more4kids0a-20&linkId=amzn1.campaign.MKSQ22TTW4SL_1750376592898',
      },
      {
        title: 'Gskyer Telescope',
        image: 'https://m.media-amazon.com/images/I/71cb2RCy+aL._AC_SX466_.jpg',
        description: '70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope for Kids Beginners - Travel Telescope with Carry Bag, Phone Adapter and Wireless Remote.',
        text: "Explore the stars with the Gskyer Telescope, a family-friendly stargazing tool that brings the universe within reach. With its high-quality optics, adjustable tripod, and simple setup, this telescope offers crisp views of the moon, planets, and distant constellations. Budding astronomers and curious minds alike will love zooming in on the cosmos, and the included smartphone adapter makes it easy to snap celestial photos. While it may not satisfy hardcore hobbyists, it’s an excellent entry-level model for kids and parents to enjoy together. It turns ordinary evenings into magical spacewalks and inspires awe with every clear-sky night.",
        price: '$129.99',
        link: 'https://www.amazon.com/dp/B081RJ8DW1?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.TXQDX8W1QBO0&linkCode=tr1&tag=more4kids0a-20&linkId=amzn1.campaign.TXQDX8W1QBO0_1750376529555&th=1',
      },
      {
        title: '8-in-1 Toddler Indoor Playground with Slide',
        image: 'https://m.media-amazon.com/images/I/61LdO-BScFL._AC_SX679_.jpg',
        description: 'Baby Slide Playset for Toddlers Ages 1-3 Outdoor Play, Kids Slide Includes Basketball Hoop, Climber, Crawling Tunnel, Telescope, Toy Storage',
        text: "Why settle for one activity when you can have eight? The 8-in-1 Toddler Indoor Playground with Slide transforms any playroom into a full-blown adventure park. This all-in-one structure includes a slide, basketball hoop, climbing ladder, swing, and more—designed to keep kids active, engaged, and happily entertained indoors. It’s crafted from non-toxic, sturdy plastic with rounded edges for safety, and its colorful design sparks endless imaginative play. Assembly takes a bit of effort, but the end result is a powerhouse of fun that grows with your child. Perfect for rainy days or screen-free time, this indoor playground turns every day into a new discovery.",
        price: '$179.99',
        link: 'https://www.amazon.com/dp/B0DZXBXS23?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.30OYV6161S1CL&linkCode=tr1&tag=more4kids0a-20&linkId=amzn1.campaign.30OYV6161S1CL_1750382124270&th=1',
      },
      {
        title: 'Sports Equipment Organizer',
        image: 'https://m.media-amazon.com/images/I/81zFB84wRKL._AC_SX679_.jpg',
        description: 'Large Capacity Garage Sports Toy Organizer with Hooks and Baskets,Rolling Ball Cart with Wheels for Toy and Gear Organizer,Black.',
        text: "Tame the chaos of backyard balls, bats, and gear with the Sports Equipment Organizer—a must-have for any active household. This sturdy storage rack keeps everything from basketballs to helmets neatly in place and easily accessible. Its multi-bin design and open-frame structure make cleanup a breeze, encouraging kids to take responsibility for their equipment. Parents appreciate its durability and space-saving build, though some wish the wheels were a touch more rugged for garage floors. Whether it’s for a garage, playroom, or patio, this organizer turns mess into order and helps every sports session start off smoothly.",
        price: '$98.34',
        link: 'https://www.amazon.com/dp/B0F7K3T7RV?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.30OYV6161S1CL&linkCode=tr1&tag=more4kids0a-20&linkId=amzn1.campaign.30OYV6161S1CL_1750382002046',
      },
  ]
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>Prime Day Deals 2025 | My Toy Scout</title>
        <meta
          name="description"
          content="Discover the hottest Prime Day toy deals of 2025! Handpicked savings on educational toys, outdoor fun, STEM kits, and more—perfect for kids of all ages. Shop smarter with My Toy Scout."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/prime-day-deals-2025" />
        <meta property="og:title" content="Prime Day Deals 2025 | My Toy Scout" />
        <meta property="og:description" content="Discover the hottest Prime Day toy deals of 2025! Handpicked savings on educational toys, outdoor fun, STEM kits, and more—perfect for kids of all ages. Shop smarter with My Toy Scout." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/prime-day-deals-2025" />
        <meta name="twitter:title" content="Prime Day Deals 2025 | My Toy Scout" />
        <meta name="twitter:description" content="Discover the hottest Prime Day toy deals of 2025! Handpicked savings on educational toys, outdoor fun, STEM kits, and more—perfect for kids of all ages. Shop smarter with My Toy Scout." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
           <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Prime Day Deals 2025",
      "description": "Discover the hottest Prime Day toy deals of 2025! Handpicked savings on educational toys, outdoor fun, STEM kits, and more—perfect for kids of all ages. Shop smarter with My Toy Scout.",
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
      "datePublished": "2025-06-20"
    }
          })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Prime Day Deals 2025</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2"><strong>Description:   </strong>{product.description}</p>
            <p className="text-green-500 font-bold mb-2"><strong>Review:   </strong>{product.text}</p>
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

export default PrimeDay;