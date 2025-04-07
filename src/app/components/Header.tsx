"use client"

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { ArrowRightCircleIcon,  Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-[100] shadow-sm">
      <div className="container mx-auto px-4 py-5 relative z-[60] inset-0">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Money Culture Logo"
              width={250}
              height={100}
              className="w-auto h-[2.5rem] md:h-[2.5rem]"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 text-sm font-semibold  hover:text-[#0083DB] transition-colors">HOME</Link>
            <Link href="/about" className="text-gray-700 text-sm font-semibold  hover:text-[#0083DB] transition-colors">ABOUT US</Link>
            <Link href="/services" className="text-gray-700 text-sm font-semibold  hover:text-[#0083DB] transition-colors">SERVICES</Link>
            <Link href="/blog" className="text-gray-700 text-sm font-semibold  hover:text-[#0083DB] transition-colors">BLOG</Link>
            <Link href="/contact" className="text-gray-700 text-sm font-semibold  hover:text-[#0083DB] transition-colors">CONTACT</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="gradient">
              JOIN NOW <ArrowRightCircleIcon color="white" className="w-4 h-4" />
            </Button>
            <Button variant="outline">
              EXPLORE
            </Button>
          </div>

          <button
            className="md:hidden z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      <div className={`
        fixed inset-0 bg-gradient-to-br from-[#0083DB] to-[#00B7D3] z-[50] transition-transform duration-300
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden top-0
      `}>
        <div className="flex flex-col h-full pt-20">
          <div className="flex-1 px-4 py-6">
            <div className="flex flex-col space-y-6">
              <Link href="/" className="text-white font-semibold text-lg hover:translate-x-2 transition-transform">HOME</Link>
              <Link href="/about" className="text-white font-semibold text-lg hover:translate-x-2 transition-transform">ABOUT US</Link>
              <Link href="/services" className="text-white font-semibold text-lg hover:translate-x-2 transition-transform">SERVICES</Link>
              <Link href="/blog" className="text-white font-semibold text-lg hover:translate-x-2 transition-transform">BLOG</Link>
              <Link href="/contact" className="text-white font-semibold text-lg hover:translate-x-2 transition-transform">CONTACT</Link>
            </div>
          </div>

          <div className="px-4 py-6 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              <Button variant="whiteoutline" className="w-full">
                JOIN NOW <ArrowRightCircleIcon className="w-4 h-4" />
              </Button>
              <Button variant="whiteoutline" className="w-full">
                EXPLORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}