
import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import "../styles/base.css";
import "../styles/blog.css";
import "../styles/layout.css";


const blogPosts = [
  {
    id: 1,
    title: "Top 10 Educational Toys for Toddlers in 2025",
    excerpt: "Discover the best educational toys that help toddlers learn while having fun. From shapes to STEM kits — here’s our top picks.",
    date: "May 20, 2025",
    slug: "/blog/top-toys-2025",
  },
  {
    id: 2,
    title: "Why STEM Toys Are the Future of Play",
    excerpt: "STEM toys are more than a trend. Learn how they help kids build real-world skills in coding, logic, and engineering.",
    date: "May 7, 2025",
    slug: "/blog/stem-toys-future",
  },
  {
    id: 3,
    title: "Outside Fun calls For Outdoor Toys",
    excerpt: "Having fun in the sun? Check out these outdoor toys that are must buys. ",
    date: "May 3, 2025",
    slug: "/blog/outdoor-toys", // or another actual article you have
  },
]

export default function Blog() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Helmet>
        <title>Blog | Toy Scout's Toys</title>
        <meta name="description" content="Tips, reviews, and guides on kids toys and parenting." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6 text-pink-500">Our Toy Blog</h1>
      <p className="text-gray-600 mb-10">Read expert toy reviews, buying guides, and parenting tips.</p>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-blue-600">{post.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            <p className="mb-3">{post.excerpt}</p>
            <Link
              to={post.slug}
              className="text-yellow-600 hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
