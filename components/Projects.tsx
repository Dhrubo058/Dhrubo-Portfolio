
import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Cpu, BrainCircuit, PlayCircle } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'software' | 'hardware' | 'ai'>('all');

  const filteredProjects = RESUME_DATA.projects.filter(p => filter === 'all' || p.category === filter);

  const getIcon = (category: string) => {
    switch(category) {
      case 'ai': return <BrainCircuit className="text-purple-400" size={24} />;
      case 'software': return <Layers className="text-blue-400" size={24} />;
      case 'hardware': return <Cpu className="text-emerald-400" size={24} />;
      default: return <Layers className="text-blue-400" size={24} />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-900/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-2">Portfolio</div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Works</h2>
            <p className="text-slate-400 max-w-xl">A collection of academic and personal projects showcasing my technical growth, logic design, and software implementation.</p>
          </div>
          
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            {['all', 'software', 'hardware', 'ai'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-lg text-sm font-medium capitalize transition-all ${filter === f ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx}
              className="group bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all hover:translate-y-[-8px] flex flex-col"
            >
              <div className="h-56 bg-slate-800 relative overflow-hidden">
                <img 
                  src={project.image || `https://picsum.photos/seed/${project.title}/600/400`} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur p-2 rounded-xl border border-slate-800 z-10">
                  {getIcon(project.category)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {project.liveUrl && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-4 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform"
                    >
                      <PlayCircle size={32} />
                    </a>
                  </div>
                )}
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-8 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto flex gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-xs font-bold py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition-all active:scale-95"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-xs font-bold py-3 px-4 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
