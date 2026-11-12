
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";
import "./Hero3D.css";

const BURGUNDY = "#8B2635";
const GOLD = "#D6B56D";

const INITIAL_ROTATION = {
  x: 0.53,
  y: 0.85,
};

function CubeFace({ text, position, rotation, fontSize = 0.36 }) {
  return (
    <Text
      position={position}
      rotation={rotation}
      font="/fonts/SpaceGrotesk-VariableFont_wght.ttf"
      fontSize={fontSize}
      color={GOLD}
      anchorX="center"
      anchorY="middle"
      maxWidth={1.65}
      material-toneMapped={false}
    >
      {text}
    </Text>
  );
}

function BrandCube({ pointer, active, reducedMotion }) {
  const cubeRef = useRef();
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    if (!cubeRef.current) return;

    const targetX = active
      ? INITIAL_ROTATION.x - pointer.y * 0.35
      : INITIAL_ROTATION.x;

    const targetY = active
      ? INITIAL_ROTATION.y + pointer.x * 0.5
      : INITIAL_ROTATION.y;

    const smooth = 1 - Math.exp(-5 * delta);

    cubeRef.current.rotation.x = THREE.MathUtils.lerp(
      cubeRef.current.rotation.x,
      targetX,
      smooth
    );

    cubeRef.current.rotation.y = THREE.MathUtils.lerp(
      cubeRef.current.rotation.y,
      targetY,
      smooth
    );

    if (!reducedMotion) {
      elapsed.current += delta;
      cubeRef.current.position.y =
        Math.sin(elapsed.current * 1.2) * 0.08;
    } else {
      cubeRef.current.position.y = 0;
    }
  });

  return (
    <group
      ref={cubeRef}
      rotation={[
        INITIAL_ROTATION.x,
        INITIAL_ROTATION.y,
        0,
      ]}
    >
      <RoundedBox
        args={[2.2, 2.2, 2.2]}
        radius={0.09}
        smoothness={4}
      >
        <meshStandardMaterial
          color={BURGUNDY}
          metalness={0.18}
          roughness={0.35}
        />
      </RoundedBox>

      {/* Fronte */}
      <CubeFace
        text="3D"
        position={[0, 0, 1.108]}
        rotation={[0, 0, 0]}
        fontSize={0.5}
      />

      {/* Retro */}
      <CubeFace
        text="ProCraft"
        position={[0, 0, -1.108]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.42}
      />

      {/* Destra */}
      <CubeFace
        text="3D"
        position={[1.108, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.65}
      />

      {/* Sinistra */}
      <CubeFace
        text="ProCraft"
        position={[-1.108, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        fontSize={0.32}
      />

      {/* Sopra */}
      <CubeFace
        text="Design"
        position={[0, 1.108, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.38}
      />

      {/* Sotto */}
      <CubeFace
        text="3D"
        position={[0, -1.108, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        fontSize={0.65}
      />
    </group>
  );
}

export default function Hero3D() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReducedMotion(media.matches);
    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    setPointer({ x, y });
    setActive(true);
  };

  const handlePointerLeave = () => {
    setActive(false);
    setPointer({ x: 0, y: 0 });
  };

  return (
    <div
      className="hero-3d"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Cubo tridimensionale ProCraft3D"
      role="img"
    >
      <div className="hero-3d-glow" />

      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.6} />

        <directionalLight
          position={[4, 6, 5]}
          intensity={3}
          color="#ffffff"
        />

        <directionalLight
          position={[-4, 2, -3]}
          intensity={2}
          color={GOLD}
        />

        <BrandCube
          pointer={pointer}
          active={active}
          reducedMotion={reducedMotion}
        />
      </Canvas>

      <div className="hero-3d-caption">
        <span className="hero-3d-dot" />
        DESIGN 3D PERSONALIZZATO
      </div>
    </div>
  );
}
