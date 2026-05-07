// ContactCTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://media.base44.com/images/public/69f98f51d310755583dba05b/76a332228_generated_23bb2811.png)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Ready to Build the Future Together
          </p>
          <div className="w-16 h-1 bg-primary rounded mb-6" />
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Have a Project
            <br />
            in Mind?
          </h2>
          <p className="text-white/70 max-w-lg mb-8 leading-relaxed">
            Let's work together to deliver innovative, sustainable and
            high-impact engineering solutions that drive real results.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="/contact"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all text-sm inline-flex items-center gap-2"
            >
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all text-sm inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> Request a Proposal
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm">Prefer to talk? </span>
            <a
              href="tel:+911204567800"
              className="text-primary font-semibold text-sm hover:underline"
            >
              +91 120 456 7800
            </a>
          </div>
        </motion.div>

        {/* Info bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-card/95 backdrop-blur-sm rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Mail,
              label: "Email Us",
              value: "info@principleacs.com",
              href: "mailto:info@principleacs.com",
            },
            {
              icon: Phone,
              label: "Call Us",
              value: "+91 120 456 7800",
              href: "tel:+911204567800",
            },
            {
              icon: MapPin,
              label: "Our Office",
              value: "Noida, Uttar Pradesh, India",
            },
            {
              icon: Clock,
              label: "Working Hours",
              value: "Mon - Sat | 9:00 AM - 6:00 PM",
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-foreground">
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
