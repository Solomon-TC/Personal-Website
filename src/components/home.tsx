import MagneticCursor from './MagneticCursor';
import Navigation from './Navigation';
import Hero from './Hero';
import SectionDivider from './SectionDivider';
import IdentitySection from './IdentitySection';
import ProjectsShowcase from './ProjectsShowcase';
import PhilosophySection from './PhilosophySection';
import JourneyTimeline from './JourneyTimeline';
import WorkSection from './WorkSection';
import AboutSection from './AboutSection';
import CTASection from './CTASection';
import Footer from './Footer';
import PageTransition from './PageTransition';

function Home() {
  return (
    <PageTransition>
      <div className="relative w-full min-h-screen bg-premium-dark overflow-x-hidden">
        {/* Custom cursor */}
        <MagneticCursor />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* Identity Section */}
        <IdentitySection />
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* Projects Showcase */}
        <ProjectsShowcase />
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* Philosophy Section */}
        <PhilosophySection />
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* Journey Timeline */}
        <JourneyTimeline />
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* Work Section */}
        <WorkSection />
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* CTA Section */}
        <CTASection />
        
        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
}

export default Home;
