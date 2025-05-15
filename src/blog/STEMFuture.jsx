import React from "react"
import { Helmet } from "react-helmet"

// find new products that fit niche then change them out

const stemToys = [
  {
    name: "Osmo - Genius Starter Kit for iPad",
    description: "Turns your iPad into a hands-on learning system that blends tactile play with digital learning.",
    image: "https://m.media-amazon.com/images/I/71p6L5Rk5zL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B07W4NQ4RC?tag=more4kids0a-20G",
  },
  {
    name: "Snap Circuits Jr. Electronics Exploration Kit",
    description: "Introduce kids to electrical engineering with snap-together components.",
    image: "https://m.media-amazon.com/images/I/81OJjIsG-uL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B00VFH1RQS?tag=YOUR_AFFILIATE_TAG",
  },
  {
    name: "LEGO Boost Creative Toolbox",
    description: "Build and code interactive robots using LEGO bricks—great for kids who love to tinker.",
    image: "https://m.media-amazon.com/images/I/81OFfVLtnFL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B0756CYWWD?tag=YOUR_AFFILIATE_TAG",
  },
  {
    name: "ThinkFun Gravity Maze Marble Run",
    description: "STEM toy that builds spatial reasoning and logic through 60 challenges.",
    image: "https://m.media-amazon.com/images/I/81u4w23M3+L._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B00IUAAK2A?tag=YOUR_AFFILIATE_TAG",
  },
  {
    name: "National Geographic Mega Science Kit",
    description: "Packed with over 15 science experiments including volcanoes, crystals, and more.",
    image: "https://m.media-amazon.com/images/I/81emv0mjDfL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B07ZKZTKFV?tag=YOUR_AFFILIATE_TAG",
  },
]

export default function STEMFuture() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Helmet>
        <title>Why STEM Toys Are the Future of Play | GSharp Toys</title>
        <meta
          name="description"
          content="STEM toys help kids learn real-world skills like coding, logic, and problem-solving. Discover why they're shaping the future of playtime."
        />
      </Helmet>
      <h1 className="text-4xl font-bold text-green-500 mb-6">
        Why STEM Toys Are the Future of Play
      </h1>

      <img
        src="https://images.unsplash.com/photo-1596461404969-9fef058c0fbb"
        alt="Child playing with STEM toy"
        className="rounded shadow w-full max-w-xl mb-6"
      />

      <p className="mb-4">
        STEM (Science, Technology, Engineering, and Math) toys are more than just fun—they're
        building the foundation for the innovators of tomorrow.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Top STEM Toys on Amazon</h2>

      <div className="grid gap-8 mt-4">
        {stemToys.map((toy, index) => (
          <div key={index} className="border-b pb-6">
            <h3 className="text-xl font-semibold mb-2">{toy.name}</h3>
            <img src={toy.image} alt={toy.name} className="w-full max-w-md rounded shadow mb-4" />
            <p className="mb-2">{toy.description}</p>
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
