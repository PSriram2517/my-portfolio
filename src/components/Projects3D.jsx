import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import insuranceImg from '../assets/project-insurance.png';
import keyboardImg from '../assets/project-keyboard.png';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative p-1 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-500 shadow-lg hover:shadow-xl"
    >
      <div className="bg-card-bg backdrop-blur-xl rounded-[22px] p-6 h-full flex flex-col border border-card-border">
        <div className="h-48 mb-6 rounded-2xl bg-text-main/5 overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-shadow">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 flex items-center justify-center">
              <Code size={48} className="text-text-main/20 group-hover:text-blue-500/40 transition-colors duration-500" />
            </div>
          )}
          <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
            <a href={project.github} className="p-2 bg-bg-main/80 backdrop-blur-md rounded-full text-text-main hover:text-blue-500 transition-colors border border-card-border">
              <Github size={18} />
            </a>
            <a href={project.live} className="p-2 bg-bg-main/80 backdrop-blur-md rounded-full text-text-main hover:text-blue-500 transition-colors border border-card-border">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2 text-text-main group-hover:text-blue-500 transition-colors">{project.title}</h3>
        <p className="text-text-muted text-sm mb-6 flex-grow leading-relaxed font-medium">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-text-main/5 border border-card-border text-text-muted font-bold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects3D = () => {
  const projects = [
    {
      title: "Insurance Claim Prediction",
      description: "An AI-driven predictive system that analyzes historical data to forecast claim likelihood and costs using ensemble learning techniques.",
      tags: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "React"],
      image: insuranceImg,
      github: "#",
      live: "#"
    },
    {
      title: "Smart AI Keyboard",
      description: "A specialized NLP-powered keyboard supporting tribal languages with predictive text and phonetic transliteration to preserve linguistic heritage.",
      tags: ["Python", "TensorFlow", "NLP", "React", "Flask"],
      image: keyboardImg,
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-main">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects3D;
