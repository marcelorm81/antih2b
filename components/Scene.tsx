import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      // Gentle rotation
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
      
      // Mouse interaction parallax
      const mouseX = (state.mouse.x * viewport.width) / 2;
      const mouseY = (state.mouse.y * viewport.height) / 2;
      
      // Lerp position for smooth follow
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouseX * 0.2, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouseY * 0.2, 0.05);
    }
  });

  const { viewport } = useThree();

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1.5, 64, 64]} ref={meshRef}>
        <MeshDistortMaterial
          color="#1a1a1a"
          envMapIntensity={0.4}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.2}
          distort={0.4}
          speed={1.5}
        />
      </Sphere>
    </Float>
  );
};

// Hook to access viewport inside Canvas
import { useThree } from '@react-three/fiber';

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ff3b30" />
      <spotLight position={[0, 10, 0]} intensity={0.8} />
    </>
  );
};

export const Scene: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Lights />
      <AnimatedShape />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
  );
};