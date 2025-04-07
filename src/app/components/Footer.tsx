"use client"

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative text-white">
            <div className="absolute inset-0">
                <Image
                    src="/footer-bg.png"
                    alt="Footer Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-[#095D7E]/90 to-[#0ba766]/90"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20">
                <div className="grid md:grid-cols-12 gap-8 mb-16">
                     <div className="md:col-span-4">
                        <Image
                            src="/footer-logo.png"
                            alt="Money Culture Logo"
                            width={150}
                            height={60}
                            className="mb-6"
                        />
                        <p className="text-white/90 text-sm mb-6">
                            Money culture community is a digital hub and community designed to empower individuals and businesses to thrive in today&apos;s dynamic world. Money Culture Hub is a platform dedicated to fostering financial literacy, skill development, and entrepreneurial growth. Our goal is to create a supportive ecosystem where individuals can unlock their potential, scale their businesses, and achieve financial independence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-white/90 hover:text-white">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/90 hover:text-white">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/90 hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/90 hover:text-white">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                     <div className="md:col-span-3">
                        <h3 className="text-white font-bold mb-6">GET IN TOUCH</h3>
                        <div className="space-y-3 text-white/90 text-sm">
                            <p>30N River Rd, Desplaines, IL 60016</p>
                            <p>United States</p>
                            <p>+1 224-477-2330</p>
                            <p>contact@moneyculturecommunity</p>
                        </div>
                    </div>

                     <div className="md:col-span-3">
                        <h3 className="text-white font-bold mb-6">WHAT WE OFFER</h3>
                        <div className="space-y-3 text-white/90 text-sm">
                            <Link href="#" className="block hover:text-white">&gt; Financial Literacy</Link>
                            <Link href="#" className="block hover:text-white">&gt; Skill Development and Monetization</Link>
                            <Link href="#" className="block hover:text-white">&gt; Career Advancement</Link>
                            <Link href="#" className="block hover:text-white">&gt; Community Building</Link>
                            <Link href="#" className="block hover:text-white">&gt; Entrepreneurship and Business Growth</Link>
                        </div>
                    </div>

                     <div className="md:col-span-2">
                        <h3 className="text-white font-bold mb-6">QUICK LINKS</h3>
                        <div className="space-y-3 text-white/90 text-sm">
                            <Link href="#" className="block hover:text-white">&gt; Home</Link>
                            <Link href="#" className="block hover:text-white">&gt; About Us</Link>
                            <Link href="#" className="block hover:text-white">&gt; Services</Link>
                            <Link href="#" className="block hover:text-white">&gt; Blog</Link>
                            <Link href="#" className="block hover:text-white">&gt; Contacts</Link>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <p className="text-sm mb-4">Subscribe to our News and Updates</p>
                    <div className="max-w-xl mx-auto flex overflow-hidden text-sm bg-white rounded-lg">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="flex-1 px-6 py-3 text-gray-500 placeholder-gray-400 bg-transparent outline-none"
                        />
                        <button className="px-8 py-3 bg-[#0B4870] text-white font-semibold hover:bg-[#0B4870]/90 transition-colors">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative border-t bg-[#095D7E] border-white/10 py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-center text-sm text-white">
                        © 2025 Money Culture Community All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}