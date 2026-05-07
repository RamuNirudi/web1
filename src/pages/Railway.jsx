// Railway.jsx
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { TrainFront } from "lucide-react";

export default function Railway() {
  return (
    <ServicePageTemplate
      title="Railway"
      subtitle="Core Offering"
      icon={TrainFront}
      image="https://media.base44.com/images/public/69f98f51d310755583dba05b/8ddf14caa_generated_870b5dbb.png"
      description="Specialized in railway signalling, Kavach solutions and passive infrastructure engineering across railway zones."
      features={[
        "Kavach passive infrastructure design and implementation",
        "RDSO approved design solutions",
        "Railway signalling and telecommunication systems",
        "Signal & Telecom (S&T) engineering services",
        "Track-side equipment installation and commissioning",
        "Railway zone implementation and project management",
        "Safety audit and compliance for railway infrastructure",
        "Turnkey solutions for railway modernization projects",
      ]}
    />
  );
}
