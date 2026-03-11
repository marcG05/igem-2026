import React, { useEffect, useState, useRef,  } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { STLLoader } from "three-stdlib";
import { FBXLoader } from 'three-stdlib';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
//import "../../contents/CSS/home/home.scss";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function MovingFish({
  basePosition = [0, 0, -100], // x, y, z
  radius = 60,
  speed = 0.08,
  phase = 0,
  scale = [0.01, 0.01, 0.01],
  verticalAmplitude = 10,
  verticalSpeed = 0.5,
}: {
  basePosition?: [number, number, number];
  radius?: number;
  speed?: number;
  phase?: number;
  scale?: [number, number, number];
  verticalAmplitude?: number;
  verticalSpeed?: number;
}) {
  const original = useLoader(FBXLoader, "https://static.igem.wiki/teams/5756/assets/3d/bacteria.pdf");
  const model = React.useMemo(() => original.clone(true), [original]);
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed + phase;

      // Slowly drift the center position over time
      const driftX = Math.sin(t * 0.07 + phase) * 60;
      const driftY = Math.cos(t * 0.05 + phase) * 25;
      const driftZ = Math.sin(t * 0.09 + phase) * 40;

      // Generate a "wandering" path using layered sine/cosine
      const x =
        basePosition[0] + driftX +
        Math.sin(t) * radius +
        Math.sin(t * 0.37 + phase) * (radius * 0.3);
      const z =
        basePosition[2] + driftZ +
        Math.cos(t * 0.9) * radius +
        Math.cos(t * 0.53 + phase) * (radius * 0.2);
      const y =
        basePosition[1] + driftY +
        Math.sin(t * verticalSpeed) * verticalAmplitude +
        Math.cos(t * 0.23 + phase) * (verticalAmplitude * 0.5);

      // Compute direction vector (tangent to the path)
      const nextT = t + 0.01;
      const nextX =
        basePosition[0] + Math.sin(nextT * 0.07 + phase) * 60 +
        Math.sin(nextT) * radius +
        Math.sin(nextT * 0.37 + phase) * (radius * 0.3);
      const nextZ =
        basePosition[2] + Math.sin(nextT * 0.09 + phase) * 40 +
        Math.cos(nextT * 0.9) * radius +
        Math.cos(nextT * 0.53 + phase) * (radius * 0.2);
      const nextY =
        basePosition[1] + Math.cos(nextT * 0.05 + phase) * 25 +
        Math.sin(nextT * verticalSpeed) * verticalAmplitude +
        Math.cos(nextT * 0.23 + phase) * (verticalAmplitude * 0.5);

      const dir = new THREE.Vector3(nextX - x, nextY - y, nextZ - z).normalize();

      // Set position
      ref.current.position.set(x, y, z);

      // Make the fish look in the direction of movement
      ref.current.lookAt(x + dir.x, y + dir.y, z + dir.z);

      // Add a little wobble for realism
      ref.current.rotation.z += Math.sin(t * 2) * 0.05;
    }
  });

  return <primitive ref={ref} object={model} scale={scale} />;
}

export function SkySection() {
  return (
    <div className="sky-gradient-section" style={{width:"100%", height:"100%"}}>
      
    </div>
  );
}

// Helper to generate a wavy SVG path
function getWavePath(
  width: number,
  height: number,
  phase: number,
  points: number,
  amplitude: number,
  speed: number = 0.7,
  randomness: number = 0.5,
  waveSeed: number = 0
) {
  const step = width / (points - 1);
  let d = `M0,${height / 2}`;
  let prevX = 0;
  let prevY = height / 2;
  for (let i = 1; i < points; i++) {
    const x = i * step;
    const randomOffset = Math.sin(i * 13.13 + waveSeed * 7.77) * randomness * amplitude;
    const theta = (i + phase) * speed;
    const y = height / 2 + Math.sin(theta) * amplitude + randomOffset;
    // Use the midpoint as the control point for a quadratic Bézier curve
    const cpx = (prevX + x) / 2;
    const cpy = (prevY + y) / 2;
    d += ` Q${cpx},${cpy} ${x},${y}`;
    prevX = x;
    prevY = y;
  }
  d += ` L${width},${height} L0,${height} Z`;
  return d;
}

const waveConfigs = [
  { amplitude: 15, color: "#0288d1", strokeWidth: 2, opacity: 1, speed: 0.1, phaseOffset: 0 },
  { amplitude: 15, color: "#3fa0cdff", strokeWidth: 2, opacity: 1, speed: 0.1, phaseOffset: 10 },
  { amplitude: 15, color: "#45BBF2", strokeWidth: 2, opacity: 1, speed: 0.1, phaseOffset: 25 },
];

