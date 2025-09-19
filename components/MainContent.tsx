"use client";
import { useRouter } from "next/navigation";
import ShinyText from "../components/ShinyText";
import { Button } from "../components/ui/button";

export const MainContet = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center flex-col items-center gap-10 mt-20">
      <ShinyText
        text="Hello, GSAP!"
        className="text-6xl font-bold  text-center"
      />
      <ShinyText
        text="Build Decentralized Communities"
        className="text-6xl font-bold"
      />

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        Create, deploy and manage DAOs on Avalanche in minutes. Join the
        decentralized governance revolution without writing a single line of
        code.
      </p>
      <div className="flex gap-4">
        <Button size={"lg"} onClick={() => router.push("/createDAO")}>
          Create DAO
        </Button>
        <Button size={"lg"} variant={"secondary"}>
          Learn More
        </Button>
      </div>
    </div>
  );
};
