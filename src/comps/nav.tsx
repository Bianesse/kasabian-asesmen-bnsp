"use client";

import { Mail, Phone, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/activities", label: "Aktifitas" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Kontak" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="max-w-7xl mt-0 md:mt-5 mx-auto flex items-center justify-between px-6 py-3 
                      bg-white backdrop-blur-md shadow-sm md:rounded-xl">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link
            href="/">
          <img
            src="https://smkn2cmi.sch.id/wp-content/uploads/2023/05/web-banner-smk-blue-min.webp"
            alt="SMK Negeri 2 Cimahi"
            className="h-10"
          />
          
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-sky-600 font-bold"
                  : "text-gray-700 hover:text-sky-600"
              } transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-600">
          <Phone className="w-5 h-5 cursor-pointer hover:text-sky-500" />
          <Mail className="w-5 h-5 cursor-pointer hover:text-sky-500" />
          <Search className="w-5 h-5 cursor-pointer hover:text-sky-500" />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-sky-600"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-lg px-6 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block ${
                pathname === link.href
                  ? "text-sky-600 font-bold"
                  : "text-gray-700 hover:text-sky-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex space-x-4 pt-4 border-t text-gray-600">
            <Phone className="w-5 h-5 cursor-pointer hover:text-sky-500" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-sky-500" />
            <Search className="w-5 h-5 cursor-pointer hover:text-sky-500" />
          </div>
        </div>
      )}
    </nav>
  );
}
