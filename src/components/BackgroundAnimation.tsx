import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars as DreiStars } from '@react-three/drei';

function GeometricShape() {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#4B2E83"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
}

const BackgroundAnimation: React.FC = () => {
  // Ensure Canvas only mounts on client to avoid hydration/runtime issues
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Starfield - lightweight, no custom shaders */}
        <DreiStars radius={1.5} depth={3} count={5000} factor={4} fade speed={0.5} />
        <GeometricShape />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
};

export default BackgroundAnimation;