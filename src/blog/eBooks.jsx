
import React from 'react';
import { Helmet } from "react-helmet"

// make sure you add the reading image before going live

const EBooks = () => {
  const products = [
    {
      title: 'New Amazon Kindle Kids (16 GB)',
      image: 'https://m.media-amazon.com/images/I/914CIoYXtHL._AC_SX679_.jpg',
      description:' includes ad-free books and cover, with glare-free display, faster page turns.',
      text: "The Amazon Kindle Kids (16 GB) is a game-changer for young readers. With its glare-free display and faster page turns, it's built for comfortable, distraction-free reading. Parents will love that it comes with access to thousands of ad-free books and includes a durable cover for added protection. This Kindle encourages reading habits in a fun and tech-savvy way, giving kids their own dedicated space to explore literature, comics, and more. Whether for bedtime stories or independent reading, it’s a reliable companion for early learners and young bookworms.",
      price: '$129.99',
      link: 'https://www.amazon.com/dp/B0CNV9CQK8/ref=cm_sw_r_as_gl_api_gl_i_GYTP5XYZ8RN1S1BBAEME?linkCode=ml1&tag=more4kids0a-20&th=1',
    },
      {
        title: 'Bedtime Stories for Kids',
        image: 'https://m.media-amazon.com/images/I/81LKHLI4UsL._SY385_.jpg',
        description:' Short Bedtime Stories For Children Ages 4-8. Fun Bedtime Story Collection Book 1.',
        text: "This charming collection of short bedtime stories is perfect for children aged 4 to 8. Each story is crafted to spark the imagination and soothe your little one to sleep. It’s a gentle and fun way to end the day, reinforcing family bonding while encouraging literacy. At just $0.99, it’s an affordable way to make bedtime something kids look forward to—whether you're snuggled up with them or letting them explore it on their own.",
        price: '$0.99',
        link: 'https://www.amazon.com/dp/B00ZDAN928/ref=cm_sw_r_as_gl_api_gl_3VPRQ4YN47SN9KE8RTVQ?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'My Dog Tuffy',
        image: 'https://m.media-amazon.com/images/I/71xpHlLdIaL._SY385_.jpg',
        description:' This childrens book about a real life dog named Tuffy. He was my best friend and buddy for many years. We delivered newspapers together and did everything together!! What a wonderful dog!!.',
        text: "A heartwarming true story, My Dog Tuffy shares the adventures of a boy and his beloved dog. This book captures the magic of friendship, loyalty, and growing up with a pet. Kids and adults alike will feel the nostalgia and warmth that comes from this touching tribute to a real-life companion. Perfect for animal lovers or those who have experienced the love of a furry best friend.",
        price: '$7.99',
        link: 'https://www.amazon.com/dp/B0DR6FT4JC/ref=cm_sw_r_as_gl_api_gl_3N8AN5ET9X8RHNNDNJ9V?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'Diary of Steve the Noob: A New World',
        image: 'https://m.media-amazon.com/images/I/71YXUNjhkVL._SY466_.jpg',
        description:' An Unofficial Minecraft Book 1. Steve the Noob in a New World.',
        text: "This unofficial Minecraft story follows Steve the Noob as he stumbles into a new world. Packed with humor, adventure, and Minecraft fun, this book is a favorite among early readers and gaming fans. It’s a great way to get reluctant readers engaged with something they already love. Ideal for ages 7–12, this book turns screen time into reading time.",
        price: '$2.99',
        link: 'https://www.amazon.com/dp/B084KVTDRQ/ref=cm_sw_r_as_gl_api_gl_PJAJX6PZKHKBA2QGBECS?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'Winnie-the-Pooh',
        image: 'https://m.media-amazon.com/images/I/71+IwITqpRL._SL1280_.jpg',
        description:' Step into the enchanting world of Winnie-the-Pooh, the beloved bear of very little brain, and his loyal friends, who live in the Hundred Acre Wood. A.A. Milne’s timeless classic brings to life the whimsical adventures and endearing camaraderie of a unique group of characters.',
        text: "A.A. Milne’s Winnie-the-Pooh is a timeless treasure. This edition brings the Hundred Acre Wood to life with its unforgettable characters—Pooh, Piglet, Tigger, and more. It’s a must-have for any child’s bookshelf, teaching lessons on kindness, friendship, and imagination. At just 19 cents, it’s an absolute steal for a literary classic.",
        price: '$0.19',
        link: 'https://www.amazon.com/dp/B0BGRTPKYM/ref=cm_sw_r_as_gl_api_gl_HK3KY36EWB0HTDBXAE0T?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: "Cats Don't Like That!",
        image: 'https://m.media-amazon.com/images/I/81mydllU3qL._SY342_.jpg',
        description:'A Hilarious Childrens Book For Kids Ages 3-7 .',
        text: "This hilarious picture book will have both kids and parents laughing out loud. With silly rhymes and playful illustrations, Cats Don’t Like That! is perfect for ages 3–7. It taps into the goofy behavior of our feline friends in a way that’s both relatable and endlessly fun to read aloud. Great for story time or independent readers looking for a laugh.",
        price: '$12.99',
        link: 'https://www.amazon.com/dp/B09ZTMNSTQ/ref=cm_sw_r_as_gl_api_gl_QX22X102QWAY73076TTN?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'Kid Youtuber 2',
        image: ' https://m.media-amazon.com/images/I/81N0dR0iM3L._SY385_.jpg',
        description:' Hungry for a More hilarious adventure for children ages 9-12. From the Creator of Diary of a 6th Grade Ninja.',
        text: "From the creator of Diary of a 6th Grade Ninja, Kid Youtuber 2 delivers more laugh-out-loud adventures. Aimed at kids aged 9–12, this book explores internet culture, school drama, and growing up in the digital age. With quick chapters and tons of humor, it’s perfect for fans of funny books and aspiring young creators.",
        price: '$5.99',
        link: 'https://www.amazon.com/dp/B08HR4STTS/ref=cm_sw_r_as_gl_api_gl_TX2NMTDZ94DEKZBKN2CG?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'Wish',
        image: 'https://m.media-amazon.com/images/I/81PRuOXkvcL._SY425_.jpg',
        description:" From award-winning author Barbara O'Connor comes a #1 New York Times–bestselling middle-grade novel about a girl who, with the help of a true-blue friend, a big-hearted aunt and uncle, and the dog of her dreams, unexpectedly learns the true meaning of family in the least likely of places..",
        text: "Barbara O’Connor’s Wish is a heartfelt novel about hope, family, and finding where you belong. With beautifully written characters and a compelling plot, it’s a touching story that resonates with kids and adults alike. It teaches emotional growth through storytelling and is a great fit for readers 8–12.",
        price: '$7.99',
        link: 'https://www.amazon.com/dp/B01DSWM0FY/ref=cm_sw_r_as_gl_api_gl_ZHN31WV5FYQAA2QZ1E6T?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: '101 Tales: The Great Panchatantra Collection',
        image: 'https://m.media-amazon.com/images/I/81pUbaKgkkL._SY425_.jpg',
        description:' This compilation of 101 tales from the Panchatantra aims to guide the young readers about wise conduct, human nature, and the right path for attaining success in life. .',
        text: "This beautifully curated anthology includes 101 stories from the Panchatantra, designed to impart wisdom, moral values, and life lessons. With animals and humans as characters, these tales use simple storytelling to tackle big themes. It's a culturally rich experience perfect for kids who love stories with meaning.",
        price: '$7.99',
        link: 'https://www.amazon.com/dp/B0CPB1BZYZ/ref=cm_sw_r_as_gl_api_gl_3DCK5RVR2Z025YXZAW56?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'Dinos Love Donuts ',
        image: 'https://m.media-amazon.com/images/I/81iJoxLSjjL._SY342_.jpg',
        description:" If you laughed your tricera-tops off at the New York Times' best selling Dragons Love Tacos, you'll be jelly-rolling on the floor laughing with Dinos Love Donuts!",
        text: "Get ready for prehistoric fun with Dinos Love Donuts! This story is a laugh-out-loud follow-up to hits like Dragons Love Tacos. Filled with colorful illustrations and zany humor, it’s perfect for dinosaur-loving kids who also enjoy a sweet treat. Great for ages 4–8 and ideal for storytime.",
        price: '$7.95',
        link: 'https://www.amazon.com/dp/B0D8LKFL72/ref=cm_sw_r_as_gl_api_gl_4AF418MTYVWNHT2E9Q9Y?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'The Fascinating Animal Book for Kids',
        image: 'https://m.media-amazon.com/images/I/91ZgcVTcdOL._SY342_.jpg',
        description:' This standout among animal books for kids is ideal for any boy or girl who is wild about animals!',
        text: "Packed with facts, photos, and trivia, this book is a must-have for young animal lovers. It covers species from every corner of the world, making learning about wildlife fun and engaging. Perfect for curious minds ages 6–12, it inspires awe for nature and respect for animals.",
        price: '$15.99',
        link: 'https://www.amazon.com/dp/B08376LFZ1/ref=cm_sw_r_as_gl_api_gl_ZSHB2ETM01TS52PR0AXS?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'Gritty Ninja',
        image: 'https://m.media-amazon.com/images/I/81hmgJX1guS._SY342_.jpg',
        description:' A Children’s Book About Dealing with Frustration and Developing Grit.',
        text: "This empowering children’s book helps kids understand frustration and build emotional resilience. Gritty Ninja uses fun storytelling to teach grit, perseverance, and positive mindset. It’s especially helpful for parents and teachers looking for tools to guide children through challenging emotions.",
        price: '$5.99',
        link: 'https://www.amazon.com/dp/B084TZRZHG/ref=cm_sw_r_as_gl_api_gl_76963VSZ2APF1FQ29147?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'The Girl Who Drank the Moon',
        image: ' https://m.media-amazon.com/images/I/81gsCyvMnFL._SY466_.jpg',
        description:' Winner of the 2017 Newbery Medal ★ A New York Times Bestseller ★ An Entertainment Weekly Best Middle Grade Book of 2016 ★ A New York Public Library Best Book ★ A Chicago Public Library Best Book ★ An Amazon Top 20 Best Book ★ A Publishers Weekly Best Book ★ A School Library Journal Best Book ★ A Kirkus Reviews Best Book ★ A Booklist Youth Editors’ Choice.',
        text: "Winner of the 2017 Newbery Medal, The Girl Who Drank the Moon is a fantasy masterpiece. With lyrical prose and a powerful message, it’s a story of magic, identity, and destiny. Suitable for ages 10 and up, it’s an enriching read that leaves a lasting impact.",
        price: '$10.99',
        link: 'https://www.amazon.com/dp/B01B3VMCI2/ref=cm_sw_r_as_gl_api_gl_dl_7397DRBBZYHSN5VYNYD5?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'The Mouse and the Motorcycle',
        image: 'https://m.media-amazon.com/images/I/81HjQGO3NiL._SY425_.jpg',
        description:' In this imaginative adventure from Newbery Medal–winning author Beverly Cleary, a young mouse named Ralph is thrown into a world of excitement when a boy and his shiny toy motorcycle check in to the Mountain View Inn.',
        text: "Beverly Cleary’s classic follows Ralph, a curious mouse with a love for adventure and a toy motorcycle. This beloved chapter book combines humor, action, and heart. It’s perfect for independent readers aged 7–10 and remains one of the best introductions to chapter books out there.",
        price: '$4.99',
        link: 'https://www.amazon.com/dp/B00188V7TQ/ref=cm_sw_r_as_gl_api_gl_403WZJ1EBHMF9GMV3J2K?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'Difficult Riddles For Smart Kids',
        image: 'https://m.media-amazon.com/images/I/91A7TOSgJSL._SY425_.jpg',
        description:' 300 Difficult Riddles And Brain Teasers Families Will Love .',
        text: "Loaded with 300 brain teasers, this book is perfect for kids who love a challenge. It’s great for family game nights, long car rides, or boosting critical thinking skills. Ideal for ages 8+, it sharpens young minds while delivering hours of fun.",
        price: '$2.99',
        link: 'https://www.amazon.com/dp/B071S14P66/ref=cm_sw_r_as_gl_api_gl_WCMVHBMSQBNS8JWK3TYQ?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'Just Us Kids : Shipwrecked',
        image: "https://m.media-amazon.com/images/I/81vRXHO74sL._SY425_.jpg",
        description:' by D Stewart (Author), Micaela Stéfano (Illustrator) .',
        text: "In this adventurous chapter book, a group of kids faces unexpected challenges after a shipwreck. With action, teamwork, and mystery, it’s an engaging story for readers aged 8–12. The vivid writing and illustrations keep kids turning the pages—and wanting more.",
        price: '$5.99',
        link: 'https://www.amazon.com/dp/B072JHZKDW/ref=cm_sw_r_as_gl_api_gl_55QBEMAB28QTSMR2G0ZC?linkCode=ml1&tag=more4kids0a-20',
      },
      {
        title: 'Team Supercrew - Emotions and Powers - 4 Book Box Set',
        image: "https://m.media-amazon.com/images/I/71ejc1iXamL._SY342_.jpg",
        description:' 4 Book Box Set (books 1-4): Help kids through big emotions (anger, fear, frustration, sadness). Discover the power to be brave, be kind, be calm, and have grit!.',
        text: "This powerful set helps children navigate big feelings through colorful superheroes and fun storytelling. Covering anger, fear, sadness, and grit, these books build emotional intelligence in a way that’s easy to understand. Ideal for ages 4–9, it’s a great resource for parents and teachers alike.",
        price: '$60 on sale $4.99',
        link: 'https://www.amazon.com/dp/B0BRYF4NK8/ref=cm_sw_r_as_gl_api_gl_EHWAE6CPVP2DE3F0PW9Q?linkCode=ml1&tag=more4kids0a-20',
      },
  ];
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title> Top E-Books for Kids This Summer | My Toy Scout</title>
        <meta
          name="description"
          content="Keep Your little One Engaged and Learning With These E-Books We've found."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/ebooks" />
        <meta property="og:title" content="Top E-Books for Kids This Summer | My Toy Scout" />
        <meta property="og:description" content="Keep Your little One Engaged and Learning With These E-Books We've found." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/ebooks" />
        <meta name="twitter:title" content="Top E-Books for Kids This Summer | My Toy Scout" />
        <meta name="twitter:description" content="Keep Your little One Engaged and Learning With These E-Books We've found." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
           <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Top E-Books for Kids This Summer",
      "description": "Keep Your little One Engaged and Learning With These E-Books We've found.",
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
      "datePublished": "2025-06-11"
    }
          })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Top E-Books for Kids This Summer</h1>
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

export default EBooks;