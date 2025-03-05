import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import { LOGO } from "../assets/imagesControl";

// Constants
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "about" },
  { name: "Services", path: "services" },
  { name: "Contact", path: "contact" },
  { name: "Help", path: "help" },
];

// Menu Component
function Menu({ mobile, col, color = "white", closeMenu }) {
  return (
    <ul
      className={`
        ${col ? "flex-col" : "md:flex-row"} 
        ${mobile ? "flex gap-4 " : "hidden"} 
        flex w-full gap-4 items-center justify-center
      `}
    >
      {NAV_LINKS.map((link, index) => (
        <motion.li
          key={index}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: 0.95 }}
          className={`text-${color} hover:text-white transition-all duration-300 `}
        >
          <NavLink
            className="block py-1 px-4 rounded-lg hover:bg-teal-400 
                       transition-all duration-300"
            to={link.path}
            onClick={closeMenu} // Add click handler to close menu
          >
            {link.name}
          </NavLink>
        </motion.li>
      ))}
    </ul>
  );
}

// Navbar Component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const mobileMenuVariants = {
    initial: {
      scale: 0,
      position: "fixed",
      top: 0,
      right: 0,
    },
    animate: {
      scale: 1,
      position: "fixed",
      top: "-50%",
      right: "-50%",
      width: "200%",
      height: "200%",
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 10,
      },
    },
    exit: {
      scale: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="absolute w-full top-0 z-50">
      <div className="bg-teal-100 rounded-full container mx-auto flex items-center gap-4 m-2 px-8 py-2 relative justify-between ">
        {/* Logo Section */}
        <div className="w-[100px] md:w-[150px] bg-primary">
          <Link to="/">
            <img
              id={LOGO.alt}
              src={LOGO.img}
              className="w-[100px] hue-rotate-0"
              alt="Medly"
            />
          </Link>
        </div>

        {/* Desktop Menu - Hidden on Mobile */}
        <nav className="hidden md:flex space-x-4 items-center relative  ">
          <Menu color="teal-500" mobile={!isOpen} />
        </nav>

        {/* Mobile Circular Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 0.9 }}
            className="w-10 h-10 bg-teal-500 rounded-full 
                       cursor-pointer shadow-lg flex items-center 
                       justify-center text-white z-50 relative"
          >
            {!isOpen ? <MenuIcon size={20} /> : <X size={20} />}
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={mobileMenuVariants.initial}
                animate={mobileMenuVariants.animate}
                exit={mobileMenuVariants.exit}
                className="fixed bg-teal-600 rounded-full 
                           z-40 origin-top-right"
                style={{
                  width: "100vw",
                  height: "100vh",
                }}
              >
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.2 },
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 px-4"
                  >
                    <div className="text-white text-center mx-auto">
                      <Menu
                        col={`col`}
                        mobile={isOpen}
                        closeMenu={closeMobileMenu} // Pass close function
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// export default Navbar;
