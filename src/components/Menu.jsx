import { Link } from "react-router-dom";

export default function Menu({ mobile, col, color = "teal-700" }) {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
    { name: "Help", path: "/Help" },
  ];
  return (
    <ul
      className={`${col ? "flex-col" : "md:flex-row"} ${
        mobile ? "flex py-10" : "flex gap-4  items-center"
      }`}
    >
      {links.map((link, index) => (
        <li
          key={index}
          className={`p-2 cursor-pointer w-fill text-center text-${color} mb-4 contents`}
        >
          <Link
            className="hover:bg-teal-700 py-1 px-4 hover:text-white rounded-md"
            to={link.path}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
