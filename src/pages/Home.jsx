import ToyCard from '../components/ToyCard'
import toys from '../data/toys'
import "../styles/base.css";
import "../styles/home.css";
import "../styles/layout.css";


export default function Home() {
  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {toys.map(toy => (
        <ToyCard key={toy.id} toy={toy} />
      ))}
    </main>
  )
}
