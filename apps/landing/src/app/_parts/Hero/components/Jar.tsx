"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { MotionValue, useSpring, useTransform } from "framer-motion";
interface Props {
  scrollYProgress: MotionValue<number>;
}

type inputRange = [number[], number[]];
const range = [0, 0.3, 0.5, 1];
const positionRange: inputRange = [range, [-0.9, -0.7, -1, 0]];
const scaleRange: inputRange = [range, [1, 2, 3, 3]];
const rotationRange: inputRange = [
  range,
  [-Math.PI / 2.3, -Math.PI / 10, 0, 0],
];

// Meshopt-compressed; three-stdlib bundles the decoder, so no CDN is needed.
const JAR_MODEL = "/jar.glb";

const Jar = ({ scrollYProgress }: Props) => {
  const { nodes } = useGLTF(JAR_MODEL, false, true);
  const groupRef = useRef<THREE.Group>(null);

  const rotation = useTransform(scrollYProgress, ...rotationRange);
  const sRotation = useSpring(rotation, {
    damping: 60,
    stiffness: 1000,
    bounce: 0,
    mass: 1,
  });
  const position = useTransform(scrollYProgress, ...positionRange);
  const sPosition = useSpring(position, {
    damping: 60,
    stiffness: 1000,
    bounce: 0,
    mass: 1,
  });
  const scale = useTransform(scrollYProgress, ...scaleRange);
  const sScale = useSpring(scale, {
    damping: 60,
    stiffness: 1000,
    bounce: 0,
    mass: 1,
  });

  // Springs update outside React renders, so copy them onto the group every frame.
  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;
    group.position.y = sPosition.get();
    group.rotation.x = sRotation.get();
    group.scale.setScalar(sScale.get());
  });

  return (
    <group dispose={null} ref={groupRef} rotation-y={-0.04}>
      <group name="Mesh_0">
        {Object.entries(nodes).map(([name, node]) => {
          if (node instanceof THREE.Mesh) {
            const material = node.material as THREE.MeshStandardMaterial;

            return (
              <mesh key={name} geometry={node.geometry} name={name}>
                <meshStandardMaterial
                  color={material.color}
                  emissive={material.emissive}
                  emissiveIntensity={material.emissiveIntensity}
                  emissiveMap={material.emissiveMap}
                  metalness={1.5}
                  opacity={material.opacity}
                  roughness={0.1}
                  transparent={material.transparent}
                />
              </mesh>
            );
          }
          return null;
        })}
      </group>
    </group>
  );
};

export default Jar;

useGLTF.preload(JAR_MODEL, false, true);
