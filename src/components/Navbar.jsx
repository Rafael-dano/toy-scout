import { Link } from "react-router-dom"
import "../styles/layout.css";

export default function Navbar() {
  return (
    <nav className="bg-yellow-300 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-pink-600"> Toy Scout </h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/toys" className="hover:text-blue-600">Toys</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/blog" className="hover:text-blue-600">Blog</Link>
      </div>
    </nav>
  )
}
