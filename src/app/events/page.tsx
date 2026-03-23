import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { EventCard } from "@/components/ui/EventCard";
import { LeagueSignupForm } from "@/components/forms/LeagueSignupForm";
import { events } from "@/content/events";
import { getUpcomingEvents, getEventTypeLabel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events & Leagues",
  description:
    "Upcoming tournaments, weekly leagues, and special events at Pool Academy in Buffalo, NY. Register for leagues and sign up for open tournaments.",
};

const eventTypes = ["all", "league", "tournament", "open-play", "special"] as const;
type EventTypeFilter = (typeof eventTypes)[number];

export default function EventsPage() {
  const upcoming = getUpcomingEvents(events);

  return (
    <>
      <section className="pt-32 pb-16 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-green-glow opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Events & Leagues
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Competition.
              <br />
              <span className="text-gradient-gold">Community. Fun.</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed">
              From weekly leagues to high-stakes tournaments and casual game
              nights — there&apos;s always something happening at Pool Academy.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-white mb-2">
              Upcoming Events
            </h2>
            <p className="text-white/40 text-sm">
              {upcoming.length} events scheduled
            </p>
          </div>

          {upcoming.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="glass rounded-2xl border border-white/5 p-16 text-center">
              <p className="text-white/30 text-lg">
                No upcoming events scheduled yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="league-signup"
        className="py-20 bg-[#0a0a0a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
                Join a League
              </span>
              <h2 className="font-display text-4xl font-bold text-white mb-4">
                Sign Up for League Play
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Our leagues run year-round with flexible scheduling. Whether
                you&apos;re a beginner looking to build your game or an advanced
                player chasing a trophy, there&apos;s a league spot for you.
              </p>
              <ul className="space-y-3">
                {[
                  "Skill-based handicap system",
                  "Multiple weekly time slots",
                  "8-ball · 9-ball · Doubles formats",
                  "End-of-season prizes and celebrations",
                  "Year-round league calendar",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-6 md:p-8 border border-white/5">
              <LeagueSignupForm />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
