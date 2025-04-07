import Image from 'next/image';
import Button from './Button';

export default function AboutSection() {
    return (
        <section className="py-16 px-4 relative">
            <div className="absolute top-0 right-0 w-25 h-25 z-0">
                <Image
                    src="/top-right.png"
                    alt="Decoration"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="relative aspect-square w-full">
                            <Image
                                src="/about-image.png"
                                alt="About Us"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-[#000] font-medium">Who we are</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B4870] leading-tight">
                            Empowering Individuals,<br />
                            Growing Businesses, Building<br />
                            a Thriving Future.
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Money culture community is a digital hub and community designed to empower individuals and businesses to thrive in today&apos;s dynamic world. Money culture digital Hub is a platform dedicated to fostering financial literacy, skill development, and entrepreneurial growth. Our goal is to create a supportive ecosystem where individuals can unlock their potential, scale their businesses, and achieve financial independence.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The money culture digital Hub aim to bridge the gap between ambition and opportunity by providing access to resources, mentorship, and a vibrant community of like-minded individuals. Whether you&apos;re looking to grow your career, monetize your skills, or turn your ideas into successful ventures.
                        </p>
                        <Button variant='gradient'>
                            Read more...
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}