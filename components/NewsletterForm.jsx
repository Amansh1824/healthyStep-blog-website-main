// components/NewsletterForm.jsx
"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const data = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xjyyageo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700 transition disabled:opacity-60"
        >
          {loading ? "Subscribing…" : "Subscribe"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-green-600">
          🎉 You&apos;re subscribed! Watch your inbox for healthy tips.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-red-600">
          ❌ Oops! Something went wrong. Please try again later.
        </p>
      )}
    </>
  );
}
