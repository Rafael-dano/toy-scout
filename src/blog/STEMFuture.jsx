import React from "react"
import { Helmet } from "react-helmet"

// find new products that fit niche then change them out

const stemToys = [
  {
    name: "Osmo - STEM Robot Kit for Kids",
    description: "Robot Toys for 8-16 Year Old Boys Girls Kids with APP or Remote Control Science Programmable Building Block Kit, STEM Projects Educational Birthday Gifts.",
    image: "https://m.media-amazon.com/images/I/71bGMkEzNeS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://a.co/d/gT3iKpa",
  },
  {
    name: "KANOODLE",
    description: "the Viral TIKTOK 3D Brain Teaser Puzzle Game, Featuring 200 Challenges. You have Probably seen this everywhere dont roll your eyes... The Toy Scout thinks you should snag this one. ",
    image: "https://m.media-amazon.com/images/I/71v68G+xVAL._AC_SY300_SX300_.jpg",
    link: "https://a.co/d/gjAt6hN",
  },
  {
    name: "Kids Root Viewer",
    description: "Root Viewer Kit for Kids - Grow Your Own Plant for Boys & Girls Gifts - Science STEM Toy & Craft Growing Kits for Ages 4-8 Birthday Gifts for Boy, Girl, 4 to 8 Year Old. Fun Gardening Toy.",
    image: "https://m.media-amazon.com/images/I/81sWnycVfKL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://a.co/d/dkZg2Qf",
  },
  {
    name: "NATIONAL GEOGRAPHIC Break Open 10 Premium Geodes",
    description: "Great STEM Science Kit, Geology Gift for Kids, Break Your Own Geodes with Crystals, Toys for Boys and Girls.",
    image: "https://m.media-amazon.com/images/I/91glKpbOU9L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://a.co/d/a76qgMF",
  },
  {
    name: "Spinner Rocket",
    description: "Rocket Launcher for Kidsi know that sounds terrifying but it is a Self Launching Motorized Air Rocket Toy, Outdoor Toys for Ages 8-12, Model Rockets with Parachute Safely Land, Spaceship Launch up to 200 ft.",
    image: "https://m.media-amazon.com/images/I/71hi3Y0qF7L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://a.co/d/33OUuls",
  },
  {
    name: "Magnetic Building Blocks",
    description: "Montessori Toys, Magnet Cubes, Preschool STEM Educational Sensory Magnet Toys for Kids Ages 3-5 Year Old Boys and Girls.",
    image: "https://m.media-amazon.com/images/I/71+cxopG5DL._AC_SY300_SX300_.jpg",
    link: "https://a.co/d/1fvF9DW",
  },
  {
    name: "Science Kits for Kids",
    description: "STEM Kits for Kids, Electronics Exploration Kit, Over 420 Projects, 35 Circuit Parts, STEM Educational Toy Gifts for Kids Boys Girls Ages 3 to 12.",
    image: "https://m.media-amazon.com/images/I/81pYVc69sxL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://a.co/d/gCh5OQR",
  },
  {
    name: "100PCS Magnetic Tiles Kids Toys",
    description: "STEM Magnet Toys for Toddler Magnetic Blocks Building Toys Preschool Learning Sensory Montessori Toys for 3+ Year Old Boys and Girls, Safe Creativity Toddler Kids Toys.",
    image: "https://m.media-amazon.com/images/I/81mVMJDuWtL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://a.co/d/eI8erDI",
  },
  {
    name: "ThinkFun Gravity Maze",
    description: "Gravity Maze is a combination logic game, marble run, and STEM toy that's one of the best gifts you can buy for boys and girls age 8 and up It contains 60 challenges from beginner to expert, a game grid, 9 towers, 1 target piece, and 3 marbles.",
    image: "https://m.media-amazon.com/images/I/81xZ2fdTc7L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://a.co/d/aJ1EsgJ",
  },
  {
    name: "Kids Activity Table",
    description: "Toddlers Kids Table and Chair Set with 152Pcs Large Marble Run Building Blocks All in One Kids Play Water Tables Sand Tables, STEM Toys for Boys Girls 3 4 5 6 Year Old.",
    image: "https://m.media-amazon.com/images/I/71x3HjIG8FL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://a.co/d/83E2IZe",
  },
]

export default function STEMFuture() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Helmet>
        <title>Why STEM Toys Are the Future of Play | Toy Scout</title>
        <meta
          name="description"
          content="STEM toys help kids learn real-world skills like coding, logic, and problem-solving. Discover why they're shaping the future of playtime."
        />
         {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yoursite.com/" />
        <meta property="og:title" content="Why STEM Toys Are the Future of Play | Toy Scout" />
        <meta property="og:description" content="STEM toys help kids learn real-world skills like coding, logic, and problem-solving. Discover why they're shaping the future of playtime." />
        <meta property="og:image" content="https://www.yoursite.com/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.yoursite.com/" />
       <meta name="twitter:title" content="Why STEM Toys Are the Future of Play | Toy Scout" />
        <meta name="twitter:description" content="STEM toys help kids learn real-world skills like coding, logic, and problem-solving. Discover why they're shaping the future of playtime." />
       <meta name="twitter:image" content="https://www.yoursite.com/images/og-image.jpg" />
       {/* <script type="application/ld+json">
    {
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Why STEM Toys Are the Future of Play",
      "description": "STEM toys help kids learn real-world skills like coding, logic, and problem-solving. Discover why they're shaping the future of playtime.",
      "image": "https://your-domain.com/path-to-blog-image.jpg",(blog post url)
      "author": {
        "@type": "Person",
        "name": "Rafael Agredano"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Toy Scout",
        "logo": {
          "@type": "ImageObject",
          "url": "https://your-domain.com/path-to-logo.png" (toy scout url)
        }
      },
      "datePublished": "2025-06-02"
    }
          }
        </script>*/}
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
