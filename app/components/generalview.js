'use client'
import ModelCanvas from './canvas'
import { OrbitControls, useGLTF , View} from '@react-three/drei';
function Model({ path , rot, scale}) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} rotation={[rot.x,rot.y,rot.z]} scale={[scale.x, scale.y, scale.z]} />;
};

export default function GeneralModel({path, rot, scale}) {
  return (
    <>
        <Model path={path} rot={rot} scale={scale}/>
        <OrbitControls />
    </>
  );
}


