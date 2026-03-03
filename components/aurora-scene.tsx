"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { auroraVertexShader, auroraFragmentShader } from "./aurora-shader";

function AuroraPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[16, 10]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={auroraVertexShader}
        fragmentShader={auroraFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function GlassLens({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const { pointer } = useThree();

  const segments = isMobile ? 32 : 64;
  const samples = isMobile ? 2 : 6;
  const resolution = isMobile ? 512 : 1024;

  useFrame(() => {
    if (!meshRef.current) return;

    if (!isMobile) {
      targetRotation.current.y = pointer.x * 0.08;
      targetRotation.current.x = pointer.y * 0.05;
    }

    meshRef.current.rotation.y +=
      (targetRotation.current.y - meshRef.current.rotation.y) * 0.03;
    meshRef.current.rotation.x +=
      (targetRotation.current.x - meshRef.current.rotation.x) * 0.03;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[4, segments, segments]} />
      <MeshTransmissionMaterial
        backside
        samples={samples}
        resolution={resolution}
        transmission={1}
        roughness={0.4}
        thickness={0.3}
        ior={1.25}
        chromaticAberration={0.04}
        anisotropy={0.2}
        distortion={0.6}
        distortionScale={0.35}
        temporalDistortion={0.3}
        color="#6d3fa0"
      />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[-4, 3, 2]} intensity={25} color="#A855F7" />
      <pointLight position={[4, -2, 2]} intensity={25} color="#EC4899" />
      <pointLight position={[-5, -3, 1]} intensity={28} color="#E8A530" />
      <pointLight position={[5, 3, 1]} intensity={28} color="#D4950A" />
    </>
  );
}

function PostEffects({ isMobile }: { isMobile: boolean }) {
  const bloomIntensity = isMobile ? 0.5 : 1.0;

  if (isMobile) {
    return (
      <EffectComposer>
        <Bloom
          intensity={bloomIntensity}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    );
  }

  return (
    <EffectComposer>
      <Bloom
        intensity={bloomIntensity}
        luminanceThreshold={0.1}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={new THREE.Vector2(0.0015, 0.0015)}
        radialModulation
        modulationOffset={0.5}
      />
    </EffectComposer>
  );
}

export default function AuroraScene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <AuroraPlane />
      <GlassLens isMobile={isMobile} />
      <Lights />
      <PostEffects isMobile={isMobile} />
    </>
  );
}
