"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, Settings } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-20 px-4">
      {/* Top left decoration */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <Image
          src="/top-left.png"
          alt="Decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-2xl font-bold mb-2 bg-gradient-to-br from-[#095D7E] to-[#0ba766] inline-block text-transparent bg-clip-text"
          >
            TESTIMONIALS AND SUCCESS STORIES
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Video Container */}
          <div className="relative aspect-video">
            <Image
              src="/testimonial-video-thumb.png"
              alt="Testimonial Video"
              fill
              className="object-cover"
            />
            
            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              {/* Progress Bar */}
              <div className="relative h-1 bg-white/30 rounded-full mb-4">
                <div className="absolute left-0 top-0 h-full w-[40%] bg-white rounded-full"></div>
                <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
              </div>

              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <span className="text-sm">38:56</span>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <SkipBack size={20} />
                    </button>
                    <button 
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <SkipForward size={20} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Volume2 size={20} />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Settings size={20} />
                  </button>
                  <span className="text-sm">1:56:30</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}