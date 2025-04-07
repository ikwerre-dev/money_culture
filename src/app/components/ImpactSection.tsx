"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImpactSection() {
  const impacts = [
    {
      number: "10,000+",
      label: "MEMBERS\nEMPOWERED"
    },
    {
      number: "500+",
      label: "RESOURCES\nSHARED"
    },
    {
      number: "1,000+",
      label: "ENTREPRENEURS\nSUPPORTED"
    },
    {
      number: "50+",
      label: "EXPERT MENTORS\n& COACHES"
    }
  ];

  return (
    <section className="relative py-[10rem] overflow-hidden">
       <div className="absolute inset-0 z-0">
        <Image
          src="/impact-bg.png"
          alt="Impact Background"
          fill
          className="object-cover"
        />
      </div>

       <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#095D7E] to-[#0ba766] opacity-95"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-white text-3xl font-bold mb-16">Our Impact at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-3">{impact.number}</div>
              <div className="text-white/90 text-xs md:text-sm uppercase tracking-wider whitespace-pre-line">{impact.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}