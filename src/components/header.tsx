"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiYoutube,
  FiFacebook,
  FiTwitter,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#252B42] py-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-white text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FiPhone />
              <p>(225) 555-0118</p>
            </div>
            <div className="flex items-center gap-1">
              <FiMail />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>

          <p className="hidden md:block">
            Follow Us and get a chance to win 80% off
          </p>

          <div className="flex items-center gap-4">
            <p className="hidden md:block">Follow Us:</p>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiYoutube />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md border-b-2 border-[#E5E5E5] relative z-40">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-[#252B42]">Bandage</div>

          <div className="flex items-center gap-4 md:hidden">
            <FiSearch className="text-2xl text-[#252B42] cursor-pointer" />
            <FiShoppingCart className="text-2xl text-[#252B42] cursor-pointer" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-3xl text-[#252B42]" />
              ) : (
                <FiMenu className="text-3xl text-[#252B42]" />
              )}
            </button>
          </div>

          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-sm font-medium text-[#737373] relative">
              <li>
                <Link href="#" className="hover:text-[#23A6F0] transition-all">
                  Home
                </Link>
              </li>

              <p className="flex items-center gap-1 hover:text-[#23A6F0] transition-all cursor-pointer">
                Shop
                <FiChevronDown />
              </p>

              <li>
                <p className="hover:text-[#23A6F0] transition-all cursor-pointer">
                  About
                </p>
              </li>
              <li>
                <p className="hover:text-[#23A6F0] transition-all cursor-pointer">
                  Blog
                </p>
              </li>
              <li>
                <p className="hover:text-[#23A6F0] transition-all cursor-pointer">
                  Contact
                </p>
              </li>
              <li>
                <p className="hover:text-[#23A6F0] transition-all cursor-pointer">
                  Pages
                </p>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-6 text-[#23A6F0]">
            <button className="text-sm font-medium">Login/Register</button>
            <FiSearch className="text-lg cursor-pointer" />
            <FiShoppingCart className="text-lg cursor-pointer" />
            <FiHeart className="text-lg cursor-pointer" />
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">
            <li>
              <Link href="/" className="hover:text-[#23A6F0] transition-all">
                Home
              </Link>
            </li>
            <li>
              <p className="hover:text-[#23A6F0] transition-all cursor-pointer">
                Product
              </p>
            </li>
            <li>
              <p className="hover:text-[#23A6F0] transition-all cursor-pointer">
                Pricing
              </p>
            </li>
            <li>
              <p className="hover:text-[#23A6F0] transition-all cursor-pointer">
                Contact
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
