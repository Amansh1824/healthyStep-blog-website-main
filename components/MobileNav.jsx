'use client'
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/blog',                  label: '📝 Blog' },
  { href: '/categories/workouts',   label: '🏋️ Workouts' },
  { href: '/categories/recipes',    label: '🥗 Recipes' },
  { href: '/categories/habits',     label: '🌱 Habits' },
  { href: '/newsletter',            label: '📬 Newsletter' },
  { href: '/about',                 label: '👋 About' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close on route change (simple approach: close on any link click)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('popstate', close);
    return () => window.removeEventListener('popstate', close);
  }, []);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <>
          {/* backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          {/* drawer */}
          <div className="fixed top-16 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-xl">
            <nav className="flex flex-col px-4 py-4 gap-1 max-w-7xl mx-auto">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-base transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
