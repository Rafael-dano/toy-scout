
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const BestKidsBackpacksSupplies2025 = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'Best Kids’ Backpacks, Lunch Boxes & Supplies for 2025', // ✅ Blog post title
    description: 'Start the school year right with the coolest backpacks, lunch kits, and kid-approved supplies that combine function, fun, and style.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/best-kids-school-supplies-2025', // ✅ Blog slug (used in meta)
    datePublished: 'August 13, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'Back to School Supply Box Grades K-5 - School Supply Boxes', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/811TF4VApiL._SX425_.jpg', // ✅ Product image
      description: 'A convenient, all-in-one school supply box filled with essentials for students in grades K–5. Includes markers, pencils, glue sticks, scissors, and more—pre-packed for an easy back-to-school experience.', // ✅ Short description
      text: "As a parent, this box takes a load off your plate. Everything your child needs for the first day and beyond is neatly packaged and ready to go. I love how it’s tailored to multiple grade levels, which makes it perfect if you’ve got more than one kid heading back. The quality of the supplies is surprisingly great—crayons that don’t break instantly, scissors that actually cut, and glue sticks that stick. It’s the kind of practical purchase that saves you from chaotic last-minute Target runs.", // ✅ Full review content
      price: '$32.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B07FG9K4ZV/ref=cm_sw_r_as_gl_api_gl_i_5MDPPVDPF5E6V2BS2FXB?linkCode=ml1&tag=more4kids0a-20&linkId=08b0602a1d1a4605e9f41f4e71925c29&th=1', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'ZOKU Kids Pocket Utensil Set, Dino - Kids Silverware Set', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61r1AVAC+XL._AC_SX679_.jpg', // ✅ Product image
      description: 'A compact, reusable utensil set designed just for kids. Comes with a fork, spoon, and knife in a fun dinosaur-themed travel case that fits in any lunchbox.', // ✅ Short description
      text: "This is one of those why didn’t I buy this sooner? items. The ZOKU Dino set is adorable, but it’s also super practical. The utensils are sturdy, dishwasher-safe, and sized perfectly for small hands. My favorite part? The carrying case keeps everything clean before lunch and mess-free after. Ideal for school, road trips, or even picnics, this little set helps kids eat more independently—and looks cool doing it.", // ✅ Full review content
      price: '$15.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DB57VV73/ref=cm_sw_r_as_gl_api_gl_i_9R7K7AJDSKT8SP8W4G9E?linkCode=ml1&tag=more4kids0a-20&linkId=6d43efb71d38d250d514cab9d865f2de', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Fit & Fresh Cool Coolers Kids Lunch Box Ice Packs', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71CW+QGD3jL._AC_SX679_.jpg', // ✅ Product image
      description: 'Slim, reusable ice packs designed to keep lunches cool for hours. Perfectly sized to fit in any standard lunchbox or snack bag.', // ✅ Short description
      text: "These Cool Coolers are low-key superheroes of the lunchbox world. They don’t take up much room but still keep food fresh till lunch. I’ve used them for school days, summer camps, and even grocery runs. They freeze quickly, don’t leak, and come in a pack of four—so there’s always a spare. They’re a must-have if you pack lunch even a couple times a week.", // ✅ Full review content
      price: '$10.81', // ✅ Price
      link: ' https://www.amazon.com/dp/B00LH10GPA/ref=cm_sw_r_as_gl_api_gl_i_SF88GG541MSE3GWX5HKX?linkCode=ml1&tag=more4kids0a-20&linkId=1961e5425af12fcb45f8a256309978ab', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'LEDAOU Backpack for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/A1IWWPO-MvL._AC_SX569_.jpg', // ✅ Product image
      description: 'A stylish and roomy kids’ backpack designed for durability and comfort. Comes in vibrant patterns and includes multiple compartments for books, supplies, and water bottles.', // ✅ Short description
      text: "This backpack checks all the boxes—sturdy zippers, thick straps, and enough compartments to keep things organized. It’s big enough to hold folders and lunch boxes but not so bulky that it overwhelms smaller kids. The patterns are bright and fun, which means your child will actually want to carry it. Bonus: it's water-resistant, so rainy days won’t be a disaster. It's one of the best value backpacks out there.", // ✅ Full review content
      price: '$29.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0C6D6L5JC/ref=cm_sw_r_as_gl_api_gl_i_RH790JY0KH5THZ84WH87?linkCode=ml1&tag=more4kids0a-20&linkId=7a9da31bbf3333d9d17d52f6528b219a ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'VASCHY Kids Backpack Lunch Bag Set', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71a5LzA7F2L._AC_SY450_.jpg', // ✅ Product image
      description: 'A matching backpack and lunch bag set for school-aged kids. Durable, waterproof, and ergonomically designed to make school days easier.', // ✅ Short description
      text: "You can’t go wrong with a backpack and lunchbox bundle—especially when they look this good. The VASCHY set offers comfort, style, and functionality all in one. The backpack has a padded back and straps, which makes a big difference for long school days. The lunch bag is insulated and easy to clean. Together, they create a coordinated setup that’s as cute as it is useful. Highly recommended for kids who want a fresh start this school year.", // ✅ Full review content
      price: '$34.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0CM2XSH4R/ref=cm_sw_r_as_gl_api_gl_i_SZHWJSZ3PK51SP50EZG9?linkCode=ml1&tag=more4kids0a-20&linkId=7b78cc948d3391324e8927b36ddd96f3', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Lunch Box for Elementary Primary Kindergarten School Bag', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71Fhb5vxOIL._AC_SY450_.jpg', // ✅ Product image
      description: 'A fun and functional lunch box designed for younger students, with vibrant prints and easy-to-use zippers for tiny hands.', // ✅ Short description
      text: 'This lunch box is the perfect blend of playfulness and practicality. With adorable patterns that kids will love and a roomy interior to fit sandwiches, snacks, and a juice box, it checks all the boxes for daily use. The insulation keeps food fresh, while the durable material holds up to the rough-and-tumble of school life. Ideal for preschool through early elementary, this is a dependable choice that doesn’t compromise on style.', // ✅ Full review content
      price: '$23.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0CZT8Q78F/ref=cm_sw_r_as_gl_api_gl_i_HGBDVCYE21YYZA895SB9?linkCode=ml1&tag=more4kids0a-20&linkId=e370696ce73cd5b0b747733c9ee24dd2', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'J World New York Unisex Kids Backpack with Lunch Bag Set,', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91K6FiYHNbL._AC_SY450_.jpg', // ✅ Product image
      description: 'A stylish, all-in-one backpack and lunch bag combo built for comfort and convenience.', // ✅ Short description
      text: 'J World delivers a backpack-lunch bag duo that blends fashion with function. The rolling backpack design is especially helpful for younger kids with heavier loads, and the matching insulated lunch bag clips on easily for a coordinated look. Sturdy zippers, breathable padding, and an extendable handle make this a travel-friendly favorite. Whether heading to school, a sleepover, or an after-school activity, this set is prepared for it all.', // ✅ Full review content
      price: '$34.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B07BRYY1RR/ref=cm_sw_r_as_gl_api_gl_i_56C9GNP1HFHG3X9BQ07J?linkCode=ml1&tag=more4kids0a-20&linkId=4b75a0a5d4e09fabd2b7b3add5ed25d9', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Fimibuke Bento Lunch Box for Kids with Thermos', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91bCmpeUDsL._AC_SX679_.jpg', // ✅ Product image
      description: 'A bento-style lunch box with multiple compartments and a matching thermos, built to keep meals organized and warm.', // ✅ Short description
      text: 'The Fimibuke Bento Box is a lunch game-changer. Designed to encourage healthy eating and meal variety, it features leak-proof compartments perfect for fruits, snacks, and main courses. The included thermos keeps soups or warm dishes hot until lunchtime. Parents will appreciate the durable, BPA-free materials, while kids will love the fun, colorful design. Great for picky eaters who thrive on options!', // ✅ Full review content
      price: '$39.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0F7Y3C8RM/ref=cm_sw_r_as_gl_api_gl_i_WWGPWDEB6CX1V5DWHAS6?linkCode=ml1&tag=more4kids0a-20&linkId=6120c4a813113782d36ef69ab2de7fc9', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Dinosaur Lunch Box for Kids with Secret Compartment', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71R3fuqQ0nL._AC_SX679_.jpg', // ✅ Product image
      description: 'A roarsome lunch box featuring bold dino graphics and a surprise storage pocket!', // ✅ Short description
      text: 'This lunch box brings prehistoric fun to lunchtime. The dino-themed exterior immediately grabs kids’ attention, while the hidden compartment adds an element of surprise—perfect for storing a note, snack, or tiny toy. It’s roomy, easy to clean, and includes a strap for carrying comfort. For dino-loving explorers, this lunch box is both a conversation starter and a practical solution for school meals.', // ✅ Full review content
      price: '$28.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0FCMM9BFJ/ref=cm_sw_r_as_gl_api_gl_i_CVQD6RZXAVCFQJZF02XA?linkCode=ml1&tag=more4kids0a-20&linkId=6ac202275d6b72633eb6191be6299c17', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'KOABBIT Pencil gripper kids/toddler handwriting aid tools for beginners,', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/515arIA7knL._AC_SY450_.jpg', // ✅ Product image
      description: 'Ergonomic pencil grips that help young learners develop correct penmanship posture.', // ✅ Short description
      text: 'These KOABBIT pencil grippers are a hidden gem for early writers. Soft yet structured, they guide little fingers into the correct tripod grip, helping to reduce hand fatigue and improve control. Whether your child is just starting to write or needs some handwriting support, these tools offer a colorful and comfortable boost. They’re easy to slip onto most standard pencils and come in a variety of fun shapes that make writing more enjoyable.', // ✅ Full review content
      price: '$5.69', // ✅ Price
      link: ' https://www.amazon.com/dp/B07PF648KM/ref=cm_sw_r_as_gl_api_gl_i_7BKAKC7JPB1RKZNRAXAZ?linkCode=ml1&tag=more4kids0a-20&linkId=5b93e3e711ddc90a1df5becffd5952df', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'The Classics Soft Foam Pencil Grips', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71RUWVqCPRL._AC_SY450_.jpg', // ✅ Product image
      description: 'Classic foam pencil grips that provide cushioned control and comfort during writing.', // ✅ Short description
      text: 'These soft foam grips are a tried-and-true solution for improving writing comfort and pencil control. Ideal for both beginners and students who tire easily when writing, they slip easily over standard pencils and reduce finger strain. The lightweight foam texture gives just the right balance between softness and structure, making them a solid classroom companion. Simple, effective, and great for everyday use.', // ✅ Full review content
      price: '$5.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B00GN1YN8U/ref=cm_sw_r_as_gl_api_gl_i_2MERGJT8BB832E778KF7?linkCode=ml1&tag=more4kids0a-20&linkId=90155a003cc491cc401799bfbf543545&th=1', // ✅ Affiliate link
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

export default BestKidsBackpacksSupplies2025;