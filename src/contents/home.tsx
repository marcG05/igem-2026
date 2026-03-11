import * as THREE from 'three'
import React, {useRef, useEffect, useLayoutEffect, useState} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import {gsap} from 'gsap'
import { FBXLoader } from 'three-stdlib';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { PopUp } from '../components/home/PopUp.tsx'
import {WaterSection, SkySection, MovingFish, CuveSection} from '../components/home/Sections.tsx'
import { LoadingPage } from "./LoadingPage" // <-- Import your loading page

gsap.registerPlugin(ScrollTrigger);


function Model() {
  const groupRef = useRef<THREE.Group>(null);

  const geometry4 = useLoader(FBXLoader, 'https://static.igem.wiki/teams/5756/assets/3d/arbre19.pdf');
  const texture = new THREE.TextureLoader().load("https://static.igem.wiki/teams/5756/assets/3d/calathea-orbifolia-01-diff-1k.webp");
  const mat = new THREE.MeshStandardMaterial({map: texture});

  useEffect(() => {
    geometry4.traverse((child: any) => {
      if (child.isMesh) {
        child.material = mat;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    })
  }, [geometry4, mat]);

  useLayoutEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#can-wrapper",
      start: "top top",
      end: "top bottom",
      scrub: true,
    });
    return () => trigger.kill();
  }, []);
  return (
    <group ref={groupRef} position={[-10, 1, -500]} scale={[0.12, 0.12, 0.12]}>
      <primitive object={geometry4} />
    </group>
  );
}

type FishConfig = {
  basePosition: [number, number, number];
  radius: number;
  speed: number;
  phase: number;
  scale: [number, number, number];
  verticalAmplitude: number;
};

const fishConfigs: FishConfig[] = [
  { basePosition: [-30, -240, -500], radius: 18, speed: 0.09, phase: 0.5, scale: [0.003, 0.003, 0.003], verticalAmplitude: 30 },
  { basePosition: [-30, -190, -490], radius: -12, speed: 0.21, phase: 2.5, scale: [0.002, 0.002, 0.002], verticalAmplitude: 25 },
  
  { basePosition: [-30, -220, -495], radius: 22, speed: 0.13, phase: 1.2, scale: [0.00255, 0.00255, 0.00255], verticalAmplitude: 35 },
  { basePosition: [-30, -190, -515], radius: 15, speed: 0.17, phase: 3.1, scale: [0.0025, 0.0025, 0.0025], verticalAmplitude: 28 },
  
  { basePosition: [-30, -240, -510], radius: -20, speed: 0.11, phase: 0.9, scale: [0.0025, 0.0025, 0.0025], verticalAmplitude: 32 },
  { basePosition: [-30, -190, -500], radius: 12, speed: 0.15, phase: 1.7, scale: [0.00181, 0.00181, 0.00181], verticalAmplitude: 18 },

  { basePosition: [-30, -190, -480], radius: 17, speed: 0.12, phase: 2.9, scale: [0.0023, 0.0023, 0.0023], verticalAmplitude: 20 },  
  { basePosition: [-30, -190, -480], radius: 12, speed: 0.13, phase: 2.1, scale: [0.0024, 0.0024, 0.0024], verticalAmplitude: 10 },
];

const CanvasSection: React.FC<{}> = () => (
  <Canvas id="react-can" style={{position: "relative", top: 0, left: 0, width: "100%", height: "100%", zIndex:10}}>
    <ambientLight intensity={0.2} />
    <pointLight position={[10, 10, 10]} intensity={2} />
    <directionalLight position={[-10, 15, 5]} intensity={1.5} />
    <Model />
    {fishConfigs.map((cfg, idx) => (
      <MovingFish key={idx} {...cfg} />
    ))}
  </Canvas>
);

export const Home: React.FC<{}> = () => {
  const [loading, setLoading] = useState(true);
  const r = useRef(null);

  useEffect(() => {
    // Show loading for 2 seconds, then show the page
    const timer = setTimeout(() => 
      setLoading(false), 100);

     
    return () => {
      clearTimeout(timer);
      window.scrollTo(0,0);
    };
  }, []);

  useEffect(() => {
    if (!loading && r.current) {
      gsap.to(r.current, {
        scrollTrigger: r.current,
        opacity: 1,
        duration: 3,
        ease: "power2.out"
      });
    }
  }, [loading]);

  if (loading) {
    return <LoadingPage />;
  }



  return (
    <>
      <PopUp title="" text="Approximately 25–30% of global greenhouse gas emissions come from our food systems—and this rises to about one-third when all agricultural products are included." margin={30}/>
      <PopUp title="" text="Hydroponic greenhouses dedicate 65–85% of their energy solely to climate control (heating, cooling, humidity), often relying on fossil-fuel electricity." margin={80} right />
      <PopUp title="" text="Around 70% of the world’s freshwater withdrawals are used by agriculture, creating immense stress on water supplies in a warming world." margin={110}/>
      <div style={{height:"330vh", width:"100%", position:"absolute"}}>
          <CanvasSection />
      </div>
      <div style={{height: "500vh", width: "100vw", position: "relative", top:0, left:0}}>
        <div style={{height: "45%", width: "100%"}}>
          <SkySection />
        </div>
        <div style={{height: "15%", width: "100%"}}>
          <WaterSection />
          <PopUp
            title={<em>Geobacter sulfurreducens</em>}
            text="The bacterium that crafts conductive nanowires and turns respiration into electricity."
            margin={10}
            right
          />
        </div>
        <div style={{height: "40%", width: "100%"}}>
          < CuveSection/>
          <PopUp title="From waste to watts!" text="Organic matter like wastewater can be turned into clean electricity while being broken down, thanks to microbial fuel cells!" margin={-120}/>
          <PopUp title="Inside a microbial fuel cell" text="Two chambers linked by a proton-only membrane force electrons through the circuit, generating power. The prototype is 3D-printed in PLA, but watch out: no oxygen allowed in the anode chamber!" margin={-100} right/>
        </div>
      </div>
    </>
  );
}