export function WaterSection() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let frame: number;
    const animate = () => {
      setPhase((prev) => prev + 0.015);
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const width = 1440;
  const height = 60;
  const points = 30;

  return (
    <div
      className="water-gradient-section"
      style={{width:"100%", height:"100%", position:"relative", overflow:"hidden"}}
    >
      {/* SVG Waves */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{
          position: "absolute",
          top: 0,
          left: "-5em",
          width: "110%",
          height: `${height}px`,
          zIndex: 5,
          display: "block",
          pointerEvents: "none", // SVG does not block mouse events
        }}
        preserveAspectRatio="none"
      >
        <rect x="0" y="0" width={width} height={height} fill="#1976D3"/>
        {waveConfigs.map((cfg, idx) => (
          <path
            key={idx}
            d={getWavePath(
              width,
              height,
              phase + cfg.phaseOffset,
              points,
              cfg.amplitude,
              cfg.speed
            )}
            fill={cfg.color}
            stroke={cfg.color}
            strokeWidth={cfg.strokeWidth}
            opacity={cfg.opacity}
          />
        ))}
      </svg>
      {/* 3D Canvas absolutely positioned to fill the section */}
      <div style={{position: "relative", width:"100%", top:"0", left:"0", height:"100%", zIndex:5, pointerEvents:"none"}}>
      </div>
    </div>
  );
}


export { MovingFish };



export function CuveSection() {
  const atom = useLoader(FBXLoader, "https://static.igem.wiki/teams/5756/assets/3d/atom.pdf");
  const cuv2 = useLoader(STLLoader, "https://static.igem.wiki/teams/5756/assets/3d/cuve2.stl");
  const anode = useLoader(STLLoader, "https://static.igem.wiki/teams/5756/assets/3d/anode.stl");
 
  const mesh1 = useRef<THREE.Mesh>(null!);
  const mesh2 = useRef<THREE.Mesh>(null!);

  const c = useRef(null);

  const b = useRef(null);


  useGSAP(() =>{
    gsap.fromTo(c.current, {
      opacity: 0,
      x: 100,
    }, {
      opacity: 1,
      x:0,
      duration: 1,
      scrollTrigger: {
        trigger: c.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: 'play none none reverse',
      }
    })
  }, {scope: c});

  useGSAP(() =>{
    gsap.fromTo(b.current, {
      opacity: 0,
      x: -100,
    }, {
      opacity: 1,
      x:0,
      duration: 1,
      scrollTrigger: {
        trigger: b.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: 'play none none reverse',
      }
    })
  }, {scope: b});

  
  return (
    <div style={{width:"100%", height:"100%", position:"relative", top:"0", background:"#9ae0e9ff"}}>
      <Canvas ref={b} style={{
          width: "100%",
          height: "40%",
          position: "relative",
        }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} />
        <MovingFish
          basePosition={[100, 1, -350]}
          speed={0}
          phase={0}
          scale={[0.065, 0.065, 0.065]}
          verticalAmplitude={0}
          verticalSpeed={0}
        />
        <primitive object={atom} position={[250, 10, -250]} scale={[0.3, 0.31, 0.3]} />
      </Canvas>
      <Canvas ref={c}
        style={{
          width: "100%",
          height: "40%",
          position: "relative",
        }}
      >
            
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 10]} intensity={1.2} />
            
            {/* Atom */}
            
            {/* Gauche */}
            <mesh ref={mesh1} geometry={cuv2} position={[-190, -75, -420]} rotation={[Math.PI, Math.PI, -Math.PI]} scale={[1.75, 1.75, 1.75]}>
              <meshStandardMaterial color="grey" metalness={0.6} roughness={0.01} />
            </mesh>

            {/* Droite */}
            <mesh ref={mesh1} geometry={cuv2} position={[180, -75, -310]} rotation={[0, Math.PI, 0]} scale={[1.75, 1.75, 1.75]}>
              <meshStandardMaterial color="grey" metalness={0.6} roughness={0.01} />
            </mesh>

            <mesh ref={mesh2} geometry={anode} position={[2.5, 135, -310]} rotation={[0,Math.PI,-Math.PI/2]} scale={[1.75, 1.75, 1.75]}>
              <meshStandardMaterial color="grey" metalness={0.6} roughness={0.01} />
            </mesh>
        
      </Canvas>
    </div>
  );
}

export function SimpleCuveSection() {
  const cuv2 = useLoader(STLLoader, "https://static.igem.wiki/teams/5756/assets/3d/cuve2.stl");
  const anode = useLoader(STLLoader, "https://static.igem.wiki/teams/5756/assets/3d/anode.stl");

  const mesh1 = useRef<THREE.Mesh>(null!);
  const mesh2 = useRef<THREE.Mesh>(null!);

  return (
    <div>
      <Canvas
        style={{
          width: "85vw",
          height: "85vh",
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} />

        {/* Gauche */}
        <mesh
          ref={mesh1}
          geometry={cuv2}
          position={[-190, -75, -420]}
          rotation={[Math.PI, Math.PI, -Math.PI]}
          scale={[1.75, 1.75, 1.75]}
        >
          <meshStandardMaterial color="grey" metalness={0.6} roughness={0.01} />
        </mesh>

        {/* Droite */}
        <mesh
          ref={mesh1}
          geometry={cuv2}
          position={[180, -75, -310]}
          rotation={[0, Math.PI, 0]}
          scale={[1.75, 1.75, 1.75]}
        >
          <meshStandardMaterial color="grey" metalness={0.6} roughness={0.01} />
        </mesh>

        {/* Anode */}
        <mesh
          ref={mesh2}
          geometry={anode}
          position={[2.5, 135, -310]}
          rotation={[0, Math.PI, -Math.PI / 2]}
          scale={[1.75, 1.75, 1.75]}
        >
          <meshStandardMaterial color="grey" metalness={0.6} roughness={0.01} />
        </mesh>
      </Canvas>
    </div>
  );
}


