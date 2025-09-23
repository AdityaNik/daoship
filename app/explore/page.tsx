import { Input } from "@/components/ui/input";

export default function ExplorePage() {
  return (
    <div className="m-20">
      <div className="text-3xl font-bold">Explore DAO's</div>
      <span className="text-md">
        Discover and join DAO's created with DAOShip{" "}
      </span>
      <div className="mt-10">
        <Input placeholder="Search DAO" />
      </div>
    </div>
  );
}
