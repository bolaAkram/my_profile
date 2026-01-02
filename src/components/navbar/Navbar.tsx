import { useState } from "react";
import { Link } from "react-router-dom";

import NavItem from "./components/navItem/NavItem";
import { NAV_LINKS } from "./constants/navLinks";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== NAVBAR (ORIGINAL DESIGN) ===== */}
      <header
        className="
        fixed top-0 left-0 w-full z-50
        border-b border-[#90A1B9]
        bg-[#0f172a]
        text-[#90A1B9]
      "
      >
        <div className="flex justify-between">
          <nav className="container mx-auto flex items-center py-4 px-6 md:py-0 md:px-6">
            {/* Name */}
            <div className="text-lg font-semibold">Paula Akram</div>

            {/* Links (Desktop same design) */}
            <ul className="hidden md:flex space-x-0 ml-8">
              <li className="py-4 px-8" />

              {NAV_LINKS.map((link, index) => (
                <NavItem
                  key={link.to}
                  {...link}
                  hasLeftBorder
                  hasRightBorder={index === NAV_LINKS.length - 1}
                />
              ))}
            </ul>
          </nav>

          {/* Contact (Desktop) */}
          <Link
            to="/contact"
            className="hidden md:block border-s border-[#90A1B9] px-8 text-nowrap py-4"
          >
            _contact-me
          </Link>

          {/* Burger (Mobile Only) */}
          <button className="md:hidden px-6" onClick={() => setOpen(!open)}>
            {open ? (
              <RiCloseLine className="w-7 h-7 text-[#90A1B9]" />
            ) : (
              <RiMenuLine className="w-7 h-7 text-[#90A1B9]" />
            )}
          </button>
        </div>
      </header>

      {/* ===== FULL SCREEN MOBILE MENU (SAME DESIGN) ===== */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          bg-[#0f172a]
          transition-all duration-500
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div
          className={`
            h-full flex flex-col
            pt-20
            transform transition-all duration-500
            ${open ? "translate-y-0" : "translate-y-6"}
          `}
        >
          {NAV_LINKS.map((link) => (
            <div key={link.to} className="border-b border-[#90A1B9]">
              <NavItem {...link} mobile onClick={() => setOpen(false)} />
            </div>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="border-t border-[#90A1B9] px-8 py-4"
          >
            _contact-me
          </Link>
        </div>
      </div>
    </>
  );
}
