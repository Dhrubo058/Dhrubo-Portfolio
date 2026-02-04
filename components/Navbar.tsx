
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Robust scrolling to prevent iframe navigation issues
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[1020]">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent cursor-pointer"
        >
          PORAG.DEV
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-all px-4 py-2 rounded-lg hover:bg-slate-800/50"
            >
              {link.name}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-slate-800">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-200 p-3 -mr-3 relative z-[1030] flex items-center justify-center rounded-xl bg-slate-800/20 active:bg-slate-800/50 transition-colors" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950 z-[1010] transition-all duration-300 md:hidden flex flex-col items-center justify-center ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible pointer-events-auto' 
            : 'opacity-0 -translate-y-10 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-bold text-slate-300 hover:text-white transition-all transform active:scale-90"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-4 rounded-full text-xl font-bold transition-all shadow-2xl shadow-blue-600/30 active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
