import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function HomePage() {
  const featuredColleges = await prisma.college.findMany({
    orderBy: {
      ranking: "asc",
    },
  });

  const totalColleges = await prisma.college.count();
  const totalUsers = 5000;
  const totalReviews = 1200;

  return (
    <main className="bg-gradient-to-br from-pink-50 via-white to-green-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-emerald-500 text-white py-28 px-4 text-center shadow-xl rounded-b-[40px]">
        <div className="max-w-5xl mx-auto">
          <div className="text-6xl mb-6">
            🎓✨📚
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
            Find Your Dream College
          </h1>

          <p className="text-xl md:text-2xl text-pink-100 mb-10 max-w-3xl mx-auto">
            Explore India's top colleges, compare rankings,
            discover courses, and build your future with confidence.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/colleges"
              className="bg-white text-pink-600 font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
            >
              Browse Colleges 🚀
            </Link>

            <Link
              href="/auth/register"
              className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-emerald-700 hover:scale-105 transition"
            >
              Create Account 💖
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-pink-100">
            <div className="text-5xl mb-3">🏫</div>

            <p className="text-4xl font-extrabold text-pink-500">
              {totalColleges}+
            </p>

            <p className="text-emerald-700 font-semibold mt-2 text-lg">
              Colleges Listed
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-green-100">
            <div className="text-5xl mb-3">👩‍🎓</div>

            <p className="text-4xl font-extrabold text-green-600">
              {totalUsers}+
            </p>

            <p className="text-pink-500 font-semibold mt-2 text-lg">
              Students
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-pink-100">
            <div className="text-5xl mb-3">⭐</div>

            <p className="text-4xl font-extrabold text-pink-500">
              {totalReviews}+
            </p>

            <p className="text-emerald-700 font-semibold mt-2 text-lg">
              Reviews
            </p>
          </div>
        </div>
      </section>

      {/* Colleges */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-wrap items-center justify-between mb-10 gap-4">
          <h2 className="text-4xl font-extrabold text-emerald-700">
            Featured Colleges ✨
          </h2>

          <Link
            href="/colleges"
            className="text-pink-500 font-bold text-lg hover:underline"
          >
            View All Colleges →
          </Link>
        </div>

        {featuredColleges.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center border border-pink-100">
            <div className="text-6xl mb-5">😢</div>

            <p className="text-2xl font-bold text-pink-500">
              No colleges found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredColleges.map((college: any) => (
              <Link
                key={college.id}
                href={`/colleges/${college.id}`}
                className="bg-white rounded-3xl shadow-lg border border-pink-100 p-7 hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-emerald-700">
                    {college.name}
                  </h3>

                  {college.ranking && (
                    <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-bold">
                      #{college.ranking}
                    </span>
                  )}
                </div>

                <p className="text-emerald-600 font-semibold mb-2 text-lg">
                  📍 {college.location}, {college.state}
                </p>

                <p className="text-pink-500 font-semibold mb-3 text-lg">
                  🏛️ {college.type}
                </p>

                {college.fees && (
                  <p className="text-gray-700 font-bold text-lg mt-auto">
                    💰 ₹{college.fees.toLocaleString()}/year
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}