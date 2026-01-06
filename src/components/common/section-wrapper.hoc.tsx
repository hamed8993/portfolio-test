import { motion } from "framer-motion";

import { staggerContainer } from "../../utils/3d-motion-utils";
import { cn } from "@/src/utils/cn";

const SectionWrapper = (
  Component: React.FC,
  idName: string,
  className?: string
) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={cn(
          `container sm:py-16 py-10 max-w-7xl mx-auto relative z-0`,
          className
        )}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
