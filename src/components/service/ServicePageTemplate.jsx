// ServicePageTemplate.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  features = [],
  image,
  icon: Icon,
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            {Icon && (
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
            )}
            <div>
              <p className="text-primary font-semibold text-sm tracking-wider uppercase">
                {subtitle}
              </p>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                {title}
              </h1>
            </div>
          </div>
          <div className="w-16 h-1 bg-primary rounded mb-6" />
          <p className="text-white/70 max-w-2xl leading-relaxed text-lg">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover aspect-video"
              />
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                What We Offer
              </h2>
              <div className="space-y-4">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl hover:shadow-md hover:border-primary/20 transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground leading-relaxed">
                      {f}
                    </p>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all text-sm"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
