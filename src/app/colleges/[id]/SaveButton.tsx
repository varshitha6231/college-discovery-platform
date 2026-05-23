"use client";
import { useState } from "react";

export function SaveButton({ collegeId, initialSaved }: { collegeId: string; initialSaved: boolean }) {
  const [saved, setSaved] = useState(initialSaved);
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    setLoading(true);
    const res = await fetch("/api/saved", {
      method: saved ? "DELETE" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ collegeId }),
    });
    if (res.ok) setSaved(!saved);
    setLoading(false);
  }

  return (
    <button
      onClick={handleSave}
      disabled={loading}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-50 ${
        saved ? "bg-red-100 text-red-600 hover:bg-red-200" : "bg-teal-100 text-teal-700 hover:bg-teal-200"
      }`}
    >
      {loading ? "..." : saved ? "❤️ Saved" : "🤍 Save"}
    </button>
  );
}