"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, AlertCircle, Loader2, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { bookingRequestSchema, type BookingRequestSchema } from "@/lib/schemas";

export function BookingRequestForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingRequestSchema>({
    resolver: zodResolver(bookingRequestSchema),
    defaultValues: { groupSize: 2 },
  });

  const onSubmit = async (data: BookingRequestSchema) => {
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Booking request:", data);
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
          <CalendarCheck className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-white font-display text-2xl font-bold mb-2">
          Request Received!
        </h3>
        <p className="text-white/50">
          {"We'll confirm your booking within a few hours. Check your email!"}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Full Name <span className="text-emerald-400">*</span>
          </label>
          <input
            {...register("name")}
            id="booking-name"
            type="text"
            placeholder="Your name"
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-1 transition-colors text-sm ${
              errors.name
                ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
                : "border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Email <span className="text-emerald-400">*</span>
          </label>
          <input
            {...register("email")}
            id="booking-email"
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
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-1.5">
          Phone <span className="text-emerald-400">*</span>
        </label>
        <input
          {...register("phone")}
          id="booking-phone"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Date <span className="text-emerald-400">*</span>
          </label>
          <input
            {...register("date")}
            id="booking-date"
            type="date"
            className={`w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border text-white focus:outline-none focus:ring-1 transition-colors text-sm ${
              errors.date
                ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
                : "border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500"
            }`}
          />
          {errors.date && (
            <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.date.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Time <span className="text-emerald-400">*</span>
          </label>
          <select
            {...register("time")}
            id="booking-time"
            className={`w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border text-white focus:outline-none focus:ring-1 transition-colors text-sm ${
              errors.time
                ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
                : "border-white/10 focus:border-emerald-500/50 focus:ring-emerald-500"
            }`}
          >
            <option value="">Select time</option>
            {["12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.time && (
            <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.time.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Duration <span className="text-emerald-400">*</span>
          </label>
          <select
            {...register("duration")}
            id="booking-duration"
            className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500 transition-colors text-sm"
          >
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Table Type <span className="text-emerald-400">*</span>
          </label>
          <select
            {...register("tablePreference")}
            id="booking-table"
            className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500 transition-colors text-sm"
          >
            <option value="any">No preference</option>
            <option value="standard">Standard (Predator)</option>
            <option value="slate">3-Piece Slate</option>
            <option value="vip">VIP One-Piece</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Group Size <span className="text-emerald-400">*</span>
          </label>
          <input
            {...register("groupSize", { valueAsNumber: true })}
            id="booking-group"
            type="number"
            min={1}
            max={10}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500 transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-1.5">
          Special Requests
        </label>
        <textarea
          {...register("specialRequests")}
          id="booking-requests"
          rows={3}
          placeholder="Any special arrangements, accessibility needs, or occasion details..."
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
            Submitting Request...
          </>
        ) : (
          <>
            <CalendarCheck className="w-4 h-4" />
            Request Booking
          </>
        )}
      </button>
    </form>
  );
}
