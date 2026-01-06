"use client";
import { motion } from "framer-motion";

import SectionWrapper from "@/src/components/common/section-wrapper.hoc";
import TestimonialCard from "@/src/components/features/testimonial-card";
import { textVariant } from "@/src/utils/3d-motion-utils";
import { testimonials } from "./testimonilals.data";
import { useTranslations } from "next-intl";

function TestimonialsSec() {
  const t = useTranslations();

  return (
    <div className={`mt-12 bg-primary-700 rounded-[20px]`}>
      <div
        className={`container bg-primary-600 rounded-2xl sm:py-16 py-10 min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-neutral-300 uppercase tracking-wider">
            {t("testimonials.title")}
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            {t("testimonials.description")}
          </h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 container flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(TestimonialsSec, "");
