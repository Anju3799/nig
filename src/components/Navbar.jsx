import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-600">
      <nav className="flex justify-between items-center lg:max-w-[1080px] m-auto">
        {/* Logo Section */}
        <div className="text-xl font-bold text-white">
          <a href="/">
            <img src="nig.png" className="w-32 object-cover" />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden mr-3">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <span className="text-lg text-white font-semibold">x</span> : 
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
           

}
          </button>
        </div>
        {/* Links Section responsive */}
        <ul
          className={`absolute top-14 left-0 w-full bg-blue-600 px-4 pt-4 pb-2 ${
            isOpen ? "block" : "hidden"
          } ml-auto lg:hidden shadow-md`}
        >
          {[
            { href: "#home", name: "Home" },
            { href: "#aboutus", name: "About Us" },
            { href: "#services", name: "Services" },
            { href: "#contactus", name: "Contact Us" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm text-white mb-3"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex-row gap-4 hidden lg:flex mr-6">
          {[
            { href: "#home", name: "Home" },
            { href: "#aboutus", name: "About Us" },
            { href: "#services", name: "Services" },
            { href: "#contactus", name: "Contact Us" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm text-white hover:text-gray-200 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
