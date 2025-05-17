import { Link } from "react-router-dom";
import "../styles/layout.css";

export default function Navbar() {
  return (
    <nav className="bg-yellow-300 p-4 flex justify-center items-center shadow-md">
      <div className="space-x-20 text-lg">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/toys" className="hover:text-blue-600">Toys</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/blog" className="hover:text-blue-600">Blog</Link>
      </div>
    </nav>
  );
}

 // make centered