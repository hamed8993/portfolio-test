"use client";
import { motion } from "framer-motion";

import EarthCanvas from "../../canvas/earth";
import SectionWrapper from "../../common/section-wrapper.hoc";
import { slideIn } from "../../../utils/3d-motion-utils";
import ContactUsForm from "../../form/contact-us.form";
import StarsCanvas from "../../canvas/stars";
import { useTranslations } from "next-intl";

const ContactUsSec = () => {
  const t = useTranslations();

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="oppacity-0 flex-[0.75] rounded-2xl"
      >
        <p className="sm:text-[18px] text-[14px] text-neutral-300 uppercase tracking-wider">
          {t("contact-us.title")}
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          {t("contact-us.description")}
        </h3>
        <ContactUsForm />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactUsSec, "contact");
