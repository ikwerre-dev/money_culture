"use client"

import Image from 'next/image';
import Button from './Button';
import { ArrowRightCircleIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0"
                style={{ scale }}
            >
                <Image
                    src="/hero-bg.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover "
                />
            </motion.div>

             <div className="absolute inset-0 z-10">
                <Image
                    src="/hero-overlay.png"
                    alt="Hero Overlay"
                    fill
                    className="object-cover  "
                />
            </div>

            <div className="relative z-20 container mx-auto px-4">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-[#095D7E] to-[#0ba766] inline-block text-transparent bg-clip-text"
                    >
                        Unlock Your Potential.<br />
                        Achieve Financial Freedom.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg font-medium md:text-xl mb-8 text-gray-700"
                    >
                        Join a thriving community dedicated to financial literacy, skill development, and business growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex gap-4"
                    >
                        <Button variant="gradient">
                            JOIN NOW <ArrowRightCircleIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="outline">EXPLORE</Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}