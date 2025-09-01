
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const SportsThemedPlayroomIdeas = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'How to Build a Sports-Themed Playroom', // ✅ Blog post title
    description: 'Design the ultimate playroom for your little athlete with sports-themed decor, furniture, and interactive toys.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/sports-themed-playroom-ideas', // ✅ Blog slug (used in meta)
    datePublished: 'September 1, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'Basketball Football Soccer Sports Wall Stickers ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71nbyBQkXEL._AC_SX679_.jpg', // ✅ Product image
      description: 'Bring energy and personality to any room with these vibrant sports-themed wall decals featuring basketball, football, and soccer designs.', // ✅ Short description
      text: "These wall stickers are a fun and easy way to upgrade a child's bedroom, playroom, or even a sports-themed nursery. They peel and stick easily, and the adhesive holds up well without damaging the paint. The graphics are bold, colorful, and eye-catching—perfect for young sports lovers who want their space to reflect their favorite games. What’s great is how versatile they are—you can arrange them however you want, and they add a lot of character without committing to paint or wallpaper.", // ✅ Full review content
      price: '$12.98', // ✅ Price
      link: ' https://www.amazon.com/dp/B0D791DJDH/ref=cm_sw_r_as_gl_api_gl_i_5CH7EQT3HQ58SB3930JR?linkCode=ml1&tag=more4kids0a-20&linkId=2fddf411f76270f270a83c6e878a1900 ', // ✅ Affiliate link
      rating: 3, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Mythinglogic Sports Equipment Garage Organizer', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/814DSlF7uxL._AC_SX679_.jpg', // ✅ Product image
      description: 'Keep your garage or play area tidy with this all-in-one sports storage rack built for balls, bats, and more.', // ✅ Short description
      text: "The Mythinglogic Sports Organizer is a must-have for families with active kids and cluttered garages. It offers compartments and racks for everything—from basketballs to skateboards—and it’s built with durability in mind. The heavy-duty steel frame stays solid under daily use, and the wheels make it easy to move. This organizer turns chaos into order and teaches kids to keep their gear in check. If you’re tired of stepping over soccer balls and tripping on helmets, this is the answer.", // ✅ Full review content
      price: '$199.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0B7RY8BJQ/ref=cm_sw_r_as_gl_api_gl_i_QC7R3RHT03GMGA0HTQ49?linkCode=ml1&tag=more4kids0a-20&linkId=50f6df536fb8726ee127a1f31250895c', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Giant Bean Bag Chairs for Adults and Kids ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81mkwXqVl3L._AC_SX679_.jpg', // ✅ Product image
      description: 'Oversized, ultra-soft bean bag chairs perfect for lounging, gaming, or reading—great for kids and adults alike.', // ✅ Short description
      text: "This bean bag chair delivers on comfort and size—it’s giant, plush, and instantly becomes the most coveted seat in the house. Whether it’s in a kids’ bedroom, a family game room, or a chill-out corner, it molds perfectly to your body and provides relaxing support for hours. The fabric cover is soft but durable, and it's washable too. It’s especially great for sensory-sensitive kids who love the cocooning feel. A big hit in both form and function.", // ✅ Full review content
      price: '$159.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DMNPN3YH/ref=cm_sw_r_as_gl_api_gl_i_VYZEWXTWEANED9WVY3TE?linkCode=ml1&tag=more4kids0a-20&linkId=4157a94e2cdc7a6343cebfaa18cd7d0a', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Basketball Rug for Boys Bedroom 3 x 5 Kids Football Carpet Water Fire Sports Rugs for Boys Bedroom Baseball', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71bnDHeT8oL._AC_SX679_.jpg', // ✅ Product image
      description: 'A soft and sporty area rug that brings basketball, football, and baseball fun to any kid’s room.', // ✅ Short description
      text: "This sports-themed rug is both decorative and functional—it ties together a themed room beautifully while providing a soft, cushioned surface to play on. The 3x5 size is just right for small to medium rooms, and the material feels good underfoot. It’s also low-pile, which makes it easy to vacuum and maintain. The fire and water print design adds a dramatic flair that kids love. Whether it’s for a bedroom or a play zone, this rug scores big points in comfort and style.", // ✅ Full review content
      price: '$38.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0D1BWW4W5/ref=cm_sw_r_as_gl_api_gl_i_QY8H2DAAVA6KGKZF938V?linkCode=ml1&tag=more4kids0a-20&linkId=6d8c709d7cf9ac937fd90806ed583e68', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'The Original Stuffed Animal Storage', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91pz7DDhpBL._AC_SX679_.jpg', // ✅ Product image
      description: 'A clever bean bag-style storage solution that holds dozens of stuffed animals and doubles as a comfy seat.', // ✅ Short description
      text: "If your house is overflowing with plush toys, this storage solution is a game changer. It’s essentially a stylish, oversized bean bag cover that you stuff with all those stuffed animals—freeing up space while creating a cozy chair. The fabric is durable, washable, and soft to the touch. Kids actually enjoy putting their toys away because it means they get a seat out of it! It's smart, functional, and a great way to cut clutter without hiding away the cuddly friends.", // ✅ Full review content
      price: '$28.95', // ✅ Price
      link: ' https://www.amazon.com/dp/B09TG8QP2Z/ref=cm_sw_r_as_gl_api_gl_i_67Z4MAVVMRS6Q66N14PC?linkCode=ml1&tag=more4kids0a-20&linkId=21ce4a19efc20bc136e8d15aac81a765', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Basketball Texture Laundry Basket ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/917S+jNeBuL._AC_SX679_.jpg', // ✅ Product image
      description: 'A stylish and functional laundry basket with a fun basketball texture, perfect for sporty kids’ rooms.', // ✅ Short description
      text: "This basketball-themed laundry basket is a slam dunk for any young athlete’s bedroom. It’s lightweight yet sturdy enough to stand on its own, and the basketball texture gives it a cool, sporty vibe. It holds a generous amount of laundry, toys, or even sports gear, making it both practical and decorative. The handles are strong and make it easy to carry to and from the laundry room. Great for encouraging kids to keep their rooms clean—without a fight!", // ✅ Full review content
      price: '$23.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0CGCVXHZK/ref=cm_sw_r_as_gl_api_gl_i_VHYVD9KA86VM2X9DB90M?linkCode=ml1&tag=more4kids0a-20&linkId=94a4dd71e2b4635ba39931f9008c6d29 ', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Collapsible Stool 2-Pack & Carry Bag + Clips', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61aLmpC5r4L._AC_SX679_.jpg', // ✅ Product image
      description: 'Portable, adjustable, and space-saving stools with carry bag and clips, perfect for families on the go.', // ✅ Short description
      text: "Portable, adjustable, and space-saving stools with carry bag and clips, perfect for families on the go.", // ✅ Full review content
      price: '$31.68', // ✅ Price
      link: ' https://www.amazon.com/dp/B0B5PHXKGQ/ref=cm_sw_r_as_gl_api_gl_i_J4R34175H0Z043046GHB?linkCode=ml1&tag=more4kids0a-20&linkId=3ac8dfbc66861b46c5f2649b9c1b6ebc', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'HUAHOO Kids Rug Round Fun Sport Rugs', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61QBTBYsUBL._AC_.jpg', // ✅ Product image
      description: 'A playful, round kids’ rug featuring a variety of sports balls for a bright and active bedroom look.', // ✅ Short description
      text: "This round sport-themed rug instantly brightens up any room with its fun design and cheerful colors. It includes graphics of multiple sports—soccer, basketball, football, and more—making it a hit with all kinds of young athletes. The material is soft underfoot and durable enough to handle rough play. It’s also easy to clean, which is a huge win for parents. Whether for a bedroom, reading nook, or playroom, this rug brings sporty energy and comfort together beautifully.", // ✅ Full review content
      price: '$19.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B06XRW4VHP/ref=cm_sw_r_as_gl_api_gl_i_DEWSN0S04Z53773HWQVF?linkCode=ml1&tag=more4kids0a-20&linkId=cc684d8af16c9a3e71a86cff5967dd59', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'GCI OUTDOOR Freestyle Rocker Outdoor Rocking Chair with Beverage Holder', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71uo4vy-fOL._AC_SX679_.jpg', // ✅ Product image
      description: 'A smooth-pivoting outdoor rocking chair with a built-in drink holder—perfect for tailgating, camping, or backyard relaxation.', // ✅ Short description
      text: "The GCI Outdoor Freestyle Rocker is the ultimate portable relaxation chair. Its shock-absorbing spring-action rocking technology makes it feel like a luxury rocker, even on uneven terrain. It’s surprisingly lightweight for its durability and folds flat for easy carrying. The beverage holder is a thoughtful touch, and the padded arms add comfort for longer lounging. Whether you're watching your kid's soccer game or relaxing by a campfire, this chair makes outdoor sitting feel like a treat.", // ✅ Full review content
      price: '$80.00', // ✅ Price
      link: 'https://www.amazon.com/dp/B087DRTZBF/ref=cm_sw_r_as_gl_api_gl_i_YVDH3T3EFXB8Q277MHA2?linkCode=ml1&tag=more4kids0a-20&linkId=3523300328fb772566fe048353318264 ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Lillys Love Stuffed Animal Hammock', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81AmMYd4+cL._AC_SX679_.jpg', // ✅ Product image
      description: 'A soft mesh hammock that stores stuffed animals off the floor while adding charm to your child’s room.', // ✅ Short description
      text: "Lilly’s Love hammock is a clever and charming way to organize overflowing stuffed animal collections. It stretches nicely across a corner or wall and holds dozens of plushies, clearing up floor and shelf space without hiding the toys away. The net is soft but strong, and the included hardware makes installation simple. It adds a cozy, decorative touch to the room while teaching kids about tidy storage. A great solution for parents trying to fight the daily plush pile chaos!", // ✅ Full review content
      price: '$9.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B01CO8HI1O/ref=cm_sw_r_as_gl_api_gl_i_VWQJY1Q8XVE58CDYTA5D?linkCode=ml1&tag=more4kids0a-20&linkId=15a3bfc689c180f05a6d308cfc957878', // ✅ Affiliate link
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

export default SportsThemedPlayroomIdeas;