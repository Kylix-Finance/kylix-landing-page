"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import Jar from "./Jar";
import { Suspense } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { MotionValue } from "framer-motion";

// import * as THREE from "three";
// import { extend } from "@react-three/fiber";
import Camera from "./Camera";

// extend(THREE);

interface Props {
  scrollYProgress: MotionValue<number>;
}

const Scene = ({ scrollYProgress }: Props) => {
  return (
    <Canvas shadows dpr={[1, 2]} style={{ height: "100vh" }}>
      <Camera />

      <OrbitControls
        dampingFactor={0.01}
        enableDamping={true}
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />
      <Suspense fallback={null}>
        <EffectComposer>
          <Bloom height={1000} intensity={0.2} kernelSize={5} width={1000} />
        </EffectComposer>
        <Jar scrollYProgress={scrollYProgress} />

        <Environment files="/hdri/empty_warehouse_01_1k.hdr" />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
