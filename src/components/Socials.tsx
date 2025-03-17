import Link from "next/link";

import {
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiInstagramFill,
} from "react-icons/ri";

type SocialsProps = {
  containerStyles: string;
  iconStyles?: string;
};

const socials = [
  { icon: <RiFacebookFill />, path: "" },
  { icon: <RiYoutubeFill />, path: "" },
  { icon: <RiTwitterFill />, path: "" },
  { icon: <RiInstagramFill />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={`${iconStyles}`}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
