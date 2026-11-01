export const metadata = {
  title: 'Privacy Policy',
  description: 'How HealthyStep collects, uses, and protects your personal information.',
};

export default function Privacy() {
  const updated = 'November 1, 2026';
  return (
    <section className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm opacity-50 mb-10">Last updated: {updated}</p>

      <div className="prose dark:prose-invert prose-slate max-w-none">
        <p>
          HealthyStep (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights as a user.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>a) Data you provide</h3>
        <ul>
          <li><strong>Email address</strong> — only if you subscribe to our newsletter via Formspree. We use this solely to send you weekly health tips. You can unsubscribe at any time.</li>
        </ul>

        <h3>b) Data collected automatically</h3>
        <ul>
          <li><strong>Analytics</strong> — We use Vercel Analytics to collect anonymised, aggregated usage data (page views, referrers, device type). No personally identifiable information is stored.</li>
          <li><strong>Performance</strong> — Vercel Speed Insights collects anonymised performance metrics (Core Web Vitals) to help us improve the site.</li>
          <li><strong>Cookies</strong> — We use a single localStorage key (<code>theme</code>) to remember your light/dark mode preference. This is stored only on your device and is not shared with anyone.</li>
        </ul>

        <h2>2. Third-Party Services</h2>
        <p>We use the following third-party services that may process data on our behalf:</p>
        <ul>
          <li><strong>Vercel</strong> — website hosting and analytics (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
          <li><strong>Formspree</strong> — newsletter form processing (<a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
          <li><strong>Google Fonts</strong> — fonts served from Google's CDN (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information with any third parties.</p>

        <h2>3. Affiliate Links</h2>
        <p>
          Some links on HealthyStep may be affiliate links. If you click and make a purchase, we may earn a small commission at no extra cost to you. We only recommend products we genuinely believe in. Affiliate relationships are disclosed at the bottom of relevant posts.
        </p>

        <h2>4. Data Retention</h2>
        <p>
          Email addresses collected via the newsletter are retained until you unsubscribe. Anonymised analytics data is retained per Vercel&apos;s standard data retention policy. You can contact us at any time to request deletion of your data.
        </p>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Unsubscribe from the newsletter at any time (link in every email)</li>
          <li>Disable cookies/localStorage in your browser settings</li>
        </ul>

        <h2>6. Children&apos;s Privacy</h2>
        <p>
          HealthyStep is not directed at children under 13. We do not knowingly collect personal data from children.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this policy occasionally. Significant changes will be noted at the top of this page with the updated date.
        </p>

        <h2>8. Contact</h2>
        <p>
          For any privacy-related questions, please email us at{' '}
          <a href="mailto:contact@healthystep.in">contact@healthystep.in</a>.
        </p>
      </div>
    </section>
  );
}
