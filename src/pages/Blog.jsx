
import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import "../styles/base.css";
import "../styles/blog.css";
import "../styles/layout.css";
import mascotBlog from "../assets/mascot-blog.png";

const blogPosts = [
  {
  id: 35,
  title: "Top Toys to End Summer with a Bang",
  excerpt: "Celebrate the end of summer break with these fun picks that combine creativity, movement, and excitement before school starts.",
  date: "July 28, 2025",
  slug: "/blog/end-of-summer-toys",
},
{
  id: 36,
  title: "Best Backyard Toys for Toddlers",
  excerpt: "Turn your backyard into a toddler paradise with these outdoor toys made for active play, sensory exploration, and summer giggles.",
  date: "July 21, 2025",
  slug: "/blog/backyard-toys-for-toddlers",
  },
  {
    id: 37,
    title: "Water Toys That Will Rule Summer 2025",
    excerpt: "From inflatable slides to water blasters, these are the coolest water toys making waves this summer. Perfect for pool days and backyard fun.",
    date: "July 14, 2025",
    slug: "/blog/summer-water-toys-2025",
  },
  {
    id: 38,
    title: "Top 10 Bath Time Toys ",
    excerpt: "Scrub A Dub Dub Here Are The Best Bath Time Toys For Kids In the Tub.",
    date: "July 7, 2025",
    slug: "/blog/bath-time", 
  },
  {
    id: 39,
    title: "12 Must-Have Kids’ Toys for Summer 2025 — Outdoor Fun, STEM Learning & More! ",
    excerpt: "Keep your kids smiling and learning all summer with these 12 top-rated toys of 2025! From splash pads to talking books, STEM telescopes to bubble machines — explore parent-approved picks perfect for Prime Day deals.",
    date: "June 27, 2025",
    slug: "/blog/must-haves", 
  },
  {
    id: 40,
    title: "10 Summer FUN Toys For Kids",
    excerpt: "Having fun in the sun? Here are 10 more Summer fun Toys your Kids Need. Summer Activites Toys. ",
    date: "June 25, 2025",
    slug: "/blog/summer-fun", 
  },
  {
    id: 41,
    title: "Prime Day Deals 2025",
    excerpt: "Discover the hottest Prime Day toy deals of 2025! Handpicked savings on educational toys, outdoor fun, STEM kits, and more—perfect for kids of all ages. Shop smarter with My Toy Scout.",
    date: "June 20, 2025",
    slug: "/blog/prime-day-deals-2025", 
  },
  {
    id: 42,
    title: "Top 15 Toys for July 4th ",
    excerpt: "TOP JULY 4TH toys and gear for Kids. ",
    date: "June 16, 2025",
    slug: "/blog/july-4th",
  },
  {
    id: 43,
    title: "Top Books for Kids This Summer",
    excerpt:"Keep Your little One Engaged and Learning With These Books and Sets We've found.",
    date: "June 13, 2025",
    slug: "/blog/books",
  },
  {
    id: 44,
    title: "Top E-Books for Kids This Summer",
    excerpt: "Keep Your little One Engaged and Learning With These E-Books We've found.",
    date: "June 11, 2025",
    slug: "/blog/ebooks",
  },
  {
    id: 45,
    title: "Top 10 Educational Toys For Summer",
    excerpt: "Looking for the best educational toys for toddlers? Here's our expert-approved list of the top 10 toys for learning and fun in 2025. ",
    date: "June 4, 2025",
    slug: "/blog/educational-toys",  
  },
  {
    id: 46,
    title: "10 Summer Finds For Kids",
    excerpt: "Having fun in the sun? Check out these Summer Toys that are Must haves. Summer Activites Toys.",
    date: "June 4, 2025",
    slug: "/blog/summer-finds", 
  },
  {
    id: 47,
    title: "TOP JULY 4TH Toys for Kids ",
    excerpt: "Early Finds on Outdoor Kids Toys for The Forth of July ",
    date: "June 4, 2025",
    slug: "/blog/early-july", 
  },
  {
    id: 48,
    title: "Outside Fun Calls For Outdoor Toys",
    excerpt: "Having fun in the sun? Check out these Outdoor Toys that are Must haves. ",
    date: "June 2, 2025",
    slug: "/blog/outdoor-toys",
  },
  {
    id: 49,
    title: "Top 10 Toys for Kids in 2025",
    excerpt: "Discover the best Toys of 2025 that help kids learn while having fun. From Talking Books to Stomp Rockets — here’s our top picks.",
    date: "June 2, 2025",
    slug: "/blog/top-toys-2025",
  },
  {
    id: 50,
    title: "Why STEM Toys Are the Future of Play",
    excerpt: "STEM toys are more than a trend. Learn how they help kids build real-world skills in coding, logic, and engineering.",
    date: "June 2, 2025",
    slug: "/blog/stem-toys-future",
  },
  
//////////////
//{
  //id: 34,
  //title: "August's Must-Have Toys for Preschoolers",
  //excerpt: "August is for prepping little ones for a fun and educational year ahead. These preschool toys blend learning and laughter beautifully.",
  //date: "August 4, 2025",
  //slug: "/blog/august-toys-for-preschoolers",
//},
//{
  //id: 33,
  //title: "Top Toys to Spark Creativity in August",
  //excerpt: "These creative toys—from DIY kits to imaginative playsets—are perfect for kids looking to build, paint, craft, and create.",
  //date: "August 6, 2025",
  //slug: "/blog/creative-toys-august",
//},
//{
  //id: 32,
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
