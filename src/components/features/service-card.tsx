import { fadeIn } from "@/src/utils/3d-motion-utils";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: StaticImageData;
};

export default function ServiceCard({ index, title, icon }: ServiceCardProps) {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full cursor-pointer"
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
      >
        <div className="bg-card-bg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon?.src}
            alt={title}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
