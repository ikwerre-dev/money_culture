"use client"

import Image from "next/image";
import { motion } from "framer-motion";
 
interface Event {
    title: string;
    description: string;
    date: string;
    image: string;
}

export default function EventsSection() {
    const events: Event[] = [
        {
            title: "Financial Mastery Webinar",
            description: "Learn expert strategies on budgeting, investing, and wealth creation in this live online session with top financial advisors.",
            date: "March 10, 2025",
            image: "/event.png"
        },
        {
            title: "Startup Funding & Growth Workshop",
            description: "Discover funding opportunities, investor networking tips, and scaling strategies to turn your startup into a thriving business.",
            date: "March 15, 2025",
            image: "/event.png"
        },
        {
            title: "Freelance Business Bootcamp",
            description: "Master the art of freelancing with hands-on training in personal branding, pricing strategies, and securing high-paying clients.",
            date: "March 18, 2025",
            image: "/event.png"
        }
    ];

    return (
        <section className="relative py-20 px-4">
            <div className="absolute top-0 left-0 w-32 h-32">
                <Image
                    src="/top-left.png"
                    alt="Decoration"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                     <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative h-full"
                    >
                        <Image
                            src="/events-collage.png"
                            alt="Community Events"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                     <div className="space-y-8">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-semibold text-[#00875A]"
                            >
                                What&apos;s Happening in Our Community?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-gray-600"
                            >
                                Stay updated on our latest workshops, training sessions, and networking events designed to help you grow financially, professionally, and entrepreneurially.
                            </motion.p>
                        </div>

                        <div className="space-y-6">
                            {events.map((event, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                                >
                                    <div className="flex gap-4 p-4">
                                        <div className="w-32 h-32 relative flex-shrink-0">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-between space-y-2">
                                            <h3 className="font-semibold text-[#000]">{event.title}</h3>
                                            <p className="text-gray-600 text-sm">{event.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-500">{event.date}</span>
                                            </div>
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