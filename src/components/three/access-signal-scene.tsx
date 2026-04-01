"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Group } from "three";
import { Color, Vector3 } from "three";
import { SceneFallback } from "@/components/three/scene-fallback";

function SignalGeometry({ progress }: { progress: number }) {
  const groupRef = useRef<Group>(null);

  const paths = useMemo(() => {
    const lift = progress * 0.9;

    return [
      [
        new Vector3(-3.2, -1.4, -1.2),
        new Vector3(-1.4, -0.2 + lift * 0.2, 0.2),
        new Vector3(0.8, 0.8 + lift * 0.2, -0.5),
        new Vector3(3.1, 1.2 + lift * 0.3, 0.7),
      ],
      [
        new Vector3(-2.8, 1.6, 0.8),
        new Vector3(-0.6, 0.4 + lift * 0.25, -0.3),
        new Vector3(1.6, -0.3 + lift * 0.3, 0.4),
        new Vector3(3.3, -1.2 + lift * 0.35, -0.8),
      ],
      [
        new Vector3(-2.4, -0.3, 1.6),
        new Vector3(-0.4, -1.2 + lift * 0.4, 0.6),
        new Vector3(1.1, 0.2 + lift * 0.45, -0.9),
        new Vector3(2.8, 1.7 + lift * 0.35, 0.1),
      ],
    ];
  }, [progress]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.08;
      groupRef.current.rotation.x = Math.sin(time * 0.18) * 0.08;
      groupRef.current.position.y = Math.sin(time * 0.24) * 0.12;
      groupRef.current.scale.setScalar(0.92 + progress * 0.18);
    }
  });

  const cool = new Color("#6a86aa");
  const warm = new Color("#d6935d");
  const lineColor = cool.lerp(warm, progress * 0.9);

  return (
    <group ref={groupRef}>
      <Sparkles
        count={90}
        scale={[7.8, 4.6 + progress * 1.2, 4.4]}
        size={4.2}
        speed={0.4 + progress * 0.5}
        color={lineColor}
        opacity={0.9}
      />
      <Sparkles
        count={45}
        scale={[5.8, 3.4, 3.6]}
        size={6}
        speed={0.18}
        color="#f2e6d8"
        opacity={0.5}
      />

      <Float speed={0.9} rotationIntensity={0.14} floatIntensity={0.3}>
        <mesh position={[0, 0.2 + progress * 0.3, 0]}>
          <torusGeometry args={[1.7 + progress * 0.3, 0.03, 12, 100]} />
          <meshBasicMaterial color={lineColor} transparent opacity={0.42} />
        </mesh>
      </Float>

      <mesh position={[0, 0, -0.8]}>
        <sphereGeometry args={[1.1 + progress * 0.25, 64, 64]} />
        <meshBasicMaterial color="#0f1722" transparent opacity={0.65} />
      </mesh>

      <mesh position={[0, 0.1 + progress * 0.15, -1.6]}>
        <sphereGeometry args={[2.4 + progress * 0.25, 64, 64]} />
        <meshBasicMaterial color="#132131" transparent opacity={0.12} />
      </mesh>

      {paths.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={lineColor}
          transparent
          opacity={0.35 + progress * 0.2}
          lineWidth={1.2}
        />
      ))}
    </group>
  );
}

export default function AccessSignalScene() {
  const shouldReduceMotion = useReducedMotion();
  const [supportsWebGl] = useState(() => {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    return Boolean(gl);
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(window.innerHeight * 1.4, 1);
      const next = Math.min(window.scrollY / max, 1);

      setProgress(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (shouldReduceMotion || supportsWebGl === false) {
    return <SceneFallback />;
  }

  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6.8], fov: 45 }}>
        <color attach="background" args={["#090d12"]} />
        <ambientLight intensity={0.9} />
        <pointLight
          color={progress > 0.45 ? "#d6935d" : "#8aa4cb"}
          intensity={5}
          position={[2, 3, 4]}
        />
        <pointLight color="#7fa2d8" intensity={2} position={[-4, -2, 2]} />
        <SignalGeometry progress={progress} />
      </Canvas>
    </div>
  );
}
