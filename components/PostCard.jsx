import { Trash2 } from "lucide-react";

const ADMIN    = process.env.NEXT_PUBLIC_ADMIN_MODE === 'true';
const REPO_URL = process.env.NEXT_PUBLIC_REPO_URL || "";

const CATEGORY_COLORS = {
  workouts: 'bg-blue-100   text-blue-800   dark:bg-blue-900/40   dark:text-blue-300',
  recipes:  'bg-amber-100  text-amber-800  dark:bg-amber-900/40  dark:text-amber-300',
  habits:   'bg-green-100  text-green-800  dark:bg-green-900/40  dark:text-green-300',
  gear:     'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
};

// Solid-colour placeholder when no cover image is set
const CATEGORY_BG = {
  workouts: 'bg-blue-100   dark:bg-blue-900/30',
  recipes:  'bg-amber-100  dark:bg-amber-900/30',
  habits:   'bg-green-100  dark:bg-green-900/30',
  gear:     'bg-purple-100 dark:bg-purple-900/30',
};

const CATEGORY_EMOJI = { workouts: '🏋️', recipes: '🥗', habits: '🌱', gear: '🎽' };

export default function PostCard({ post }) {
  const deleteHref = REPO_URL
    ? `${REPO_URL}/issues/new?template=delete_post.yml&title=${encodeURIComponent('[Delete]:' + post.slug)}`
    : null;

  const badgeColor = CATEGORY_COLORS[post.category] || 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';
  const placeholderBg = CATEGORY_BG[post.category] || 'bg-slate-100 dark:bg-slate-800';

  return (
    <article className="group rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 hover:shadow-lg transition flex flex-col">
      {/* Cover image or coloured placeholder */}
      {post.cover ? (
        <div
          className="h-40 w-full bg-slate-100 dark:bg-slate-800 shrink-0"
          style={{ backgroundImage: `url(${post.cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ) : (
        <div className={`h-40 w-full shrink-0 grid place-items-center text-4xl ${placeholderBg}`}>
          {CATEGORY_EMOJI[post.category] || '📄'}
        </div>
      )}

      <div className="p-5 relative flex flex-col flex-1">
        {/* Admin delete button */}
        {ADMIN && deleteHref && (
          <a
            href={deleteHref}
            title="Delete post"
            className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full p-2 border bg-white/80 dark:bg-slate-800/80 backdrop-blur hover:bg-white dark:hover:bg-slate-700"
          >
            <Trash2 className="w-4 h-4 opacity-80" />
          </a>
        )}

        {/* Category badge + meta */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {post.category && (
            <a
              href={`/categories/${post.category}`}
              className={`rounded-full px-2 py-0.5 font-semibold capitalize hover:opacity-80 transition ${badgeColor}`}
            >
              {post.category}
            </a>
          )}
          <span className="opacity-60 uppercase tracking-wide">
            {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
            {' '}·{' '}{post.readingTime.text}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-2 text-base font-semibold leading-snug group-hover:underline decoration-2 underline-offset-4 flex-1">
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm opacity-70 line-clamp-2">{post.description}</p>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.map(t => (
              <a key={t} href={`/tags/${t}`} className="rounded-full border border-slate-200 dark:border-slate-700 px-2 py-0.5 text-xs opacity-70 hover:opacity-100 transition">
                #{t}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
