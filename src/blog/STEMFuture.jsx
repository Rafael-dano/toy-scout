import React from "react"
import { Helmet } from "react-helmet"

// find new products that fit niche then change them out

const stemToys = [
  {
    name: "Osmo - STEM Robot Kit for Kids",
    description: "Robot Toys for 8-16 Year Old Boys Girls Kids with APP or Remote Control Science Programmable Building Block Kit, STEM Projects Educational Birthday Gifts.",
    image: "https://m.media-amazon.com/images/I/71bGMkEzNeS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B0925WTHD6/ref=cm_sw_r_as_gl_api_gl_i_E8VPSY69KV12WB4AWS15?linkCode=ml1&tag=more4kids0a-20",
  },
  {
    name: "KANOODLE",
    description: "the Viral TIKTOK 3D Brain Teaser Puzzle Game, Featuring 200 Challenges. You have Probably seen this everywhere dont roll your eyes... The Toy Scout thinks you should snag this one. ",
    image: "https://m.media-amazon.com/images/I/71v68G+xVAL._AC_SY300_SX300_.jpg",
    link: "https://www.amazon.com/dp/B000FGECAI/ref=cm_sw_r_as_gl_api_gl_i_FK8MX0R54PPJY7QVKSJE?linkCode=ml1&tag=more4kids0a-20",
  },
  {
    name: "Miricale GRO My First Root Viewer",
    description: "Decorate & Plant Your Own Garden - Stem Kit for Kids - Soil & Vegetable Seeds Included - Science Educational Teens Kids Gardening Set Age 6+, Multicolor.",
    image: "https://m.media-amazon.com/images/I/81tYR8eN4NL._AC_SX679_.jpg",
    link: "https://www.amazon.com/dp/B09ZK8MJ2J/ref=cm_sw_r_as_gl_api_gl_i_GERYT879XJTY3E83C3VJ?linkCode=ml1&tag=more4kids0a-20"
  },
  {
    name: "NATIONAL GEOGRAPHIC Break Open 10 Premium Geodes",
    description: "Great STEM Science Kit, Geology Gift for Kids, Break Your Own Geodes with Crystals, Toys for Boys and Girls.",
    image: "https://m.media-amazon.com/images/I/91glKpbOU9L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B0160JB7IS/ref=cm_sw_r_as_gl_api_gl_i_332NRH4HE5EWB2Q63BA4?linkCode=ml1&tag=more4kids0a-20&th=1",
  },
  {
    name: "Spinner Rocket",
    description: "Rocket Launcher for Kidsi know that sounds terrifying but it is a Self Launching Motorized Air Rocket Toy, Outdoor Toys for Ages 8-12, Model Rockets with Parachute Safely Land, Spaceship Launch up to 200 ft.",
    image: "https://m.media-amazon.com/images/I/71hi3Y0qF7L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B0BBRGJTD7/ref=cm_sw_r_as_gl_api_gl_i_KE7SZ9BSJMZJC8CJ9F7F?linkCode=ml1&tag=more4kids0a-20&th=1",
  },
  {
    name: "Magnetic Building Blocks",
    description: "Montessori Toys, Magnet Cubes, Preschool STEM Educational Sensory Magnet Toys for Kids Ages 3-5 Year Old Boys and Girls.",
    image: "https://m.media-amazon.com/images/I/71+cxopG5DL._AC_SY300_SX300_.jpg",
    link: "https://www.amazon.com/dp/B09PBL13HH/ref=cm_sw_r_as_gl_api_gl_i_E7QS7G46NC8J5M744N47?linkCode=ml1&tag=more4kids0a-20",
  },
  {
    name: "Science Kits for Kids",
    description: "STEM Kits for Kids, Electronics Exploration Kit, Over 420 Projects, 35 Circuit Parts, STEM Educational Toy Gifts for Kids Boys Girls Ages 3 to 12.",
    image: "https://m.media-amazon.com/images/I/81pYVc69sxL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B0CQV1VMPK/ref=cm_sw_r_as_gl_api_gl_i_AEFBGYAB7F61MM9F7GBJ?linkCode=ml1&tag=more4kids0a-20",
  },
  {
    name: "100PCS Magnetic Tiles Kids Toys",
    description: "STEM Magnet Toys for Toddler Magnetic Blocks Building Toys Preschool Learning Sensory Montessori Toys for 3+ Year Old Boys and Girls, Safe Creativity Toddler Kids Toys.",
    image: "https://m.media-amazon.com/images/I/81mVMJDuWtL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B0C5CWTSW1/ref=cm_sw_r_as_gl_api_gl_i_J2XSMPTY2JRVEJKBWNCT?linkCode=ml1&tag=more4kids0a-20",
  },
  {
    name: "ThinkFun Gravity Maze",
    description: "Gravity Maze is a combination logic game, marble run, and STEM toy that's one of the best gifts you can buy for boys and girls age 8 and up It contains 60 challenges from beginner to expert, a game grid, 9 towers, 1 target piece, and 3 marbles.",
    image: "https://m.media-amazon.com/images/I/81xZ2fdTc7L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B00IUAAK2A/ref=cm_sw_r_as_gl_api_gl_i_NB9DS1ABK321A3E3BBR1?linkCode=ml1&tag=more4kids0a-20",
  },
  {
    name: "Kids Activity Table",
    description: "Toddlers Kids Table and Chair Set with 152Pcs Large Marble Run Building Blocks All in One Kids Play Water Tables Sand Tables, STEM Toys for Boys Girls 3 4 5 6 Year Old.",
    image: "https://m.media-amazon.com/images/I/71x3HjIG8FL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/dp/B08QZT41ZP/ref=cm_sw_r_as_gl_api_gl_i_JPFDX5B22RVARB9XCKMT?linkCode=ml1&tag=more4kids0a-20",
  },
]

