"use client";

import { Input } from "@/components/ui/input";
import Stepper, { Step } from "../../components/Stepper";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Createdao() {
  const [stakingDays, setStakingDays] = useState(3);
  const [votingDays, setVotingDays] = useState(7);

  return (
    <div className="flex justify-center p-6 sm:p-10 lg:p-16">
      <div className="w-full max-w-4xl shadow-lg p-8 sm:p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
        {/* Heading above stepper */}
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Create Your DAO
        </h1>

        <Stepper
          initialStep={1}
          onStepChange={(step) => console.log(step)}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
          className="w-full"
          stepContainerClassName="w-full mt-4"
        >
          <Step>
            <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
            <div className="flex flex-col gap-4">
              <input
                className="w-full mt-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="DAO Name"
              />
              <input
                className="w-full mt-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Description"
              />
              <input
                className="w-full mt-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="file"
              />
            </div>
          </Step>

          <Step>
            <h2 className="text-xl font-semibold mb-2">
              Governance Parameters
            </h2>
            <div className="flex flex-col gap-8 mt-10">
              {/* Staking Period */}
              <div>
                <div className="flex justify-between text-white">
                  <span>Staking Period (days)</span>
                  <span>{stakingDays} days</span>
                </div>
                <Slider
                  defaultValue={[3]}
                  max={10}
                  value={[stakingDays]}
                  step={1}
                  onValueChange={(val) => setStakingDays(val[0])}
                />
                <p className="text-xs text-gray-400 mt-1">
                  Set how long tokens must be staked.
                </p>
              </div>

              {/* Voting Period */}
              <div>
                <div className="flex justify-between text-white">
                  <span>Voting Period (days)</span>
                  <span>{votingDays} days</span>
                </div>
                <Slider
                  defaultValue={[7]}
                  max={10}
                  value={[votingDays]}
                  onValueChange={(val) => setVotingDays(val[0])}
                  step={1}
                />
                <p className="text-xs text-gray-400 mt-1">
                  Define how long each proposal remains open for voting.
                </p>
              </div>
              <input
                className="w-full mt-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Minimun token to participate"
                type="number"
              />
            </div>
          </Step>
          <Step>
            <h2 className="text-xl font-semibold mb-2">Step 3</h2>
            <input
              className="w-full mt-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your name?"
            />
          </Step>

          <Step>
            <h2 className="text-xl font-semibold mb-2">Final Step</h2>
            <p className="text-green-400 font-medium">You made it! 🎉</p>
          </Step>
          <Step>
            <h2 className="text-xl font-semibold mb-2">Final Step</h2>
            <p className="text-green-400 font-medium">You made it! 🎉</p>
          </Step>
        </Stepper>
      </div>
    </div>
  );
}
