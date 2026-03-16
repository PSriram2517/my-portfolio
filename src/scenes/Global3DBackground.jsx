import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import ParticleField from './ParticleField';
import FloatingObjects from './FloatingObjects';

const Global3DBackground = ({ isDarkMode }) => {
  return (
    <div className={`fixed inset-0 -z-10 pointer-events-none transition-colors duration-700 ${isDarkMode ? 'bg-[#020617]' : 'bg-slate-50'}`}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 20], fov: 75 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <ambientLight intensity={isDarkMode ? 0.5 : 1.2} />
        <pointLight position={[10, 10, 10]} intensity={isDarkMode ? 1 : 0.5} color={isDarkMode ? "#3b82f6" : "#6366f1"} />
        <pointLight position={[-10, -10, -10]} intensity={isDarkMode ? 0.5 : 0.3} color={isDarkMode ? "#a855f7" : "#3b82f6"} />
        
        <Suspense fallback={null}>
          <ParticleField count={3000} color={isDarkMode ? "#3b82f6" : "#1e293b"} />
          <FloatingObjects isDarkMode={isDarkMode} />
        </Suspense>
      </Canvas>
      {/* Global Vignette/Glow overlay */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isDarkMode ? 'bg-[#020617]/50 opacity-100' : 'bg-white/30 opacity-40'} backdrop-blur-[2px]`}></div>
    </div>
  );
};

export default Global3DBackground;
