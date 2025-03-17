import { RiChat1Line, RiMapPin2Line, RiSmartphoneFill } from "react-icons/ri";

const contactItems = [
  {
    heading: "Chat to us",
    text: "Our friendly team is hear to help.",
    detail: "hi@urbanbuild.com",
    icon: <RiChat1Line />,
  },
  {
    heading: "Office",
    text: "Come and say hello at our office.",
    detail: "1250 Brickstone Ave, Dallas, TX 75201, USA",
    icon: <RiMapPin2Line />,
  },
  {
    heading: "Phone",
    text: "Mon-Fri from 8am to 5pm.",
    detail: "+1 (555) 000-0000",
    icon: <RiSmartphoneFill />,
  },
];

export default contactItems;
