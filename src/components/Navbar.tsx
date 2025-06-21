
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Fence, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Fence className="h-8 w-8 text-fence-600 mr-2" />
          <span className="text-xl font-bold text-fence-600">Superior Fence Creations</span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-fence-700 hover:text-fence-600 font-medium transition-colors">Home</a>
          <a href="#services" className="text-fence-700 hover:text-fence-600 font-medium transition-colors">Services</a>
          <a href="#gallery" className="text-fence-700 hover:text-fence-600 font-medium transition-colors">Gallery</a>
          <a href="#about" className="text-fence-700 hover:text-fence-600 font-medium transition-colors">About</a>
          <a href="#testimonials" className="text-fence-700 hover:text-fence-600 font-medium transition-colors">Testimonials</a>
          <a href="#contact" className="text-fence-700 hover:text-fence-600 font-medium transition-colors">Contact</a>
        </nav>
        
        <div className="hidden md:flex items-center">
          <Button className="bg-fence-600 hover:bg-fence-700 text-white flex items-center gap-2">
            <Phone className="h-4 w-4" /> Get A Quote
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-fence-700 p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-fence-700 hover:text-fence-600 font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#services" className="text-fence-700 hover:text-fence-600 font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#gallery" className="text-fence-700 hover:text-fence-600 font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
            <a href="#about" className="text-fence-700 hover:text-fence-600 font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#testimonials" className="text-fence-700 hover:text-fence-600 font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-fence-700 hover:text-fence-600 font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <Button className="bg-fence-600 hover:bg-fence-700 text-white flex items-center gap-2 w-full justify-center">
              <Phone className="h-4 w-4" /> Get A Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
