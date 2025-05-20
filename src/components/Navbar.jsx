import { Link } from "react-router-dom";
import "../styles/layout.css";


export default function Navbar() {
  return (
    <nav className="bg-yellow-300 p-4 shadow-md">
      <div className="flex justify-center items-center space-x-16 text-lg">
        <Link to="/" className="inline-block hover:text-blue-600">Home</Link>

        <Link to="/toys" className="inline-block hover:text-blue-600">Toys</Link>

        <Link to="/about" className="inline-block hover:text-blue-600">About</Link>
        
        <Link to="/blog" className="inline-block hover:text-blue-600">Blog</Link>
      </div>
    </nav>
  );
}

 // make centered