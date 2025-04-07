"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg p-6 relative shadow border border-[#808080]"
    >
      <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
        <div className="absolute inset-0  " />
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-[#094E8D] font-semibold text-xl mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-sm text-center">{description}</p>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const services = [
    {
      title: "FINANCIAL LITERACY",
      description: "Gain access to educational content, workshops, and tools designed to help you master budgeting, saving, investing, and debt management for smarter financial decisions.",
      image: "/service1.png"
    },
    {
      title: "SKILL DEVELOPMENT AND MONETIZATION",
      description: "Identify, develop, and monetize your skills through specialized training, freelancing opportunities, and platforms to showcase your talents.",
      image: "/service2.png"
    },
    {
      title: "ENTREPRENEURSHIP AND BUSINESS GROWTH",
      description: "Gain access to educational content, workshops, and tools designed to help you master budgeting, saving, investing, and debt management for smarter financial decisions.",
      image: "/service3.png"
    },
    {
      title: "CAREER ADVANCEMENT",
      description: "Enhance your career with expert coaching, job placement support, and training in high-demand skills to unlock new opportunities.",
      image: "/service4.png"
    },
    {
      title: "COMMUNITY BUILDING",
      description: "Connect, collaborate, and grow with a vibrant network of like-minded individuals through forums, networking events, and inspiring success stories.",
      image: "/service5.png"
    }
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="absolute top-0 left-0 w-25 h-25">
        <Image
          src="/top-left.png"
          alt="Top Left Decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-25 h-25">
        <Image
          src="/bottom-right.png"
          alt="Bottom Right Decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" bg-gradient-to-br from-[#095D7E] to-[#0ba766] inline-block text-transparent bg-clip-text font-medium mb-4"
          >
            WHAT WE OFFER
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}