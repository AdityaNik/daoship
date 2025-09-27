"use client";

import { Github, Wallet } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import ShinyText from "./ShinyText";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useState } from "react";

export const Navigation = () => {
  const router = useRouter();
  const { wallet, publicKey, disconnect, select, wallets } = useWallet();
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div className="m-10 rounded-2xl border border-white/25 bg-gray/40 backdrop-blur-md shadow-lg px-12 py-3 flex items-center justify-between">
        <div
          onClick={() => router.push("/")}
          className="text-2xl cursor-pointer font-semibold"
        >
          DAOShip
        </div>

        <div className="flex gap-12 justify-center items-center">
          <div className="text-xl" onClick={() => router.push("/")}>
            <ShinyText text="Home" className="cursor-pointer" />
          </div>
          <div className="text-xl" onClick={() => router.push("/explore")}>
            <ShinyText text="Explore" className="cursor-pointer" />
          </div>
          <div className="text-xl" onClick={() => router.push("/createDAO")}>
            <ShinyText text="Create DAO" className="cursor-pointer" />
          </div>
          <div className="flex gap-4 ">
            <Button className="p-4 text-lg cursor-pointer flex items-center gap-2 rounded-full border border-white/40 bg-black/40 text-white hover:bg-black/60">
              <Github className="h-8 w-8" />
              Connect GitHub
            </Button>
            {!wallet ? (
              <Button
                onClick={() => setOpen(true)}
                className="p-4 text-lg cursor-pointer flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:opacity-90"
              >
                <Wallet className="h-8 w-8" />
                Connect Wallet
              </Button>
            ) : (
              <div className="text-white gap-2 flex flex-row items-center">
                {publicKey ? publicKey.toBase58() : null}
                <Button
                  className="p-4 text-lg cursor-pointer flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:opacity-90"
                  onClick={async () => await disconnect()}
                >
                  Disconnect
                </Button>
              </div>
            )}
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Connect with your wallet</DialogTitle>
              </DialogHeader>
              <div className="space-y-2">
                {wallets.map((walletList) => {
                  return (
                    <div key={walletList.adapter.name}>
                      <DialogClose asChild>
                        <Button
                          className="w-full"
                          size={"lg"}
                          variant={"ghost"}
                          onClick={() => {
                            select(walletList.adapter.name);
                          }}
                        >
                          <img
                            width={25}
                            height={25}
                            src={walletList.adapter.icon}
                            className="m-2 rounded-lg"
                          ></img>
                          {walletList.adapter.name}
                        </Button>
                      </DialogClose>
                    </div>
                  );
                })}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
