import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Rocket, Brain } from 'lucide-react';
import profileImg from '../assets/1736744893803.jpg.jpeg';

const About = () => {
  const [imgError, setImgError] = React.useState(false);
  const education = [
    {
      year: '2023 - 2027',
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'Kakinada Institute of Engineering & Technology (KIET)',
      score: 'Pursuing',
      description: 'Focusing on Machine Learning, Deep Learning, and Advanced Data Analytics.'
    },
    {
      year: '2021 - 2023',
      degree: 'Intermediate (MPC)',
      institution: 'Aditya Junior College',
      score: '758',
      description: 'Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry.'
    },
    {
      year: '2020 - 2021',
      degree: 'Secondary School Certificate',
      institution: "St. Mary's EM High School",
      score: '9.7 CGPA',
      description: 'Foundational education with academic excellence.'
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-card-bg border border-card-border backdrop-blur-xl lg:col-span-1 h-full shadow-lg flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="relative mb-8 group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
              {!imgError ? (
                <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={profileImg} 
                    alt="Profile" 
                    onError={() => setImgError(true)}
                    className="w-full aspect-[3/4] object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700 h-64 md:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ) : (
                <div className="relative w-48 h-64 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex flex-col items-center justify-center gap-4 backdrop-blur-sm group-hover:bg-blue-500/20 transition-colors duration-500 overflow-hidden">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] group-hover:scale-150 transition-transform duration-1000"></div>
                   <Brain className="text-blue-500/50 group-hover:text-blue-500 transition-colors" size={56} />
                   <div className="flex flex-col items-center">
                     <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500/60 font-black font-mono text-center px-4">AI Identity</span>
                     <div className="w-8 h-0.5 bg-blue-500/30 mt-2 rounded-full"></div>
                   </div>
                   <span className="absolute bottom-4 text-[8px] font-mono text-blue-500/30 uppercase tracking-widest">Awaiting Assets...</span>
                </div>
              )}
            </div>
            
            <Brain className="text-blue-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4 text-text-main">My Journey</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              I am a passionate AI & Data Science student driven by the potential of intelligent systems to solve real-world problems. My expertise spans across modern web development and advanced data analytics, allowing me to build comprehensive solutions that are both powerful and user-centric.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium">Innovator</span>
              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-sm font-medium">Developer</span>
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-sm font-medium">Data Analyst</span>
            </div>
          </motion.div>

          {/* Education Flow Chart */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 text-text-main">
              <GraduationCap className="text-purple-500" /> Academic Roadmap
            </h3>
            
            <div className="relative">
              {/* Vertical line for the flow chart */}
              <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-50"></div>
              
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative pl-12"
                  >
                    {/* Circle Node */}
                    <div className="absolute left-0 top-[2px] w-8 h-8 bg-bg-main border-2 border-blue-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-card-bg border border-card-border hover:border-blue-500/30 transition-all hover:bg-white/[0.04] dark:hover:bg-white/[0.08] group shadow-sm hover:shadow-md">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                        <div>
                          <span className="text-blue-500 text-sm font-mono tracking-wider font-bold">{edu.year}</span>
                          <h4 className="text-xl font-bold text-text-main group-hover:text-blue-500 transition-colors">{edu.degree}</h4>
                        </div>
                        <div className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-bold">
                          Score: {edu.score}
                        </div>
                      </div>
                      <p className="text-text-main font-medium opacity-90">{edu.institution}</p>
                      <p className="text-text-muted mt-2 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-transparent border-l-4 border-blue-500 shadow-sm">
              <p className="text-sm italic text-text-muted">
                "Continuously learning and exploring the frontiers of Artificial Intelligence to build a better future."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default About;
