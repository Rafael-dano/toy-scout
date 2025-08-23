
// follow this template for your future blogs

import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const ToysForPreschoolKindergartenKids = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'Top Picks for Kids Starting Preschool or Kindergarten', // ✅ Blog post title
    description: 'Ease the first-day jitters with fun, age-appropriate toys and tools that help preschoolers and kindergartners feel confident and excited to learn.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/toys-for-preschool-kindergarten', // ✅ Blog slug (used in meta)
    datePublished: 'August 20, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'Coogam Sight Words Kids Learning Flash Cards', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91fFlD4BTPL._AC_SX679_.jpg', // ✅ Product image
      description: 'Interactive flash cards that teach sight words and improve spelling through matching and play.', // ✅ Short description
      text: "The Coogam flash cards make early reading fun and hands-on. Each card comes with movable letters that kids can place into word slots, which helps reinforce spelling and sight recognition. It’s perfect for preschoolers and early readers, and the self-correcting design makes it easy for kids to practice independently. A great tool for homeschool or after-school enrichment.", // ✅ Full review content
      price: '$24.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B0C27Y1PTC/ref=cm_sw_r_as_gl_api_gl_i_EDM9XF3HF993FFN0105E?linkCode=ml1&tag=more4kids0a-20&linkId=6e8657b69de1581e6aaef86aaea2ba57 ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'KOKODI LCD Writing Tablet', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71JXJ0I9e-L._AC_SX679_.jpg', // ✅ Product image
      description: 'Colorful electronic writing tablet for drawing, writing, and learning—perfect for car rides or quiet time.', // ✅ Short description
      text: "This tablet is a lifesaver for parents on the go. Kids can doodle, write letters, or draw colorful art over and over without wasting paper. It’s lightweight, super responsive, and includes a one-click erase button for instant reuse. Whether you're traveling, at a restaurant, or just want a screen-free activity, the KOKODI tablet delivers calm creative fun.", // ✅ Full review content
      price: '$19.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B082KFTF41/ref=cm_sw_r_as_gl_api_gl_i_ED3PWY9X1T79ZT0EK4KQ?linkCode=ml1&tag=more4kids0a-20&linkId=f18db9f5442069a4447b471314b881a4', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Math Games for Kids - Flash Cards for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/911q0OH2eRL._AC_SX679_.jpg', // ✅ Product image
      description: 'Engaging math flash card set for practicing addition, subtraction, multiplication, and division.', // ✅ Short description
      text: "These math flash cards turn learning into a game. They’re bright, organized by difficulty, and include fun visuals to keep kids motivated. Perfect for ages 5–10, whether your child is just starting with addition or brushing up on multiplication. Parents love the built-in progress tracking and kids feel accomplished as they master each level.", // ✅ Full review content
      price: '$25.00', // ✅ Price
      link: ' https://www.amazon.com/dp/B0B5NJFHHH/ref=cm_sw_r_as_gl_api_gl_i_N21YNECEBCQV3V15BF87?linkCode=ml1&tag=more4kids0a-20&linkId=a03c7fe5349c487c21ae2aac076cacc2', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Preschool Learning Activities - Reusable Handwriting Tracing Books for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81-9nI7qswL._AC_SX679_.jpg', // ✅ Product image
      description: 'A reusable tracing workbook designed to help preschoolers build confidence with handwriting, letters, and numbers.', // ✅ Short description
      text: 'This tracing book is a parent favorite for early learners. The reusable pages mean kids can practice again and again without waste, and the guided lines help them master handwriting basics. It’s mess-free, fun, and educational—ideal for car rides, quiet time, or daily skill-building routines at home.', // ✅ Full review content
      price: '$19.88', // ✅ Price
      link: ' https://www.amazon.com/dp/B0CN8TPHCN/ref=cm_sw_r_as_gl_api_gl_i_HSP156K64Y52EZVVB4JA?linkCode=ml1&tag=more4kids0a-20&linkId=11a809399a194b08b5a894c0cdca2786', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'The Magical Yet', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91D3fg8XQSL._SY342_.jpg', // ✅ Product image
      description: 'An inspiring picture book that teaches kids the power of perseverance and believing in “not yet.”', // ✅ Short description
      text: 'This beautifully illustrated book is more than a bedtime story—it’s a mindset shift. The Magical Yet encourages kids to embrace mistakes and see challenges as opportunities. Parents and teachers love it for sparking growth mindset conversations, and the rhymes keep little ones engaged. It’s a must for any kid’s bookshelf.', // ✅ Full review content
      price: '$18.99', // ✅ Price
      link: ' https://www.amazon.com/dp/1368025625/ref=cm_sw_r_as_gl_api_gl_i_FHXX74Y411DT2N2DR0VE?linkCode=ml1&tag=more4kids0a-20&linkId=bc6b9d63f8932f371c09ba837b790fad', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'If You Laugh, Im Starting This Book Over', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91dVK3gL8rL._SY342_.jpg', // ✅ Product image
      description: 'A hilarious, interactive story that challenges kids not to laugh—or else the story restarts!', // ✅ Short description
      text: 'This book is a guaranteed hit for giggly kids. The silly challenge keeps them locked in, and the playful writing makes read-aloud time unforgettable. It’s the kind of book they’ll want to read again (and again), even if it means starting over. Great for ages 4–8, especially if they have a cheeky sense of humor.', // ✅ Full review content
      price: '$18.99', // ✅ Price
      link: ' https://www.amazon.com/dp/0316424889/ref=cm_sw_r_as_gl_api_gl_i_M24XBGCE0Y9Y4FV9XBQ8?linkCode=ml1&tag=more4kids0a-20&linkId=83e8b93fa1a16ca32afd8d741c4d0c27', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Large Magic Grooved Practice Copybook for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81tFWigDrQL._AC_SY450_.jpg', // ✅ Product image
      description: 'A grooved handwriting workbook with disappearing ink—perfect for practicing writing over and over.', // ✅ Short description
      text: 'This copybook feels like magic. Kids trace the grooved letters with a special pen, and the writing disappears as it dries, ready to use again. It’s a tactile way to teach proper strokes, spacing, and form. Parents love how it keeps kids engaged without needing constant instruction. A clever tool for muscle memory and early writing skills.', // ✅ Full review content
      price: '$20.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0D1DYLP8K/ref=cm_sw_r_as_gl_api_gl_i_AYGDW9R3ZZF86ENH4P9W?linkCode=ml1&tag=more4kids0a-20&linkId=6c0483288721258dc3b3119a1a223f7a', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'I Am Stronger Than Anger', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/61hblM2V3QL._SY342_.jpg', // ✅ Product image
      description: 'A powerful children’s book that helps kids understand and manage big emotions like anger through storytelling.', // ✅ Short description
      text: "This book is a game-changer for emotional learning. With gentle language and relatable examples, it teaches children how to pause, breathe, and choose better responses to frustration. Parents say it opens up meaningful conversations at home and becomes a favorite for calming bedtime routines. Perfect for ages 3–8 learning emotional regulation.", // ✅ Full review content
      price: '$12.99', // ✅ Price
      link: 'https://www.amazon.com/dp/B08GB36SBW/ref=cm_sw_r_as_gl_api_gl_i_SFH9B96Y4XXBFJ906T7K?linkCode=ml1&tag=more4kids0a-20&linkId=1105148f939e48b7afdfffb56673fe00 ', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Phonics Flash Cards - Learn to Read in 20 Stages ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81jLSLBREAL._AC_SX679_.jpg', // ✅ Product image
      description: 'A comprehensive phonics flashcard system designed to teach kids to read step by step with 20 skill-building stages.', // ✅ Short description
      text: 'These flashcards are impressively structured and ideal for early readers. Each stage builds naturally on the last, which gives kids a strong reading foundation without overwhelm. Teachers and homeschooling parents love the guided progression and durability. It’s like having a mini phonics tutor in your pocket—perfect for ages 3+.', // ✅ Full review content
      price: '$19.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B093WSL82F/ref=cm_sw_r_as_gl_api_gl_i_H47821KDVPTSY0HZC5QP?linkCode=ml1&tag=more4kids0a-20&linkId=c7aa602f63b6e6e7bfa3cd5b61f7ace0', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Educational Toys for 3-5 Year Old Girls Gifts', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71v-O4a9tgL._AC_SX679_.jpg', // ✅ Product image
      description: 'A creative and colorful educational toy set designed to support fine motor skills, early learning, and imaginative play.', // ✅ Short description
      text: 'This set is a hit for both playtime and learning. It combines shapes, numbers, and color recognition with hands-on activities that keep little minds engaged. Parents appreciate the quiet, screen-free fun it provides, and kids love the bright, playful pieces. It’s a well-rounded gift for preschool girls.', // ✅ Full review content
      price: '$16.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B08NXCK6MY/ref=cm_sw_r_as_gl_api_gl_i_K0NEFJJDQ2BDG27NEQYA?linkCode=ml1&tag=more4kids0a-20&linkId=f79c2931b27c20b96c5cfc95aa235342', // ✅ Affiliate link
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

export default ToysForPreschoolKindergartenKids;