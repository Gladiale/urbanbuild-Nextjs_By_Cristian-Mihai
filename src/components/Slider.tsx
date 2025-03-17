import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SliderBtns from "./SliderBtns";

const slidesData = [
  {
    name: "Jane Doe",
    description:
      "Exceeded expectations. On time, within budget and top quality work. High recommend!",
    img: "/assets/img/testimonials/avatar.jpg",
  },
  {
    name: "Jane Doe",
    description:
      "Exceeded expectations. On time, within budget and top quality work. High recommend!",
    img: "/assets/img/testimonials/avatar.jpg",
  },
  {
    name: "Jane Doe",
    description:
      "Exceeded expectations. On time, within budget and top quality work. High recommend!",
    img: "/assets/img/testimonials/avatar.jpg",
  },
];

const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[200px]">
      {slidesData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
            {/* avatar img */}
            <div className="relative hidden xl:flex w-[90px] h-[90px]">
              <Image
                src={item.img}
                alt=""
                fill
                sizes="auto"
                quality={100}
                className="object-contain"
              />
            </div>
            {/* text */}
            <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
              <p>{item.description}</p>
              <p className="font-primary font-semibold text-primary">{item.name}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* slider btns */}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
