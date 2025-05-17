import "../styles/layout.css";
import mascotHeader from "../assets/mascot-header.png";

export default function Header() {
    return (
      <header className="flex justify-center items-center p-4 bg-yellow-100 shadow">
        <div className="flex items-center space-x-10 justifyContent:'space-between">
          <img
            src={mascotHeader}
            alt="Toy Scout Mascot"
            className="h-12 md:h-16 mr-6"
            style={{ width: '140px', maxHeight: '220px'}}
          />
          <h1 className="text-3xl font-bold ml-10">Toy Scout</h1>
         </div>
      </header>
    )
  }
  // fix this so it looks better push both the image and the title towards the center