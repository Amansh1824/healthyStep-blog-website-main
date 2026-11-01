'use client'
import Giscus from "@giscus/react";

export default function GiscusComments() {
  const repo       = process.env.NEXT_PUBLIC_GISCUS_REPO;
  const repoId     = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  // Comments not configured yet — show a clean placeholder
  if (!repo || !repoId || !categoryId) {
    return (
      <div className="rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-6 text-center">
        <p className="text-2xl mb-2">💬</p>
        <p className="font-semibold text-sm">Join the conversation</p>
        <p className="text-sm opacity-60 mt-1">Comments are coming soon. Share your thoughts via the newsletter!</p>
        <a href="/newsletter" className="inline-block mt-3 text-sm text-emerald-600 underline hover:text-emerald-700">Subscribe to stay updated →</a>
      </div>
    );
  }

  return (
    <Giscus
      repo={repo}
      repoId={repoId}
      category="General"
      categoryId={categoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}
