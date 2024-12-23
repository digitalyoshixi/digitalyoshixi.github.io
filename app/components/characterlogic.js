'use client'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei';

function Model({ path , rot}) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} rotation={[rot.x,rot.y,rot.z]} scale={[2, 2, 2]} />;
};

export default function CharacterModel() {
  const [rot, setRot] = useState({x : 0, y : 4.7, z : 0})

  useFrame(() => {
    setRot(prevRot => ({ ...prevRot, y: prevRot.y + 0.01 }));
  });


  return (
    <Model path="/3d/creature.glb" rot={rot}/>
  );
}