export default function STEMFuture() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Helmet>
        <title>Why STEM Toys Are the Future of Play | My Toy Scout</title>
        <meta
          name="description"
          content="STEM toys help kids learn real-world skills like coding, logic, and problem-solving. Discover why they're shaping the future of playtime."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog/stem-toys-future" />
        <meta property="og:title" content="Why STEM Toys Are the Future of Play | My Toy Scout" />
        <meta property="og:description" content="STEM toys help kids learn real-world skills like coding, logic, and problem-solving. Discover why they're shaping the future of playtime." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog/stem-toys-future" />
       <meta name="twitter:title" content="Why STEM Toys Are the Future of Play | My Toy Scout" />
        <meta name="twitter:description" content="STEM toys help kids learn real-world skills like coding, logic, and problem-solving. Discover why they're shaping the future of playtime." />
       <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
        <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Why STEM Toys Are the Future of Play",
      "description": "STEM toys help kids learn real-world skills like coding, logic, and problem-solving. Discover why they're shaping the future of playtime.",
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
          "url": "https://mytoyscout.netlify.app/blog/stem-toys-future" 
        }
      },
      "datePublished": "2025-06-02"
    }
       )}
        </script>
      </Helmet>
      <h1 className="text-4xl font-bold text-green-500 mb-6">
        Why STEM Toys Are the Future of Play
      </h1>

      <p className="mb-4">
        STEM (Science, Technology, Engineering, and Math) toys are more than just fun—they're
        building the foundation for the innovators of tomorrow.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Top STEM Toys on Amazon</h2>

      <div className="grid gap-8 mt-4">
        {stemToys.map((toy, index) => (
          <div key={index} className="border-b pb-6">
            <h3 className="text-xl font-semibold mb-2">{toy.name}</h3>
            <img src={toy.image} alt={toy.name} className="w-full h-48 object-cover mb-4 rounded" />
            <p className="text-green-500 font-bold mb-2">{toy.description}</p>
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

      <p className="mt-6">
        STEM toys spark curiosity, encourage exploration, and teach valuable skills—all while kids
        are having fun.
      </p>
    </div>
  )
}
