"use client";

import { motion } from "framer-motion";
import { tables } from "@/content/services";

const typeGradient: Record<string, string> = {
  standard: "from-gold-500/10 to-transparent",
  slate: "from-blue-500/10 to-transparent",
  vip: "from-gold-400/10 to-transparent",
};

const typeBorder: Record<string, string> = {
  standard: "border-gold-500/20",
  slate: "border-blue-500/20",
  vip: "border-gold-400/20",
};

const typeLabel: Record<string, string> = {
  standard: "text-gold-400",
  slate: "text-blue-400",
  vip: "text-gold-400",
};

export function TablesSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Our Tables
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            5 Tables. Zero Compromises.
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Every table tells a story. Ours are written in Simonis cloth and
            precision-leveled slate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tables.map((table, i) => (
            <motion.div
              key={table.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-2xl p-6 border overflow-hidden group transition-all duration-300 ${typeBorder[table.type]}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${typeGradient[table.type]} opacity-50 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${typeLabel[table.type]}`}
                    >
                      {table.type === "vip"
                        ? "VIP Table"
                        : table.type === "slate"
                          ? "3-Piece Slate"
                          : "Predator Pro"}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-1">
                      {table.name}
                    </h3>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full border flex items-center justify-center ${typeBorder[table.type]}`}
                  >
                    <span className={`text-lg font-bold ${typeLabel[table.type]}`}>
                      {table.count}
                    </span>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {table.description}
                </p>
                <ul className="space-y-2">
                  {table.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${table.type === "vip"
                            ? "bg-gold-400"
                            : table.type === "slate"
                              ? "bg-blue-400"
                              : "bg-gold-400"
                          }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
