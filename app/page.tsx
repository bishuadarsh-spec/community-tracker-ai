import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Add keywords",
    description:
      "Add topics, competitor names, problems people mention, and phrases your audience uses. You can track multiple variations (and exclude words you don’t want).",
  },
  {
    number: "02",
    title: "Connect communities",
    description:
      "Pick your sources: Reddit, Hacker News, Slack communities, Discord, X, and more. Everything rolls into one dashboard.",
  },
  {
    number: "03",
    title: "Get alerts you’ll actually read",
    description:
      "Get instant alerts and quick summaries so you understand what’s happening fast. Send alerts to Slack, email, or your dashboard.",
  },
];

const benefits = [
  "Catches high-intent posts early (people asking for recommendations, tools, or help)",
  "Filters noise automatically so you don’t waste time on irrelevant threads",
  "Gives you context, not just links (what the post is about + why it matters)",
  "Helps you respond faster (so you’re part of the conversation before it’s over)",
  "Keeps competitor mentions visible without obsessively checking their brand name",
];

const previewItems = [
  {
    title: "Channel insights",
    description:
      "See which communities are producing the most useful conversations (not just volume).",
  },
  {
    title: "Conversation quality signals",
    description:
      "Spot posts with buying intent, pain points, comparisons, and urgent issues.",
  },
  {
    title: "Thread tracking",
    description:
      "Follow a discussion as it grows, so you can jump in at the right time.",
  },
  {
    title: "Saved views",
    description:
      "Example: Leads • Competitors • Support issues • Content ideas • Partnerships",
  },
];

const featureBullets = [
  "Keyword + competitor tracking across multiple platforms",
  "Smart filters (include/exclude keywords, language filters, source filters)",
  "Instant alerts (Slack, email, dashboard)",
  "Quick summaries so you understand threads fast",
  "Tagging + notes for your team (Lead, Support, Partner, Competitor, etc.)",
  "Team inbox to assign and follow up on conversations",
  "Exports (CSV and basic integrations)",
  "History + search so nothing gets lost",
];

const useCases = [
  "Marketers & growth teams: find demand, discover objections, catch trends early",
  "Founders & operators: monitor your brand reputation without spending hours",
  "Agencies: track multiple clients and route leads to the right person fast",
  "Community managers: stay present in discussions without burning out",
  "Product teams: capture feature requests and recurring pain points",
  "Support teams: catch issues before they turn into bigger problems",
];

const testimonials = [
  {
    quote:
      "We used to find the best posts too late. Now we get alerts within minutes and can jump in while the thread is active.",
    role: "Growth Marketer",
  },
  {
    quote:
      "The biggest win is the filtering. I don’t want 200 notifications — I want the 10 that matter.",
    role: "Community Manager",
  },
  {
    quote:
      "We track competitors and category keywords daily. This saves us hours every week.",
    role: "Agency Lead",
  },
];

