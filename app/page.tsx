"use client";
import { Navigation } from "@/components/Navigation";
import Particles from "../components/Particles";
import SplitText from "@/components/SplitText";
import ShinyText from "@/components/ShinyText";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Your content goes here */}
      <div className="relative z-10 m-10">
        <Navigation />
        <div className="flex justify-center">
          <ShinyText
            text="Hello, GSAP!"
            className="text-6xl font-bold  text-center"
          />
        </div>
      </div>
    </div>
  );
}
