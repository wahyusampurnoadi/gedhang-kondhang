import React, { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-amber-500 py-4 fixed w-full z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="" width={120} className="mx-8 select-none" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 mx-8">
          <li>
            <a className="text-white pb-1 hover:border-b-lime-200 hover:border-b-2" href="#beranda">
              Beranda
            </a>
          </li>
          <li>
            <a className="text-white pb-1 hover:border-b-lime-200 hover:border-b-2" href="#produk">
              Produk
            </a>
          </li>
          <li>
            <a className="text-white pb-1 hover:border-b-lime-200 hover:border-b-2" href="#mitra">
              Mitra
            </a>
          </li>
          <li>
            <a className="text-white pb-1 hover:border-b-lime-200 hover:border-b-2" href="#kontak">
              Kontak
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <button className="md:hidden bg-transparent focus:outline-none" onClick={handleMobileMenuToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 64 64">
            <radialGradient id="DtMiIZm7jDQ8jq4FOzmy4a" cx="36.833" cy="35.917" r="26" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
              <stop offset="0" stop-color="#f4e09d"></stop>
              <stop offset=".226" stop-color="#f8e8b5"></stop>
              <stop offset=".513" stop-color="#fcf0cd"></stop>
              <stop offset=".778" stop-color="#fef4dc"></stop>
              <stop offset="1" stop-color="#fff6e1"></stop>
            </radialGradient>
            <path fill="url(#undefined)" d="M10,8L10,8c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h0C7.791,0,6,1.791,6,4v0 C6,6.209,7.791,8,10,8z"></path>
            <radialGradient id="DtMiIZm7jDQ8jq4FOzmy4b" cx="31.417" cy="29.917" r="28.77" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
              <stop offset="0" stop-color="#f4e09d"></stop>
              <stop offset=".226" stop-color="#f8e8b5"></stop>
              <stop offset=".513" stop-color="#fcf0cd"></stop>
              <stop offset=".778" stop-color="#fef4dc"></stop>
              <stop offset="1" stop-color="#fff6e1"></stop>
            </radialGradient>
            <path fill="url(#undefined)" d="M7.5,64L7.5,64c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5h0 C5.567,57,4,58.567,4,60.5v0C4,62.433,5.567,64,7.5,64z"></path>
            <radialGradient id="DtMiIZm7jDQ8jq4FOzmy4c" cx="32" cy="32" r="32" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
              <stop offset="0" stop-color="#f4e09d"></stop>
              <stop offset=".226" stop-color="#f8e8b5"></stop>
              <stop offset=".513" stop-color="#fcf0cd"></stop>
              <stop offset=".778" stop-color="#fef4dc"></stop>
              <stop offset="1" stop-color="#fff6e1"></stop>
            </radialGradient>
            <path
              fill="url(#undefined)"
              d="M62,20.5L62,20.5c0-2.485-2.015-4.5-4.5-4.5H49c-2.209,0-4-1.791-4-4v0c0-2.209,1.791-4,4-4 h2c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4L20,0c-2.209,0-4,1.791-4,4v0c0,2.209,1.791,4,4,4h2c1.657,0,3,1.343,3,3v0 c0,1.657-1.343,3-3,3H7.5C5.567,14,4,15.567,4,17.5v0C4,19.433,5.567,21,7.5,21H9c1.657,0,3,1.343,3,3v0c0,1.657-1.343,3-3,3H5 c-2.761,0-5,2.239-5,5v0c0,2.761,2.239,5,5,5h2.5c1.933,0,3.5,1.567,3.5,3.5v0c0,1.933-1.567,3.5-3.5,3.5H6c-2.209,0-4,1.791-4,4v0 c0,2.209,1.791,4,4,4h11.5c1.381,0,2.5,1.119,2.5,2.5v0c0,1.381-1.119,2.5-2.5,2.5h0c-1.933,0-3.5,1.567-3.5,3.5v0 c0,1.933,1.567,3.5,3.5,3.5h30c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5H47c-1.105,0-2-0.895-2-2v0 c0-1.105,0.895-2,2-2h13c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h-3.5c-1.381,0-2.5-1.119-2.5-2.5v0c0-1.381,1.119-2.5,2.5-2.5 H57c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h-4.5c-1.933,0-3.5-1.567-3.5-3.5v0c0-1.933,1.567-3.5,3.5-3.5h5 C59.985,25,62,22.985,62,20.5z"
            ></path>
            <linearGradient id="DtMiIZm7jDQ8jq4FOzmy4d_118991_gr1" x1="32.5" x2="32.5" y1="1.229" y2="64.477" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
              <stop offset="0" stop-color="#a4a4a4"></stop>
              <stop offset=".63" stop-color="#7f7f7f"></stop>
              <stop offset="1" stop-color="#6f6f6f"></stop>
              <stop offset="1" stop-color="#6f6f6f"></stop>
            </linearGradient>
            <path
              fill="url(#DtMiIZm7jDQ8jq4FOzmy4d_118991_gr1)"
              d="M14.5,28h36c1.933,0,3.5,1.567,3.5,3.5v0c0,1.933-1.567,3.5-3.5,3.5h-36 c-1.933,0-3.5-1.567-3.5-3.5v0C11,29.567,12.567,28,14.5,28z M11,16.5L11,16.5c0,1.933,1.567,3.5,3.5,3.5h36 c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5h-36C12.567,13,11,14.567,11,16.5z M11,46.5L11,46.5 c0,1.933,1.567,3.5,3.5,3.5h36c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5h-36C12.567,43,11,44.567,11,46.5z"
            ></path>

            {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <ul className="md:hidden absolute top-28 right-2 bg-white w-40 mt-2 py-4 px-4 shadow-md rounded-lg">
            <li className="p-2">
              <a className="text-amber-500 font-bold" href="#beranda" onClick={handleMobileMenuToggle}>
                Beranda
              </a>
            </li>
            <li className="p-2">
              <a className="text-amber-500 font-bold" href="#produk" onClick={handleMobileMenuToggle}>
                Produk
              </a>
            </li>
            <li className="p-2">
              <a className="text-amber-500 font-bold" href="#mitra" onClick={handleMobileMenuToggle}>
                Mitra
              </a>
            </li>
            <li className="p-2">
              <a className="text-amber-500 font-bold" href="#kontak" onClick={handleMobileMenuToggle}>
                Kontak
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
