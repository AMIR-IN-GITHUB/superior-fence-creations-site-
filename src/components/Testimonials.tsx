
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    position: "Homeowner",
    testimonial: "Superior Fence Creations installed a beautiful wood fence around my property. Their team was professional, efficient, and the quality of work exceeded my expectations. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Property Manager",
    testimonial: "We hired Superior Fence Creations for a large commercial fencing project. They were reliable, detail-oriented, and completed the project on time and within budget. Great company to work with.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Thompson",
    position: "Homeowner",
    testimonial: "The vinyl fence installed by Superior Fence Creations looks fantastic and has significantly improved our home's curb appeal. Their customer service was excellent from start to finish.",
    rating: 5,
  },
  {
    id: 4,
    name: "Lisa Martin",
    position: "Business Owner",
    testimonial: "Superior Fence Creations provided us with a secure and attractive chain-link fence for our business property. Professional service and quality materials at a reasonable price.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" ref={sectionRef} className={`py-20 bg-gray-50 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fence-700">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our satisfied clients have to say about our fencing services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Slider */}
          <div className="testimonial-shadow bg-white rounded-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <blockquote className="text-xl text-center text-gray-700 italic mb-6">
              "{testimonials[currentIndex].testimonial}"
            </blockquote>
            
            <div className="text-center">
              <p className="font-bold text-fence-600 text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-500">{testimonials[currentIndex].position}</p>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fence-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fence-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-fence-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
