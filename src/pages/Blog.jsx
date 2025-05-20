
import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import "../styles/base.css";
import "../styles/blog.css";
import "../styles/layout.css";
import mascotBlog from "../assets/mascot-blog.png";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Toys for Kids in 2025",
    excerpt: "Discover the best Toys of 2025 that help kids learn while having fun. From Talking Books to Stomp Rockets — here’s our top picks.",
    date: "May 31, 2025",
    slug: "/blog/top-toys-2025",
  },
  {
    id: 2,
    title: "Why STEM Toys Are the Future of Play",
    excerpt: "STEM toys are more than a trend. Learn how they help kids build real-world skills in coding, logic, and engineering.",
    date: "June 1, 2025",
    slug: "/blog/stem-toys-future",
  },
  {
    id: 3,
    title: "Outside Fun Calls For Outdoor Toys",
    excerpt: "Having fun in the sun? Check out these Outdoor Toys that are Must haves. ",
    date: "June 2, 2025",
    slug: "/blog/outdoor-toys",
  },
  //{
    //id: 4,
    //title: "Top Educational Toys",
    //excerpt: "Looking for the best educational toys for toddlers? Here's our expert-approved list of the top 10 toys for learning and fun in 2025. ",
    //date: "June 16, 2025",
    //slug: "/blog/educational-toys", // or another actual article you have 
  //},
  //{
    //id: 5,
    //title: "10 Summer FUN Finds For Kids",
   // excerpt: "Looking for The Best Toys, And Gear For Summer FUN. ",
    //date: "June 19, 2025",
   // slug: "/blog/[change to match with title]", // or another actual article you have 
  //},
  //{
    //id: 6,
    //title: "Forth of July Finds ",
   // excerpt: "TOP JULY 4TH GEAR for Kids. ",
    //date: "June 26, 2025",
   // slug: "/blog/outdoor-toys", // or another actual article you have 
   //how do i add another blog and link it to the blog.jsx
  //},
  //{
    //id: 7,
    //title: "Top 10 Bath Time Toys ",
   // excerpt: "Here Are The Best Bath Time Toys For Kids . ",
    //date: "June 23, 2025",
   // slug: "/blog/outdoor-toys", // or another actual article you have 
   //how do i add another blog and link it to the blog.jsx
  //},
////////////////////////////
  //{
    //id: 8,
    //title: "Top 10 Bath Time Toys ",
   // excerpt: "Here Are The Best Bath Time Toys For Kids . ",
    //date: "July 7, 2025",
   // slug: "/blog/outdoor-toys", // or another actual article you have 
   //how do i add another blog and link it to the blog.jsx
  //},
  //{
    //id: 9,
    //title: "Top 10 Bath Time Toys ",
   // excerpt: "Here Are The Best Bath Time Toys For Kids . ",
    //date: "July 9, 2025",
   // slug: "/blog/outdoor-toys", // or another actual article you have 
   //how do i add another blog and link it to the blog.jsx
  //},
  //{
    //id: 10,
    //title: "Top 10 Bath Time Toys ",
   // excerpt: "Here Are The Best Bath Time Toys For Kids . ",
    //date: "July 14, 2025",
   // slug: "/blog/outdoor-toys", // or another actual article you have 
   //how do i add another blog and link it to the blog.jsx
  //},
  //{
    //id: 11,
    //title: "Top 10 Bath Time Toys ",
   // excerpt: "Here Are The Best Bath Time Toys For Kids . ",
    //date: "July 21, 2025",
   // slug: "/blog/outdoor-toys", // or another actual article you have 
   //how do i add another blog and link it to the blog.jsx
  //},
  //{
    //id: 12,
    //title: "Top 10 Bath Time Toys ",
   // excerpt: "Here Are The Best Bath Time Toys For Kids . ",
    //date: "July 28, 2025",
   // slug: "/blog/outdoor-toys", // or another actual article you have 
   //how do i add another blog and link it to the blog.jsx
  //},
  //{
    //id: 13,
    //title: "Top 10 Bath Time Toys ",
   // excerpt: "Here Are The Best Bath Time Toys For Kids . ",
    //date: "aug 4, 2025",
   // slug: "/blog/outdoor-toys", // or another actual article you have 
   //how do i add another blog and link it to the blog.jsx
  //},
]

export default function Blog() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Helmet>
        <title>Blog | My Toy Scout's Toys</title>
        <meta name="description" content="Tips, reviews, and guides on kids toys and parenting." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yoursite.com/" />
        <meta property="og:title" content="Blog | My Toy Scout's Toys" />
        <meta property="og:description" content="Tips, reviews, and guides on kids toys and parenting." />
        <meta property="og:image" content="https://www.yoursite.com/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.yoursite.com/" />
        <meta name="twitter:title" content="Blog | My Toy Scout's Toys" />
        <meta name="twitter:description" content="Tips, reviews, and guides on kids toys and parenting." />
        <meta name="twitter:image" content="https://www.yoursite.com/images/og-image.jpg" />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6 text-pink-500">Our Toy Blog of 2025</h1>
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
