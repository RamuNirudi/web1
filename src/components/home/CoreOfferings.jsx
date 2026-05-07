// CoreOfferings.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CORE_OFFERINGS } from "@/lib/constants";
import {
  Radio,
  TrainFront,
  Lightbulb,
  Zap,
  Building2,
  Shield,
  Leaf,
  HardHat,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Radio,
  TrainFront,
  Lightbulb,
  Zap,
  Building2,
  Shield,
  Leaf,
  HardHat,
};

export default function CoreOfferings() {
  return (
    <section id="offerings" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Our Core Offerings
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Core Offerings
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Integrated engineering capabilities across critical sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_OFFERINGS.map((offering, i) => {
            const Icon = iconMap[offering.icon];
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={offering.path}
                  className="group block bg-card border border-border rounded-xl p-6 h-full hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {offering.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between bg-card border border-border rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <HardHat className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-heading font-bold text-foreground">
                One Partner. Complete Engineering Solutions.
              </p>
              <p className="text-sm text-muted-foreground">
                From concept to completion, we deliver excellence with
                accountability.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all text-sm inline-flex items-center gap-2 shrink-0"
          >
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
