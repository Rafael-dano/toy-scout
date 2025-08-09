
import React from 'react';
import { Helmet } from "react-helmet"

// change links to this page
// find new products that fit niche then change them out

const BackEarly = () => {
  const products = [
    // campaign for the one below
    {
        title: ' KOKODI Talking Pen Books Sets',
        image: ' https://m.media-amazon.com/images/I/811LNtOedEL._AC_SX679_.jpg',
        description: ' Interactive Audio Sound Books Kids Learning Electronic Toys for Boys Girls, Autism Sensory Games, Early Educational Gifts Birthday Gifts for Toddlers Kids Age 2 3 4 5.',
        text: "Unlock the magic of early literacy with the KOKODI Talking Pen Books Set—a breakthrough in interactive learning that brings storytime to life with every tap. Kids simply point the pen to words or pictures and hear them spoken aloud, reinforcing vocabulary, pronunciation, and curiosity in one click. This set isn’t just educational—it’s enchanting, especially for reluctant readers or ESL learners who benefit from auditory support. Some families may wish for a wider book variety or deeper volume control, but the audio quality and interactivity are on point. It's a viral favorite among parents who want to turn learning into an engaging, empowering experience—without screens or stress.",
        price: '$49.99',
        link: ' https://www.amazon.com/dp/B0DFCKK62Q/ref=cm_sw_r_as_gl_api_gl_i_8RGAZ1EASZ499842E0VN?linkCode=ml1&tag=more4kids0a-20&linkId=c9f6cd00f93c4089956ef1d2e8593e67',
      },
      {
        title: ' Skillmatics Poke-in Art ',
        image: ' https://m.media-amazon.com/images/I/819CAH2mu1L._AC_SX679_.jpg',
        description: ' Magical Princesses, Mess-Free Fun for Kids, DIY Wood Craft Kits, Creative Activity, Gifts for Girls & Boys Ages 4, 5, 6, 7, 8, 9.',
        text: "The Skillmatics Poke-in Art set is a fresh take on sensory art that gives little hands a calming creative escape. Each kit comes with vibrant poke-in templates and soft, safe tools that kids use to complete colorful images—no glue or mess required. It's perfect for promoting hand-eye coordination and patience while sparking joy through tactile feedback. Parents love that it’s mess-free and travel-friendly, though younger kids may need help inserting the pieces with precision. This trending craft set is a perfect viral pick for quiet-time fun, therapy support, or rainy-day creativity without screens.",
        price: '$24.97',
        link: ' https://www.amazon.com/dp/B0CZP42TND/ref=cm_sw_r_as_gl_api_gl_i_569AE5NDR31H7V5QRB2H?linkCode=ml1&tag=more4kids0a-20&linkId=1fab1563548285e0ca585817ab5609ab&th=1',
      },
      {
        title: 'Dear Teacher: A Funny Back To School Book For Kids About First Day ',
        image: ' https://m.media-amazon.com/images/I/91ge0eMEIAS._SY342_.jpg',
        description: ' Dear Teacher is a hilarious collection of letters from Michael to his new teacher explaining why he cant go to class.',
        text: " Dear Teacher is more than just a back-to-school book—it’s a laugh-out-loud, heartwarming story that turns first-day jitters into giggles. Written as a series of imaginative letters from a young boy to his teacher, this book captures the playful chaos of a child’s creativity and the emotional comfort of being understood. It’s a read-aloud hit with parents, teachers, and kids alike, especially for those facing the first-day scaries. While it’s best for ages 5–8, even older kids appreciate its humor. This delightful storybook is a viral gem for calming school nerves and celebrating curiosity with a huge smile.",
        price: '$10.99',
        link: 'https://www.amazon.com/dp/1402242689/ref=cm_sw_r_as_gl_api_gl_i_M4Y09BSJZRWMSBXBGM7D?linkCode=ml1&tag=more4kids0a-20&linkId=41ebb9425eea8b55d61bada697ac2361 ',
      },
      {
        title: 'Colorations Construction Paper for Kids ',
        image: ' https://m.media-amazon.com/images/I/61P8pupRClL._SX522_.jpg',
        description: ' 7 Bright Colors - 600 Bulk Sheets of 9"X12" - Assorted Pack of Heavy-Duty Craft Paper, Bulk School Supplies.',
        text: "Colorations Construction Paper delivers a rainbow of possibilities in every pack, giving kids a creative outlet for drawing, folding, cutting, and building. The texture is ideal for crayons, markers, glue, and even beginner origami—making it a classroom staple and craft drawer essential. With bold, non-bleeding colors and consistent thickness, it holds up well to imaginative wear and tear. Some users note that it’s thinner than cardstock, but for everyday creativity, it's just right. Whether for seasonal crafts or DIY projects, this paper is a viral go-to for parents, teachers, and little artists with big ideas.",
        price: '$41.99',
        link: 'https://www.amazon.com/dp/B00826ENU2/ref=cm_sw_r_as_gl_api_gl_i_NH09HJP9E6DDRQFWG9J5?linkCode=ml1&tag=more4kids0a-20&linkId=f60ab506f6403fb658e7f2a6502511ea&th=1 ',
      },
      {
        title: ' Crayola Broad Line Markers (12pk)',
        image: ' https://m.media-amazon.com/images/I/71C7rME7FIL._AC_SX679_.jpg',
        description: ' Bulk School Coloring Markers for Kids, Teacher Classroom Must Haves, Back to School Essential Supplies for Preschool & Kindergarten.',
        text: "Crayola’s Broad Line Markers are the all-time classic heroes of any art supply kit. With vibrant colors and durable tips, they’re made for bold strokes, creative expression, and hours of colorful fun. The ink dries quickly, the caps click shut snugly, and parents trust Crayola’s non-toxic formula. While the tips are broad and may not suit ultra-detailed art, they’re perfect for posters, doodles, and creative brainstorming. These markers go viral year-round for back-to-school supplies and holiday gifts—and for good reason: they’re the gold standard for creativity in a box.",
        price: '$39.99',
        link: ' https://www.amazon.com/dp/B08CHHT833/ref=cm_sw_r_as_gl_api_gl_i_GPGFK01600Y2PSNSCDDZ?linkCode=ml1&tag=more4kids0a-20&linkId=9caf4d46d5ad3e8218dffa39cb3fa924',
      },
      {
        title: 'KOKODI LCD Writing Tablet, ',
        image: ' https://m.media-amazon.com/images/I/71JXJ0I9e-L._AC_SX679_.jpg',
        description: 'Gifts for Kids，10 Inch Colorful Toddler Doodle Board Drawing Tablet, Erasable Reusable Electronic Drawing Pads, Educational and Learning Toys for Kids .',
        text: "Turn screen time into creativity time with the KOKODI LCD Writing Tablet, a mess-free, reusable tool that brings doodling, practicing letters, or solving math problems to life. This lightweight tablet is designed for tiny hands and big imaginations, making it perfect for road trips, restaurants, or quiet play at home. It’s durable, eco-friendly, and doesn’t strain the eyes, making it a smart screen alternative. The simplicity of a one-button erase and long battery life adds to the convenience. While older kids might eventually outgrow it, its value for early learners is undeniable. For parents who want to spark creativity and reduce paper waste, this tablet is a total win.",
        price: '$19.99',
        link: 'amazon.com/dp/B082KFTF41/ref=cm_sw_r_as_gl_api_gl_i_KH28FF3Q2CJX8VC676JJ?linkCode=ml1&tag=more4kids0a-20&linkId=c5cab9c71e9860d42235fe8841948d74 ',
      },
      {
        title: ' Learning Resources STEM Explorers - Magnet Movers',
        image: 'https://m.media-amazon.com/images/I/81iFkjk1OCL._AC_SX679_.jpg ',
        description: ' Ages 5+, Magnet Movers, Critical Thinking Skills, STEM Certified Toys, Magnets Kids,Magnet Set,Back to School Supplies,39 Pieces.',
        text: "Get ready to introduce your child to the magic of magnets with the STEM Explorers Magnet Movers set! This hands-on kit turns scientific principles into real-world fun by letting kids explore push-and-pull forces, magnetic fields, and creative challenges. Ideal for ages 5 and up, it’s educational without feeling like homework. Kids will be fascinated by the experiments, while parents will love that it encourages critical thinking, problem-solving, and early STEM learning. Some activities may require adult supervision at first, but the payoff is worth it. If you're looking to boost your child’s science confidence while keeping them entertained, this is a magnetic must-have.",
        price: '$16.99',
        link: ' https://www.amazon.com/dp/B07MJCW4H7/ref=cm_sw_r_as_gl_api_gl_i_4CJVRBQV6DZ8J92SF724?linkCode=ml1&tag=more4kids0a-20&linkId=4a395ba99590185a1c5955ec4a9352f2',
      },
      {
        title: ' School Zone Big Preschool Workbook',
        image: ' https://m.media-amazon.com/images/I/817laBhNaoL._SY385_.jpg',
        description: ' 320 Spiral-Bound Pages, Pre-K, Colors, Shapes, Numbers, Early Math, Alphabet, Pre-Writing, Phonics, Following Directions, Ages 3-5 .',
        text: "The School Zone Big Preschool Workbook is every parent’s secret weapon for boosting early learning skills at home. Jam-packed with colorful pages that teach numbers, letters, shapes, and more, this workbook strikes the perfect balance between learning and fun. It’s an ideal tool for getting kids prepped for kindergarten while keeping them happily engaged. The spiral-bound format makes it easy to use, and the variety of exercises keeps boredom at bay. While some pages may feel repetitive to fast learners, the repetition is actually great for skill reinforcement. For busy parents seeking a screen-free educational boost, this workbook is a timeless classic.",
        price: '$13.57',
        link: ' https://www.amazon.com/dp/1681473992/ref=cm_sw_r_as_gl_api_gl_i_B69TS5V1B3B37Y5NMY40?linkCode=ml1&tag=more4kids0a-20&linkId=3c215111af59125c41637e0abf7c8b7b',
      },
      {
        title: ' SYNARRY Wooden Puzzles for Toddlers 1-3',
        image: 'https://m.media-amazon.com/images/I/91qyNRPRHrL._AC_SX679_.jpg ',
        description: ' 6XSET Puzzles for Toddlers 2-4 with Rack, Learning Alphabet Number Shape Animal Dinosaur Vehicle, Education Toddler Puzzles Toys Gifts for 2 3 Years Boys Girls.',
        text: "Introduce toddlers to a world of shapes, animals, and colors with the SYNARRY Wooden Puzzles. These chunky, easy-to-grasp pieces are perfect for little hands, offering an early boost in motor skills and problem-solving. Each puzzle is made with smooth, non-toxic wood that’s both safe and durable—perfect for those enthusiastic toddler tosses. The bright colors and fun illustrations keep kids interested while subtly teaching patience, focus, and spatial awareness. While the set is better suited for the younger end of the age range, it’s an ideal entry point into educational toys. If you're aiming to mix fun and foundational learning, this set delivers beautifully.",
        price: '$38.99',
        link: ' https://www.amazon.com/dp/B0DHVRDC48/ref=cm_sw_r_as_gl_api_gl_i_SADP2ZD9WYFPE5S1SSKB?linkCode=ml1&tag=more4kids0a-20&linkId=c4a3e85e00ebe5f7594584f9dbfb9a11',
      },
      {
        title: ' BELANITAS Kids Desk and Chair Set',
        image: ' https://m.media-amazon.com/images/I/71ECo-imeFL._AC_SX679_.jpg',
        description: 'Height Adjustable Kids School Desk for Kids, 40 Degree Tiltable with 3 Mode Light, Child Desk for Go Back School Gift.',
        text: "Create a dedicated space for focus, play, and creativity with the BELANITAS Kids Desk and Chair Set. Designed with both comfort and function in mind, this adjustable desk grows with your child and includes storage compartments for books, pencils, and toys. It’s a stylish and sturdy addition to any bedroom or playroom. Assembly is relatively easy, and the ergonomic design promotes better posture during homework or art projects. While the storage might be limited for older kids with more supplies, it’s more than enough for preschoolers and early learners. For parents looking to encourage independent learning habits, this set is a total upgrade.",
        price: '$139.99',
        link: ' https://www.amazon.com/dp/B09PLD3BW2/ref=cm_sw_r_as_gl_api_gl_i_CSYY6AF0VRGVZ0ZSRJHD?linkCode=ml1&tag=more4kids0a-20&linkId=8d9c95738c70f687ff382d5d1fcbd918&th=1',
      },
];
return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>Early Back-to-School Toys That Make Learning Fun | My Toy Scout</title>
        <meta
          name="description"
          content="Ease the transition from summer to school with these fun, educational toys that make early learning feel like playtime."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/back-to-school-toys" />
        <meta property="og:title" content="Early Back-to-School Toys That Make Learning Fun | My Toy Scout" />
        <meta property="og:description" content="Ease the transition from summer to school with these fun, educational toys that make early learning feel like playtime." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/back-to-school-toys" />
        <meta name="twitter:title" content="Early Back-to-School Toys That Make Learning Fun | My Toy Scout" />
        <meta name="twitter:description" content="Ease the transition from summer to school with these fun, educational toys that make early learning feel like playtime." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
           <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Early Back-to-School Toys That Make Learning Fun",
      "description": "Ease the transition from summer to school with these fun, educational toys that make early learning feel like playtime.",
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
          "url": "https://mytoyscout.netlify.app/blog/back-to-school-toys"
      },
      "datePublished": "2025-08-09"
    }
          })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Early Back-to-School Toys That Make Learning Fun</h1>
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

export default BackEarly;