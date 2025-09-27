"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { i } from "motion/react-client";
import { useRouter } from "next/navigation";

export default function ExplorePage() {
  const router = useRouter();
  const id = 1;

  return (
    <div>
      <div className="m-20 mt-40 text-white">
        <div className="text-3xl font-bold">Explore DAO's</div>
        <span className="text-md">
          Discover and join DAO's created with DAOShip{" "}
        </span>
        <div className="mt-10">
          <Input className="p-6" placeholder="Search DAO" />
        </div>

        <div className="flex gap-16 flex-wrap mt-12">
          <Card
            className="cursor-pointer transition-shadow"
            onClick={() => router.push(`/daos/${id}`)}
          >
            <CardHeader>
              <img src="/temp.png" alt="DAO Logo" className="" />
            </CardHeader>
            <CardContent>
              <div className="mt-2">Swap Platform</div>
              <div>Platform to swap stable and unstable coins</div>
              <div className="mt-10 flex justify-between">
                <div>2 members</div>
                <div>created 23/9/2025</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
