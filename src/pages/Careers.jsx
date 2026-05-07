// Careers.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const openings = [
  {
    title: "Telecom RF Engineer",
    department: "Telecom",
    location: "Noida / Delhi",
    type: "Full Time",
    experience: "2–5 Years",
    description:
      "Plan, audit and optimize telecom networks including 4G/5G, MW and fiber deployments. Work with leading telecom operators on end-to-end project delivery.",
    skills: [
      "RF Planning",
      "Drive Testing",
      "Network Optimization",
      "5G NR",
      "AutoCAD",
    ],
  },
  {
    title: "Railway Signalling Engineer",
    department: "Railway",
    location: "Pan India",
    type: "Full Time",
    experience: "3–7 Years",
    description:
      "Design and implement Kavach passive infrastructure and S&T solutions across railway zones. Coordinate with RDSO for approvals and site execution.",
    skills: [
      "Kavach",
      "S&T Engineering",
      "RDSO Standards",
      "Site Supervision",
      "AutoCAD",
    ],
  },
  {
    title: "Solar Energy Engineer",
    department: "Energy",
    location: "Bengaluru / Hyderabad",
    type: "Full Time",
    experience: "2–4 Years",
    description:
      "Design, commission and monitor solar energy systems for rooftop and utility-scale projects. Conduct energy audits and ensure grid integration compliance.",
    skills: [
      "Solar Design",
      "PVsyst",
      "Grid Integration",
      "Energy Audits",
      "AutoCAD",
    ],
  },
  {
    title: "Environmental Consultant",
    department: "Environment",
    location: "Mumbai / Delhi",
    type: "Full Time",
    experience: "3–6 Years",
    description:
      "Conduct Environmental Impact Assessments, prepare EIA reports and support regulatory compliance for infrastructure and industrial projects.",
    skills: [
      "EIA",
      "Environmental Compliance",
      "Report Writing",
      "Field Surveys",
      "GIS",
    ],
  },
  {
    title: "Project Manager – Infrastructure",
    department: "Buildings & Industries",
    location: "Noida",
    type: "Full Time",
    experience: "5–10 Years",
    description:
      "Lead end-to-end delivery of building and infrastructure projects. Manage timelines, budgets, stakeholders and quality assurance.",
    skills: [
      "Project Management",
      "MS Project",
      "Stakeholder Management",
      "MEP",
      "Quality Assurance",
    ],
  },
];

const values = [
  {
    emoji: "🚀",
    title: "Growth Mindset",
    text: "Continuous learning and upskilling with real project exposure.",
  },
  {
    emoji: "🤝",
    title: "Collaborative Culture",
    text: "Teamwork, open communication and mutual respect at every level.",
  },
  {
    emoji: "🌱",
    title: "Sustainability Focus",
    text: "Work on projects that truly make a positive environmental impact.",
  },
  {
    emoji: "🏆",
    title: "Merit-Based Recognition",
    text: "Your work speaks — performance and innovation are rewarded.",
  },
];

function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                {job.department}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                {job.type}
              </span>
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">
              {job.title}
            </h3>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {job.experience}
              </span>
            </div>
          </div>
          <div className="text-muted-foreground">
            {expanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>

      {expanded && (
        <div className="px-6 pb-6 border-t border-border pt-4">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {job.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          <a
            href={`mailto:careers@principleacs.com?subject=Application for ${job.title}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-all"
          >
            <Send className="w-4 h-4" /> Apply Now
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success(
        "Your application has been submitted! We will get back to you soon.",
      );
      setForm({ name: "", email: "", phone: "", role: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Join Our Team
          </p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Build Your Career
            <br />
            at Principle ACS
          </h1>
          <div className="w-16 h-1 bg-primary rounded mb-6" />
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Join a team of passionate engineers making a real impact across
            telecom, railway, energy and infrastructure sectors across India.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Why Principle ACS
            </p>
            <h2 className="font-heading font-bold text-3xl text-foreground">
              Why Work With Us?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="text-3xl mb-3">{v.emoji}</div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Open Roles
            </p>
            <h2 className="font-heading font-bold text-3xl text-foreground flex items-center gap-3">
              <Briefcase className="w-7 h-7 text-primary" /> Current Openings
            </h2>
          </motion.div>
          <div className="space-y-4">
            {openings.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* General Application Form */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Don't see a match?
            </p>
            <h2 className="font-heading font-bold text-3xl text-foreground">
              Send a General Application
            </h2>
            <p className="text-muted-foreground mt-2">
              We're always looking for talented engineers. Drop your details and
              we'll reach out when a role opens up.
            </p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 bg-card border border-border rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                placeholder="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <Input
                placeholder="Role / Department of Interest"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              />
            </div>
            <Textarea
              placeholder="Brief introduction and why you want to join Principle ACS"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto"
            >
              <Send className="w-4 h-4 mr-2" />
              {sending ? "Submitting..." : "Submit Application"}
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
