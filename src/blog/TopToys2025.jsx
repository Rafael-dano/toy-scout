import React from "react"
import { Helmet } from "react-helmet"

// find new products that fit niche then change them out

const toys = [
  {
    name: "LeapFrog Learning Friends 100 Words Book",
    description: "A talking book that helps toddlers learn words through interactive buttons and music.",
    image: "https://m.media-amazon.com/images/I/81F8xzK9NLL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B07B6V7WKK?tag=YOUR_AFFILIATE_TAG",
  },
  {
    name: "Melissa & Doug Wooden Building Blocks Set",
    description: "Encourages creativity, motor skills, and problem-solving through colorful block play.",
    image: "https://m.media-amazon.com/images/I/91zjuzdYBzL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B000REP3E2?tag=YOUR_AFFILIATE_TAG",
  },
  {
    name: "VTech Smart Shots Sports Center",
    description: "Combines physical activity and counting fun in one awesome sports-themed toy.",
    image: "https://m.media-amazon.com/images/I/81t7bYMyZ-L._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B00K89KO90?tag=YOUR_AFFILIATE_TAG",
  },
  {
    name: "Fat Brain Toys SpinAgain",
    description: "A visually engaging stacking toy that helps develop coordination and fine motor skills.",
    image: "https://m.media-amazon.com/images/I/71S4MJfdBpL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B00HN8D5ZC?tag=YOUR_AFFILIATE_TAG",
  },
  {
    name: "Fisher-Price Laugh & Learn Servin’ Up Fun Food Truck",
    description: "Promotes role-play, counting, and storytelling through interactive pretend play.",
    image: "https://m.media-amazon.com/images/I/81y5g8Ig1rL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B01N6PRX45?tag=YOUR_AFFILIATE_TAG",
  },
  {
    name: "Manhattan Toy Tree Top Adventure Activity Center",
    description: "A wooden maze of fun activities designed to enhance motor and sensory development.",
    image: "https://m.media-amazon.com/images/I/91h3XFGHjjL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B01CJ0H09K?tag=YOUR_AFFILIATE_TAG",
  },
]

export default function TopToys2025() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Top 10 Educational Toys for Toddlers in 2025 | GSharp Toys</title>
        <meta
          name="description"
          content="Looking for the best educational toys for toddlers? Here's our expert-approved list of the top 10 toys for learning and fun in 2025."
        />
      </Helmet>
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        Top 10 Educational Toys for Toddlers in 2025
      </h1>
      <p className="mb-8 text-gray-600">
        From talking books to building blocks, these educational toys help toddlers grow their
        skills while having tons of fun. Click any product below to shop directly on Amazon.
      </p>

      <div className="grid gap-8">
        {toys.map((toy, index) => (
          <div key={index} className="border-b pb-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{toy.name}</h2>
            <img src={toy.image} alt={toy.name} className="w-full max-w-sm rounded shadow mb-4" />
            <p className="mb-4">{toy.description}</p>
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
