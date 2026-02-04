
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Footer from './components/Footer.tsx';
import ChatBot from './components/ChatBot.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <ChatBot />
      
      {/* Scroll indicator for modern look */}
      <div className="fixed left-6 bottom-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-40">
        <div className="h-20 w-px bg-slate-800"></div>
        <div className="rotate-90 text-[10px] font-mono uppercase tracking-[0.4em] text-slate-500 whitespace-nowrap">
          Scroll Down
        </div>
        <div className="h-20 w-px bg-slate-800"></div>
      </div>
    </div>
  );
};

export default App;
