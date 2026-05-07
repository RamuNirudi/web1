// Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success(
        "Your message has been sent! We will get back to you soon.",
      );
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-primary rounded mb-6" />
          <p className="text-white/70 max-w-2xl">
            Have a project in mind? Reach out to us and let's build something
            great together.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Email Address"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    required
                  />
                </div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                />
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Contact Information
              </h2>
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
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
