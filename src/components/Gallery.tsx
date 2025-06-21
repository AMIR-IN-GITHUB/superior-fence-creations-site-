
import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "Modern Wood Fence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1598982570917-efa18621ec3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Commercial Security Fence",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1600696490731-ecf260e133c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Privacy Vinyl Fence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Decorative Metal Fence",
    category: "Custom",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Ranch Property Fence",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1549888834-3ec93abae044?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Modern Home Fence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const filterCategories = ['All', 'Residential', 'Commercial', 'Custom'];
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);
  
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
    <section id="gallery" ref={sectionRef} className={`py-20 bg-gray-50 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fence-700">Our Project Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore some of our finest fencing projects completed for satisfied clients throughout Los Angeles.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeFilter === category
                  ? 'bg-fence-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md h-72 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fence-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-white/80">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
