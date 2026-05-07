import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { Building2 } from "lucide-react";

export default function Buildings() {
  return (
    <ServicePageTemplate
      title="Buildings & Industries"
      subtitle="Core Offering"
      icon={Building2}
      image="https://media.base44.com/images/public/69f98f51d310755583dba05b/95a0a1b50_generated_01c747ad.png"
      description="Engineering smart, safe and sustainable buildings and industrial facilities with precision and quality."
      features={[
        "Smart building design and engineering",
        "Industrial facility planning and construction",
        "MEP (Mechanical, Electrical, Plumbing) engineering",
        "Structural analysis and design",
        "Green building certification (LEED, IGBC)",
        "Fire safety and life safety systems",
        "Building automation and management systems",
        "Quality assurance and project monitoring",
      ]}
    />
  );
}
