import { useEffect } from 'react';
import HomeBanner from './HomeFeatures/HomeBanner';
import ExclusiveOfferBanner from './HomeFeatures/ExclusiveOfferBanner';
import Card from '../components/Card';

const sections = ['section1', 'section2', 'section3'];

const HomePage = () => {
  const handleScroll = (event) => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Determine which section to scroll to based on the current scroll position
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        // If the current scroll position is within the bounds of a section
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          // Prevent scrolling to the same section
          if (event.deltaY > 0 && i < sections.length - 1) {
            // Scroll down
            document.getElementById(sections[i + 1]).scrollIntoView({ behavior: 'smooth' });
            break;
          } else if (event.deltaY < 0 && i > 0) {
            // Scroll up
            document.getElementById(sections[i - 1]).scrollIntoView({ behavior: 'smooth' });
            break;
          }
        }
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('wheel', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className='px-10 lg:px-20 py-14 space-y-5 lg:space-y-20'>
      <div id="section1" className="h-full ">
        <HomeBanner />
      </div>
      <div id="section2" className="h-screen bg-green-500">
        <ExclusiveOfferBanner />
      </div>
      <div id="section3" className="h-screen bg-cyan-400-500">
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
