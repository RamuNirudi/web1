// StatsBar.jsx
import React from "react";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { Calendar, Globe, Layers, ShieldCheck, Rocket } from "lucide-react";

const icons = [Calendar, Globe, Layers, ShieldCheck, Rocket];

export default function StatsBar() {
  return (
    <section className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STATS.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-sm">
                    {stat.label}
                  </p>
                  <p className="font-heading font-bold text-primary text-sm">
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">{stat.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
