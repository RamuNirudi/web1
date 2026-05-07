// RlaRlm.jsx
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { Shield } from "lucide-react";

export default function RlaRlm() {
  return (
    <ServicePageTemplate
      title="RLA & RLM"
      subtitle="Core Offering"
      icon={Shield}
      image="https://media.base44.com/images/public/69f98f51d310755583dba05b/9b65ee540_generated_2180da4c.png"
      description="Risk, Liability & Revenue assurance services along with lifecycle management for critical infrastructure."
      features={[
        "Residual Life Assessment (RLA) of critical assets",
        "Remaining Life Management (RLM) strategies",
        "Risk assessment and mitigation planning",
        "Asset condition monitoring and evaluation",
        "Predictive maintenance and lifecycle optimization",
        "Regulatory compliance for aging infrastructure",
        "Revenue assurance through infrastructure reliability",
        "Technical audits and NDT inspections",
      ]}
    />
  );
}
