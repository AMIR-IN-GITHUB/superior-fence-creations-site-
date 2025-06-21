
import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from "lucide-react";

const About = () => {
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
    <section id="about" ref={sectionRef} className={`py-20 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-fence-600 rounded-lg hidden md:flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fence-700">About Superior Fence Creations</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 10 years of experience serving the Los Angeles area, Superior Fence Creations has established itself as a trusted provider of high-quality fencing solutions for residential and commercial properties.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of skilled professionals is dedicated to delivering exceptional craftsmanship, using premium materials, and providing outstanding customer service from project start to finish.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-fence-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Licensed & Insured Professionals</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-fence-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Premium Quality Materials</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-fence-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Customized Solutions</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-fence-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Competitive Pricing</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-fence-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Timely Project Completion</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-fence-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
