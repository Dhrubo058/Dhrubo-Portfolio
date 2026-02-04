
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Camera, Download } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  const handleViewWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden scroll-mt-24">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-mono mb-6 border border-blue-500/20">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>Available for Internships</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Building <span className="text-blue-500">Digital</span> Future & <span className="text-indigo-400">Logic</span> Gates.
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            I'm <span className="text-white font-medium">Porag Arman Dhrubo</span>, a CSE student passionate about bridging the gap between hardware logic and software intelligence.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <button 
              onClick={handleViewWork}
              className="bg-white text-slate-950 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2 active:scale-95"
            >
              View My Work <ExternalLink size={18} />
            </button>
            <a 
              href="#" 
              className="bg-slate-900 text-white border border-slate-800 px-8 py-3.5 rounded-xl font-bold hover:border-slate-700 transition-all flex items-center gap-2 active:scale-95"
            >
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="flex items-center space-x-4 mb-10">
            <a href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${RESUME_DATA.email}`} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all">
              <Mail size={20} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-900">
            <div>
              <div className="text-white font-bold text-2xl mb-1">2+</div>
              <div className="text-slate-500 text-xs uppercase tracking-wider">Years Exp</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl mb-1">10+</div>
              <div className="text-slate-500 text-xs uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl mb-1">CSE</div>
              <div className="text-slate-500 text-xs uppercase tracking-wider">Degree</div>
            </div>
          </div>
        </div>

        <div className="relative group hidden md:block">
          <div className="absolute inset-0 bg-blue-500/20 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
          <div className="absolute inset-0 bg-indigo-500/20 rounded-3xl -rotate-3 group-hover:-rotate-6 transition-transform duration-500 delay-75"></div>
          <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl overflow-hidden aspect-square flex flex-col items-center justify-center">
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center">
                    <Code2 size={40} className="text-blue-400 mb-2" />
                    <span className="text-xs font-mono text-slate-400">Software</span>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center">
                    <Cpu size={40} className="text-indigo-400 mb-2" />
                    <span className="text-xs font-mono text-slate-400">Hardware</span>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center">
                    <Camera size={40} className="text-pink-400 mb-2" />
                    <span className="text-xs font-mono text-slate-400">Media</span>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-500 flex items-center justify-center">
                        <span className="text-slate-500 text-lg font-bold">+</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">Design</span>
                </div>
             </div>
             <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/80 backdrop-blur border border-slate-800 rounded-xl">
                <div className="text-xs text-blue-400 font-mono mb-1">// Currently Exploring</div>
                <div className="text-sm font-semibold text-white">Advanced Computer Vision & Robotics</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
