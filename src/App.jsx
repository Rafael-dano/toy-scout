import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from "react-helmet";
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
import MustHaves from "./blog/MustHaves" 
import BathTimeToys from "./blog/BathTimeToys"
import SummerWater from "./blog/SummerWaterToys2025"
import BackyardToys from "./blog/BackyardToysForToddlers"
import EndSummer from "./blog/EndOfSummerToys"
import AugustPre from "./blog/AugustToysForPreschoolers"
import CreativeAug from "./blog/CreativeToysAugust"
import BackEarly from './blog/BackToSchoolToys'
import BackToSchoolToysLearningFun from "./blog/back-to-school-toys-learning-fun"
import BestKidsBackpacksSupplies2025 from "./blog/best-kids-backpacks-supplies-2025"
import BrainBoostingToysAfterSchool from "./blog/brain-boosting-toys-after-school"
import YouthFootballGearToys from "./blog/youth-football-gear-toys"
import ToysForPreschoolKindergartenKids from "./blog/toys-for-preschool-kindergarten-kids"
import ToysForCarRidesToPractice from "./blog/toys-for-car-rides-to-practice"
import FallSportsFanGearKids from "./blog/fall-sports-fan-gear-kids"
import EducationalSportsToysKids from "./blog/educational-sports-toys-kids"
import WeekendBackyardToysFall from "./blog/weekend-backyard-toys-fall"
import SportsThemedPlayroomIdeas from './blog/sports-themed-playroom-ideas'
import LockerBackpackToysKids from "./blog/locker-backpack-toys-kids"
import FallToysCrispWeatherPlay from "./blog/fall-toys-crisp-weather-play"
import IndoorActiveToysForFall from "./blog/indoor-active-toys-for-fall"
import About from './pages/About';
import Toys from './pages/Toys';

 
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Helmet>
          <meta name="p:domain_verify" content="7d9a1357a52b8035ca036efcbcc553e1"/>
        </Helmet>
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
          <Route path="/blog/must-haves" element={<MustHaves />} />
          <Route path="/blog/bath-time" element={<BathTimeToys />} />
          <Route path="/blog/summer-water-toys-2025" element={<SummerWater />} />
          <Route path="/blog/backyard-toys-for-toddlers" element={<BackyardToys />} />
          <Route path="/blog/end-of-summer-toys" element={<EndSummer />} />
          <Route path="/blog/august-toys-for-preschoolers" element={<AugustPre />} />
          <Route path="/blog/creative-toys-august" element={<CreativeAug />} />
          <Route path="/blog/back-to-school-toys" element={<BackEarly />} />
          <Route path="/blog/back-to-school-toys-2025" element={<BackToSchoolToysLearningFun />} />
          <Route path="/blog/best-kids-school-supplies-2025" element={<BestKidsBackpacksSupplies2025 />} />
          <Route path="/blog/brain-boosting-after-school-toys" element={<BrainBoostingToysAfterSchool />} />
          <Route path="/blog/youth-football-toys-essentials" element={<YouthFootballGearToys />} />
          <Route path="/blog/toys-for-preschool-kindergarten" element={<ToysForPreschoolKindergartenKids />} />
          <Route path="blog/toys-for-kids-in-car-rides" element={<ToysForCarRidesToPractice />} />
          <Route path="/blog/fall-sports-fan-toys-2025" element={<FallSportsFanGearKids />} />
          <Route path="/blog/sports-stats-educational-toys" element={< EducationalSportsToysKids />} />
          <Route path="/blog/backyard-toys-for-fall-2025" element={< WeekendBackyardToysFall />} />
          <Route path="/blog/sports-themed-playroom-ideas" element={<SportsThemedPlayroomIdeas />} />
          <Route path="/blog/toys-for-kids-locker-backpack" element={<LockerBackpackToysKids />} />
          <Route path="/blog/fall-favorites-top-toys-for-crisp-weather-play" element={<FallToysCrispWeatherPlay />} />
          <Route path="/blog/toys-that-help-kids-stay-active-indoors-this-fall" element={<IndoorActiveToysForFall />} />
          <Route path="/about" element={<About />} />
          <Route path="/toys" element={<Toys />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
