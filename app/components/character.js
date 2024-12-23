'use client'
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import CharacterModel from './characterlogic';


export default function Character() {
  return (
    <Canvas>
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <directionalLight position={[10, -10, -10]} intensity={3} />
      <directionalLight position={[-10, 0, 0]} intensity={3} />
      <Suspense fallback={null}>
        <CharacterModel></CharacterModel>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}