const faqs = [
  {
    question: "What is CommunityTracker and who is it for?",
    answer:
      "It’s a social listening tool for tracking keywords and discussions across online communities, so you don’t miss important posts.",
  },
  {
    question: "Which platforms can I monitor?",
    answer:
      "You can track sources like Reddit, Hacker News, Slack communities, Discord, X (Twitter), GitHub, Product Hunt, Stack Overflow, and niche forums.",
  },
  {
    question: "Will I get spammy notifications?",
    answer:
      "No — you can filter by keywords, exclude terms, and choose alert frequency so you only see relevant conversations.",
  },
  {
    question: "Can I send alerts to Slack or email?",
    answer: "Yes. You can route alerts to Slack, email, or your dashboard.",
  },
  {
    question: "Can multiple teammates use it?",
    answer:
      "Yes. The Pro plan includes team workflows like tags, notes, and shared visibility.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="pt-24 pb-16 px-4 md:px-8">
        <section className="max-w-6xl mx-auto text-center space-y-6" id="hero">
          <p className="text-sm font-semibold text-indigo-600">CommunityTracker.ai</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Stop missing conversations that could turn into customers, users, and partnerships.
          </h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            CommunityTracker helps you monitor keywords, brand mentions, competitor mentions, and category discussions across Reddit, Hacker News, Slack communities, Discord, X (Twitter), GitHub, Product Hunt, Stack Overflow, and niche forums — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="px-5 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
            >
              Start tracking for free
            </Link>
            <Link
              href="/demo"
              className="px-5 py-3 rounded-full border border-slate-200 text-slate-900 font-semibold hover:border-slate-300 transition"
            >
              See live demo
            </Link>
          </div>
          <p className="text-sm text-slate-600">No noisy feeds. Just the posts and threads worth your time.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 text-left shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-slate-600">Today</span>
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">Tracked</span>
              </div>
              <div className="space-y-4">
                {["Buying intent • Slack", "Competitor mention • Reddit", "Product feedback • GitHub"].map(
                  (item) => (
                    <div
                      key={item}
                      className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-semibold">
                        •
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{item}</p>
                        <p className="text-sm text-slate-600">
                          Summary: mentions pricing comparisons and asks for alternatives. Perfect moment to join.
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 via-slate-900 to-black text-white rounded-3xl p-8 shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-100">Dashboard preview</p>
              <h3 className="text-2xl font-bold mt-3">Conversations worth jumping into</h3>
              <p className="text-sm text-indigo-100 mt-2 max-w-lg">
                Track keywords, highlight intent, and route alerts to your team. This is a sample view of how CommunityTracker keeps you focused.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {["Recommendations", "Competitors", "Support", "Content ideas"].map((label) => (
                  <div key={label} className="bg-white/10 border border-white/10 rounded-2xl p-3">
                    <p className="font-semibold">{label}</p>
                    <p className="text-xs text-indigo-100 mt-1">3 new threads • 12 total</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pain" className="max-w-5xl mx-auto mt-20 space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold">The problem isn’t ‘no conversations.’ It’s ‘too many places.’</h2>
            <p className="text-slate-700">
              If you’re trying to keep up with what people are saying, you already know the pain:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Someone asks for a recommendation… but you see it two days later",
              "A competitor gets mentioned in a thread you should’ve joined",
              "A complaint starts spreading and you find out when it’s already bigger",
              "You spend 45 minutes scrolling… and still miss the one post that mattered",
            ].map((item) => (
              <div key={item} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                <p className="text-slate-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-700 font-semibold">
            CommunityTracker keeps watch for you, so you don’t have to live inside 10 tabs.
          </p>
        </section>

        <section id="how" className="max-w-6xl mx-auto mt-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">Three simple steps to stay on top of every important conversation</h2>
            <p className="text-slate-700">Setup takes minutes. Results show up in your next alert.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="p-6 border border-slate-200 rounded-3xl bg-white shadow-sm h-full">
                <p className="text-sm font-semibold text-indigo-600">{step.number}</p>
                <h3 className="text-xl font-bold mt-2">{step.title}</h3>
                <p className="text-slate-700 mt-3 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="max-w-5xl mx-auto mt-20 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">What CommunityTracker does for you (every day)</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                <p className="text-slate-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="product" className="max-w-6xl mx-auto mt-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">Your dashboard shows what matters — not everything</h2>
            <p className="text-slate-700">Stay focused on conversations that move the needle.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {previewItems.map((item) => (
              <div key={item.title} className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-700 mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
            >
              Try CommunityTracker free
            </Link>
          </div>
        </section>

        <section id="features" className="max-w-5xl mx-auto mt-20 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">Powerful features that keep you ahead</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {featureBullets.map((feature) => (
              <li key={feature} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm text-slate-800 font-medium">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section id="use-cases" className="max-w-6xl mx-auto mt-20 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">Built for anyone who relies on online communities</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {useCases.map((item) => (
              <div key={item} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm text-slate-800 font-medium">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="max-w-5xl mx-auto mt-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">What teams are saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.quote} className="p-6 border border-slate-200 rounded-3xl bg-white shadow-sm h-full">
                <p className="text-slate-800 leading-relaxed">“{item.quote}”</p>
                <p className="text-sm font-semibold text-indigo-700 mt-4">— {item.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="max-w-5xl mx-auto mt-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">Simple pricing that scales with your tracking</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Starter</h3>
                <p className="text-xl font-semibold text-slate-800">$29 / month</p>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700">
                {["20 keywords", "5 communities", "Daily alerts", "Dashboard access", "Basic filters"].map(
                  (item) => (
                    <li key={item}>• {item}</li>
                  ),
                )}
              </ul>
              <Link
                href="/signup"
                className="mt-6 inline-flex justify-center px-4 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
              >
                Get started
              </Link>
            </div>
            <div className="p-6 rounded-3xl border-2 border-indigo-600 bg-white shadow-md flex flex-col">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-indigo-600 uppercase">Most popular</p>
                  <h3 className="text-2xl font-bold">Pro</h3>
                </div>
                <p className="text-xl font-semibold text-slate-800">$99 / month</p>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700">
                {[
                  "100 keywords",
                  "Unlimited communities",
                  "Real-time alerts",
                  "Slack integration",
                  "Summaries + insights",
                  "Team features",
                ].map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="mt-6 inline-flex justify-center px-4 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition"
              >
                Start free
              </Link>
            </div>
          </div>
          <p className="text-center text-slate-700 text-sm">Cancel anytime.</p>
        </section>

        <section id="faq" className="max-w-5xl mx-auto mt-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="text-slate-700 mt-2 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="final-cta" className="max-w-5xl mx-auto mt-20 text-center space-y-6">
          <h2 className="text-3xl font-bold">Be in the right conversations — before they’re over.</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Start tracking today and get your first meaningful alerts in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
            >
              Start tracking for free
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 rounded-full border border-slate-200 text-slate-900 font-semibold hover:border-slate-300 transition"
            >
              See live demo
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

function Header() {
  const navItems = [
    { name: "Product", href: "#product" },
    { name: "How it works", href: "#how" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <img src="/logos/nav_logo.png" alt="CommunityTracker.ai" className="h-7" />
          <span className="hidden sm:inline">CommunityTracker.ai</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-slate-900">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3 text-sm font-semibold">
          <Link href="/signin" className="text-slate-700 hover:text-slate-900">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Start free
          </Link>
        </div>
        <MobileMenu navItems={navItems} />
      </div>
    </header>
  );
}

function MobileMenu({
  navItems,
}: {
  navItems: { name: string; href: string }[];
}) {
  return (
    <details className="md:hidden">
      <summary className="list-none cursor-pointer p-2 -mr-2" aria-label="Toggle navigation">
        <span className="sr-only">Toggle navigation</span>
        <div className="w-6 h-6 flex flex-col justify-between">
          <span className="block h-0.5 w-full bg-slate-900" />
          <span className="block h-0.5 w-full bg-slate-900" />
          <span className="block h-0.5 w-full bg-slate-900" />
        </div>
      </summary>
      <div className="absolute top-16 right-4 left-4 bg-white border border-slate-200 rounded-2xl shadow-lg p-4 space-y-3">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="block py-2 text-slate-800 font-medium">
            {item.name}
          </Link>
        ))}
        <div className="flex items-center gap-3 pt-2">
          <Link href="/signin" className="text-slate-800 font-semibold">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition w-full text-center"
          >
            Start free
          </Link>
        </div>
      </div>
    </details>
  );
}

function FooterSection() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <img src="/logos/nav_logo.png" alt="CommunityTracker.ai" className="h-8" />
              <span className="font-bold text-lg">CommunityTracker.ai</span>
            </div>
            <p className="text-slate-700 max-w-xl leading-relaxed">
              Monitor the conversations that shape what people buy, recommend, and trust.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Product</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>
                <Link href="/" className="hover:text-slate-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#product" className="hover:text-slate-900">
                  Product
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-slate-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-slate-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-slate-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-600">
          © 2025 CommunityTracker
        </div>
      </div>
    </footer>
  );
}
