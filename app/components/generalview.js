'use client'
import ModelCanvas from './canvas'
import { OrbitControls, useGLTF , View} from '@react-three/drei';
function Model({ path , pos, rot, scale}) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} position={[pos.x, pos.y, pos.z]} rotation={[rot.x,rot.y,rot.z]} scale={[scale.x, scale.y, scale.z]} />;
};

export default function GeneralModel({path, pos, rot, scale}) {
  return (
    <>
        <Model path={path} pos={pos} rot={rot} scale={scale}/>
        <OrbitControls />
    </>
  );
}


