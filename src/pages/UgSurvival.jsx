// UgSurvival.jsx
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { HardHat } from "lucide-react";

export default function UgSurvival() {
  return (
    <ServicePageTemplate
      title="U/G Survival Buildings"
      subtitle="Core Offering"
      icon={HardHat}
      image="https://media.base44.com/images/public/69f98f51d310755583dba05b/e7d42b659_generated_efb217f3.png"
      description="Design and engineering of underground survival buildings and shelter solutions with global safety standards."
      features={[
        "Underground shelter design and engineering",
        "Blast-resistant structure analysis",
        "NBC (Nuclear, Biological, Chemical) protection systems",
        "Air filtration and ventilation for underground facilities",
        "Emergency power and life support systems",
        "Structural reinforcement and waterproofing",
        "Global safety standards compliance",
        "Turnkey project delivery for survival infrastructure",
      ]}
    />
  );
}
