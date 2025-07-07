
import React from 'react';
import { Helmet } from "react-helmet"

// change links to this page
// find new products that fit niche then change them out

const BathTimeToys = () => {
  const products = [
    {
        title: 'Mold Free Baby Bath Toys',
        image: 'https://m.media-amazon.com/images/I/71Tn4cDHXdL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        description: 'No Hole Bath Toys for Kids Ages 1-3 | Floating Toys | Bathtub Tub Pool Water Table Toys | Toddler Infant Gifts | Baby Toys 6-12-18 Months | 1 2 3 Year Old Girl Boys Gifts.',
        text: "Bath time should be all giggles and bubbles—not a science experiment growing mold! These adorable, no-hole bath toys are perfect for little ones who love water play without the icky surprises inside. The clever hole-free design means water can't get trapped, so you can say goodbye to squeezing out stinky water and hello to worry-free fun! Perfect for babies and toddlers from 6 to 36 months, these floaty friends are right at home in the tub, kiddie pool, or water table. Whether your little one loves to scoop, splash, or simply float and chill, these cheerful critters will make every soak feel like playtime. Budget-friendly and mold-free? Yes, please!",
        price: '$9.99',
        link: 'https://www.amazon.com/dp/B0CQFVLYGQ/ref=cm_sw_r_as_gl_api_gl_i_DP7AAX7S5X8JSSE6RK89?linkCode=ml1&tag=valeriafinds2-20&th=1',
      },
      {
        title: 'Monkey Bath Toy',
        image: 'https://m.media-amazon.com/images/I/61r3ZOHvgTL._AC_SX679_.jpg',
        description: 'Bath Toys for Kids Ages 1-3 Toddler Bathtub Toys for Babies 1 2 3 Year Old Boys Girls Water Bath Tub Toy for 12 18 Months Infant with Cups.',
        text: " Let’s make a splash—jungle style! This monkey bath toy is here to turn your toddler’s tub into a wild rainforest of fun. With bright colors, spinning features, and interactive water play, it keeps curious little hands busy and excited while you sneak in that shampoo. The included stacking cups are not just adorable—they help your child practice pouring, scooping, and fine motor skills all while getting squeaky clean. Designed for babies 12 months and up, it’s perfect for developing coordination and creativity. Say goodbye to bath time battles and hello to monkeying around in the tub!",
        price: '$22.99',
        link: 'https://www.amazon.com/dp/B07ZGC1J6V/ref=cm_sw_r_as_gl_api_gl_i_dl_7BN1ZM5JBRRT69ZXHZPH?linkCode=ml1&tag=valeriafinds2-20&th=1',
      },{
        title: ' Fish and Net Mold Free Toys',
        image: 'https://m.media-amazon.com/images/I/71t0Rex2U+L._AC_SX679_.jpg',
        description: 'No Hole Mold Free Bath Toys for Toddlers 1-3, Water Toys for 6-12 Months Infants with Storage Bag, Baby Shark Toys for Pool, Bathtub, Beach, Shower, Tub, Kids Boys Girls Gifts.',
        text: "Who says fishing is just for grown-ups? This adorable set brings the thrill of the catch right to your tub! With bright, colorful sea creatures and an easy-to-hold net, your toddler will love scooping up fish like a mini marine explorer. Best part? These bath buddies are mold-free, so even after dozens of splash sessions, you won’t be dealing with hidden gunk. It also comes with a handy mesh storage bag—because we know the struggle of toys floating everywhere! Perfect for the tub, beach, or pool, this set makes bath time feel like a tropical treasure hunt",
        price: '$29.99',
        link: 'https://www.amazon.com/dp/B0CFDRMJWV/ref=cm_sw_r_as_gl_api_gl_i_dl_4MPCYMNF5V33FTD6KPVA?linkCode=ml1&tag=valeriafinds2-20',
      },{
        title: 'FANSIDI Baby Nail Clippers Safe Baby Nail File Kit with Extra 12 Replacement Pads',
        image: 'https://m.media-amazon.com/images/I/71ZrABPG6dL._SX466_.jpg',
        description: 'Baby Nail Trimmer Electric, Polish Grooming Kit for Newborn Infant Toddler or Adults Toes Fingernails Care, Blue.',
        text: "Clipping baby nails shouldn't feel like a high-stakes mission. This electric nail trimmer takes the fear and fuss out of grooming with gentle, whisper-quiet filing that won’t wake a sleeping babe. With multiple speed settings and 12 extra pads, this all-in-one kit grows with your child—and hey, it even works for grown-up nails too. Whether you’re dealing with newborn claws or toddler talons, this set handles it all with a smooth touch. Say goodbye to accidental nicks and nervous trimming sessions. Parents love it for its simplicity—babies love it because they barely feel a thing.",
        price: '$16.99',
        link: 'https://www.amazon.com/dp/B073VBYNH4/ref=cm_sw_r_as_gl_api_gl_i_dl_7AA7D1EXMCZEPVE816Q2?linkCode=ml1&tag=valeriafinds2-20&th=1',
      },{
        title: ' Baistom Baby Hair Clippers',
        image: 'https://m.media-amazon.com/images/I/61nkbmHxU+L._AC_SX679_.jpg',
        description: 'Baby Hair Clippers, Quiet & Dual-Mode Hair Cutting for 0-12, Waterproof Rechargeable & Cordless Hair Trimmer for Infant Toddler & Kids.',
        text: "Say hello to the easiest haircut your baby will ever have—thanks to these ultra-quiet, waterproof hair clippers! Whether you’re trimming fine baby hair or giving your toddler a fresh look, this dual-mode trimmer does the job with zero fuss. Designed for sensitive little scalps, the low-vibration motor is practically silent, helping anxious kids (and nervous parents) stay calm. It's cordless, rechargeable, and even works in the bath! Yes, you can finally cut hair during tub time. Home haircuts just got a serious upgrade. ",
        price: '$21.99',
        link: 'https://www.amazon.com/dp/B07QZGP562/ref=cm_sw_r_as_gl_api_gl_i_2QTT7BBK5HQ1GJYVYCE7?linkCode=ml1&tag=valeriafinds2-20',
      },{
        title: 'Bath Bombs for Kids with Surprise Inside',
        image: 'https://m.media-amazon.com/images/I/81uKz5hpsdL._AC_SX679_PIbundle-24,TopRight,0,0_SH20_.jpg',
        description: '24 Pack Kids Bath Bombs Gift Set, Natural Organic Kid Bubble Bath Fizzy for Girls Boys with Bath Toys Inside.',
        text: "What’s better than a fizzy, colorful bath bomb? One with a surprise toy inside! This 24-pack turns bath time into a mini treasure hunt with every drop. Made with natural, skin-safe ingredients, they’re gentle on delicate skin but full of bubbly excitement. Each bomb reveals a fun toy as it fizzes and swirls in vibrant colors, making even the most bath-resistant kiddos excited to hop in. It’s like a spa day and a surprise party in one fizzy bundle! Great for boys and girls alike—this set makes the perfect gift, reward, or just a fun way to wind down the day.",
        price: '$26.99',
        link: 'https://www.amazon.com/dp/B0C6YCHZ48/ref=cm_sw_r_as_gl_api_gl_i_XXKY3RAMZGTZ871XYD5F?linkCode=ml1&tag=more4kids0a-20',
      },{
        title: 'Tub Works™ Fluffy Foam Soap',
        image: 'https://m.media-amazon.com/images/I/91H+tEmmmCL._AC_SX679_PIbundle-6,TopRight,0,0_SH20_.jpg',
        description: 'Shape, Mold & Create Bathtub Art with Soft Bath Foam for Kids. White, 6 Pack Fragrance-Free & Dye-Free Kids Bath Soap. Easy-to-Use Spray Nozzles.',
        text: "Bring out your little artist in the tub! This fluffy foam soap is more than just clean—it’s creative. Kids can squish, sculpt, and “draw” on the walls with thick, airy foam that’s totally fragrance- and dye-free. Safe for sensitive skin and easy to wash away, this 6-pack lets your kid shape, mold, and play their way to a clean body and a happy heart. Bonus: It comes with spray nozzles for easy use and maximum fun. Mess-free, sensory-safe bath art? Yes please!",
        price: '$29.99',
        link: 'https://www.amazon.com/dp/B0DHT77MR6/ref=cm_sw_r_as_gl_api_gl_i_HC7D6TXE0X6VR9Z48TT6?linkCode=ml1&tag=more4kids0a-20',
      },{
        title: 'BUNMO Suction Bath Toys',
        image: 'https://m.media-amazon.com/images/I/71M8NvCQTlL._AC_SX679_.jpg',
        description: 'Connect, Build, Create - Bath Toy - Hours of Fun & Creativity - Fine Motor Skills - Captivating & Stimulating Sensory Toy - Non-Mouthable Toy 3+ - Smooth 24 Pack.',
        text: "Stick, build, and imagine! These BUNMO suction toys are like the building blocks of bath time. Whether on the tub, tiles, or high chair tray, they connect in endless ways—giving your child the freedom to explore shapes, color sorting, and motor skills. With 24 smooth, non-mouthable pieces, they’re safe for little ones and engaging enough to hold attention well beyond the bath. These aren’t just toys—they’re a splash of STEM learning in disguise! Great for ages 3 and up. ",
        price: '$19.99',
        link: 'https://www.amazon.com/dp/B07VWLSM88/ref=cm_sw_r_as_gl_api_gl_i_0P666V9JXTZMJY8ZTGMP?linkCode=ml1&tag=more4kids0a-20&th=1',
      },{
        title: 'Gigilli Baby Boy Bath Toys',
        image: 'https://m.media-amazon.com/images/I/713F2XSyU0L._AC_SX679_.jpg',
        description: 'Light Up Whale Fountain Toys for Boys 0-6 6-12 12-18 Months or Kids Ages 1-3 2-4, Rechargeable Ocean Blue.',
        text: "Make way for the cutest little whale your bathtub’s ever seen! This rechargeable light-up whale floats and fountains its way into your toddler’s heart, shooting gentle streams of water and glowing with soft LED lights. Perfect for babies and toddlers, this bath-time buddy turns an ordinary soak into a water show. It’s easy to clean, safe for little hands, and endlessly entertaining. If your kiddo loves lights, water, and animals, this is the ultimate bath time BFF.",
        price: '$21.99',
        link: 'https://www.amazon.com/dp/B0CPT98PHM/ref=cm_sw_r_as_gl_api_gl_i_B3PEZKCJAS2QBJDCBDGT?linkCode=ml1&tag=more4kids0a-20&th=1',
      },{
        title: 'Tub Works® Bath Color Fizzies',
        image: 'https://m.media-amazon.com/images/I/81+MkGfbDXL._SX679_.jpg',
        description: '150 Count, Nontoxic & Fragrance-Free. Fizzy, Bath Color Tablets for Kids. Create Fun Bath Colors with Water Tablets in 7 Colors for Variety. Bath Bombs for Kids Bath.',
        text: "Ready to add some color to your kid’s bath time routine? These fragrance-free, nontoxic fizzy tablets are perfect for little mixologists who want to turn bathwater into a rainbow of fun. With 150 tablets in 7 vibrant shades, the combinations are endless! Kids can watch them fizz and dissolve like magic, creating custom colors while you sneak in some STEAM learning about color mixing. Best of all? No mess, no stains, and no harsh ingredients—just fizzy fun that makes getting clean a total blast. ",
        price: '$12.99',
        link: 'https://www.amazon.com/dp/B0C7JCXX7K/ref=cm_sw_r_as_gl_api_gl_i_J2B57F4RK69G0219SDV4?linkCode=ml1&tag=more4kids0a-20',
      },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>Top 10 Bath Time Toys | My Toy Scout</title>
        <meta
          name="description"
          content="Scrub A Dub Dub Here Are The Best Bath Time Toys For Kids In the Tub."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/bath-time" />
        <meta property="og:title" content="Top 10 Bath Time Toys | My Toy Scout" />
        <meta property="og:description" content="Scrub A Dub Dub Here Are The Best Bath Time Toys For Kids In the Tub." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/bath-time" />
        <meta name="twitter:title" content="Top 10 Bath Time Toys | My Toy Scout" />
        <meta name="twitter:description" content="Scrub A Dub Dub Here Are The Best Bath Time Toys For Kids In the Tub." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
           <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Top 10 Bath Time Toys",
      "description": "Scrub A Dub Dub Here Are The Best Bath Time Toys For Kids In the Tub.",
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
      "datePublished": "2025-07-07"
    }
          })}
        </script>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Top 10 Bath Time Toys</h1>
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

export default BathTimeToys;