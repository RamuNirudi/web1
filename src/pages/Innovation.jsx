// Innovation.jsx
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { Lightbulb } from "lucide-react";

export default function Innovation() {
  return (
    <ServicePageTemplate
      title="Innovation"
      subtitle="Core Offering"
      icon={Lightbulb}
      image="https://media.base44.com/images/public/69f98f51d310755583dba05b/d0529ccd3_generated_26d592a4.png"
      description="Driving innovation through our Idea Lab, R&D initiatives and advanced engineering solutions for the future."
      features={[
        "Dedicated Idea Lab for prototyping and R&D",
        "Advanced engineering research and development",
        "IoT-based monitoring and smart solutions",
        "Digital transformation for infrastructure projects",
        "AI and data-driven engineering analytics",
        "Patent development and intellectual property",
        "Technology partnerships and collaboration",
        "Innovation-driven process improvement methodologies",
      ]}
    />
  );
}
