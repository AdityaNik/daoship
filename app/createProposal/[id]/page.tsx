"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function CreateProposalPage() {
  const [votingDays, setVotingDays] = useState(3);

  return (
    <div>
      <div className="m-10 mt-40 flex flex-col justify-center items-center gap-2">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold">Create Proposal</h1>
        </div>
        <div>
          <p className="text-gray-300 text-lg">for Swap Platform (SWP)</p>
        </div>
      </div>

      <div className="w-[50%] items-center mx-auto">
        <Card className="p-10">
          <CardContent className="flex flex-col gap-6">
            <input
              className="w-full mt-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Proposal Title"
            />
            <textarea
              className="w-full mt-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Proposal Description"
            />
            <div className="mt-4">
              <div className="flex justify-between text-white">
                <span>Voting Period (days)</span>
                <span>{votingDays} days</span>
              </div>
              <Slider
                defaultValue={[3]}
                max={10}
                value={[votingDays]}
                step={1}
                onValueChange={(val) => setVotingDays(val[0])}
              />
              <p className="text-xs text-gray-400 mt-1">
                Define how long each proposal remains open for voting.
              </p>
            </div>
            <div className="mt-6">
              <Button
                className="px-6 py-3 text-lg flex items-center bg-gradient-to-r from-blue-500 to-indigo-500  gap-2 cursor-pointer text-white shadow-lg rounded-lg transition-all duration-300"
                size={"lg"}
              >
                Submit Proposal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
