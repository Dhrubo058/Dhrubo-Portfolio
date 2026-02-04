
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

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
