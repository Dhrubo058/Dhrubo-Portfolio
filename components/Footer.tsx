
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-24 pb-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Let's connect.</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Whether you're interested in a collaboration, have a job opportunity, or just want to say hi, I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Email</div>
                  <a href={`mailto:${RESUME_DATA.email}`} className="text-lg hover:text-blue-400 transition-colors">{RESUME_DATA.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">
                  <Phone size={20} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Phone</div>
                  <div className="text-lg">{RESUME_DATA.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">
                  <MapPin size={20} className="text-pink-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Location</div>
                  <div className="text-lg">{RESUME_DATA.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6">Send me a quick message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <textarea 
                rows={4} 
                placeholder="How can I help you?"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-900 gap-8">
          <div className="text-slate-500 text-sm">
            © 2024 Md. Porag Arman Dhrubo. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
