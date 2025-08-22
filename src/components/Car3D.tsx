import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { Group, Mesh } from 'three';

const CarModel = ({ scrollY }: { scrollY: number }) => {
  const groupRef = useRef<Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      // Animate based on scroll - car moves down and rotates slightly
      const progress = Math.min(scrollY / 1000, 1);
      groupRef.current.position.y = -progress * 2;
      groupRef.current.rotation.y = progress * 0.3;
      groupRef.current.rotation.x = progress * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Simple car-like geometry since we don't have a GLTF model */}
      <group scale={[2, 1, 3]} position={[0, 0, 0]}>
        {/* Car body */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2, 0.8, 4]} />
          <meshPhysicalMaterial 
            color="#2563eb" 
            metalness={0.9} 
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Car top */}
        <mesh position={[0, 1.2, -0.5]} scale={[0.8, 0.6, 0.6]}>
          <boxGeometry args={[2, 0.8, 2]} />
          <meshPhysicalMaterial 
            color="#1e40af" 
            metalness={0.9} 
            roughness={0.1}
            clearcoat={1}
          />
        </mesh>
        
        {/* Wheels */}
        {[-0.8, 0.8].map((x, i) => 
          [-1.3, 1.3].map((z, j) => (
            <mesh key={`${i}-${j}`} position={[x, 0, z]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
          ))
        )}
        
        {/* Headlights */}
        {[-0.4, 0.4].map((x, i) => (
          <mesh key={i} position={[x, 0.6, 1.9]}>
            <sphereGeometry args={[0.15]} />
            <meshPhysicalMaterial 
              color="#ffffff" 
              emissive="#ffffff"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export const Car3D = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-golden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 3, 8]} fov={50} />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Car Model */}
        <CarModel scrollY={scrollY} />
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};