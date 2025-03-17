"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import servicesData, { type ServiceDataType } from "@/config/servicesData";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motionVariants";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<ServiceDataType["name"]>("construction");

  return (
    <div id="services" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text="our services" center={true} />
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Offering tailored construction solutions, from planning to completion, with a
            focus on quality and innovation.
          </p>
        </motion.div>

        {/* tabs */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="construction"
            onValueChange={(value) => setActiveTab(value as ServiceDataType["name"])}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid gap-[30px] grid-cols-1 md:grid-cols-2 xl:grid-cols-1 w-full h-full rounded-none p-0 bg-transparent xl:w-[345px]">
              {servicesData.map((item) => (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none cursor-pointer"
                >
                  <div
                    className={`text-4xl w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                      activeTab === item.name
                        ? "bg-primary text-white"
                        : "bg-accent text-primary"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                    {item.name}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            {/* tabs content */}
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {servicesData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    {/* images */}
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                        >
                          {/* 参考: https://github.com/vercel/next.js/discussions/40643 */}
                          <Image src={thumb.url} fill sizes="auto" alt="" />
                        </div>
                      ))}
                    </div>
                    {/* text & button */}
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        {/* service list */}
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <div className="w-[6px] h-[6px] bg-accent"></div>
                              <div className="capitalize font-medium text-primary">
                                {service}
                              </div>
                            </li>
                          ))}
                        </ul>
                        {/* btn */}
                        <Button text="Read more" />
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
