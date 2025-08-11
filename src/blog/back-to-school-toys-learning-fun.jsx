
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const BackToSchoolToysLearningFun = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'Must-Have Back-to-School Toys That Make Learning Fun', // ✅ Blog post title
    description: 'Make back-to-school season exciting with toys that help kids learn and play. These educational picks add fun to homework time and boost engagement.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/back-to-school-toys-2025', // ✅ Blog slug (used in meta)
    datePublished: 'August 11, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'MAGNA-TILES Classic 100-Piece Magnetic Construction Set', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71bRwQFK1vL._AC_SX679_.jpg', // ✅ Product image
      description: 'These colorful magnetic tiles let kids explore geometry, symmetry, and architecture while having a blast. The 100-piece set is endlessly versatile—ideal for building castles, animals, rockets, or abstract sculptures.', // ✅ Short description
      text: 'MAGNA-TILES are the gold standard when it comes to open-ended building toys. As soon as the box is opened, creativity takes flight. The magnetic click is so satisfying, and the translucent colors light up beautifully in front of a window or on a light table. What’s most impressive is how it grows with your child—from early stacking fun to elaborate architectural feats later on. Its not just play—its physics, spatial reasoning, and storytelling wrapped into one. Parents will love the quiet focus it brings, and the durable tiles stand up to years of use. Easily one of the smartest investments for a toy room or classroom.', // ✅ Full review content
      price: '$103.19', // ✅ Price
      link: 'https://www.amazon.com/dp/B000CBSNRY/ref=cm_sw_r_as_gl_api_gl_i_EPCHQB7FW6DTC003FA10?linkCode=ml1&tag=more4kids0a-20&linkId=a55648113a45c8bc29443603bf5e3355', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
        title: 'Learning Resources STEM Explorers Brainometry', // ✅ Product title
        image: 'https://m.media-amazon.com/images/I/81jdgPVlTtL._AC_SX679_.jpg', // ✅ Product image
        description: 'Brainometry invites kids to crack geometric challenges using pattern blocks and visual problem-solving. Its a hands-on way to strengthen spatial awareness and early STEM logic.', // ✅ Short description
        text: "This set is a low-tech powerhouse. STEM Explorers Brainometry isn’t flashy, but it's brilliantly designed. The puzzles start easy and ramp up in difficulty, keeping kids engaged and thinking critically. What makes it special is how it blends fun and focus—your child will want to solve each card just to see the shapes fit together. The tactile feel of the blocks and visual satisfaction of getting it right make this a go-to for quiet afternoons or classroom centers. Bonus: it's compact enough to throw in a backpack for travel or waiting rooms.", // ✅ Full review content
        price: '$14.99', // ✅ Price
        link: ' https://www.amazon.com/dp/B097F49QYH/ref=cm_sw_r_as_gl_api_gl_i_RAB06VGEKBFND18NFJCD?linkCode=ml1&tag=more4kids0a-20&linkId=1e34776592c3a4f462df44ffc8aa833a', // ✅ Affiliate link
        rating: 4, // ✅ Number of scout badges (1 to 5)
      },
      {
        title: 'Gojmzo CVC Word Writing & Spelling Flash Cards', // ✅ Product title
        image: 'https://m.media-amazon.com/images/I/81ImELPmv1L._AC_SX679_.jpg', // ✅ Product image
        description: 'These dry-erase flash cards help kids practice Consonant-Vowel-Consonant (CVC) words through writing, tracing, and spelling. A fun, reusable way to support early literacy.', // ✅ Short description
        text: "CVC flash cards can feel repetitive, but Gojmzo’s set makes it engaging. The dry-erase format adds a layer of interactivity kids love—they're not just memorizing; they're writing, erasing, trying again. The cards are sturdy, the images are helpful, and the phonics progression feels natural. Whether you're homeschooling, tutoring, or just supplementing reading at home, this set gives structure to your sessions without feeling forced. It’s a quiet win for kids who need hands-on phonics without a screen.", // ✅ Full review content
        price: '$15.98', // ✅ Price
        link: 'https://www.amazon.com/dp/B0C1SV9S2P/ref=cm_sw_r_as_gl_api_gl_i_J5ZD67P7B0NHB8WPW6KE?linkCode=ml1&tag=more4kids0a-20&linkId=c628717abf9d9ed6da671245e058de8e', // ✅ Affiliate link
        rating: 4, // ✅ Number of scout badges (1 to 5)
      },
      {
        title: 'Pop it Practice with Addition, Subtraction, Multiplication & Division - Ideal for Math Learning and Skill Building.', // ✅ Product title
        image: 'https://m.media-amazon.com/images/I/911q0OH2eRL._AC_SX679_.jpg', // ✅ Product image
        description: 'This math-themed pop-it fidget toy combines learning and sensory play. Kids solve equations and pop their answers—great for reinforcing math skills through tactile fun.', // ✅ Short description
        text: "Who knew math could be this satisfying? This is a genius fusion of fidget toy and flashcard. The act of popping answers makes practice feel more like a game and less like a drill. You can practice arithmetic basics or even race to solve with a sibling. It’s portable, mess-free, and ideal for kids who need sensory input while learning. Teachers can use it in centers; parents can toss it in a car bag. It’s especially helpful for kids who get anxious around math—this format lowers the pressure and makes repetition feel natural.", // ✅ Full review content
        price: '$25.00', // ✅ Price
        link: ' https://www.amazon.com/dp/B0B5NJFHHH/ref=cm_sw_r_as_gl_api_gl_i_5X1A05KY2HG7FVJCZJ4J?linkCode=ml1&tag=more4kids0a-20&linkId=df7892fdfbccb573627e3e78b77005ed', // ✅ Affiliate link
        rating: 4, // ✅ Number of scout badges (1 to 5)
      },
      {
        title: 'Aizweb Sentence Building for Kids', // ✅ Product title
        image: 'https://m.media-amazon.com/images/I/811Ad7Z55+L._AC_SX679_.jpg', // ✅ Product image
        description: 'A hands-on educational kit with color-coded word tiles that help kids understand sentence structure, grammar, and storytelling through play.', // ✅ Short description
        text: "This kit is a language learning breakthrough. Aizweb's color-coded tiles make sentence building visual and intuitive, especially for younger learners or ESL students. It encourages experimentation—kids can mix and match silly phrases, correct grammar errors, and explore new vocabulary organically. It’s not a workbook; it’s a game where they happen to learn sentence structure along the way. Whether your child is struggling with writing or just starting to read, this kit helps bridge the gap with confidence-building results. Teachers will especially love its classroom versatility.", // ✅ Full review content
        price: '$12.99', // ✅ Price
        link: ' https://www.amazon.com/dp/B0BRKBN3MW/ref=cm_sw_r_as_gl_api_gl_i_YAAAQAZM5638084AFZZK?linkCode=ml1&tag=more4kids0a-20&linkId=f94b7f9a6431ab686b70098caf4db44b&th=1', // ✅ Affiliate link
        rating: 4, // ✅ Number of scout badges (1 to 5)
      },
      {
        title: 'Toddler Backpack with Buckles and Learning Activity Toys', // ✅ Product title
        image: 'https://m.media-amazon.com/images/I/81JTMalkrVL._AC_SY450_.jpg', // ✅ Product image
        description: 'This compact and colorful toddler backpack doubles as an on-the-go learning kit. With buckles, zippers, buttons, and textured materials, it promotes fine motor development while offering storage for small items.', // ✅ Short description
        text: "This backpack is more than adorable—it’s genius. Toddlers are naturally curious, and this pack lets them practice the skills they’re most eager to master: buckling, snapping, zipping, and unzipping. It's a quiet time lifesaver for car rides, restaurants, and waiting rooms. Plus, the backpack itself functions as storage, making cleanup easy. It encourages independence, hand-eye coordination, and concentration, all while feeling like play. It’s the kind of toy parents wish they had for every outing.", // ✅ Full review content
        price: '$22.99', // ✅ Price
        link: ' https://www.amazon.com/dp/B087ZN23CH/ref=cm_sw_r_as_gl_api_gl_i_8J1G423GSCRESDMAQQCW?linkCode=ml1&tag=more4kids0a-20&linkId=6255e5e65a4f49c03d2bf401f77d25f4', // ✅ Affiliate link
        rating: 5, // ✅ Number of scout badges (1 to 5)
      },
      {
        title: 'AirKid Stem Board Games, Interactive Logic Puzzles', // ✅ Product title
        image: 'https://m.media-amazon.com/images/I/81AEQCNoBZL._AC_SX679_.jpg', // ✅ Product image
        description: 'A hands-on STEM board game filled with logic puzzles, spatial challenges, and problem-solving fun. Designed to sharpen critical thinking while keeping kids off screens', // ✅ Short description
        text: "This set surprised me—in the best way. AirKid blends the joy of a classic board game with the brain-boosting power of STEM puzzles. Each challenge feels like a mini mission, and the tactile pieces add to the fun. Kids love the sense of accomplishment when they crack a tough level. It’s competitive, cooperative, and educational without ever feeling like “schoolwork.” Whether you're a parent, tutor, or teacher, this is one of those gems that brings logic to life through hands-on play.", // ✅ Full review content
        price: '$12.99', // ✅ Price
        link: ' https://www.amazon.com/dp/B0D97QZB2G/ref=cm_sw_r_as_gl_api_gl_i_X7HT6JZ9KXAE2ZMQGETK?linkCode=ml1&tag=more4kids0a-20&linkId=b99f165734dd88f2b566c637d7312f62', // ✅ Affiliate link
        rating: 3, // ✅ Number of scout badges (1 to 5)
      },
      {
        title: '250 Dolch Sight Word Writing Reading Spelling Games', // ✅ Product title
        image: 'https://m.media-amazon.com/images/I/81tyjFV4lnL._AC_SX679_.jpg', // ✅ Product image
        description: 'Packed with 250 Dolch words, this all-in-one literacy toolkit supports early reading through hands-on games, writing, tracing, and spelling practice.', // ✅ Short description
        text: "This set is a total game-changer for early readers. Sight words are foundational to reading fluency, and these cards make learning them interactive and engaging. The combination of tracing, spelling, and visual games keeps things fresh, which is key for kids who get bored easily. It’s an excellent tool for homeschoolers, tutors, or classroom centers. Kids love marking progress as they go, and the repetition happens naturally through fun. It's the kind of product that makes literacy click", // ✅ Full review content
        price: '$21.98', // ✅ Price
        link: ' https://www.amazon.com/dp/B0CWXK4CCZ/ref=cm_sw_r_as_gl_api_gl_i_NRWA18H6PR0TWMRG6T17?linkCode=ml1&tag=more4kids0a-20&linkId=98e383f0e299529e864e08b6e4e2f797', // ✅ Affiliate link
        rating: 4, // ✅ Number of scout badges (1 to 5)
      },
      {
        title: 'Play Doh Bulk Handout 42-Pack of 1-Ounce Modeling Compound Cans', // ✅ Product title
        image: 'https://m.media-amazon.com/images/I/81QQOmhZwOL._AC_SX679_.jpg', // ✅ Product image
        description: 'This bulk Play-Doh pack includes 42 colorful 1-ounce cans—perfect for party favors, classroom supplies, or travel-friendly creative fun.', // ✅ Short description
        text: 'This bulk pack is an absolute must for any parent, teacher, or event planner. Play-Doh is a timeless classic, and the 1-ounce size makes it ideal for individual use, sharing, or goody bags. The variety of colors sparks endless creativity, and the small containers help manage mess and waste. Whether you’re running a classroom art station or need quiet time fun at home, these mini cans are a lifesaver. Plus, it’s hard to beat the sensory satisfaction of squishing, rolling, and sculpting with fresh Play-Doh', // ✅ Full review content
        price: '$16.99', // ✅ Price
        link: ' https://www.amazon.com/dp/B087N9N6HH/ref=cm_sw_r_as_gl_api_gl_i_ESV8P50NSN5N0YKQH1JY?linkCode=ml1&tag=more4kids0a-20&linkId=1135f672dd6f3ac069eaba273f32ad98&th=1', // ✅ Affiliate link
        rating: 5, // ✅ Number of scout badges (1 to 5)
      },
      {
        title: 'Gojmzo Busy Board Montessori Toys for Toddler Boy Birthday Gifts', // ✅ Product title
        image: 'https://m.media-amazon.com/images/I/81rboPq+kYL._AC_SX679_.jpg', // ✅ Product image
        description: 'This Montessori-style busy board features zippers, laces, buttons, buckles, and other sensory tasks designed to develop fine motor skills and independence in young toddlers.', // ✅ Short description
        text: 'This busy board is a parent’s best friend. Inspired by Montessori principles, it gives toddlers the freedom to explore real-life tasks in a safe, playful way. Every element—from zippers to shoelaces—is there to build coordination and confidence. It’s compact enough to take anywhere, which makes it perfect for travel or quiet time. Kids are drawn to it again and again, and it grows with them as they master new skills. If you’re looking for a screen-free activity that truly engages, this one delivers.', // ✅ Full review content
        price: '$24.98', // ✅ Price
        link: ' https://www.amazon.com/dp/B0CPHTTKBZ/ref=cm_sw_r_as_gl_api_gl_i_dl_GMZPTFVSYGK7FCEM7XTD?linkCode=ml1&tag=more4kids0a-20&linkId=e40d47c06cd1338ecc4633c7559702c4', // ✅ Affiliate link
        rating: 4, // ✅ Number of scout badges (1 to 5)
      },
      {
        title: 'Travel Toy for Boys Girls, Wooden Board Game', // ✅ Product title
        image: 'https://m.media-amazon.com/images/I/81HkLnkMvbL._AC_SX679_.jpg', // ✅ Product image
        description: 'This portable wooden board game keeps kids engaged on the go with classic logic challenges and problem-solving fun—compact, durable, and perfect for travel.', // ✅ Short description
        text: "Travel toys can be hit or miss, but this one hits all the right notes. The wooden construction feels sturdy and high quality, and the gameplay is both simple and surprisingly addictive. Whether you’re on a road trip, plane ride, or just waiting for food at a restaurant, this toy holds kids’ attention without batteries or screens. It encourages focus, pattern recognition, and strategy—all wrapped up in a quiet, tactile format. A go-bag essential for families who travel often.", // ✅ Full review content
        price: '$14.99', // ✅ Price
        link: 'https://www.amazon.com/dp/B0CF6DJJSP/ref=cm_sw_r_as_gl_api_gl_i_EVE5YSHVCJZSPDPKHN5H?linkCode=ml1&tag=more4kids0a-20&linkId=3a5a55940d1f541b2446a27d2859d04d ', // ✅ Affiliate link
        rating: 5, // ✅ Number of scout badges (1 to 5)
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

export default BackToSchoolToysLearningFun;