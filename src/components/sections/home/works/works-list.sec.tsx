import { motion } from "framer-motion";

import { fadeIn, textVariant } from "@/src/utils/3d-motion-utils";
import ProjectCard from "../../../features/project-card";
import SectionWrapper from "../../../common/section-wrapper.hoc";
import { projects } from "./works-list.data";
import { useTranslations } from "next-intl";

const WorksListSec = () => {
  const t = useTranslations();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-neutral-300 uppercase tracking-wider">
          {t("works-list.sub-title")}
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          {t("works-list.title")}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="mt-3 text-neutral-300 text-[17px] max-w-3xl leading-[30px]"
        >
          {t("works-list.description")}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WorksListSec, "");
