"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, AlertCircle, Loader2, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { leagueSignupSchema, type LeagueSignupSchema } from "@/lib/schemas";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function LeagueSignupForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<LeagueSignupSchema>({
    resolver: zodResolver(leagueSignupSchema),
    defaultValues: { preferredDays: [] },
  });

  const selectedDays = watch("preferredDays") ?? [];

  const toggleDay = (day: string) => {
    const current = selectedDays;
    const updated = current.includes(day)
      ? current.filter((d) => d !== day)
      : [...current, day];
    setValue("preferredDays", updated, { shouldValidate: true });
  };

  const onSubmit = async (data: LeagueSignupSchema) => {
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    console.log("League signup:", data);
    setStatus("success");
    reset();
    setTimeout(() => setStatus("idle"), 6000);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-10 border border-emerald-500/20 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-white font-display text-2xl font-bold mb-2">
          {"You're Signed Up!"}
        </h3>
        <p className="text-white/50">
          {"We'll be in touch shortly with league details and your schedule."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            First Name <span className="text-emerald-400">*</span>
          </label>
          <input
            {...register("firstName")}
            id="league-firstname"
            type="text"
            placeholder="First name"
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-1 transition-colors text-sm ${
              errors.firstName
                ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
                : "border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500"
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Last Name <span className="text-emerald-400">*</span>
          </label>
          <input
            {...register("lastName")}
            id="league-lastname"
            type="text"
            placeholder="Last name"
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-1 transition-colors text-sm ${
              errors.lastName
                ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
                : "border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500"
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Email <span className="text-emerald-400">*</span>
          </label>
          <input
            {...register("email")}
            id="league-email"
            type="email"
            placeholder="you@example.com"
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-1 transition-colors text-sm ${
              errors.email
                ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
                : "border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Phone <span className="text-emerald-400">*</span>
          </label>
          <input
            {...register("phone")}
            id="league-phone"
            type="tel"
            placeholder="(716) 555-0000"
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-1 transition-colors text-sm ${
              errors.phone
                ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
                : "border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-1.5">
          Skill Level <span className="text-emerald-400">*</span>
        </label>
        <select
          {...register("skillLevel")}
          id="league-skill"
          className={`w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border text-white focus:outline-none focus:ring-1 transition-colors text-sm ${
            errors.skillLevel
              ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
              : "border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500"
          }`}
        >
          <option value="">Select your level</option>
          <option value="beginner">Beginner — just starting out</option>
          <option value="intermediate">Intermediate — comfortable with basics</option>
          <option value="advanced">Advanced — competitive experience</option>
          <option value="professional">Professional — tournament-level play</option>
        </select>
        {errors.skillLevel && (
          <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.skillLevel.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">
          Preferred Play Days <span className="text-emerald-400">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => toggleDay(day)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all border ${
                selectedDays.includes(day)
                  ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                  : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20"
              }`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>
        {errors.preferredDays && (
          <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.preferredDays.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-1.5">
          Team Name (optional)
        </label>
        <input
          {...register("teamName")}
          id="league-team"
          type="text"
          placeholder="Your team name, if applicable"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500 transition-colors text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-1.5">
          Additional Notes
        </label>
        <textarea
          {...register("additionalNotes")}
          id="league-notes"
          rows={3}
          placeholder="Anything else we should know?"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500 transition-colors text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold rounded-xl transition-all text-sm"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Trophy className="w-4 h-4" />
            Sign Up for League
          </>
        )}
      </button>
    </form>
  );
}
