import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-teal-100 sticky -top-1 z-50">
      <div className="container mx-auto flex items-center gap-4 p-4 relative justify-between">
        <div className="w-[20%] bg-primary ">
          <Link to="/">
            <img
              id="logo"
              src="src/assets/logos/medly_logo.svg"
              className="w-30 hue-rotate-0"
              alt="Medly"
            />
          </Link>
        </div>
        <button
          className="block md:hidden p-2 bg-teal-600 font-bold text-white rounded-md hover:bg-teal-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>

        <nav className="hidden md:flex justify-evenly items-center gap-4">
          <Menu />
        </nav>

        {isOpen && (
          <div className="absolute top-0 right-0 z-100 w-full h-fit font-bold shadow-2xl overflow-hidden bg-teal-200 ">
            <div className="flex flex-col p-2">
              <button
                className="self-end p-2 rounded-full bg-teal-700 text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                X
              </button>
              <Menu mobile={true} col={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
