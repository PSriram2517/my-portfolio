import React, { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import LaptopModel from '../scenes/LaptopModel';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';

const Hero3D = () => {
  return (
    <section className="relative h-screen w-full bg-transparent overflow-hidden">
      {/* Local 3D Hero Element (Laptop focus) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} />
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
          
          <Suspense fallback={null}>
            <LaptopModel />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-blue-500 font-mono tracking-widest uppercase mb-4 text-sm md:text-base font-bold">
            Artificial Intelligence & Data Science Student
          </h2>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-text-main">
            PECHETTI <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              SRIRAM
            </span>
          </h1>
          <p className="max-w-2xl text-text-muted text-lg md:text-xl mb-10 mx-auto font-medium">
            I build intelligent systems and immersive digital experiences at the intersection of AI, Data, and Design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              View Projects
            </button>
            <button className="px-8 py-3 bg-card-bg hover:bg-white/10 dark:hover:bg-white/10 text-text-main font-bold rounded-full border border-card-border transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
              Contact Me
            </button>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </motion.div>
      </div>
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-bg-main)_100%)] opacity-80 dark:opacity-100 transition-opacity"></div>
    </section>
  );
};

export default Hero3D;
