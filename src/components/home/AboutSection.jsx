// AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { ABOUT_PILLARS } from "@/lib/constants";
import { Users, Eye, Sparkles, Heart } from "lucide-react";
import TvVideoPlayer from "@/components/shared/TvVideoPlayer";

const icons = [Users, Eye, Sparkles, Heart];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top: text left, TV right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              About Principle ACS
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Engineering Excellence.{" "}
              <span className="text-primary">Delivered Simply.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              With engineering at our core, Principle ACS delivers high-quality
              technical audits, consultancy, managed services and EPC solutions
              across telecom, railway, renewable energy, infrastructure and
              environmental sectors.
            </p>
            <p className="text-muted-foreground max-w-xl mt-3 leading-relaxed">
              We combine technical expertise, innovation and execution
              excellence to solve complex project requirements efficiently.
            </p>
          </motion.div>
          <div className="flex justify-center">
            <TvVideoPlayer label="Watch Our Story" />
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_PILLARS.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={pillar.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <div className="w-8 h-0.5 bg-primary rounded mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
