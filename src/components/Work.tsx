import Link from "next/link";
import Image from "next/image";
import Pretitle from "./Pretitle";
import worksData from "@/config/worksData";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motionVariants";

const Work = () => {
  return (
    <div id="projects" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="our work" center={true} />
          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Providing expert services designer to deliver quality and innovation in every
            project we undertake.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {worksData.map((item, index) => (
          <div
            key={index}
            className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
          >
            <Image
              src={item.img}
              alt="work"
              fill
              sizes="auto"
              quality={100}
              className="object-cover"
            />
            <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
              <div className="pl-8">
                <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                  {item.name}
                </h4>
                <div className="flex items-center gap-1">
                  <RiCheckboxCircleFill className="text-accent text-xl" />
                  <p>{item.description}</p>
                </div>
              </div>
              <Link
                href={item.href}
                className="w-[44px] h-[44px] xl:w-[60px] xl:h-[60px] bg-accent text-primary text-2xl flex justify-center items-center absolute right-3"
              >
                <RiArrowRightUpLine />
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
