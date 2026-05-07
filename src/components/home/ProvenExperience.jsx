// ProvenExperience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Target, Cog, Users } from "lucide-react";
import TvVideoPlayer from "@/components/shared/TvVideoPlayer";
import { CheckCircle2, ShieldCheck, TrainFront, Award } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Focused Leadership",
    text: "Strong professional leadership with clear vision, mission and values. Governance that builds trust and drives growth.",
  },
  {
    icon: Cog,
    title: "Process Excellence",
    text: "Disciplined execution, innovation mindset and efficiency-led systems ensure consistent delivery.",
  },
  {
    icon: Users,
    title: "Qualified & Competent Teams",
    text: "Skilled professionals with domain expertise and customer-first execution culture.",
  },
];

export default function ProvenExperience() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top: text left, TV right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              You're With A Good Company
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Proven Experience.
              <br />
              Trusted Partnerships.
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-6" />
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Since 2014, Principle ACS has been delivering engineering
              excellence across Telecom, Railway, Energy and Infrastructure
              sectors with integrity, innovation and accountability.
            </p>
          </motion.div>
          <div className="flex justify-center">
            <TvVideoPlayer label="Our Journey" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:shadow-lg hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimony */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-12 bg-gradient-to-r from-[#001a3d] to-[#000d1f] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left Content Area */}
            <div className="flex-1 p-8 md:p-10 z-10">
              <div className="flex items-start gap-6 mb-8">
                {/* Shield Logo Section */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 border-4 border-white rounded-2xl flex items-center justify-center relative overflow-visible">
                    <TrainFront className="w-12 h-12 text-white" />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full border-4 border-[#001a3d]">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="max-w-xl">
                  <h3 className="font-heading font-bold text-3xl text-[#eab308] mb-4">
                    Our Testimony
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-base">
                    Principle ACS is among the recognized companies whose{" "}
                    <span className="text-[#eab308] font-semibold">
                      Kavach Passive Infrastructure
                    </span>{" "}
                    designs are approved by Railway Designs & Standards
                    Organization (
                    <span className="text-[#eab308] font-bold">RDSO</span>) and
                    implemented across{" "}
                    <span className="text-[#eab308] font-semibold">
                      Railway Zones for Kavach
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Bottom Badges */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
                {[
                  {
                    text: "RDSO Approved Designs",
                    icon: <Award className="w-5 h-5 text-[#eab308]" />,
                  },
                  {
                    text: "Implemented Across Railway Zones",
                    icon: <TrainFront className="w-5 h-5 text-[#eab308]" />,
                  },
                  {
                    text: "Proven in Kavach Ecosystem",
                    icon: <ShieldCheck className="w-5 h-5 text-[#eab308]" />,
                  },
                  {
                    text: "Trusted by Key Railway Stakeholders",
                    icon: <Users className="w-5 h-5 text-[#eab308]" />,
                  },
                ].map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 border-l border-white/20 pl-3 first:border-0"
                  >
                    <div className="flex-shrink-0">{badge.icon}</div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-300 leading-tight">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Train Image */}
            {/* Right Train Image */}
            {/* Right Train Image */}
            {/* Right Train Image */}
            {/* <div className="hidden md:block w-[50%] relative overflow-hidden rounded-r-2xl">
              <img
                src="https://i.postimg.cc/QtjdW302/train.png"
                alt="Train"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                style={{
                  objectPosition: "68% center",
                  transform: "scale(0.68)",

                  maskImage:
                    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 12%, black 28%, black 100%)",

                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 12%, black 28%, black 100%)",
                }}
              />
            </div> */}
            {/* Responsive Train Image */}
            <div className="w-full md:w-[42%] relative overflow-hidden min-h-[220px] md:min-h-auto">
              <div
                className="absolute inset-0 bg-cover bg-center md:bg-right bg-no-repeat"
                style={{
                  backgroundImage: `url('https://i.postimg.cc/t48FdgfG/train-banner.png')`,

                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 18%, black 100%)",

                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                }}
              />
            </div>
            {/* <div className="hidden md:block w-1/3 relative">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://i.postimg.cc/t48FdgfG/train-banner.png')`,
                  maskImage:
                    "linear-gradient(to right, transparent, black 20%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 20%)",
                }}
              />
            </div> */}
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-accent rounded-2xl p-8 border border-primary/20"
        >
          <h3 className="font-heading font-bold text-lg text-primary mb-3">
            Our Testimony
          </h3>
          <p className="text-foreground leading-relaxed text-sm max-w-3xl">
            Principle ACS is among the recognized companies whose{" "}
            <strong>Kavach Passive Infrastructure</strong> designs are approved
            by Railway Designs & Standards Organization (<strong>RDSO</strong>)
            and implemented across <strong>Railway Zones for Kavach</strong>.
          </p>
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              "RDSO Approved Designs",
              "Implemented Across Railway Zones",
              "Proven in Kavach Ecosystem",
              "Trusted by Key Railway Stakeholders",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                {badge}
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
