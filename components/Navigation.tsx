import { Github, Wallet } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import ShinyText from "./ShinyText";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <div className="">
      <div className="m-10 rounded-2xl border border-white/25 bg-gray/40 backdrop-blur-md shadow-lg px-12 py-3 flex items-center justify-between">
        <div className="text-2xl">DAOShip</div>

        <div className="flex gap-12 justify-center items-center">
          <div className="text-xl">
            <ShinyText text="Home" />
          </div>
          <div className="text-xl">
            <ShinyText text="Explore" />
          </div>
          <div className="text-xl">
            <ShinyText text="Create DAO" />
          </div>
          <div className="flex gap-4 ">
            <Button className="p-4 text-lg flex items-center gap-2 rounded-full border border-white/40 bg-black/40 text-white hover:bg-black/60">
              <Github className="h-8 w-8" />
              Connect GitHub
            </Button>

            <Button className="p-4 text-lg flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:opacity-90">
              <Wallet className="h-8 w-8" />
              Connect Wallet
            </Button>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
