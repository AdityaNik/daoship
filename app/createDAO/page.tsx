"use client";
import Stepper, { Step } from "../../components/Stepper";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Createdao() {
  const [stakingDays, setStakingDays] = useState(3);
  const [votingDays, setVotingDays] = useState(7);

  const daoDetails = {
    name: "Swap Platform",
    token: "SWPToken (SWP)",
    tokenSupply: "1,000,000",
    votingPeriod: "10 days",
    minTokens: "100",
    vestingPeriod: "30 days",
    stakingPeriod: "3 days",
    quorum: "50%",
    github: "https://github.com/AdityaNik/AlgoSwap",
    description: "Platform to swap stable and unstable coins",
    collaborators: ["@vedantbanaitkar", "@Aniketwarule", "@AdityaNik"],
  };

  return (
    <div className="flex justify-center p-6 sm:p-10 lg:p-16 mt-28">
      <div className="w-full max-w-4xl shadow-lg p-8 sm:p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
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
          {/* Step 1 - Basic Info */}
          <Step>
            <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
            <div className="flex flex-col gap-4">
              <input
                className="w-full mt-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="DAO Name"
              />
              <textarea
                className="w-full mt-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Description"
              />
              <input
                className="w-full mt-3 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="file"
              />
            </div>
          </Step>

          {/* Step 2 - Governance */}
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

          {/* Step 3 - Token Config */}
          <Step>
            <h2 className="text-xl font-semibold mb-2">Token Configuration</h2>
            <div className="flex flex-col gap-6 mt-6">
              {/* Token Name & Symbol */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Token Name"
                />
                <input
                  className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Token Symbol"
                />
              </div>

              {/* GitHub Repo URL */}
              <input
                className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="GitHub Repository URL"
              />

              {/* Token Supply Strategy */}
              <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                <h3 className="font-medium text-white mb-3">
                  Token Supply Strategy
                </h3>
                <div className="flex gap-6 text-white mb-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="supply" defaultChecked /> Fixed
                    Supply
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="supply" /> Dynamic Supply
                  </label>
                </div>

                {/* Total Token Supply */}
                <input
                  type="number"
                  defaultValue={1000000}
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Total Token Supply"
                />

                {/* Token Allocation */}
                <div className="mt-6">
                  <h3 className="font-medium text-white mb-3">
                    Token Allocation
                  </h3>
                  <div className="mb-4">
                    <div className="flex justify-between text-white mb-2">
                      <span>Initial Distribution</span>
                      <span>60%</span>
                    </div>
                    <Slider defaultValue={[60]} max={100} step={1} />
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-white mb-2">
                      <span>Future Contributors</span>
                      <span>30%</span>
                    </div>
                    <Slider defaultValue={[30]} max={100} step={1} />
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-white mb-2">
                      <span>DAO Treasury</span>
                      <span>10%</span>
                    </div>
                    <Slider defaultValue={[10]} max={100} step={1} />
                  </div>
                  <p className="text-right text-gray-400 text-sm">
                    Total: 100%
                  </p>
                </div>
              </div>
            </div>
          </Step>

          {/* Step 4 - Collaborators */}
          <Step>
            <h2 className="text-xl font-semibold mb-2">
              Repository Collaborators
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Found 4 collaborators for your repository. Send invitations to
              include them in your DAO.
            </p>

            <div className="flex justify-end mb-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
                Refresh
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  name: "vedantbanaitkar",
                  full: "Vedant Banaitkar",
                  role: "Write",
                },
                { name: "Aniketwarule", full: "Aniket Warule", role: "Write" },
                { name: "AdityaNik", full: "ditya", role: "Admin" },
                { name: "JayeshPatil163", full: "Jayesh Patil", role: "Write" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      {c.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-medium">{c.name}</p>
                      <p className="text-gray-400 text-sm">{c.full}</p>
                      <span className="text-xs text-blue-400">{c.role}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium flex items-center gap-2 hover:opacity-90 transition">
                    Invite
                  </button>
                </div>
              ))}
            </div>
          </Step>

          {/* Step 5 - Final Step (Review + Deploy) */}
          <Step>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Final Review
            </h2>

            <Card className="bg-slate-900/60 border-slate-700 mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Review DAO Details
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-y-4 text-slate-300">
                <div>
                  <p className="font-semibold">DAO Name</p>
                  <p>{daoDetails.name}</p>
                </div>
                <div>
                  <p className="font-semibold">Token</p>
                  <p>{daoDetails.token}</p>
                </div>
                <div>
                  <p className="font-semibold">Token Supply</p>
                  <p>{daoDetails.tokenSupply}</p>
                </div>
                <div>
                  <p className="font-semibold">Staking Period</p>
                  <p>{daoDetails.stakingPeriod}</p>
                </div>
                <div>
                  <p className="font-semibold">Voting Period</p>
                  <p>{daoDetails.votingPeriod}</p>
                </div>
                <div>
                  <p className="font-semibold">Quorum</p>
                  <p>{daoDetails.quorum}</p>
                </div>
                <div>
                  <p className="font-semibold">Minimum Tokens</p>
                  <p>{daoDetails.minTokens}</p>
                </div>
                <div>
                  <p className="font-semibold">GitHub Repository</p>
                  <a
                    href={daoDetails.github}
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {daoDetails.github}
                  </a>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">Vesting Period</p>
                  <p>{daoDetails.vestingPeriod}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">Description</p>
                  <p>{daoDetails.description}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">Invited Collaborators</p>
                  <div className="flex gap-2 flex-wrap">
                    {daoDetails.collaborators.map((collab, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-800 rounded-full text-sm"
                      >
                        {collab}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-green-900/30 border border-green-700 text-green-400 p-4 rounded-lg text-center mb-6">
              Ready to launch! 🚀 By submitting, you’ll deploy this DAO to the
              Solana blockchain.
              <span className="font-semibold">
                {" "}
                This action is irreversible.
              </span>
            </div>
          </Step>
        </Stepper>
      </div>
    </div>
  );
}
