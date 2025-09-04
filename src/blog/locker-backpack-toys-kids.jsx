
// follow this template for your future blogs
 
import React from 'react';
import { Helmet } from "react-helmet";
// import backToSchoolScout from "../../assets/back-to-school-scout.png";  // adjust path if needed... you can remove one of the .. to make path better aswell   88partner

const LockerBackpackToysKids = () => {
  // ✅ Edit this section for each blog
  const blogMeta = {
    title: 'Must-Have Toys for Your Kid’s Locker or Backpack', // ✅ Blog post title
    description: 'From fidget tools to fun gadgets, discover the top toys your kids will love to stash in their backpack or locker this school year.', // ✅ Blog description
    image: 'https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png', // ✅ Blog hero image
  //image: backToSchoolScout, // ✅ Now using the imported image variable ...... use if you have image in file you want to use instead  88partner
    slug: '/blog/toys-for-kids-locker-backpack', // ✅ Blog slug (used in meta)
    datePublished: 'September 4, 2025', // ✅ Published date
  };

  // ✅ Edit this section to change products shown in the blog
  const products = [
    {
      title: 'Flexible Fidget Sticks for Stress Anxiety', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71Z4l4xWqpL.__AC_SX300_SY300_QL70_ML2_.jpg', // ✅ Product image
      description: 'Colorful, bendable fidget sticks that help reduce anxiety and improve focus through sensory play.', // ✅ Short description
      text: "These flexible fidget sticks are a simple yet effective tool for easing stress and keeping hands busy. Kids love twisting, bending, and looping them into shapes—and adults find them soothing too. They’re quiet, durable, and perfect for classrooms, road trips, or unwinding at home. The texture adds a pleasant tactile experience that’s great for sensory needs, especially for kids with ADHD or anxiety. Compact and fun, these are an easy win for calming play on the go.", // ✅ Full review content
      price: '$9.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0F9KY65MH/ref=cm_sw_r_as_gl_api_gl_i_M0TZZZK2QWXGFGJKMRVQ?linkCode=ml1&tag=more4kids0a-20&linkId=8465dfb3708abc4a7b48636dc0e8022f', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Transformable Fidget Spinners 4 Pcs for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71mr6NdQE4L._AC_SX679_.jpg', // ✅ Product image
      description: 'A 4-pack of colorful fidget spinners that twist and transform for extra satisfying sensory play.', // ✅ Short description
      text: "This set of transformable fidget spinners takes classic spinning fun to the next level. Each spinner can bend and shape into new forms, giving kids endless ways to fidget creatively. They spin smoothly and quietly, with bright colors that make them as fun to watch as they are to use. Great for sensory play, focus boosts, or simply unwinding, they’re ideal for kids at home, school, or in the car. Bonus: they’re durable and come in a pack, so siblings or friends can join in too.", // ✅ Full review content
      price: '$16.98', // ✅ Price
      link: ' https://www.amazon.com/dp/B09LMBLYF1/ref=cm_sw_r_as_gl_api_gl_i_8A9XYJGAK45D9R27XP72?linkCode=ml1&tag=more4kids0a-20&linkId=3066ddf13caffa656558b0e48e70eb59', // ✅ Affiliate link
      rating: 5, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: '4Es Novelty Expandable Breathing Ball Sphere ', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81pxcuwYOXL._AC_SX679_.jpg', // ✅ Product image
      description: 'A collapsible, expandable sphere designed to encourage deep breathing and calm through mindful play.', // ✅ Short description
      text: "This expandable ball isn’t just a toy—it’s a mindfulness tool. Kids naturally engage with its expanding and contracting movement, mimicking the rhythm of slow, deep breathing. It’s fantastic for calming anxious energy or as part of a bedtime routine. Teachers also love using it during classroom transitions to help children reset and refocus. Durable and lightweight, it’s a gentle way to introduce breathing exercises to kids in a playful, non-intimidating format.", // ✅ Full review content
      price: '$13.69', // ✅ Price
      link: 'https://www.amazon.com/dp/B07N99K84Q/ref=cm_sw_r_as_gl_api_gl_i_TGKQQE1P9JAHWJPJEQ3V?linkCode=ml1&tag=more4kids0a-20&linkId=1f731d879cdb5c6e570ed19cb84fdd0f ', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: '50 Pcs Fidget Toys Pack', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/91HcZgWYNzL._AC_SX679_.jpg', // ✅ Product image
      description: 'A mega pack of 50 mini fidget toys perfect for party favors, classroom rewards, or stress relief.', // ✅ Short description
      text: "This massive fidget toy bundle has something for everyone—pop-its, squishies, spinners, stretchy strings, and more. Whether you’re stocking up for party bags or looking to keep your sensory seeker entertained, this pack is full of variety and value. Each toy is lightweight and portable, making it easy to toss in a backpack or desk drawer. It’s a lifesaver for teachers, therapists, or parents who need a grab-and-go stress relief option. Great for kids 3+ and even fun for adults who like to fidget too!", // ✅ Full review content
      price: '$24.95', // ✅ Price
      link: ' https://www.amazon.com/dp/B0973R7JMP/ref=cm_sw_r_as_gl_api_gl_i_9039VWV7XWS4DEDGW902?linkCode=ml1&tag=more4kids0a-20&linkId=234bb15bb3bcfabc8c3c10cf4e33e70a', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Sensory Toys for Kid 6PC', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71SPLXfaQhL._AC_SX679_.jpg', // ✅ Product image
      description: 'A curated 6-piece set of sensory tools designed to support focus, calm, and tactile stimulation.', // ✅ Short description
      text: "This set is a fantastic starter kit for kids who benefit from sensory input. Each toy offers a unique texture or movement—stretchy, squishy, or tactile—that helps reduce anxiety and sharpen focus. They're ideal for car rides, homework time, or managing emotions in the classroom. The variety keeps things fresh and engaging, and the size makes them easy to pack into a school bag or therapy kit. A well-rounded set that supports calm through interactive, soothing play.", // ✅ Full review content
      price: '$6.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0DFWMXN41/ref=cm_sw_r_as_gl_api_gl_i_8W9EJ8CEHSCT96T9JJWQ?linkCode=ml1&tag=more4kids0a-20&linkId=3aaf049a7814eb848b14daf06850ccfd', // ✅ Affiliate link
      rating: 3, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: '9 Pcs Math Fidget Spinners', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71ihIwiY0PL._AC_SX679_.jpg', // ✅ Product image
      description: 'Math-themed fidget spinners that make learning numbers fun through movement and play.', // ✅ Short description
      text: "These math fidget spinners are a brilliant combo of education and sensory play. With numbers and equations printed on each spinner, kids can stay entertained while reinforcing basic math skills. The spinning motion captures attention, making it easier for children to engage with numbers in a hands-on way. Ideal for home learning, classroom breaks, or even tutoring sessions, they offer a playful approach to learning that helps kids with focus and retention. A fun and functional tool for ages 5+!", // ✅ Full review content
      price: '$13.48', // ✅ Price
      link: ' https://www.amazon.com/dp/B0D9VSV9MJ/ref=cm_sw_r_as_gl_api_gl_i_dl_H0TZJRYJSXCVJDN8R90Y?linkCode=ml1&tag=more4kids0a-20&linkId=8e4b0ca0234c9af547600516bb25d167', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Sensory Fidget Magnet Toys for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71Xk93hfafL._AC_SX679_.jpg', // ✅ Product image
      description: 'Colorful magnetic rings that click, spin, and snap to support sensory play and focus.', // ✅ Short description
      text: "These magnetic fidget rings offer endless combinations of motion and tactile satisfaction. Kids love the satisfying “snap” of magnets connecting and the smooth glide when they spin them. They’re perfect for promoting concentration during homework, calming restless hands, or simply offering stress relief on the go. The strong magnets are encased in safe, smooth plastic that’s durable for long-term use. These toys are equally fun for teens and adults too—great for stress, fidgeting, or creative play.", // ✅ Full review content
      price: '$12.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B0F4WP1THN/ref=cm_sw_r_as_gl_api_gl_i_KB97PDM21QMPCRXSQ06D?linkCode=ml1&tag=more4kids0a-20&linkId=055a9b364d4fa96cbd2cf8a25af7ce50', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: '8Pcs Fidgets Wacky Tracks Fidget Toys for Kids', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71tgdRDuh6L._AC_SX679_.jpg', // ✅ Product image
      description: 'Interlocking wacky tracks that click, twist, and bend for sensory engagement and creativity.', // ✅ Short description
      text: "These Wacky Tracks are a tactile dream—clicky, bendy, and satisfying in every move. Each track segment snaps into place, allowing kids to build shapes, patterns, or just enjoy the repetitive motion. They’re especially helpful for children with ADHD or sensory processing needs, offering a calm, quiet way to stay focused. They’re small enough to toss in a backpack and sturdy enough to last through many hours of twisting fun. A simple, creative fidget toy that never gets boring.", // ✅ Full review content
      price: '$6.99', // ✅ Price
      link: ' https://www.amazon.com/dp/B08LVFSWSN/ref=cm_sw_r_as_gl_api_gl_i_YBSV6AY88CNET777J67F?linkCode=ml1&tag=more4kids0a-20&linkId=5488ecb91ddb0c3174cf94d3b8717a07', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'CAILINK Liquid Motion Bubbler - 3 Pack', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/71swJu8O0AL._AC_SX679_.jpg', // ✅ Product image
      description: 'Tranquil liquid bubblers that offer calming, visual stimulation as droplets cascade downward.', // ✅ Short description
      text: "These liquid motion bubblers are mesmerizing to watch—colorful droplets float and fall at a soothing pace that naturally helps calm the mind. Great for reducing anxiety, they’re perfect on a desk, in a sensory corner, or even at bedtime. The smooth, predictable movement promotes relaxation and visual focus, making them excellent tools for kids who need gentle sensory input. With three in a pack, you can keep one in multiple rooms or share with siblings. No batteries, no noise—just peaceful motion.", // ✅ Full review content
      price: '$12.88', // ✅ Price
      link: ' https://www.amazon.com/dp/B07ZPZGT72/ref=cm_sw_r_as_gl_api_gl_i_20P9FVX70C69WB6DKT85?linkCode=ml1&tag=more4kids0a-20&linkId=655048611228b21721e13b2550cfe656', // ✅ Affiliate link
      rating: 4, // ✅ Number of scout badges (1 to 5)
    },
    {
      title: 'Skillmatics Foil Fun - Animals', // ✅ Product title
      image: 'https://m.media-amazon.com/images/I/81UWeAwBVHL._AC_SX679_.jpg', // ✅ Product image
      description: 'A creative foil art kit where kids design sparkling animal scenes with no mess and tons of fun.', // ✅ Short description
      text: "This foil art kit is a huge hit with creative kids who love color and sparkle. It comes with pre-designed animal boards and vibrant foil sheets—just press, peel, and reveal! The process is simple enough for younger kids but satisfying enough to keep older kids engaged. It’s mess-free, so parents love it too. Not only does it boost creativity, but it also helps develop fine motor skills and focus. A perfect indoor activity for travel, parties, or rainy days.", // ✅ Full review content
      price: '$24.97', // ✅ Price
      link: ' https://www.amazon.com/dp/B0B8JF3SXY/ref=cm_sw_r_as_gl_api_gl_i_A50X6AMRGPNVYSFHDFFM?linkCode=ml1&tag=more4kids0a-20&linkId=c52cab35f8692ee53538d791097ce746', // ✅ Affiliate link
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

export default LockerBackpackToysKids;