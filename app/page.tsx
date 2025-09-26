"use client";
import Particles from "../components/Particles";
import { MainContet } from "@/components/MainContent";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["##01aaff", "#01aaff"]}
          particleCount={150}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={150}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Your content goes here */}
      <div className="relative z-10 m-10">
        <div>
          <MainContet />
        </div>
      </div>
    </div>
  );
}
