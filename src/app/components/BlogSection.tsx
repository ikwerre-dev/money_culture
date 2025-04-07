"use client"

import Image from "next/image";
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from "./Button";

interface BlogPostProps {
  image: string;
  date: string;
  author: string;
  title: string;
  description: string;
}

function BlogPost({ image, date, author, title, description }: BlogPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#095D7E] to-[#0ba766] rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative h-[200px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-white/80 mb-4">
          <span>{date}</span>
          <span>|</span>
          <span>{author}</span>
        </div>
        <h3 className="text-white text-xl font-bold mb-3 line-clamp-2">{title}</h3>
        <p className="text-white/80 text-sm mb-6 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="text-white/80 hover:text-white transition-colors">
              <Heart size={20} />
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <MessageCircle size={20} />
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <Share2 size={20} />
            </button>
          </div>
          <Button variant="whiteoutline">
            Read More
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogSection() {
  const posts = [
    {
      image: "/blog1.png",
      date: "January 20, 2025",
      author: "ADMIN",
      title: "The Art of Budgeting: Simple Steps For Financial Stability",
      description: "Master the fundamentals of budgeting and take control of your finances with easy-to-follow strategies that ensure long-term stability."
    },
    {
      image: "/blog2.png",
      date: "January 20, 2025",
      author: "ADMIN",
      title: "How To Monetize Your Skills And Earn More",
      description: "Turn your skills into a steady income by exploring freelancing, digital platforms, and high-demand opportunities in today's economy."
    },
    {
      image: "/blog3.png",
      date: "January 20, 2025",
      author: "ADMIN",
      title: "Top 5 Investment Strategies For 2025",
      description: "Discover smart investment trends, risk management tips, and wealth-building strategies to maximize your returns in the coming year."
    }
  ];

  return (
    <section className="relative py-20 px-4">
      {/* Top right decoration */}
      <div className="absolute top-0 right-0 w-32 h-32">
        <Image
          src="/top-right.png"
          alt="Decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-br from-[#095D7E] to-[#0ba766] inline-block text-transparent bg-clip-text">
            CHECK OUR OUR LATEST NEWS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay Ahead! Read Our Latest Blog & Transform Your Financial Future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}