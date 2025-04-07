import Header from './components/Header';
import Hero from './components/Hero';
 import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ImpactSection from './components/ImpactSection';
 import BlogSection from './components/BlogSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import WhyJoinSection from './components/WhyJoinSection';
import EventsSection from './components/EventsSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ImpactSection />
      <WhyJoinSection />
      <EventsSection />
      <BlogSection />
      <TestimonialsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
