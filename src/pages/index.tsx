import React from 'react';
import BusinessCard from './components/BusinessCard';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function HomePage() {
    return (
        <>
            {/* BusinessCard 섹션 */}
            <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-300">
                <div className="max-w-md w-full mx-auto shadow-2xl">
                    <BusinessCard />
                    <p className="text-center text-gray-700 mt-8 font-medium">
                        카드를 클릭하면 뒤집어서 더 많은 정보를 볼 수 있습니다
                    </p>
                </div>
            </main>

            {/* 포트폴리오 섹션들 */}
            <Home />
            <AboutMe />
            <Projects />
            <Skills />
            <Contact />
        </>
    );
}