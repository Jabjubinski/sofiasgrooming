import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="fixed w-full z-50 top-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-sm border-2 border-stone-100 rounded-full px-6 py-3 shadow-lg shadow-orange-500/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-400 text-white p-2 rounded-full rotate-3">
              <span className="material-icons-round text-xl">pets</span>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-stone-800">
              Sofia's Grooming
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-bold text-sm text-stone-500">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Home
            </a>
            <a
              href="#services"
              className="hover:text-orange-500 transition-colors"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="hover:text-orange-500 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#reviews"
              className="hover:text-orange-500 transition-colors"
            >
              Reviews
            </a>
            <Link
              href="/booking"
              className="bg-teal-400 text-white px-6 py-2 rounded-full hover:bg-teal-500 hover:-translate-y-0.5 transition-all shadow-[0_4px_0_rgb(13,148,136)] hover:shadow-[0_2px_0_rgb(13,148,136)] hover:translate-y-[2px]"
            >
              Book Now!
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
