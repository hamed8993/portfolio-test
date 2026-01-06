"use client";
import HeroSec from "@/src/components/sections/home/hero.sec";
// import Hero from "@/src/components/features/hero";
import ContactUsSec from "../../components/sections/home/contact-us.sec";
import StarsBackground from "@/src/components/common/stars-background";
import AboutUsSec from "@/src/components/sections/home/about-us/about-us.sec";
import ExperiencesTimelineSec from "@/src/components/sections/home/experiences-timeline/experiences-timeline.sec";
import TestimonialsSec from "@/src/components/sections/home/testimonial/testimonials.sec";
import WorksListSec from "@/src/components/sections/home/works/works-list.sec";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <HeroSec />
      <AboutUsSec />
      <ExperiencesTimelineSec />
      <WorksListSec />
      <TestimonialsSec />
      <StarsBackground>
        <ContactUsSec />
      </StarsBackground>
    </div>
  );
}
