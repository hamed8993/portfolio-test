import { motion } from "framer-motion";

import SectionWrapper from "../../../common/section-wrapper.hoc";
import { fadeIn, textVariant } from "../../../../utils/3d-motion-utils";
import ServiceCard from "../../../features/service-card";
import { servicesList } from "./about-us.data";
import { useTranslations } from "next-intl";

function AboutUsSec() {
  const t = useTranslations();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-neutral-300 uppercase tracking-wider">
          {t("about-us.sub-title")}
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          {t("about-us.title")}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="mt-4 text-neutral-300 text-[17px] max-w-3xl leading-[30px]"
      >
        {t("about-us.description")}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {servicesList.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(AboutUsSec, "aboutUsSec");
