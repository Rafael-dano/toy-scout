import React from "react"
import { Helmet } from "react-helmet"

// find new products that fit niche then change them out

const toys = [
  {
    name: "LeapFrog Learning Friends 100 Words and 100 Animals Book Set",
    description: "Two interactive books each have six double-sided pages; touch-sensitive pictures play vocabulary words, sounds and music",
    image: "https://m.media-amazon.com/images/I/71lGnfcd3SL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B089DNYQ5D/ref=cm_sw_r_as_gl_api_gl_i_G4CWZB93S0PEWB4F1225?linkCode=ml1&tag=more4kids0a-20",
  },
  {
    name: "Huijing Montessori Preschool Learning Activities Busy Book",
    description: " Workbook Activity Binder / Toys for Toddlers, Autism Learning Materials and Tracing Coloring Book",
    image: "https://m.media-amazon.com/images/I/81eK2rZAQoL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B09DPFKBC1/ref=cm_sw_r_as_gl_api_gl_i_A3981Q962J4Y1Y55RSBA?linkCode=ml1&tag=more4kids0a-20&th=1",
  },
  {
    name: "4 in 1!!! Basketball, T-Ball Set",
    description: "4 in 1 Basketball Hoop for Kids 1-3, 3-5, Toddler Basketball Goal and T Ball Set, Adjustable Basketball Hoop, Indoor Outdoor Sports Toys, Birthday Gifts for Kids Boys 1 2 3 4 5 Years Old.",
    image: "https://m.media-amazon.com/images/I/71Xh-AYW8eL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B0DD47H5H4/ref=cm_sw_r_as_gl_api_gl_i_7A8CE326QJDF5XV9PEF0?linkCode=ml1&tag=more4kids0a-20",
  },
  {
    name: "Fat Brain Toys InnyBin Shape Learning Toys",
    description: "Baby Toys Ages 10 Months, Sensory Toys for Babies and Toddlers. ENCOURAGES FINE MOTOR SKILLS: Babies and toddlers will enjoy pushing the chunky blocks of this baby shape sorter toy through the elastic bands, strengthening hand-eye coordination and grasping abilities.",
    image: "https://m.media-amazon.com/images/I/71oM0OHSxZL._SX522_.jpg",
    link: "https://www.amazon.com/dp/B07SVMZBSD/ref=cm_sw_r_as_gl_api_gl_i_FJ70NRBEBY02EDFQXVGH?linkCode=ml1&tag=more4kids0a-20",
  },
  {
    name: "Nex Playground",
    description: "The Active Play System for Kids & Families Where Indoor Physical Activity Meets Interactive Family Fun and is Great for Gaming Nights, Parties and Playdates.",
    image: "https://m.media-amazon.com/images/I/71Re8OntVjL._SX522_.jpg",
    link: "https://www.amazon.com/dp/B0D2JGYX3F/ref=cm_sw_r_as_gl_api_gl_i_9VCTGEVDFM036XCS8TZB?linkCode=ml1&tag=more4kids0a-20",
  },
  {
    name: "MindSprout Light-Up Space Twister",
    description: "360° Sit Twist and Spin, Toddler Toys Age 2, 3, 4, 5, Birthday for Boy Girl, 18 Months +, LED Lights, Kids Toy Indoor or Outdoor for 2 Year Old. ",
    image: "https://m.media-amazon.com/images/I/71O2msMDENL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B0B1H6T1YH/ref=cm_sw_r_as_gl_api_gl_i_JRHN3DQYNRBH7TDMKP3T?linkCode=ml1&tag=more4kids0a-20",
  },
  {
    name: "Avenlur Indoor Playground Jungle Gym",
    description: "Magnolia 6-in-1 Montessori Wooden Indoor Playground for Kids & Toddlers Ages 2-6 – Waldorf Toys, Rope Ladder, Indoor Swing, Baby Slide, Rock Climbing Wall.",
    image: "https://m.media-amazon.com/images/I/91n9r1XeW8L._AC_SX679_.jpg",
    link: "https://www.amazon.com/dp/B08QRR6NZP/ref=cm_sw_r_as_gl_api_gl_i_1SVN4S5XJBE3XK2GXG2J?linkCode=ml1&tag=more4kids0a-20&th=1",
  },
  {
    name: "Tikduck Flying Orb Ball",
    description: "Soaring Hover Boomerang Spinner Hand Controlled Mini Drone Cosmic Globe Spinning Kids Adults Outdoor Birthday Gift Cool Stuff for Boys Girls.",
    image: "https://m.media-amazon.com/images/I/71aX5oLNh6L._AC_SY300_SX300_.jpg",
    link: "https://www.amazon.com/dp/B096LVFBMW/ref=cm_sw_r_as_gl_api_gl_i_7HS8BCJ3Y71MFJEFRKKG?linkCode=ml1&tag=more4kids0a-20&th=1",
  },
  {
    name: "IROO Mini Karaoke Machine for Kids",
    description: "Portable Bluetooth Speaker with 2 Wireless Mics Lights, Karafun Premium Song Family Home Party.",
    image: "https://m.media-amazon.com/images/I/71hFgulklsL._AC_SX679_.jpg",
    link: "https://www.amazon.com/dp/B0CGRRGY6S/ref=cm_sw_r_as_gl_api_gl_i_dl_Y8R7M2KHTTTM6P699A6Q?linkCode=ml1&tag=more4kids0a-20&th=1",
  },
  {
    name: "Stomp Rocket Original Dueling Rocket Launcher for Kids",
    description: "8 Rockets - Fun Backyard & Outdoor Kids Toys Gifts for Boys & Girls -Toy Foam Blaster Set Soars 200ft - Multi-Player Launcher Stand.",
    image: "https://m.media-amazon.com/images/I/81LeTcY4UAL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B00G9WR0RE/ref=cm_sw_r_as_gl_api_gl_i_2MHB3HAAT5PNKXEWKB8J?linkCode=ml1&tag=more4kids0a-20&th=1",
  },
  {
    name:"Little Tikes Fairy Cozy Coupe ",
    description: "Parents and kids will both love the ride! Designed with a high Seat back and cup holders in the rear.working horn. Moving, clicking ignition switch. Gas cap open and closes.",
    image: "https://m.media-amazon.com/images/I/71PLoffE8VL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B01C967BQS/ref=cm_sw_r_as_gl_api_gl_i_0RBR7QWY9Z2WAADA6ZF6?linkCode=ml1&tag=more4kids0a-20",
  },
]

