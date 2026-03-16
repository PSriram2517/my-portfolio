import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line, Float, Text } from '@react-three/drei';
import * as THREE from 'three';

const KnowledgeNetwork = ({ isDarkMode }) => {
  const groupRef = useRef();
  
  const nodes = useMemo(() => [
    { pos: [0, 0, 0], label: 'AI & ML', color: isDarkMode ? '#3b82f6' : '#2563eb' },
    { pos: [3, 2, -1], label: 'Data Science', color: isDarkMode ? '#8b5cf6' : '#7e22ce' },
    { pos: [-3, 1, 2], label: 'Web Dev', color: isDarkMode ? '#06b6d4' : '#0891b2' },
    { pos: [1, -3, 1], label: 'Python', color: isDarkMode ? '#3b82f6' : '#1d4ed8' },
    { pos: [-2, -2, -2], label: 'React', color: isDarkMode ? '#6366f1' : '#4f46e5' },
    { pos: [4, -1, 3], label: 'TensorFlow', color: isDarkMode ? '#ef4444' : '#dc2626' },
    { pos: [-4, 3, -2], label: 'Database', color: isDarkMode ? '#10b981' : '#059669' },
  ], [isDarkMode]);

  // Connect all nodes to the center node and some others
  const connections = useMemo(() => {
    const lines = [];
    nodes.forEach((node, i) => {
      if (i === 0) return;
      lines.push([nodes[0].pos, node.pos]);
    });
    // Add some random cross connections
    lines.push([nodes[1].pos, nodes[5].pos]);
    lines.push([nodes[2].pos, nodes[4].pos]);
    lines.push([nodes[3].pos, nodes[1].pos]);
    return lines;
  }, [nodes]);

  useFrame((state) => {
    groupRef.current.rotation.y += 0.005;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <group position={node.pos}>
            <Sphere args={[0.3, 32, 32]}>
              <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={isDarkMode ? 0.5 : 0.2} />
            </Sphere>
            <Text
              position={[0, 0.5, 0]}
              fontSize={0.25}
              color={isDarkMode ? "white" : "#0f172a"}
              anchorX="center"
              anchorY="middle"
            >
              {node.label}
            </Text>
          </group>
        </Float>
      ))}

      {connections.map((conn, i) => (
        <Line
          key={i}
          points={conn}
          color={isDarkMode ? "#ffffff" : "#0f172a"}
          opacity={isDarkMode ? 0.1 : 0.2}
          transparent
          lineWidth={1}
        />
      ))}
    </group>
  );
};

export default KnowledgeNetwork;
