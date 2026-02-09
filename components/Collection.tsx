import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus, Octahedron, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const RelicItem: React.FC<{ type: 'orb' | 'ring' | 'crystal', color: string }> = ({ type, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      if (hovered) {
         meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
         meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      {type === 'orb' && (
        <Icosahedron args={[1, 1]} ref={meshRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
          <MeshDistortMaterial color={color} distort={0.6} speed={2} roughness={0.2} metalness={0.8} />
        </Icosahedron>
      )}
      {type === 'ring' && (
        <Torus args={[0.8, 0.3, 16, 32]} ref={meshRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
           <meshStandardMaterial color={color} roughness={0.1} metalness={1} />
        </Torus>
      )}
      {type === 'crystal' && (
        <Octahedron args={[1, 0]} ref={meshRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
           <meshPhysicalMaterial color={color} transmission={0.6} thickness={2} roughness={0} ior={1.5} />
        </Octahedron>
      )}
    </Float>
  );
};

const Card: React.FC<{ title: string; type: 'orb' | 'ring' | 'crystal'; color: string; rarity: string }> = ({ title, type, color, rarity }) => {
  return (
    <div className="relative w-full aspect-square bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden group hover:border-accent transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <Canvas>
           <ambientLight intensity={0.5} />
           <pointLight position={[10, 10, 10]} />
           <Environment preset="city" />
           <RelicItem type={type} color={color} />
        </Canvas>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent z-10">
         <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{rarity}</span>
         <h3 className="text-2xl font-display font-bold text-white mt-1 group-hover:text-accent transition-colors">{title}</h3>
      </div>
    </div>
  );
};

export const Collection: React.FC = () => {
  return (
    <section id="collection" className="w-full py-32 px-6 md:px-20 bg-black border-t border-gray-900">
      <div className="mb-20">
         <h2 className="text-accent font-mono uppercase tracking-[0.2em] text-sm mb-4">The Collection</h2>
         <h3 className="text-5xl md:text-7xl font-display font-bold text-white">GEARS & RELICS</h3>
         <p className="text-gray-400 mt-6 max-w-2xl text-lg">
            Rare artifacts from the neon-stained streets of Zero's world. Collect, trade, and wield them to prove your worth as a MISFITZ.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="Neon Core" type="orb" color="#FF3B30" rarity="Legendary" />
        <Card title="Void Loop" type="ring" color="#00ffcc" rarity="Epic" />
        <Card title="Data Shard" type="crystal" color="#9900ff" rarity="Rare" />
      </div>
    </section>
  );
};