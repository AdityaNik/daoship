"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  CheckCircle,
  Plus,
  Timer,
  Users,
  Eye,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const dao = {
  name: "Swap Platform",
  description: "Platform to swap stable and unstable coins",
  members: 2,
  createdAt: "Created Sep 14, 2025",
  votingPower: "voting power",
  quorumRequired: "50%",
  activeProposals: 1,
  totalProposals: 1,
};

const activeProposal = {
  title: "Create pool for avax to usdc",
  description: "need to add this functionality ASAP",
  timeLeft: "6d 23h left",
  yesVotes: 0,
  noVotes: 0,
  totalVotes: 0,
  date: "Sep 14, 2025",
};

export default function DAODetails() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div className="min-h-screen m-10 mt-40">
      <div className="p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold">{dao.name}</h1>
              <div className="text-2xl">✨</div>
            </div>
            <p className="text-gray-300 text-lg">{dao.description}</p>

            <div className="flex gap-6 items-center text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{dao.members} members</span>
              </div>
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4" />
                <span>{dao.createdAt}</span>
              </div>
            </div>
          </div>

          <Button
            className="px-6 py-3 text-lg flex items-center bg-gradient-to-r from-blue-500 to-indigo-500  gap-2 cursor-pointer text-white shadow-lg rounded-lg transition-all duration-300"
            size={"lg"}
            onClick={() => router.push(`/createProposal/${id}`)}
          >
            <Plus className="h-5 w-5" />
            Create Proposal
          </Button>
        </div>

        {/* Navigation Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-slate-800/50 border border-slate-700 p-1 rounded-lg mb-8">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-slate-700 data-[state=active]:text-white text-gray-300 px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Activity className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="proposals"
              className="data-[state=active]:bg-slate-700 data-[state=active]:text-white text-gray-300 px-4 py-2 rounded-md flex items-center gap-2"
            >
              <TrendingUp className="h-4 w-4" />
              Proposals
            </TabsTrigger>
            <TabsTrigger
              value="members"
              className="data-[state=active]:bg-slate-700 data-[state=active]:text-white text-gray-300 px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Members
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-slate-700 data-[state=active]:text-white text-gray-300 px-4 py-2 rounded-md"
            >
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/40 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-gray-300 font-medium">
                      Active Proposals
                    </h3>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">
                      {dao.activeProposals}
                    </span>
                    <span className="text-gray-400 text-sm mb-1">
                      of {dao.totalProposals} total
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/40 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Users className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-gray-300 font-medium">Members</h3>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">
                      {dao.members}
                    </span>
                    <span className="text-gray-400 text-sm mb-1">
                      {dao.votingPower}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/40 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <h3 className="text-gray-300 font-medium">Quorum</h3>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">
                      {dao.quorumRequired}
                    </span>
                    <span className="text-gray-400 text-sm mb-1">
                      required votes
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Active Proposals Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Active Proposals
                </h2>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white flex items-center gap-1"
                >
                  View all
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <Card className="bg-slate-800/40 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {activeProposal.title}
                      </h3>
                      <p className="text-gray-400">
                        {activeProposal.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-blue-400 text-sm">
                        <TrendingUp className="h-4 w-4" />
                        <span>{activeProposal.timeLeft}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-gray-300 hover:bg-slate-700"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View details
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{activeProposal.yesVotes} Yes (0.0%)</span>
                      <span>{activeProposal.noVotes} No (0.0%)</span>
                      <span>{activeProposal.totalVotes} total votes</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Recent Activity
              </h2>

              <Card className="bg-slate-800/40 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">
                          {activeProposal.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                          <span>{activeProposal.date}</span>
                          <span>{activeProposal.totalVotes} votes</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="proposals">
            <Card className="bg-slate-800/40 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Proposals</CardTitle>
                <CardDescription className="text-gray-400">
                  View and manage active proposals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">No proposals yet.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="members">
            <Card className="bg-slate-800/40 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">
                  DAO Members & Collaborators
                </CardTitle>
                <CardDescription className="text-gray-400">
                  List of DAO creator, managers, and accepted members.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Members section will display DAO roles here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-slate-800/40 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Settings</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage DAO configurations and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Settings options go here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
