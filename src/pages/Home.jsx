import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import { Sky } from '@react-three/drei';
import Loader from '../components/Loader';
import Island from '../models/island';
import { Plane } from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState([0, -6.5, -43.4]);
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };
  // Function to adjust Island for different screen sizes
  const adjustIslandForScreenSize = () => {
    if (window.innerWidth < 768) {
      setIslandScale([0.9, 0.9, 0.9]);
      setIslandPosition([0, -6.5, -43.4]);
    } else {
      setIslandScale([1, 1, 1]);
      setIslandPosition([0, -6.5, -43.4]);
    }
  };

  // Use Effect to handle window resize
  useEffect(() => {
    adjustIslandForScreenSize();
    window.addEventListener('resize', adjustIslandForScreenSize);
    return () => window.removeEventListener('resize', adjustIslandForScreenSize);
  }, []);
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  
  return (
    <section className="w-full h-screen relative">
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting Setup */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
         
          <Sky />
          <Plane    isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}/>
          {/* Island Model */}
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
