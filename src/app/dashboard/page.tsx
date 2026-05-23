import Link from "next/link";

export default function DashboardPage() {
  const savedColleges: any[] = [];
  const myReviews: any[] = [];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Saved Colleges
        </h2>

        {savedColleges.length === 0 ? (
          <div className="bg-white border rounded-xl p-6 text-gray-500">
            No saved colleges.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedColleges.map(({ college }: { college: any }) => (
              <Link
                key={college.id}
                href={`/colleges/${college.id}`}
                className="bg-white border rounded-xl p-6"
              >
                <h3 className="font-semibold">
                  {college.name}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          My Reviews
        </h2>

        {myReviews.length === 0 ? (
          <div className="bg-white border rounded-xl p-6 text-black-500">
            No reviews yet.
          </div>
        ) : (
          <div className="space-y-4">
            {myReviews.map((review: any) => (
              <div
                key={review.id}
                className="bg-white rounded-xl border p-6"
              >
                <Link
                  href={`/colleges/${review.college.id}`}
                  className="font-semibold hover:underline"
                >
                  {review.college.name}
                </Link>

                <p className="text-gray-600 mt-2">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}