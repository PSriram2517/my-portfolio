import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box, Sphere, Tetrahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObjects = ({ isDarkMode }) => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <Box args={[1, 1, 1]} position={[-5, 2, -5]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial color={isDarkMode ? "#3b82f6" : "#1d4ed8"} metalness={0.8} roughness={0.2} />
        </Box>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[0.7, 32, 32]} position={[6, -3, -8]}>
          <MeshDistortMaterial color={isDarkMode ? "#a855f7" : "#7e22ce"} distort={0.5} speed={2} />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.2}>
        <Tetrahedron args={[0.8]} position={[-8, -4, -3]} rotation={[1, 1, 1]}>
          <meshStandardMaterial color={isDarkMode ? "#22d3ee" : "#0891b2"} metalness={0.9} roughness={0.1} />
        </Tetrahedron>
      </Float>

      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
        <Box args={[0.5, 0.5, 0.5]} position={[8, 4, -10]} rotation={[0, 1, 0]}>
          <meshStandardMaterial color={isDarkMode ? "#6366f1" : "#4338ca"} />
        </Box>
      </Float>
    </>
  );
};

export default FloatingObjects;
