import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-card-border bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">SRIRAM.</h2>
          <p className="text-text-muted text-sm max-w-xs font-medium">
            Designing and building the future of AI & Machine Learning.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="p-2 rounded-full border border-card-border text-text-muted hover:text-blue-500 hover:border-blue-500/30 transition-all">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 rounded-full border border-card-border text-text-muted hover:text-blue-500 hover:border-blue-500/30 transition-all">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-2 rounded-full border border-card-border text-text-muted hover:text-blue-500 hover:border-blue-500/30 transition-all">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-text-muted text-sm mb-1 font-bold">© {new Date().getFullYear()} PECHETTI SRIRAMA CHANDRA MURTHI</p>
          <p className="text-text-muted/60 text-[10px] font-mono uppercase tracking-widest font-bold">Built with React & Three.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
