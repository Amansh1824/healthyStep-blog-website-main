export const metadata = {
  title: 'About',
  description: 'Learn about HealthyStep — a beginner-friendly guide to home fitness, healthy Indian recipes, and sustainable habits.',
};

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-14">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">
          About <span className="text-emerald-600">HealthyStep</span>
        </h1>
        <p className="mt-4 text-lg opacity-80 leading-relaxed">
          HealthyStep exists for one reason: to make getting healthy feel <strong>simple, affordable, and actually doable</strong> — no gym membership, no expensive equipment, no fad diets.
        </p>
      </div>

      {/* What we cover */}
      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        {[
          { emoji: '🏋️', title: 'Home Workouts', desc: 'Beginner-friendly routines you can do in your living room — zero equipment, full results.' },
          { emoji: '🥗', title: 'Healthy Recipes', desc: 'Quick, budget-friendly Indian recipes packed with protein and good nutrition.' },
          { emoji: '🌱', title: 'Daily Habits', desc: 'Small, consistent habits around sleep, hydration, and mindfulness that actually stick.' },
        ].map(c => (
          <div key={c.title} className="rounded-2xl border border-slate-200 dark:border-slate-700 p-5">
            <p className="text-3xl mb-2">{c.emoji}</p>
            <h3 className="font-bold text-base mb-1">{c.title}</h3>
            <p className="text-sm opacity-70 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div className="prose dark:prose-invert prose-emerald max-w-none mb-12">
        <h2>Our Story</h2>
        <p>
          HealthyStep started as a personal project to document small, everyday changes that genuinely made life better — a 10-minute morning workout here, a high-protein omelette there. The goal was never perfection. It was progress, one healthy step at a time.
        </p>
        <p>
          Every post on this site is written with beginners in mind. No confusing jargon, no unrealistic expectations — just practical, science-backed advice you can act on today.
        </p>

        <h2>Our Promise</h2>
        <ul>
          <li>🎯 <strong>Beginner-first</strong> — every guide assumes you&apos;re starting from scratch</li>
          <li>💸 <strong>Budget-friendly</strong> — no expensive equipment or exotic ingredients</li>
          <li>🇮🇳 <strong>India-relevant</strong> — recipes and advice suited to Indian lifestyles</li>
          <li>✅ <strong>Evidence-based</strong> — content backed by research, not hype</li>
        </ul>

        <h2>Disclaimer</h2>
        <p>
          All content on HealthyStep is for general wellness and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified health professional before starting any new fitness or nutrition program.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800 p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Ready to take your first step?</h3>
        <p className="opacity-70 text-sm mb-5">Get one free, actionable health tip every week. No spam — ever.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/newsletter" className="rounded-2xl px-5 py-2.5 bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition shadow">
            📬 Join the Newsletter
          </a>
          <a href="/blog" className="rounded-2xl px-5 py-2.5 border border-slate-300 dark:border-slate-600 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            Browse Posts →
          </a>
        </div>
      </div>

      {/* Contact */}
      <p className="mt-10 text-sm opacity-50 text-center">
        Questions or collaboration?{' '}
        <a href="mailto:contact@healthystep.in" className="underline text-emerald-600">contact@healthystep.in</a>
      </p>
    </section>
  );
}
