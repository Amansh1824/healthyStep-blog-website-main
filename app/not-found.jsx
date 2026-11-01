export const metadata = { title: '404 – Page Not Found' };

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-28 text-center">
      <p className="text-8xl font-extrabold text-emerald-600 leading-none">404</p>
      <h1 className="mt-6 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 text-lg opacity-70">
        Looks like this page went for a run and hasn&apos;t come back yet. 🏃
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold shadow-lg hover:opacity-90 transition"
        >
          🏠 Go Home
        </a>
        <a
          href="/blog"
          className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          📝 Browse Blog
        </a>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm opacity-60">
        <a href="/categories/workouts" className="hover:underline">🏋️ Workouts</a>
        <a href="/categories/recipes"  className="hover:underline">🥗 Recipes</a>
        <a href="/categories/habits"   className="hover:underline">🌱 Habits</a>
        <a href="/newsletter"          className="hover:underline">📬 Newsletter</a>
      </div>
    </main>
  );
}
