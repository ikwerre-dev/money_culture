"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhyJoinSection() {
  const benefits = [
    {
      title: "Learn from industry leaders & experts.",
      description: "Gain insights from top professionals who have mastered finance, entrepreneurship, and career growth."
    },
    {
      title: "Access tools, templates, and financial resources.",
      description: "Use practical guides, templates, and resources to make informed financial and business decisions."
    },
    {
      title: "Connect with a global network of professionals.",
      description: "Engage with like-minded individuals, collaborate, and unlock new opportunities through our thriving community."
    },
    {
      title: "Get mentorship & practical business strategies.",
      description: "Receive personalized guidance, proven strategies, and expert mentorship to scale your business and career."
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/why-join.png"
              alt="Why Join"
              width={600}
              height={800}
              className="object-contain"
            />
          </motion.div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#00875A]"
            >
              Why Be Part of Money<br />Culture Community?
            </motion.h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-[#00875A] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#000] mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}