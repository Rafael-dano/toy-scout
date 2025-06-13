import React from 'react';
import { Helmet } from "react-helmet"

// add book image

const Books = () => {
  const products = [
    {
    title: 'My First Complete Learning Library: Boxset of 20 Board Books',
    image: "https://m.media-amazon.com/images/I/71mAXgoA9qL._SX445_.jpg",
    description:' Perfect Gift Set for Toddlers Ages 0 to 5.',
    text: "The My First Complete Learning Library is an excellent early learning tool for children aged 0 to 5. With 20 durable board books inside, this set offers a well-rounded foundation across essential subjects such as alphabets, numbers, colors, animals, fruits, and even good manners. Each book is designed with toddlers in mind—bright colors, simple words, and engaging illustrations that captivate attention and encourage independent exploration. It's the kind of box set that grows with your child, transitioning from read-aloud sessions to self-led learning as they gain confidence. It's also perfect for gifting during birthdays, baby showers, or holidays, making it a timeless investment in a child's early development.",
    price: '$39.99',
    link: 'https://www.amazon.com/dp/9388369882/ref=cm_sw_r_as_gl_api_gl_i_7WADZ8BW4CTDS4VND4F3?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Knowledge Encyclopedia: Boxset of 8 Books ',
    image: "https://m.media-amazon.com/images/I/810OAVHUn0L._SY342_.jpg",
    description:' This comprehensive encyclopedia box set covers a plethora of topics making these books as your ultimate source of knowledge.',
    text: "This impressive 8-book Knowledge Encyclopedia box set is a treasure trove of information for curious young minds. Each book dives into a specific theme such as space, the human body, animals, science, and history, filled with colorful illustrations and bite-sized facts that simplify complex topics. The high-quality print and well-researched content make it ideal for homeschooling or supplementing school learning. Whether your child is a budding scientist, historian, or explorer, this set will keep them engaged and constantly learning. It's not just educational—it's inspiring.",
    price: '$199.99',
    link: 'https://www.amazon.com/dp/9354405231/ref=cm_sw_r_as_gl_api_gl_i_BPG87J4F9M3GWA376DZC?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Ultimate Princess Boxed Set of 12 Little Golden Books',
    image: "https://m.media-amazon.com/images/I/81+egwSrJ9L._SY385_.jpg",
    description:' This collectors edition boxed set contains 12 iconic Little Golden Books originally published over the last 75 years.',
    text: "The Ultimate Princess Boxed Set is a magical collection that captures the timeless charm of Disney's most beloved princesses. With 12 beautifully illustrated Little Golden Books spanning 75 years of storytelling, this collector's edition is a nostalgic treat for parents and a thrilling discovery for children. Each book preserves the classic charm of characters like Cinderella, Snow White, and Ariel, while reinforcing valuable lessons of kindness, courage, and imagination. A perfect bedtime read or a wonderful keepsake for Disney fans of all ages.",
    price: '$59.88',
    link: 'https://www.amazon.com/dp/073644243X/ref=cm_sw_r_as_gl_api_gl_i_3EJFW3D0XXYX04GVQDQZ?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'I Just Forgot ',
    image: "https://m.media-amazon.com/images/I/71AwnQkKJDL._SY342_.jpg",
    description:' Mercer Mayers Little Critter is having a very forgetful day in this classic, funny, and heartwarming book.',
    text: "In I Just Forgot, Mercer Mayer's Little Critter takes us through a day filled with innocent mishaps and forgetfulness, from leaving his lunchbox behind to skipping brushing his teeth. The storytelling is humorous and deeply relatable for both kids and parents, encouraging children to take responsibility while acknowledging that mistakes are part of learning. With whimsical illustrations and a heartwarming tone, this book gently teaches the importance of routine and mindfulness. It’s a favorite for kids who are beginning to understand the value of responsibility in everyday life.",
    price: '$18.40',
    link: 'https://www.amazon.com/dp/0613026616/ref=cm_sw_r_as_gl_api_gl_i_E1K7581JXC7X5A01XF6F?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Ninja Life Hacks Emotions and Feelings 8 Book Box Set',
    image: "https://m.media-amazon.com/images/I/812nq5Yo+VL._SY342_.jpg",
    description:'Books 1-8: Angry, Inventor, Positive, Lazy, Helpful, Earth, Grumpy, Kind.',
    text: "The Ninja Life Hacks box set is a fantastic way to introduce emotional intelligence to young readers. Each of the eight books—covering emotions like anger, laziness, grumpiness, and kindness—offers child-friendly language and scenarios that help kids understand their feelings. The ninja characters are funny, engaging, and relatable, making difficult topics easier to grasp. This set empowers children with tools to handle stress, build confidence, and develop a growth mindset, all while enjoying vibrant and quirky artwork. A must-have for parents and educators looking to build emotional awareness.",
    price: '$59.99',
    link: 'https://www.amazon.com/dp/1951056779/ref=cm_sw_r_as_gl_api_gl_i_HJJ4RBSMWRDVK9FKWP88?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Complete Mercer Mayer Collection',
    image: "https://m.media-amazon.com/images/I/A1b4zXYDqKL._SY385_.jpg",
    description:'Both you and our child will love this complete set of classic children’s story books by Mercer Mayer.',
    text: "This complete collection of Mercer Mayer’s Little Critter books is a treasure chest of classic stories that generations of kids have grown up loving. Whether it’s learning about responsibility, making friends, or facing new experiences, each book reflects the joys and challenges of growing up through Little Critter’s eyes. The illustrations are rich in detail and humor, with heartwarming themes parents can appreciate. A full set like this is perfect for a home library, classroom, or as a special gift for any young reader.",
    price: '$159.99',
    link: 'https://www.amazon.com/dp/B001AZMS36/ref=cm_sw_r_as_gl_api_gl_i_0MQSJP209KY5SJ2JSBGP?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: '12 Beloved Disney Classic Little Golden Books',
    image: "https://m.media-amazon.com/images/I/91fhAoNOj3L._SY385_.jpg",
    description:' 12 classic Disney Little Golden Books in a beautiful collectors box!',
    text: "The 12 Beloved Disney Classic Little Golden Books set brings together timeless stories in a beautifully packaged collector’s box. Featuring classics like Bambi, The Lion King, and Toy Story, these books are perfect for introducing kids to storytelling and the magic of Disney. Each book retains the nostalgic golden spine and delivers engaging tales with positive messages and colorful illustrations. A wonderful addition to any child’s bookshelf that also makes storytime something to look forward to every day.",
    price: '$71.88',
    link: 'https://www.amazon.com/dp/0736438785/ref=cm_sw_r_as_gl_api_gl_i_CZWR8W3GJFDRCERGE9H2?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Best of Childrens Classics',
    image: "https://m.media-amazon.com/images/I/71U9NV5ik0L._SY466_.jpg",
    description:' Set of 5 Books) Classic Childrens Literature. Perfect Gift for Kids. Beloved Timeless Classics. Features Famous Authors. Must-have Childrens Books Collection.',
    text: "This five-book Best of Children’s Classics collection features timeless works from authors like Mark Twain and Louisa May Alcott. These editions are beautifully bound and accessible for young readers, with carefully selected stories that foster imagination and moral growth. Ideal for ages 7+, this set helps children expand their vocabulary and understand the art of storytelling while diving into culturally rich adventures. It's an ideal starter library for any young literary explorer.",
    price: '$37.00',
    link: 'https://www.amazon.com/dp/9356528330/ref=cm_sw_r_as_gl_api_gl_i_EFKCAYDVC3S0NPF1RR74?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'The Magic of Me: My Magical Choices',
    image: "https://m.media-amazon.com/images/I/713KfGkrIlL._SY342_.jpg",
    description:' Teach Kids to Choose a Great Day with their Choices!.',
    text: "The Magic of Me is a powerful picture book that teaches kids the value of choices and personal empowerment. The rhyming text is upbeat and affirming, helping children understand that they control their reactions, attitudes, and actions. The colorful illustrations and clear messages make this book ideal for young kids building confidence and character. Whether it’s used in classrooms or bedtime routines, this book delivers a heartwarming reminder that every child has the power to shape their own day through positive choices.",
    price: '$14.99',
    link: 'https://www.amazon.com/dp/1732596379/ref=cm_sw_r_as_gl_api_gl_i_VY5C4EKDJ67K8A5K0A1M?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'The Frog and Toad Collection Box Set: A Box Set of 3 Books',
    image: "https://m.media-amazon.com/images/I/81kJ+PA0rrL._SY466_.jpg",
    description:' From the Classic Animal Friendship and Adventure Series, Great for Growing Reading Skills ... for Kids [ages 4-8] (I Can Read Level 2).',
    text: "The Frog and Toad Collection is a heartwarming classic that has delighted generations of readers. With three beloved tales — Frog and Toad Are Friends, Frog and Toad Together, and Days with Frog and Toad — this set celebrates the beauty of friendship through simple, honest storytelling. Arnold Lobel’s gentle humor and timeless themes help children navigate emotions like loyalty, disappointment, and courage. Designed for Level 2 readers, these books are perfect for children ages 4–8 who are developing their confidence in reading. The relatable stories, charming illustrations, and short chapter format make this set an ideal choice for both independent reading and bedtime bonding.",
    price: '$17.97',
    link: 'https://www.amazon.com/dp/0060580860/ref=cm_sw_r_as_gl_api_gl_i_7GQ2AP36PNJJJJ2MC5R4?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'What Should Danny Do? School Day ',
    image: "https://m.media-amazon.com/images/I/81URGF-L+JL._SY385_.jpg",
    description:'8 stories in 1! Danny is back in an all new adventure! In this follow up to the #1 Amazon Best Seller, What Should Danny Do?',
    text: "What Should Danny Do? School Day is not just a story—it’s a unique, interactive experience for kids. With 8 different story paths, this choose-your-own-adventure book empowers children to see how their choices affect their day, friendships, and feelings. Danny, the young superhero-in-training, faces school-day dilemmas that mirror real-world situations kids experience daily. Whether it’s deciding to include others or managing emotions, children will see how making positive choices can lead to a better outcome. This book is a favorite in classrooms and homes alike, teaching social-emotional learning in a way that’s fun, replayable, and deeply impactful.",
    price: '$21.99',
    link: 'https://www.amazon.com/dp/0692914374/ref=cm_sw_r_as_gl_api_gl_i_SY3MQK6YMKBMA092SNQ9?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Animals: Collection of 6 Books: Knowledge Encyclopedia For Children',
    image: "https://m.media-amazon.com/images/I/61G-34rs3YL._SY342_.jpg",
    description:'Learning is made simpler with well-labelled diagrams and an extensive glossary of difficult words. ',
    text: "For animal-loving kids, the Animals: Collection of 6 Books offers a treasure trove of knowledge. Each book is filled with high-quality illustrations, labeled diagrams, and age-appropriate facts that introduce kids to the wonders of wildlife—from jungle beasts to marine life and insects. Designed with young learners in mind, this encyclopedia series simplifies complex terms and includes a glossary to enhance vocabulary. It’s a fantastic educational resource for children aged 5 to 10, encouraging curiosity, reading comprehension, and a lifelong interest in the natural world.",
    price: '$29.99',
    link: 'https://www.amazon.com/dp/9354400329/ref=cm_sw_r_as_gl_api_gl_i_S10903FK10NQE3P5AS9M?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Sesame Street Elmo Manners Books for Kids Toddlers - Set of 8 Manners Books',
    image: "https://m.media-amazon.com/images/I/71OnjtKLWfL._AC_SX679_.jpg",
    description:'Colorfully illustrated Sesame Street Elmo Manners Books join Elmo as he teaches sharing and caring.',
    text: "Elmo makes learning manners fun and easy in this colorful set of 8 board books. With each book focusing on a different aspect of kindness—like sharing, saying please and thank you, listening, and being patient—this collection is ideal for toddlers and preschoolers. The short, repetitive sentences help with early language development, while the lovable characters and vibrant illustrations keep young readers engaged. Whether used at home or in daycare settings, this set supports social-emotional learning at a crucial developmental stage.",
    price: '$11.99',
    link: 'https://www.amazon.com/dp/B01DOHJ6HS/ref=cm_sw_r_as_gl_api_gl_i_VVZ3BQNDG7BGNBF57A39?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'My First Book of Planets: All About the Solar System for Kids',
    image: "https://m.media-amazon.com/images/I/91L6B-MU8OL._SY342_.jpg",
    description:' Blast off on an exploration of outer space with this colorful solar system book for kids 3-5.',
    text: "Ignite your little astronaut’s curiosity with My First Book of Planets. Designed for kids aged 3–5, this beautifully illustrated book introduces young learners to each planet in the solar system with fun facts and bright visuals. It’s written in a way that makes space exploration exciting and easy to understand for beginners. The combination of science, art, and wonder makes it an excellent early STEM tool and an engaging way to kick off a lifelong love of learning.",
    price: '$7.99',
    link: 'https://www.amazon.com/dp/1646118367/ref=cm_sw_r_as_gl_api_gl_i_W983GWPVBGMNDMN25HXJ?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Where’s Waldo? The Ultimate Waldo Watcher Collection',
    image: "https://m.media-amazon.com/images/I/919BZGgzuIL._SY385_.jpg",
    description:' A Box Set of 7 Hidden Object Activity Books, Packed with Search & Find Puzzle Adventures - a Perfect Gift & Travel Companion for All Ages.',
    text: "The Ultimate Waldo Watcher Collection is a must-have for puzzle lovers of all ages. This deluxe box set includes seven of the original Where’s Waldo? books, each packed with vibrant, detailed scenes that make the hunt for Waldo an endless adventure. These books are more than just visual fun—they sharpen observation skills, boost concentration, and bring families together around a shared challenge. Whether used for quiet solo time or as an interactive group activity, this collection is a classic that never goes out of style. It’s also a brilliant travel companion, making it the perfect gift for kids ages 6 and up.",
    price: '$57.99',
    link: 'https://www.amazon.com/dp/1536215112/ref=cm_sw_r_as_gl_api_gl_i_KGFDE7NTR3K2G953HXVR?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Bluey Outdoor Fun Box Set',
    image: "https://m.media-amazon.com/images/I/717QMiScl+L._SY342_.jpg",
    description:' A four-book box set? Wackadoo! For fans of the wildly successful animated series Bluey, as seen on Disney.',
    text: "Fans of the hit Disney Junior show Bluey will love this charming four-book box set featuring the lovable Blue Heeler family. The Bluey Outdoor Fun Box Set includes titles that celebrate imagination, nature, and quality family time. Whether it’s camping, going to the park, or playing backyard games, each story is simple yet heartfelt, with the same humor and warmth that makes the show a hit among kids and parents alike. These sturdy paperbacks are perfect for bedtime, preschool circle time, or road trips—and make a fantastic gift for kids ages 3–7.",
    price: '$19.99',
    link: 'https://www.amazon.com/dp/0593660838/ref=cm_sw_r_as_gl_api_gl_i_KKHSYW5DBA5XGKM6Q6MS?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'Diary of a Wimpy Kid 1-22 Boxed Set for Kids',
    image: "https://m.media-amazon.com/images/I/81mhq8lq42L._AC_SY450_.jpg",
    description:' 22 Books Complete Collection Series, Paperback Edition for Children.',
    text: "The Diary of a Wimpy Kid 1–22 Boxed Set is the ultimate collection for young readers ready to laugh, learn, and grow with Greg Heffley. This mega set includes all 22 books in Jeff Kinney’s bestselling series, following Greg’s middle school misadventures through relatable storytelling and hilarious cartoons. Perfect for ages 8–12, these books not only promote a love for reading but also touch on real-life themes like friendship, family, peer pressure, and resilience. The consistent humor, quick pacing, and diary-style format make this a binge-worthy series for even reluctant readers. A bookshelf essential and an unbeatable value for schools, libraries, or growing home collections.",
    price: '$77.68',
    link: 'https://www.amazon.com/dp/B0CZPH8DRT/ref=cm_sw_r_as_gl_api_gl_i_JRWRE8QQJMYGY4R64KD5?linkCode=ml1&tag=more4kids0a-20',
  },
  {
    title: 'I Just Forgot ',
    image: "https://m.media-amazon.com/images/I/71AwnQkKJDL._SY342_.jpg",
    description:' Mercer Mayers Little Critter is having a very forgetful day in this classic, funny, and heartwarming book.',
    text: "In I Just Forgot, Mercer Mayer's Little Critter takes us through a day filled with innocent mishaps and forgetfulness, from leaving his lunchbox behind to skipping brushing his teeth. The storytelling is humorous and deeply relatable for both kids and parents, encouraging children to take responsibility while acknowledging that mistakes are part of learning. With whimsical illustrations and a heartwarming tone, this book gently teaches the importance of routine and mindfulness. It’s a favorite for kids who are beginning to understand the value of responsibility in everyday life.",
    price: '$5.57',
    link: 'https://www.amazon.com/dp/0307119750/ref=cm_sw_r_as_gl_api_gl_i_31DDQ1QBCWR9K1D32H2X?linkCode=ml1&tag=more4kids0a-20',
  },
];
return (
<div className="p-6 max-w-6xl mx-auto">
  <Helmet>
    <title> Top Books for Kids This Summer | My Toy Scout</title>
    <meta
      name="description"
      content="Keep Your liitle One Engaged and Learning With These Books and Sets We've found."
    />
     {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://mytoyscout.netlify.app/blog/books" />
    <meta property="og:title" content="Top Books for Kids This Summer | My Toy Scout" />
    <meta property="og:description" content="Keep Your liitle One Engaged and Learning With These Books and Sets We've found." />
    <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/books" />
    <meta name="twitter:title" content="Top Books for Kids This Summer | My Toy Scout" />
    <meta name="twitter:description" content="Keep Your liitle One Engaged and Learning With These Books and Sets We've found." />
    <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
       <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Top Books for Kids This Summer",
  "description": "SKeep Your liitle One Engaged and Learning With These Books and Sets We've found.",
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
      "url": "https://mytoyscout.netlify.app/blog/books"
  },
  "datePublished": "2025-07-09"
}
      })}
    </script>
  </Helmet>
  <h1 className="text-3xl font-bold mb-6">Top Books for Kids This Summer</h1>
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

export default Books;