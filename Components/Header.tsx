"use client";   
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/logo-to (2).jpeg";
import { useState } from "react";

export default function NavbarComponent() {
  const links = [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Tentang",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Galeri",
      href: "/galeri",
    },
  ];

  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mb-8 fixed top-0 w-full bg-white h-[80px] z-10 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/" className="flex items-center">
          <Image src={Logo} width={60} height={60} className="mr-3" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TO
          </span>
        </Link>

        {/* Responsive Navigation */}
        <div className="lg:hidden">
          <button
            className="text-gray-600 focus:outline-none focus:text-gray-800"
            onClick={toggleMenu}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-20">
              <nav className="flex flex-col gap-2 p-4">
                {links.map((link, idx) => (
                  <Link
                    key={idx}
                    className={`text-lg font-semibold ${
                      pathName === link.href ? "text-primary" : "text-gray-600"
                    } transition duration-100 hover:text-primary`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}


