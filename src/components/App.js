import React, { useEffect } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Background from './Background';

export const globalContext = React.createContext(null);
const globalContextValue = {
  menuOpen: false
}

function App() {
  // Observer (This is for scrolling content onto the screen)
  useEffect(() => {
    const sliders = document.querySelectorAll(".slider");

    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -300px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);
    
    sliders.forEach(slider => {
      appearOnScroll.observe(slider);
    });
  }, []);

  return (
    <div className="App">
      <globalContext.Provider value={globalContextValue}>
        <Background />
        <Header />
        <Content />
        <Footer />
      </globalContext.Provider>
    </div>
  );
}

export default App;
