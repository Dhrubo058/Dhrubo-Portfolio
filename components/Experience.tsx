
import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="about" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                <Briefcase size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>
            
            <div className="space-y-12">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-800">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-500/20"></div>
                  <div className="text-blue-400 font-mono text-sm mb-1">{exp.period}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-slate-400 text-sm mb-4">{exp.company}</div>
                  <ul className="space-y-3">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-slate-500 text-sm flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl mb-12">
              <div className="text-indigo-400 font-mono text-sm mb-1">{RESUME_DATA.education.period}</div>
              <h3 className="text-xl font-bold text-white mb-1">{RESUME_DATA.education.degree}</h3>
              <div className="text-slate-400 text-sm mb-6">{RESUME_DATA.education.school}</div>
              <div className="flex flex-wrap gap-3">
                {RESUME_DATA.education.grades.map((grade, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-950 rounded-lg text-xs font-mono text-slate-400 border border-slate-800">
                    {grade}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                <Award size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Certifications & Wins</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {RESUME_DATA.achievements.map((item, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-sm text-slate-300 hover:border-emerald-500/30 transition-all flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
