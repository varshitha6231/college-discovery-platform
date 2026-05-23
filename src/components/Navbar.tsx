import Link from "next/link";

export async function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-500 to-emerald-500 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-teal-700"
        >
          <span className="bg-teal-700 text-white px-2 py-1 rounded-lg text-sm">
            CD
          </span>
          CollegeDiscover
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link
            href="/colleges"
            className="text-black hover:text-teal-700 transition"
          >
            Browse Colleges
          </Link>

          <Link
            href="/dashboard"
            className="text-black  hover:text-teal-700 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/auth/login"
            className="text-black hover:text-teal-700 transition"
          >
            Login
          </Link>

          <Link
            href="/auth/register"
            className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}