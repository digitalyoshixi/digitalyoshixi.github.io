'use client'
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'

export default function ModelCanvas({children}) {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <directionalLight position={[10, 10, 10]} intensity={3} />
        <directionalLight position={[10, -10, -10]} intensity={3} />
        <directionalLight position={[-10, 0, 0]} intensity={3} />
          {children}
      </Canvas>
    </Suspense>
  );
}


