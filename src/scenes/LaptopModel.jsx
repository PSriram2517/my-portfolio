import React from 'react';
import { Float, Box, Text } from '@react-three/drei';

const LaptopModel = () => {
  return (
    <group>
      {/* Abstract Laptop Body */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Screen */}
        <Box args={[4, 2.5, 0.1]} position={[0, 1.3, 0]} rotation={[-0.2, 0, 0]}>
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
          {/* "Screen" Content */}
          <Box args={[3.8, 2.3, 0.05]} position={[0, 0, 0.05]}>
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
          </Box>
        </Box>
        
        {/* Base */}
        <Box args={[4, 0.2, 2.8]} position={[0, 0, 1.3]}>
          <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
          {/* Keyboard area */}
          <Box args={[3.6, 0.05, 2.4]} position={[0, 0.1, 0]}>
            <meshStandardMaterial color="#1e293b" />
          </Box>
        </Box>

        {/* Floating Code Symbols around it */}
        <Text position={[-2.5, 2, 1]} fontSize={0.5} color="#3b82f6">{"{ }"}</Text>
        <Text position={[2.5, 0.5, 2]} fontSize={0.4} color="#a855f7">{"</>"}</Text>
        <Text position={[0, 3, -1]} fontSize={0.3} color="#06b6d4">{"AI"}</Text>
      </Float>
    </group>
  );
};

export default LaptopModel;
