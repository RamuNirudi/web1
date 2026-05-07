// Home.jsx
import React from "react";
import HeroCarousel from "@/components/home/HeroCarousel";
import AboutSection from "@/components/home/AboutSection";
import StatsBar from "@/components/home/StatsBar";
import ProvenExperience from "@/components/home/ProvenExperience";
import CoreOfferings from "@/components/home/CoreOfferings";
import ContactCTA from "@/components/home/ContactCTA";
import IndiaMap from "@/components/home/IndiaMap";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <StatsBar />
      <ProvenExperience />
      <CoreOfferings />
      <ContactCTA />
      <IndiaMap />
    </>
  );
}
