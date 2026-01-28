"use client";

import { ListTodo, Timer, CalendarClock, BarChart } from "lucide-react";

export function ProjectManagementSection() {
  const features = [
    { label: "Tasks", icon: ListTodo },
    { label: "Time tracking", icon: Timer },
    { label: "Timesheets", icon: CalendarClock },
    { label: "Reports", icon: BarChart },
  ];

  return (
    <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
          Too many platforms.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            Too easy to miss things.
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Important conversations are spread everywhere. By the time you find
          them, it's often too late. CommunityTracker monitors communities for
          you, so you can focus on responding — not searching.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <img
            src="/images/project_manage.jpg"
            alt="Project Management Dashboard"
            className="rounded-2xl shadow-lg border border-gray-100"
          />
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-muted-foreground font-semibold text-sm mb-4 uppercase tracking-widest">
              Project Management
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              Reddit is driving the strongest community results
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Your community analytics show Reddit performing exceptionally
              well. With a 77.5% AI Score, 20 total leads, and an efficiency
              rating of 15.5, Reddit stands out as one of the most reliable
              channels for generating high-quality engagement.
            </p>
          </div>

          <a
            href="https://calendly.com/adarsh-ilu/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Try Community Tracker free
            </button>
          </a>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <feature.icon className="w-5 h-5 text-muted-foreground" />
                  <p className="font-medium text-foreground">{feature.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
