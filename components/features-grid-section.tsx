"use client";

export function FeaturesGridSection() {
  const featureBottomItems = [
    {
      src: "/images/ai.png",
      alt: "AI-powered insights",
    },
    {
      src: "/images/lead.png",
      alt: "Lead generation",
    },
    {
      src: "/images/full.png",
      alt: "Full dashboard view",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 px-4 max-w-6xl mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
          See what matters,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            instantly
          </span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Channel insights: Know which communities bring real opportunities.
          Spot buying intent, problems, and comparisons fast. Follow discussions
          as they grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
          <img
            src="/images/2nd.png"
            alt="Personalization Demo"
            className="w-full h-auto rounded-xl"
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
          <img
            src="/images/monitors.png"
            alt="Integrations Demo"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featureBottomItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors overflow-hidden"
          >
            <img src={item.src} alt={item.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}
