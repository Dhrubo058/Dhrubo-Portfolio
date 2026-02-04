
import React from 'react';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl">A blend of low-level hardware design and high-level software development, supplemented by creative media expertise.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESUME_DATA.skills.map((skillGroup, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="bg-slate-800 text-slate-300 px-3 py-1 rounded-lg text-sm border border-slate-700 group-hover:bg-slate-800 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 p-1 rounded-2xl">
          <div className="bg-slate-950 rounded-[calc(1rem-2px)] p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center text-center">
              <div>
                <div className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-2">GPA (SSC)</div>
                <div className="text-3xl font-bold text-white">4.17</div>
              </div>
              <div className="border-y md:border-y-0 md:border-x border-slate-800 py-8 md:py-0">
                <div className="text-indigo-400 text-xs font-mono uppercase tracking-[0.2em] mb-2">GPA (HSC)</div>
                <div className="text-3xl font-bold text-white">4.00</div>
              </div>
              <div>
                <div className="text-pink-400 text-xs font-mono uppercase tracking-[0.2em] mb-2">Current Degree</div>
                <div className="text-xl font-bold text-white">B.Sc. in CSE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
