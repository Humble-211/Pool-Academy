"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
  animate?: boolean;
}

export function SectionWrapper({
  children,
  className = "",
  id,
  as: Tag = "section",
  animate = true,
}: SectionWrapperProps) {
  if (!animate) {
    return (
      <Tag id={id} className={`relative ${className}`}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
