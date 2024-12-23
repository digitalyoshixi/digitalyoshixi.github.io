'use client'
import { useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei';

function Model({ path , rot}) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} rotation={[rot.x,rot.y,rot.z]} scale={[2, 2, 2]} />;
};

export default function CharacterModel() {
  const [mousePosition,setMousePosition] = useState({x : 0, y : 0})

  const [rot, setRot] = useState({x : 0, y : 4.7, z : 0})
  useFrame(() => {
    const updateMousePosition = (ev) => {
      setMousePosition([ ev.clientX, ev.clientY ]);
    };
    window.addEventListener('mousemove', updateMousePosition);
    let movey = parseInt(mousePosition[1]) * 0.01
    console.log("hello", movey)
    setRot(prevRot => ({ ...prevRot, y:  4.7 + movey}));
  });

  return (
    <Model path="/3d/creature.glb" rot={rot}/>
  );
}


