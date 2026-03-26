"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/schemas";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Contact form submission:", data);
    setStatus("success");
    reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-10 border border-gold-500/20 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-gold-400" />
        </div>
        <h3 className="text-white font-display text-2xl font-bold mb-2">
          Message Sent!
        </h3>
        <p className="text-white/50">
          {"We'll get back to you within 24 hours."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Full Name <span className="text-gold-400">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            id="contact-name"
            placeholder="Your name"
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-1 transition-colors text-sm ${errors.name
                ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
                : "border-white/10 focus:border-gold-500/50 focus:ring-gold-500"
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
            Email <span className="text-gold-400">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            id="contact-email"
            placeholder="you@example.com"
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-1 transition-colors text-sm ${errors.email
                ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
                : "border-white/10 focus:border-gold-500/50 focus:ring-gold-500"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Phone
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="contact-phone"
            placeholder="(716) 555-0000"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500 transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Subject <span className="text-gold-400">*</span>
          </label>
          <input
            {...register("subject")}
            type="text"
            id="contact-subject"
            placeholder="How can we help?"
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-1 transition-colors text-sm ${errors.subject
                ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
                : "border-white/10 focus:border-gold-500/50 focus:ring-gold-500"
              }`}
          />
          {errors.subject && (
            <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-1.5">
          Message <span className="text-gold-400">*</span>
        </label>
        <textarea
          {...register("message")}
          id="contact-message"
          rows={5}
          placeholder="Tell us more about what you need..."
          className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 focus:outline-none focus:ring-1 transition-colors text-sm resize-none ${errors.message
              ? "border-red-500/50 focus:border-red-400 focus:ring-red-400"
              : "border-white/10 focus:border-gold-500/50 focus:ring-gold-500"
            }`}
        />
        {errors.message && (
          <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold rounded-xl transition-all text-sm"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
