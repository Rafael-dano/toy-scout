import ToyCard from '../components/ToyCard'
import toys from '../data/toys'
import "../styles/base.css";
import "../styles/home.css";
import "../styles/layout.css";
import { Link } from "react-router-dom";
import mascotHero from "../assets/mascot-toys.png"; // reuse your header mascot image or a new one
import { Helmet } from "react-helmet";


export default function Home() {
  return (
    <div className="p-4 max-w-6xl mx-auto space-y-16">
      {/* 🔵 HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center bg-yellow-100 p-6 rounded-xl shadow-md">
        <img
          src={mascotHero}
          alt="Toy Scout Mascot"
          className="w-28 md:w-36 mb-4 md:mb-0 md:mr-8"
          style={{ maxHeight: "360px" }}
        />
        <div className="text-center md:text-left">
            <Helmet>
              <title>Top Kids Toys | My Toy Scout</title>
              <meta name="description" content="Discover the best kids toys! Handpicked educational, outdoor, and STEM toys your kids will love. Trusted by parents." />
                {/* Open Graph / Facebook */}
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://mytoyscout.netlify.app/ " />
                  <meta property="og:title" content="Top Kids Toys | My Toy Scout" />
                  <meta property="og:description" content="Discover the best kids toys! Handpicked educational, outdoor, and STEM toys your kids will love." />
                  <meta property="og:image" content="http://localhost:5173/src/assets/mascot-toys.png" />
                {/* Twitter Card */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:url" content="https://mytoyscout.netlify.app/" />
                  <meta name="twitter:title" content="Top Kids Toys | My Toy Scout" />
                  <meta name="twitter:description" content="Discover the best kids toys! Handpicked educational, outdoor, and STEM toys your kids will love." />
                  <meta name="twitter:image" content="http://localhost:5173/src/assets/mascot-toys.png" />
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "My Toy Scout",
                      "url": "https://mytoyscout.netlify.app/",
                      "logo": "https://mytoyscout.netlify.app/assets/mascot-toys-DUp45_TC.png",
                      "sameAs": [
                      "https://facebook.com/yourpage",
                      "https://twitter.com/yourhandle"
                      ]
                    }
                  )}
                  </script>
            </Helmet>
            <h1 className="text-4xl font-bold text-pink-500 mb-2">Welcome to My Toy Scout!</h1>
            <p className="text-gray-700 text-lg mb-4">
              Find the coolest toys for your little adventurers
            </p>
          <div className="space-x-4">
            <p><Link to="/toys" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Browse Toys</Link></p>
            <p><Link to="/blog" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Read Blog</Link></p>
          </div>
        </div>
      </section>

      {/* 🟢 FEATURED TOYS */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Featured Toys</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example card */}
          <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img
              src="https://m.media-amazon.com/images/I/71PCo02POUL._AC_SX679_.jpg"
              alt="Toy"
              className="rounded mb-2 w-24 mx-auto "
            />
            <h3 className="font-semibold text-lg text-center">EastPoint Sports Go! Gater Cornhole – Light-Up and Travel Versions </h3>
            <p className="text-gray-500 text-center">$30 - $40</p>
            <a href="https://www.amazon.com/dp/B07D6FBZTV/ref=cm_sw_r_as_gl_api_gl_i_KCRS1MXETJN6T9D8FYVE?linkCode=ml1&tag=more4kids0a-20&linkId=2b7f864feb8275416973c95239d84514" className="text-yellow-600 hover:underline text-sm block text-center mt-1">Buy Now</a>
          </div>
          <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img
              src="https://m.media-amazon.com/images/I/81pa-dG26dL._AC_SX679_.jpg"
              alt="Toy"
              className="rounded mb-2 w-24 mx-auto"
            />
            <h3 className="font-semibold text-lg text-center">Cool RC Cars for Kids</h3>
            <p className="text-gray-500 text-center">$29.99</p>
            <a href="https://www.amazon.com/dp/B0CTWHSSM8/ref=cm_sw_r_as_gl_api_gl_i_0N20BS10F53CC3R0GENN?linkCode=ml1&tag=more4kids0a-20&linkId=4ff57d1ffec31e4359259b4d9a40950a" className="text-yellow-600 hover:underline text-sm block text-center mt-1">Buy Now</a>
          </div>
          <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img
              src="https://m.media-amazon.com/images/I/914CIoYXtHL._AC_SX679_.jpg"
              alt="New Amazon Kindle Kids"
              className="rounded mb-2 w-24 mx-auto"
            />
            <h3 className="font-semibold text-lg text-center">New Amazon Kindle Kids (16 GB)</h3>
            <p className="text-gray-500 text-center">$129.99</p>
            <a href="https://www.amazon.com/dp/B0CNV9CQK8/ref=cm_sw_r_as_gl_api_gl_i_GYTP5XYZ8RN1S1BBAEME?linkCode=ml1&tag=more4kids0a-20&th=1" className="text-yellow-600 hover:underline text-sm block text-center mt-1">Buy Now</a>
          </div>
          <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img
              src="https://m.media-amazon.com/images/I/81+xZOhk09L._AC_SX679_.jpg"
              alt="Toy"
              className="rounded mb-2 w-24 mx-auto"
            />
            <h3 className="font-semibold text-lg text-center">STEM: Magnetic Building Blocks</h3>
            <p className="text-gray-500 text-center">$30 - $50</p>
            <a href="https://www.amazon.com/dp/B0B2RF8T4G/ref=cm_sw_r_as_gl_api_gl_i_4BXPK43H0N4EZFE2FBYT?linkCode=ml1&tag=valeriafinds2-20&th=1" className="text-yellow-600 hover:underline text-sm block text-center mt-1">Buy Now</a>
          </div>
          {/* Duplicate more cards as needed */}
          <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img
              src="https://m.media-amazon.com/images/I/61V5l1e-unL._AC_SX679_.jpg"
              alt="Toy"
              className="rounded mb-2 w-24 mx-auto"
            />
            <h3 className="font-semibold text-lg text-center">Toddler Tricycle with Push Handle for 1-3 Year Old</h3>
            <p className="text-gray-500 text-center">$99.99</p>
            <a href="https://www.amazon.com/dp/B09B9LRBM5/ref=cm_sw_r_as_gl_api_gl_i_BKW2D6CQC0S7GYED79VW?linkCode=ml1&tag=more4kids0a-20&th=1" className="text-yellow-600 hover:underline text-sm block text-center mt-1">Buy Now</a>
          </div>
        </div>
      </section>

      {/* 🟣 BLOG TEASERS */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">Toys That Help Kids Stay Active Indoors This Fall</h3>
            <p className="text-sm text-gray-500 mb-2">September 8, 2025</p>
            <p className="text-gray-700 mb-2">Don’t let cold weather slow your kids down! These toys turn any living room into a fun, fitness-friendly play space.</p>
            <Link to="/blog/toys-that-help-kids-stay-active-indoors-this-fall" className="text-blue-500 hover:underline text-sm">Read More</Link>
          </div>
        </div>
      </section>

      {/* 🟠 WHY TRUST TOY SCOUT? */}
      <section className="bg-white border rounded-xl p-6 shadow">
        <h2 className="text-xl font-bold mb-4 text-green-600">Why Trust My Toy Scout?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Curated picks by real toy lovers</li>
          <li>Age-appropriate and parent-approved</li>
          <li>Real-world reviews and hands-on insights</li>
          <li>I'm just like YOU, I just decided to make a website that review toys</li>
          <li>I can teach you how to create a site just like this</li>
          <li>Email Me At mytoyscout@gmail.com</li>
        </ul>
      </section>

      {/* ⚪️ EMAIL SIGNUP */}
      {/*<section className="bg-pink-100 rounded-xl p-6 text-center shadow">
        <h2 className="text-2xl font-bold mb-2">Join the My Toy Scout Club!</h2>
        <p className="text-gray-700 mb-4">Get top toy picks, deals, and updates delivered to your inbox.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded border focus:outline-none w-full sm:w-80"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
        </form>
      </section>*/}
    </div>
  );
}
