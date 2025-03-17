import Form from "./Form";
import Socials from "./Socials";
import contactItems from "@/config/contactItems";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motionVariants";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 xl:pt-32">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
              <h4 className="text-[26px] font-primary font-bold mb-6">Contact Us</h4>
              <p className="mb-9">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nisi, quasi
                at quo adipisci incidunt?
              </p>
              {/* contact items */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/* item */}
                {contactItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-[20px]">
                    <div className="text-[28px] text-accent">{item.icon}</div>
                    <div>
                      <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                        {item.heading}
                      </h5>
                      <p className="mb-4">{item.text}</p>
                      <p className="font-semibold text-primary">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Socials
                containerStyles="flex gap-[40px]"
                iconStyles="text-primary text-[20px]"
              />
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Request A Quote</h2>
              <p className="mb-9">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt illum
                sed quis quia quo officia.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
