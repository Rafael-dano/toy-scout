
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
    date: "June 2, 2025",
    slug: "/blog/top-toys-2025",
  },
  {
    id: 2,
    title: "Why STEM Toys Are the Future of Play",
    excerpt: "STEM toys are more than a trend. Learn how they help kids build real-world skills in coding, logic, and engineering.",
    date: "June 2, 2025",
    slug: "/blog/stem-toys-future",
  },
  {
    id: 3,
    title: "Outside Fun Calls For Outdoor Toys",
    excerpt: "Having fun in the sun? Check out these Outdoor Toys that are Must haves. ",
    date: "June 2, 2025",
    slug: "/blog/outdoor-toys",
  },
  {
    id: 4,
    title: "Top 10 Educational Toys For Summer",
    excerpt: "Looking for the best educational toys for toddlers? Here's our expert-approved list of the top 10 toys for learning and fun in 2025. ",
    date: "June 4, 2025",
    slug: "/blog/educational-toys",  
  },
  {
    id: 5,
    title: "10 Summer Finds For Kids",
    excerpt: "Having fun in the sun? Check out these Summer Toys that are Must haves. Summer Activites Toys.",
    date: "June 4, 2025",
    slug: "/blog/summer-finds", 
  },
  {
    id: 6,
    title: "TOP JULY 4TH Toys for Kids ",
    excerpt: "Early Finds on Outdoor Kids Toys for The Forth of July ",
    date: "June 4, 2025",
    slug: "/blog/early-july", 
  },
  //{
    //id: 7,
    //title: "Top 15 Toys for July 4th ",
   // excerpt: "TOP JULY 4TH toys and gear for Kids. ",
    //date: "June 23, 2025",
   // slug: "/blog/outdoor-toys", // or another actual article you have 
   //how do i add another blog and link it to the blog.jsx
  //},
////////////////////////////
//{
    //id: 8,
    //title: "10 Summer FUN Toys For Kids",
   // excerpt: "Having fun in the sun? Here are 10 more Summer fun Toys your Kids Need. Summer Activites Toys. ",
    //date: "July 7, 2025",
   // slug: "/blog/", // or another actual article you have 
   //how do i add another blog and link it to the blog.jsx
  //},
  //{
    //id: 9,
    //title: "Top 10 Bath Time Toys ",
   // excerpt: "Scrub A Dub Dub Here Are The Best Bath Time Toys For Kids In the Tub.",
    //date: "July 9, 2025",
   // slug: "/blog/", 
  //},
  //{
  //id: 10,
 // title: "Water Toys That Will Rule Summer 2025",
 // excerpt: "From inflatable slides to water blasters, these are the coolest water toys making waves this summer. Perfect for pool days and backyard fun.",
 // date: "July 14, 2025",
//  slug: "/blog/summer-water-toys-2025",
//},
//{
 // id: 11,
  //title: "Best Backyard Toys for Toddlers",
  //excerpt: "Turn your backyard into a toddler paradise with these outdoor toys made for active play, sensory exploration, and summer giggles.",
 // date: "July 21, 2025",
//  slug: "/blog/backyard-toys-for-toddlers",
//},
//{
  //id: 12,
//  title: "Top Toys to End Summer with a Bang",
  //excerpt: "Celebrate the end of summer break with these fun picks that combine creativity, movement, and excitement before school starts.",
//  date: "July 28, 2025",
  //slug: "/blog/end-of-summer-toys",
//},
//{
  //id: 13,
  //title: "August's Must-Have Toys for Preschoolers",
  //excerpt: "August is for prepping little ones for a fun and educational year ahead. These preschool toys blend learning and laughter beautifully.",
  //date: "August 4, 2025",
  //slug: "/blog/august-toys-for-preschoolers",
//},
//{
  //id: 14,
  //title: "Top Toys to Spark Creativity in August",
  //excerpt: "These creative toys—from DIY kits to imaginative playsets—are perfect for kids looking to build, paint, craft, and create.",
  //date: "August 6, 2025",
  //slug: "/blog/creative-toys-august",
//},
//{
  //id: 15,
  //title: "Early Back-to-School Toys That Make Learning Fun",
  //excerpt: "Ease the transition from summer to school with these fun, educational toys that make early learning feel like playtime.",
  //date: "August 8, 2025",
  //slug: "/blog/back-to-school-toys",
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
        <meta property="og:url" content="https://mytoyscout.netlify.app/blog" />
        <meta property="og:title" content="Blog | My Toy Scout's Toys" />
        <meta property="og:description" content="Tips, reviews, and guides on kids toys and parenting." />
        <meta property="og:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mytoyscout.netlify.app/blog"/>
        <meta name="twitter:title" content="Blog | My Toy Scout's Toys" />
        <meta name="twitter:description" content="Tips, reviews, and guides on kids toys and parenting." />
        <meta name="twitter:image" content="https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png" />
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
