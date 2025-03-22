import React from 'react';

const About = ({ designer }) => {
  const { firstName, lastName, avatar, about, email, location } = designer;
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img 
                src={avatar} 
                alt={`${firstName} ${lastName}`} 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 -z-10 w-full h-full border-2 border-[color:var(--color-primary)] rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[color:var(--color-accent)] rounded-lg -z-20"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[color:var(--color-secondary)]">
              UI/UX Designer with a passion for creating beautiful, functional experiences
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[color:var(--color-primary)] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[color:var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Email</span>
                  <span className="font-medium">{email}</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[color:var(--color-primary)] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[color:var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Location</span>
                  <span className="font-medium">{location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
              
              <a 
                href="/resume.pdf" 
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;