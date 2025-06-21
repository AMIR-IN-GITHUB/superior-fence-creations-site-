
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-fence-700 to-fence-600">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563287240-c9879e6b3541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Quality Fencing Solutions for Your Property
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Superior Fence Creations provides expert fence installation, repair, and maintenance services to residential and commercial clients in Los Angeles and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-fence-wood text-white hover:bg-fence-wood/90 text-lg px-8 py-6 font-semibold"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Our Services
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 font-semibold flex items-center gap-2"
              onClick={scrollToContact}
            >
              Get Free Estimate <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
