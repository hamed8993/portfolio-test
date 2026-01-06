import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import SectionWrapper from "../../../common/section-wrapper.hoc";
import { textVariant } from "@/src/utils/3d-motion-utils";
import { experiences } from "./experiences-timeline.data";
import ExperienceCard from "@/src/components/features/experience-card";
import { useTranslations } from "next-intl";

const ExperiencesTimelineSec = () => {
  const t = useTranslations();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`sm:text-[18px] text-[14px] text-neutral-300 uppercase tracking-wider text-center`}
        >
          {t("experiences.sub-title")}
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
        >
          {t("experiences.title")}
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col" dir="ltr">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(
  ExperiencesTimelineSec,
  "ExperiencesTimelineSection"
);
