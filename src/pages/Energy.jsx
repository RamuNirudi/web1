// Energy.jsx
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { Zap } from "lucide-react";

export default function Energy() {
  return (
    <ServicePageTemplate
      title="Energy"
      subtitle="Core Offering"
      icon={Zap}
      image="https://media.base44.com/images/public/69f98f51d310755583dba05b/439ec29f6_generated_824c3ad0.png"
      description="Delivering sustainable energy solutions across solar, renewable energy, power systems and integrations."
      features={[
        "Solar energy system design and installation",
        "Renewable energy project consultancy",
        "Power distribution system engineering",
        "Energy audits and efficiency assessments",
        "Grid integration and smart metering solutions",
        "EPC services for solar and wind projects",
        "Battery energy storage system design",
        "Green energy compliance and certification",
      ]}
    />
  );
}
