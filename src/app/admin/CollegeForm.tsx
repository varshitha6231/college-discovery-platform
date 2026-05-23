"use client";

import { useState } from "react";

export function CollegeForm() {
  const [form, setForm] = useState({
    name: "",
    courses: "",
    fees: "",
    ranking: "",
  });

  const payload = {
    ...form,
    courses: form.courses
      .split(",")
      .map((c: string) => c.trim())
      .filter(Boolean),
    fees: form.fees ? Number(form.fees) : undefined,
    ranking: form.ranking ? Number(form.ranking) : undefined,
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        College Form
      </h1>

      <input
        type="text"
        placeholder="College Name"
        className="border p-2 rounded w-full mb-4"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Courses"
        className="border p-2 rounded w-full mb-4"
        value={form.courses}
        onChange={(e) =>
          setForm({ ...form, courses: e.target.value })
        }
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
}