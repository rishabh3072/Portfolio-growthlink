import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDesignerById, selectDesigner, selectPortfolioStatus, selectPortfolioError } from './portfolioReducer';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const dispatch = useDispatch();
  const designer = useSelector(selectDesigner);
  const status = useSelector(selectPortfolioStatus);
  const error = useSelector(selectPortfolioError);

  useEffect(() => {
    // Use Sheetal's ID by default
    dispatch(fetchDesignerById('d001'));
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, [dispatch]);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          // Add animation classes when section is in view
          if (!section.classList.contains('animated')) {
            section.classList.add('animated', 'fade-in');
          }
        }
      });
    };
    
    // Add initial animation class
    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on load
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [designer]);


  if (!designer) {
    return null;
  }

  // Get theme colors from designer data
  const { colors } = designer;

  return (
    <div className="min-h-screen" style={{ 
      '--color-primary': colors.primary,
      '--color-secondary': colors.secondary,
      '--color-accent': colors.accent,
      '--color-light-bg': colors.lightBg,
      '--color-dark-text': colors.darkText,
    }}>
      <Header designer={designer} />
      <main>
        <Hero designer={designer} />
        <About designer={designer} />
        <Skills designer={designer} />
        <Experience designer={designer} />
        <Projects designer={designer} />
        <Contact designer={designer} />
      </main>
    </div>
  );
};

export default App;