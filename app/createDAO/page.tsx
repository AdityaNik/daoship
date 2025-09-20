"use client";

import { Input } from "@/components/ui/input";
import Stepper, { Step } from "../../components/Stepper";

export default function Createdao() {
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
            <div className="flex flex-col gap-5 mt-10">
              <Input placeholder="DAO Name" />
              <Input placeholder="Description" />
            </div>
          </Step>

          <Step>
            <h2 className="text-xl font-semibold mb-2">Step 2</h2>
            <img
              className="h-40 w-full object-cover object-center rounded-xl mt-4"
              src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894"
              alt="cat"
            />
            <p className="text-gray-200 mt-4">Custom step content!</p>
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
        </Stepper>
      </div>
    </div>
  );
}
