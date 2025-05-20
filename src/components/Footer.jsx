import { Link } from 'react-router-dom'
import "../styles/layout.css";

export default function Footer() {
    return (
      <footer className="bg-dark text-white text-center p-4 mt-8">
        <p>&copy; {new Date().getFullYear()} MyToyScout | All rights reserved.</p>
        <p className="text-sm mt-2">As an Amazon Associate, I earn from qualifying purchases.</p>
        <p className="text-sm mt-2">
          <Link to="/privacy-policy" className="underline hover:text-yellow-300">
            Privacy Policy
          </Link>
        </p>
      </footer>
    )
  }
  