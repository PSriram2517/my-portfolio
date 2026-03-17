import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import KnowledgeNetwork from '../scenes/KnowledgeNetwork';
import { motion } from 'framer-motion';

const Skills3D = ({ isDarkMode }) => {
  const skillCategories = [
    { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Three.js'] },
    { title: 'Backend', skills: ['Python', 'SQL', 'C++', 'Node.js', 'Express', 'MongoDB'] },
    { title: 'Tools & Others', skills: ['Git', 'Github', 'VS Code', 'Docker', 'Postman', 'Postgres', 'Redis', 'Canva'] },
  ];

  return (
    <section id="skills" className="relative py-24 px-6 bg-transparent overflow-hidden">
      {/* 3D Background Visualization for Skills */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-60 transition-opacity duration-700">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={isDarkMode ? 0.5 : 1.2} />
          <pointLight position={[10, 10, 10]} intensity={isDarkMode ? 1 : 0.8} color={isDarkMode ? "#ffffff" : "#3b82f6"} />
          <KnowledgeNetwork isDarkMode={isDarkMode} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-main transition-colors duration-500">Skills & Expertise</h2>
          <p className="text-text-muted transition-colors duration-500 font-medium">Interactive knowledge graph of my technical stack</p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Skill List - Now centered and on top */}
          <div className="flex flex-wrap justify-center gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card-bg border border-card-border backdrop-blur-md hover:border-blue-500/50 transition-all group shadow-sm hover:shadow-lg dark:hover:bg-white/[0.08] w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] flex flex-col items-center"
              >
                <h3 className="text-xl font-bold mb-4 text-text-main group-hover:text-blue-500 transition-colors text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs font-mono bg-text-main/5 px-3 py-1 rounded-md border border-card-border text-text-muted group-hover:text-text-main transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills3D;
