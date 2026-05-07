// Telecom.jsx
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { Radio } from "lucide-react";

export default function Telecom() {
  return (
    <ServicePageTemplate
      title="Telecom"
      subtitle="Core Offering"
      icon={Radio}
      image="https://media.base44.com/images/public/69f98f51d310755583dba05b/d8fbea799_generated_09cee441.png"
      description="End-to-end telecom engineering services including network planning, audits, implementation and optimization across India."
      features={[
        "Network planning and design for 4G/5G infrastructure",
        "Telecom tower site surveys and feasibility studies",
        "Fiber optic network design and deployment",
        "RF planning, optimization, and drive testing",
        "Technical audits and compliance assessments",
        "Project management for large-scale telecom rollouts",
        "Passive infrastructure engineering and maintenance",
        "Site acquisition and regulatory approvals",
      ]}
    />
  );
}
