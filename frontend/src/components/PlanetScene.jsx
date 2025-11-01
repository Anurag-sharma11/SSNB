// src/components/PlanetScene.jsx
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import "./PlanetScene.css";
useGLTF.preload("/gltf/earth2.glb");

function Earth({ mouse }) {
  const { scene } = useGLTF("/gltf/earth2.glb");
  const ref = useRef();

  // gentle rotation + mouse tilt
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0012;
    ref.current.rotation.x = mouse.current.y * 0.25;
    ref.current.rotation.y += mouse.current.x * 0.002;
  });

  return <primitive object={scene} ref={ref} scale={2.8} />;
}

export default function PlanetScene() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="planet-scene">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 10]} intensity={2.2} color="#ffffff" />
        <Suspense fallback={null}>
          <Earth mouse={mouse} />
          <Environment preset="night" background={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
