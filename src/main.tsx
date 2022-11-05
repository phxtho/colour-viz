import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// @ts-ignore - no types for this module
import ntc from "ntcjs";
import chroma from "chroma-js";
import Box from "./Box";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {ntc.names.map((name: any, i: number) => (
        <Box
          key={i}
          colour={"#" + name[0]}
          position={chroma("#" + name[0]).rgb()}
        />
      ))}
      <OrbitControls />
    </Canvas>
  </React.StrictMode>
)
