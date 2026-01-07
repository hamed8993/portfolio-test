import { motion } from "framer-motion";
import { fadeIn } from "./../../utils/3d-motion-utils";
import { TestimonialCardType } from "@/src/types/testimonial-card.type";

export default function TestimonialCard({
  index,
  testimonialCard,
}: {
  index: number;
  testimonialCard: TestimonialCardType;
}) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-primary-800 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">
          {testimonialCard.testimonial}
        </p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>{" "}
              {testimonialCard.name}
            </p>
            <p className="mt-1 text-neutral-300 text-[12px]">
              {testimonialCard.designation} of {testimonialCard.company}
            </p>
          </div>

          <img
            src={testimonialCard.image}
            alt={`feedback_by-${testimonialCard.name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
