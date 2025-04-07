"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import { useState } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
    src: string;
    alt: string;
    onClose: () => void;
}

function ImageModal({ src, alt, onClose }: ImageModalProps) {
    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
                <X size={32} />
            </button>
            <div className="relative w-full max-w-5xl h-[80vh]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: "/gallery1.png", alt: "Annual Report Meeting", span: "col-span-7" },
        { src: "/gallery2.png", alt: "Business Coaching", span: "col-span-5" },
        { src: "/gallery3.png", alt: "Financial Consultation", span: "col-span-5" },
        { src: "/gallery4.png", alt: "Team Collaboration", span: "col-span-7" },
    ];

    return (
        <section className="relative py-20 px-4">
             <div className="absolute top-0 right-0 w-25 h-25">
                <Image
                    src="/top-right.png"
                    alt="Decoration"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center flex flex-col mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-2 bg-gradient-to-br from-[#095D7E] to-[#0ba766] inline-block text-transparent bg-clip-text"
                    >
                        Moments of Impact
                    </motion.h2>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-2 bg-gradient-to-br from-[#095D7E] to-[#0ba766] inline-block text-transparent bg-clip-text"
                    >
                        Photo Gallery
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-12 gap-6"
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${image.span} relative h-[250px] rounded-3xl overflow-hidden cursor-pointer group`}
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex flex-col items-center justify-center text-center mt-12">
                    <Button variant="gradient">
                        VIEW MORE
                    </Button>
                </div>
            </div>

            {selectedImage && (
                <ImageModal
                    src={selectedImage}
                    alt="Gallery Image"
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </section>
    );
}