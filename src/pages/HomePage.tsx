import Hero from '../components/home/Hero';
import Faq from '../components/home/Faq';
import Functionality from '../components/home/Functionality';
import Lockpay from '../components/home/Lockpay';
import Solution from '../components/home/Solution';
// import Testimonial from "../components/home/Testimonial";
import Usecases from '../components/home/Usecases';
import { useEffect } from 'react';

const HomePage = () => {
  // Function to handle scrolling to the section
  const handleScrollToSection = () => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Handle the initial hash if there is one
    handleScrollToSection();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleScrollToSection, false);

    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleScrollToSection, false);
    };
  }, []);
  return (
    <div>
      <Hero />
      <Lockpay />
      <Functionality />
      <Solution />
      <Usecases />
      <Faq />
      {/* <Testimonial /> */}
    </div>
  );
};

export default HomePage;
