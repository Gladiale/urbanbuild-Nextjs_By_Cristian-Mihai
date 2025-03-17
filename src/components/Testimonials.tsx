import Image from "next/image";
import Button from "./Button";
import Slider from "./Slider";
import Pretitle from "./Pretitle";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motionVariants";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0"
          >
            <Pretitle text="testimonials" />
            <h2 className="h2 mb-6">Built On Trust, Proven Bu Results</h2>
            <p className="mb-10 max-w-[420px]">
              From homes to commercial spaces, our clients share their experiences of
              working with us. See how we&apos;ve helped them bring their dreams to live
              with expert craftsmanship.
            </p>
            <Button text="Work with us" />
          </motion.div>
          {/* img & slider */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex flex-col xl:flex-row xl:justify-end"
          >
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src="/assets/img/testimonials/img.jpg"
                alt=""
                fill
                sizes="auto"
                quality={100}
                className="object-cover"
              />
            </div>
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max"
            >
              {/* quote icon img */}
              <Image
                src="/assets/img/testimonials/quote.svg"
                alt=""
                width={0}
                height={0}
                className="absolute z-20 -top-4 left-[60px]"
                style={{ width: "auto", height: "36px" }}
              />
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
