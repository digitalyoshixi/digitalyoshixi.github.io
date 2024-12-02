import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={[1.5, 1.5, 1.5]} />;
}

export default function Character() {
  return (
    <Canvas>
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <directionalLight position={[10, -10, -10]} intensity={3} />
      <directionalLight position={[-10, 0, 0]} intensity={3} />
      <Suspense fallback={null}>
        <Model path="/creature.glb" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
