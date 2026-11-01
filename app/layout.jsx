import '../styles/globals.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

export const metadata = {
  metadataBase: new URL('https://healthystep.in'),
  title: { default: 'HealthyStep – Small steps. Stronger you.', template: '%s | HealthyStep' },
  description: 'Beginner-friendly home workouts, healthy Indian recipes, and simple habits for lasting weight loss.',
  openGraph: { title: 'HealthyStep', description: 'Beginner-friendly home fitness & healthy recipes', url: 'https://healthystep.in', siteName: 'HealthyStep' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Prevent dark-mode flash — runs before paint */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();` }} />
        <meta name="google-site-verification" content="T09MSsR8FOoX6wrq5cSoMuMSjYnC6IFOObHOg4lYijI" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/70 dark:border-slate-800">
          <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white font-black text-sm shadow-sm group-hover:bg-emerald-700 transition">
                HS
              </span>
              <span>Healthy<span className="text-emerald-600">Step</span></span>
            </a>

            {/* Right side: Desktop nav + Theme toggle + Mobile nav */}
            <div className="flex items-center gap-6 lg:gap-8">
              <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
                <a href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Blog</a>
                <a href="/categories/workouts" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Workouts</a>
                <a href="/categories/recipes" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Recipes</a>
                <a href="/categories/habits" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Habits</a>
                <a href="/newsletter" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Newsletter</a>
                <a href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</a>
              </nav>

              <div className="flex items-center gap-2 pl-3 md:pl-4 border-l border-slate-200 dark:border-slate-700">
                <ThemeToggle />
                <MobileNav />
              </div>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-slate-200 dark:border-slate-700 mt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm mb-8">
              <div>
                <p className="font-bold mb-2">Healthy<span className="text-emerald-600">Step</span></p>
                <p className="opacity-60 text-xs">Small steps. Stronger you.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Categories</p>
                <ul className="space-y-1 opacity-70">
                  <li><a href="/categories/workouts" className="hover:underline">🏋️ Workouts</a></li>
                  <li><a href="/categories/recipes"  className="hover:underline">🥗 Recipes</a></li>
                  <li><a href="/categories/habits"   className="hover:underline">🌱 Habits</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Site</p>
                <ul className="space-y-1 opacity-70">
                  <li><a href="/blog"       className="hover:underline">Blog</a></li>
                  <li><a href="/newsletter" className="hover:underline">Newsletter</a></li>
                  <li><a href="/about"      className="hover:underline">About</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Legal</p>
                <ul className="space-y-1 opacity-70">
                  <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="/terms"   className="hover:underline">Terms</a></li>
                </ul>
              </div>
            </div>
            <p className="text-xs opacity-50 border-t border-slate-200 dark:border-slate-700 pt-6">© {new Date().getFullYear()} HealthyStep. General wellness info only, not medical advice. Some links may be affiliate links.</p>
          </div>
        </footer>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
