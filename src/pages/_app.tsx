import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight - 200
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // HomePage일 경우 Navbar를 제외
  const isHomePage = Component.name === 'HomePage'; // 컴포넌트 이름으로 확인

  return (
      <div>
        {!isHomePage && (
            <Navbar
                activeSection={activeSection}
                setActiveSection={setActiveSection}

            />
        )}
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp;