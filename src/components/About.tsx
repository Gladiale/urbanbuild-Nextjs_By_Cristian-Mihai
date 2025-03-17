import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motionVariants";

const About = () => {
  return (
    <div id="about" className="py-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[540px]"
            >
              {/* pre-title */}
              <Pretitle text="About up" />
              <h2 className="h2 mb-6">Focused On Excellence In Every Project</h2>
              <p className="mb-11">
                Our unwavering commitment to excellence drives every project we undertake.
                From concept to completion, we meticulously craft solutions that embody
                quality, precision and innovation.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                {/* 参照 https://stackoverflow.com/questions/69230343/nextjs-image-component-with-fixed-witdth-and-auto-height */}
                <Image
                  src="./assets/img/about/signature.svg"
                  width={0}
                  height={0}
                  alt="サイン"
                  className="h-fit w-auto"
                />
                <p>Company CEO</p>
              </div>
              {/* btn */}
              <Button text="Contact us" />
            </motion.div>
          </div>

          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 mx-auto xl:flex xl:justify-center"
          >
            <div className="xl:w-[444px] xl:h-[439px] relative">
              {/* bg */}
              <div className="hidden xl:flex w-[444px] h-[492px] bg-accent absolute -top-4 -left-4 -z-10" />
              <Image
                src="/assets/img/about/img.jpg"
                width={444}
                height={492}
                alt=""
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
