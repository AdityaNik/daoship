"use client";
import { useParams } from "next/navigation";

export default function DAODetails() {
  const { id } = useParams();

  return (
    <div className="m-10">
      <div>Hello from DAO details page</div>
      <div>Current DAO id is: {id}</div>
    </div>
  );
}
