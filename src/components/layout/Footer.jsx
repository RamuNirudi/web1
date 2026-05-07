// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Clock,
  ArrowUp,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/#about" },
  { label: "Core Offerings", path: "/#offerings" },
  { label: "Contact Us", path: "/contact" },
  { label: "Careers", path: "/careers" },
];

const services = [
  { label: "Telecom", path: "/telecom", icon: "📡" },
  { label: "Railway", path: "/railway", icon: "🚂" },
  { label: "Energy", path: "/energy", icon: "⚡" },
  { label: "Innovation", path: "/innovation", icon: "💡" },
  { label: "Buildings & Industries", path: "/buildings", icon: "🏗️" },
  { label: "Environment", path: "/environment", icon: "🌿" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">
                  P
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg">
                  Principle <span className="text-primary">ACS</span>
                </span>
                <p className="text-[10px] text-white/50">
                  Simplicity in Engineering
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Delivering engineering excellence across telecom, railway, energy
              and infrastructure sectors since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <div className="w-8 h-0.5 bg-primary mb-4" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase mb-4">
              Core Services
            </h4>
            <div className="w-8 h-0.5 bg-primary mb-4" />
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.path}
                    className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">{s.icon}</span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase mb-4">
              Get In Touch
            </h4>
            <div className="w-8 h-0.5 bg-primary mb-4" />
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@principleacs.com"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  info@principleacs.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+911204567800"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +91 120 456 7800
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Clock className="w-4 h-4 text-primary" />
                Mon – Sat | 9:00 AM – 6:00 PM
              </li>
            </ul>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Youtube, href: "https://youtube.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Mail, href: "mailto:info@principleacs.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 <span className="text-primary">Principle ACS</span>{" "}
            Engineering Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="text-xs text-white/40 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/terms"
              className="text-xs text-white/40 hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/sitemap"
              className="text-xs text-white/40 hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center transition-all"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
