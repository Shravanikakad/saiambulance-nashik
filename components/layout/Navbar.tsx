"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll<HTMLElement>("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          window.scrollY >= top &&
          window.scrollY < top + height &&
          id
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-16 sm:h-20 md:h-24 flex items-center justify-between gap-3">

            {/* ===========================
                  LOGO
            ============================ */}

            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 min-w-0"
            >
              <Image
                src="/images/sai-ambulance-logo.png"
                alt="Sai Ambulance Logo"
                width={84}
                height={84}
                priority
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain shrink-0"
              />

              <div className="leading-tight min-w-0">

                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight truncate">
                  Sai Ambulance
                </h1>

                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-red-600 mt-0.5 sm:mt-1">
                  Nashik
                </p>

              </div>
            </Link>

            {/* ===========================
                DESKTOP MENU
            ============================ */}

            <nav className="hidden lg:flex items-center gap-7">

              {navLinks.map((item) => {

                const current =
                  activeSection ===
                  item.href.replace("#", "");

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative text-[17px] font-semibold text-gray-700 hover:text-red-600 transition-all duration-300"
                  >
                    {item.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-red-600 transition-all duration-300
                      ${
                        current
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* ===========================
                 RIGHT BUTTONS (DESKTOP)
            ============================ */}

            <div className="hidden lg:flex items-center gap-3 shrink-0">

              <a
                href="tel:+919766940298"
                className="
                px-7
                py-3.5
                rounded-full
                bg-red-600
                text-white
                font-semibold
                hover:bg-red-700
                transition
                shadow-md
                hover:shadow-lg
                "
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Phone size={18} />
                  9766940298
                </div>
              </a>

              <a
                href="tel:+918888264450"
                className="
                px-7
                py-3.5
                rounded-full
                bg-red-600
                text-white
                font-semibold
                hover:bg-red-700
                transition
                shadow-md
                hover:shadow-lg
                "
              >
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  8888264450
                </div>
              </a>

            </div>

            {/* ===========================
              MOBILE MENU BUTTON
            ============================ */}

            {/* Compact call button + hamburger on mobile so the phone number is
                still one tap away without needing to open the drawer */}
            <div className="flex lg:hidden items-center gap-1.5 shrink-0">
              <a
                href="tel:+919766940298"
                className="p-2.5 rounded-full bg-red-600 text-white shadow-md active:scale-95 transition"
                aria-label="Call Sai Ambulance"
              >
                <Phone size={20} />
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 shrink-0"
                aria-label="Open menu"
              >
                <Menu
                  size={26}
                  className="text-black"
                />
              </button>
            </div>

          </div>

        </div>
      </header>

            {/* ===========================
          MOBILE MENU
      ============================ */}

      {mobileMenuOpen && (
        <>
          {/* Backdrop */}

          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />

          {/* Drawer */}

          <div
            className="
              fixed
              top-0
              right-0
              h-full
              w-[280px] max-w-[80vw]
              bg-white
              shadow-2xl
              z-50
              lg:hidden
              flex
              flex-col
              animate-[slideIn_.3s_ease]
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between px-4 py-3 border-b">

              <div className="flex items-center gap-2 min-w-0">

                <Image
                  src="/images/sai-ambulance-logo.png"
                  alt="Sai Ambulance"
                  width={44}
                  height={44}
                  className="w-9 h-9 object-contain shrink-0"
                />

                <div className="leading-tight min-w-0">

                  <h2 className="text-sm font-extrabold text-black truncate">
                    Sai Ambulance
                  </h2>

                  <p className="text-xs font-semibold text-red-600">
                    Nashik
                  </p>

                </div>

              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="ml-3 shrink-0 p-1"
                aria-label="Close menu"
              >
                <X
                  size={22}
                  className="text-gray-700 hover:text-red-600 transition"
                />
              </button>

            </div>

            {/* Links */}

            <div className="flex flex-col py-4">

              {navLinks.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className={`
                    px-6
                    py-3.5
                    text-[16px]
                    font-semibold
                    rounded-xl
                    mx-3
                    my-0.5
                    transition
                    ${
                      activeSection ===
                      item.href.replace("#", "")
                        ? "text-red-600 bg-red-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  {item.name}
                </a>

              ))}

            </div>

            <div className="mt-auto px-5 py-5 space-y-3 border-t">

              <a
                href="tel:+919766940298"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  bg-red-600
                  text-white
                  py-3
                  rounded-full
                  font-semibold
                  hover:bg-red-700
                  transition
                "
              >
                <Phone size={18} />
                9766940298
              </a>

              <a
                href="tel:+918888264450"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  bg-red-600
                  text-white
                  py-3
                  rounded-full
                  font-semibold
                  hover:bg-red-700
                  transition
                "
              >
                <Phone size={18} />
                8888264450
              </a>

            </div>

          </div>
        </>
      )}

    </>
  );
}