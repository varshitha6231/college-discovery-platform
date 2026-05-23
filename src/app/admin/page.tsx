import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const colleges = await prisma.college.findMany({
    orderBy: {
      ranking: "asc",
    },
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Admin Panel
        </h1>

        <Link
          href="/admin/colleges/new"
          className="bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition"
        >
          + Add College
        </Link>
      </div>

      <div className="bg-white rounded-2xl border shadow overflow-hidden">
        <div className="grid grid-cols-6 gap-4 p-4 font-semibold border-b bg-gray-50">
          <p>Name</p>
          <p>Location</p>
          <p>State</p>
          <p>Type</p>
          <p>Ranking</p>
          <p>Fees</p>
        </div>

        {colleges.length === 0 ? (
          <div className="p-6 text-gray-500">
            No colleges found.
          </div>
        ) : (
          colleges.map((college: any) => (
            <div
              key={college.id}
              className="grid grid-cols-6 gap-4 p-4 border-b hover:bg-gray-50"
            >
              <p className="font-medium">
                {college.name}
              </p>

              <p>
                {college.location}
              </p>

              <p>
                {college.state}
              </p>

              <p>
                {college.type}
              </p>

              <p>
                #{college.ranking ?? "-"}
              </p>

              <p>
                ₹{college.fees?.toLocaleString() ?? "-"}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}