export default function TopToys2025() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Top 10 Toys for Kids in 2025 | My Toy Scout</title>
        <meta
          name="description"
          content="Looking for the best toys that will have your kids growing their skills while having tons of fun.? Here's our expert-approved list of the top 10 toys for learning and fun in 2025."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://mytoyscout.netlify.app/blog/top-toys-2025" />
        <meta property="og:title" content="Top 10 Toys for Kids in 2025 | My Toy Scout" />
        <meta property="og:description" content="Looking for the best toys that will have your kids growing their skills while having tons of fun.? Here's our expert-approved list of the top 10 toys for learning and fun in 2025." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="http://mytoyscout.netlify.app/blog/top-toys-2025" />
        <meta name="twitter:title" content="Top 10 Toys for Kids in 2025 | My Toy Scout" />
        <meta name="twitter:description" content="Looking for the best toys that will have your kids growing their skills while having tons of fun.? Here's our expert-approved list of the top 10 toys for learning and fun in 2025." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
        <script type="application/ld+json">
          {JSON.stringify({
             "@context": "https://schema.org",
             "@type": "BlogPosting",
             "headline": "Top 10 Toys for Kids in 2025",
             "description": "Looking for the best toys that will have your kids growing their skills while having tons of fun.? Here's our expert-approved list of the top 10 toys for learning and fun in 2025.",
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
                 "url": "http://mytoyscout.netlify.app/blog/top-toys-2025"
                }
              },
             "datePublished": "2025-06-02"
            }
            )}
            </script>
      </Helmet>
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        Top 10 Toys for Kids in 2025
      </h1>
      <p className="mb-8 text-gray-600">
        From Talking Books to Stomp Rockets, These toys will have your kids growing their
        skills while having tons of fun. Click any product below to shop directly on Amazon.
        Bonus Item at Bottom I found 11 NOT 10 That I Like.
      </p>

      <div className="grid gap-8">
        {toys.map((toy, index) => (
          <div key={index} className="border-b pb-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{toy.name}</h2>
            <img src={toy.image} alt={toy.name} className="w-full h-48 object-cover mb-4 rounded" />
            <p className="mb-4"><strong><bold>Description:   </bold></strong>{toy.description} </p>
            <a
              href={toy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300"
            >
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
