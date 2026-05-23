import Link from "next/link";

export default async function CollegesPage() {
  const colleges: any[] = [];

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Browse Colleges
      </h1>

      <p className="text-gray-500 mb-8">
        {colleges.length} colleges found
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college: any) => (
          <Link
            key={college.id}
            href={`/colleges/${college.id}`}
            className="bg-white rounded-xl border p-6"
          >
            <h2 className="text-xl font-semibold">
              {college.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}