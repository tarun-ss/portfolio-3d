import { useGLTF } from '@react-three/drei';
import React from 'react';

const Sky = () => {
  const { scene } = useGLTF('/3d/sky.glb'); // Ensure the path is correct

  return <primitive object={sky.scene} />;
};

export default Sky;
