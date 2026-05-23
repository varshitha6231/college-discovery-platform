import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import CollegeForm from '@/components/CollegeForm';

export default async function NewCollegePage() {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") redirect("/");
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Add New College</h1>
      <CollegeForm />
    </main>
  );
}