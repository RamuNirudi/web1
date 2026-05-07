// Environment.jsx
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { Leaf } from "lucide-react";

export default function Environment() {
  return (
    <ServicePageTemplate
      title="Environment"
      subtitle="Core Offering"
      icon={Leaf}
      image="https://media.base44.com/images/public/69f98f51d310755583dba05b/e87483452_generated_ba679023.png"
      description="Environmental consulting, impact assessment and sustainability solutions for a greener tomorrow."
      features={[
        "Environmental Impact Assessment (EIA)",
        "Environmental compliance auditing",
        "Sustainability consulting and strategy",
        "Air quality monitoring and management",
        "Water resource management solutions",
        "Waste management planning",
        "Carbon footprint analysis and reduction",
        "Environmental clearance and regulatory support",
      ]}
    />
  );
}
