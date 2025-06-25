import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Footer from './components/Footer'
import Blog from "./pages/Blog"
import TopToys2025 from "./blog/TopToys2025"
import STEMFuture from "./blog/STEMFuture"
import OutdoorToys from "./blog/OutdoorToys"
import EducationalToys from "./blog/EducationalToys"
import SummerFinds from "./blog/SummerFinds"
import EarlyJuly from "./blog/EarlyJuly4"
import EBooks from "./blog/eBooks"
import Books from './blog/books'
import Top15July4Toys from "./blog/Top15July4Toys"
import Primeday from "./blog/PrimeDayDeals"
import SummerFunFinds from "./blog/SummerFunFinds"
import About from './pages/About';
import Toys from './pages/Toys';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Home />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/top-toys-2025" element={<TopToys2025 />} />
          <Route path="/blog/stem-toys-future" element={<STEMFuture />} />
          <Route path="/blog/outdoor-toys" element={<OutdoorToys />} />
          <Route path="/blog/educational-toys" element={<EducationalToys />} />
          <Route path="/blog/summer-finds" element={<SummerFinds />} />
          <Route path="/blog/early-july" element={<EarlyJuly />} />
          <Route path="/blog/ebooks" element={<EBooks />} />
          <Route path="/blog/books" element={<Books />} />
          <Route path="/blog/july-4th" element={<Top15July4Toys />} />
          <Route path="/blog/prime-day-deals-2025" element={<Primeday />} />
          <Route path="/blog/summer-fun" element={<SummerFunFinds />} />
          <Route path="/about" element={<About />} />
          <Route path="/toys" element={<Toys />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
