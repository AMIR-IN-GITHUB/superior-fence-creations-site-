
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: "Residential Fencing",
    description: "Enhance your home's security, privacy, and curb appeal with our custom residential fencing solutions.",
    image: "https://images.unsplash.com/photo-1597857525263-d78409a9431e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Commercial Fencing",
    description: "Secure your business property with our durable and professional commercial fencing options.",
    image: "https://images.unsplash.com/photo-1571144805458-42c226117c9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Vinyl Fencing",
    description: "Low-maintenance, durable vinyl fencing in a variety of styles and colors to complement your property.",
    image: "https://images.unsplash.com/photo-1533470192478-9897d127e774?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Wood Fencing",
    description: "Classic wood fencing options that provide natural beauty and can be customized to your specifications.",
    image: "https://images.unsplash.com/photo-1601982052115-130cbd249354?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Chain Link Fencing",
    description: "Affordable and versatile chain link fencing perfect for security and boundary marking.",
    image: "https://images.unsplash.com/photo-1553114110-92447a86a88e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Fence Repair",
    description: "Professional repair services to restore your existing fence to its optimal condition.",
    image: "https://images.unsplash.com/photo-1618271139066-3bde052e1550?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className={`py-20 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fence-700">Our Fencing Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive range of fencing solutions to meet your specific needs, preferences, and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-fence-600">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-fence-600 font-medium hover:text-fence-700"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-fence-600 hover:bg-fence-700 text-white px-8 py-6 text-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
